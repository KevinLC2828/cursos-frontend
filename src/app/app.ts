import { Component } from '@angular/core';
import { Encabezado } from './components/encabezado/encabezado';
import { ListaCursos } from './components/lista-cursos/lista-cursos';
import { FormularioCurso } from './components/formulario-curso/formulario-curso';
import { PiePagina } from './components/pie-pagina/pie-pagina';

export interface Curso {
  id: number;
  nombre: string;
  docente: string;
  activo: boolean;
}

@Component({
  selector: 'app-root',
  imports: [Encabezado, ListaCursos, FormularioCurso, PiePagina],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  cursos: Curso[] = [
    { id: 1, nombre: 'Desarrollo Web Avanzado', docente: 'Ing. Pérez', activo: true },
    { id: 2, nombre: 'Base de Datos', docente: 'Ing. Gómez', activo: true },
    { id: 3, nombre: 'Programación Orientada a Objetos', docente: 'Ing. Torres', activo: false },
  ];

  private siguienteId = 4;

  agregarCurso(curso: Omit<Curso, 'id'>) {
    this.cursos = [...this.cursos, { id: this.siguienteId++, ...curso }];
  }

  eliminarCurso(id: number) {
    this.cursos = this.cursos.filter((c) => c.id !== id);
  }
}