import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;

  error: boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService){

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
    .subscribe(( data: any)=> {
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    }, (errorServicio) => {
      this.error = true;
      this.loading = false;
      this.mensajeError = errorServicio.error.error.message;
    });
  }
}


/*   paises: any[] = [];
  constructor( private http: HttpClient) {
    console.log('Constructor');
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe( (respuesta: any) => {
      this.paises = respuesta;
      console.log(respuesta);
    })
  } */
