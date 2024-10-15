import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { WeatherService } from '../services/weatherservice.service';
import {  HttpClientModule, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  providers : [CommonModule]
})
export class HomePage {
  constructor( private weatherservice : WeatherService) {}

  ngOnInit() : void {
     this.weatherservice.getWeatherByCity("tunis").subscribe({
      next : (Response) => {console.log(Response);
      }
      
     })
  }
}
