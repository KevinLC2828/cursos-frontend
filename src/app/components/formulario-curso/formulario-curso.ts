import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-formulario-curso',
  imports: [FormsModule, NgIf],
  templateUrl: './formulario-curso.html',
  styleUrl: './formulario-curso.css',
})
export class FormularioCurso {
  nombre = '';
  docente = '';
  activo = true;
  mostrarError = false;

  @Output() agregar = new EventEmitter<{ nombre: string; docente: string; activo: boolean }>();

  guardar() {
    if (!this.nombre.trim() || !this.docente.trim()) {
      this.mostrarError = true;
      return;
    }
    this.mostrarError = false;
    this.agregar.emit({ nombre: this.nombre, docente: this.docente, activo: this.activo });
    this.nombre = '';
    this.docente = '';
    this.activo = true;
  }
}