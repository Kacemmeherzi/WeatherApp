import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  private apiUrl = "https://weatherapi-com.p.rapidapi.com/forecast.json" ; 
   headers = new HttpHeaders({
    'Content-Type': 'application/json', 
    'x-rapidapi-key' : '4d8e81d92emsh81398d112f019e1p1e4d06jsnafebeff66d1f',
    'x-rapidapi-host' : "weatherapi-com.p.rapidapi.com"

  });

  getWeatherByCity(city :string) : Observable<any> {
    const httpParams = new HttpParams().set("q",city)
     return this.http.get(this.apiUrl, {headers: this.headers})
  }
}
