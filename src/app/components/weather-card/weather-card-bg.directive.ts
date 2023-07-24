import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appWeatherCardBg]',
})
export class WeatherCardBgDirective {
  @Input('appWeatherCardBg') imageUrl!: string;

  @HostBinding('style.backgroundImage')
  private get backgroundStyle(): string {
    return `url(${this.imageUrl})`;
  }
}
