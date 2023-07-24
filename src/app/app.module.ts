import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherCardBgDirective } from './components/weather-card/weather-card-bg.directive';
import { LoaderComponent } from './components/loader/loader.component';
import { PlacesAutocompleteComponent } from './components/places-autocomplete/places-autocomplete.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    WeatherCardBgDirective,
    LoaderComponent,
    PlacesAutocompleteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
