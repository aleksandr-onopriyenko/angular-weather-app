import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ENV } from 'src/env/env';

export const enum ApiEndpoints {
  BASE = 'https://api.openweathermap.org/data/2.5/',
  CURRENT = 'weather',
  DAYLY = 'forecast',
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);
  private apiKey = ENV.API_KEY;

  public get<T>(uri: string, params: string): Observable<T> {
    return this.http.get<T>(
      `${ApiEndpoints.BASE}${uri}?units=metric&${params}&appid=${this.apiKey}`
    );
  }
}
