import { Injectable, inject } from '@angular/core';
import { ApiEndpoints, ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
import { WeatherLocation } from '../shared/weather.enum';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private api = inject(ApiService);

  private _params = new BehaviorSubject<string>(WeatherLocation.Current);

  set paramsLocations(locations: string) {
    this._params.next(locations);
  }

  public getCurrentWeather<T>() {
    return this.api.get<T>(ApiEndpoints.CURRENT, this._params.getValue());
  }

  public getForecastWeather<T>() {
    return this.api.get<T>(ApiEndpoints.DAYLY, this._params.getValue());
  }
}
