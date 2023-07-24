import { WeatherData } from '../interfaces/weather.interface';
import { WeatherIcons } from '../shared/weather-icons.const';

export class CurrentWeather {
  overlay: string;
  city: string;
  icon: keyof typeof WeatherIcons;
  temperature: number;
  description: string;
  wind: number;
  pressure: number;
  humidity: number;

  constructor(weather: WeatherData, overlay: any) {
    this.overlay = overlay;
    this.city = weather.name;
    this.icon = weather.weather[0].icon;
    this.temperature = weather.main.temp;
    this.description = weather.weather[0].description;
    this.wind = weather.wind.speed;
    this.pressure = weather.main.pressure;
    this.humidity = weather.main.humidity;
  }
}
