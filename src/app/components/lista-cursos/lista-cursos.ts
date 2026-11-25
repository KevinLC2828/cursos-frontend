import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Curso } from '../../app';

@Component({
  selector: 'app-lista-cursos',
  imports: [NgFor, NgIf],
  templateUrl: './lista-cursos.html',
  styleUrl: './lista-cursos.css',
})
export class ListaCursos {
  @Input() cursos: Curso[] = [];
  @Output() eliminar = new EventEmitter<number>();

  onEliminar(id: number) {
    this.eliminar.emit(id);
  }
}