import { Component, inject } from '@angular/core';
import { WeatherDataService } from './services/weather-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  weatherDataService = inject(WeatherDataService);
  weather$ = this.weatherDataService.weather;
  isLoading$ = this.weatherDataService.isLoading$;

  ngOnInit() {
    this.weatherDataService.get().subscribe();
  }

  changeLocate(locations: [string, string]) {
    this.weatherDataService.get(locations).subscribe();
  }
}
