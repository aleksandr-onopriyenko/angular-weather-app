import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, mergeMap, tap } from 'rxjs';

import { WeatherService } from './weather.service';
import { WeatherData } from '../interfaces/weather.interface';
import { WeatherForecast } from '../models/weather-forecast.model';
import { CurrentWeather } from '../models/current-weather.model';
import { ForecastData } from '../interfaces/forecast.interface';
import { WeatherImage } from '../shared/weather.enum';

export type Weather = CurrentWeather & { forecast: WeatherForecast[] };

@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  private weatherApi = inject(WeatherService);
  private _weather$ = new BehaviorSubject<Weather | null>(null);
  public isLoading$ = new BehaviorSubject<boolean>(false);

  public get weather(): Observable<Weather | null> {
    return this._weather$.asObservable();
  }

  public get(locations?: any) {
    this.isLoading$.next(true);
    if (locations) {
      const [location, overlay] = locations;
      this.weatherApi.paramsLocations = location;

      return this.weatherApi
        .getCurrentWeather<WeatherData>()
        .pipe(mergeMap(this.transformWeatherData(overlay)));
    }

    return this.weatherApi
      .getCurrentWeather<WeatherData>()
      .pipe(mergeMap(this.transformWeatherData()));
  }

  private transformWeatherData =
    (overlay: string = WeatherImage.Kiev) =>
    (weather: WeatherData): Observable<ForecastData> => {
      return this.weatherApi.getForecastWeather<ForecastData>().pipe(
        tap((data) => {
          const filteredForecastData = this.filteredForecast(data);

          this._weather$.next({
            forecast: filteredForecastData,
            ...new CurrentWeather(weather, overlay),
          });
          this.isLoading$.next(false);
        })
      );
    };

  private filteredForecast(forecast: ForecastData) {
    const uniqueDates: Set<string> = new Set();

    const uniqueForecasts = forecast.list.filter((forecast) => {
      const forecastDate = new Date(forecast.dt * 1000).toLocaleDateString(
        'en-US'
      );
      if (!uniqueDates.has(forecastDate)) {
        uniqueDates.add(forecastDate);

        forecast.dt_txt = forecastDate + ' 12:00:00';

        return true;
      }
      return false;
    });

    const finalForecasts = uniqueForecasts
      .slice(0, 4)
      .map((forecast) => new WeatherForecast(forecast));

    return finalForecasts;
  }
}
