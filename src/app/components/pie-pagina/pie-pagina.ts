import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-pagina',
  templateUrl: './pie-pagina.html',
  styleUrl: './pie-pagina.css',
})
export class PiePagina {
  anio = new Date().getFullYear();
  texto = 'Universidad de Guayaquil - Desarrollo de Aplicaciones Web Avanzado';
}