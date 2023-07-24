import { ForecastDataList } from '../interfaces/forecast.interface';
import { WeatherIcons } from '../shared/weather-icons.const';

export class WeatherForecast {
  public icon: keyof typeof WeatherIcons;
  public temp: number;
  public dt: number;
  public dt_txt: string;

  constructor(data: ForecastDataList) {
    const firstForecast = data;

    this.icon = firstForecast.weather[0].icon;
    this.temp = firstForecast.main.temp;
    this.dt = firstForecast.dt;
    this.dt_txt = firstForecast.dt_txt;
  }
}
