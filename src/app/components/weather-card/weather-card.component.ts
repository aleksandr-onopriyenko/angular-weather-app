import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Weather } from 'src/app/services/weather-data.service';
import { WeatherIcons } from 'src/app/shared/weather-icons.const';
import { findHighestHeightImage } from 'src/app/utils/findHighestHeightImage';
import { generateLocationQueryString } from 'src/app/utils/generateLocationQueryString';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
})
export class WeatherCardComponent {
  @Output('change-locate') private changeLocate = new EventEmitter<
    [string, string]
  >();
  @Input() public weather!: Weather;

  public date!: Date;
  private overlay!: any;
  private location!: string;

  ngOnInit() {
    this.date = new Date();
  }

  public getWeatherIcon(code: keyof typeof WeatherIcons): string {
    return WeatherIcons[code];
  }

  public onLocationChange(event: any) {
    const latitude = event.geometry.location.lat();
    const longitude = event.geometry.location.lng();
    const name = event.name;

    this.overlay = findHighestHeightImage(event.photos).getUrl();
    this.location = generateLocationQueryString(latitude, longitude, name);
  }

  public onLocationClick() {
    this.changeLocate.emit([this.location, this.overlay]);
  }
}
