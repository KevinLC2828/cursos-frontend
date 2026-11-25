# Gestión de Cursos - Frontend

Aplicación web en Angular para visualizar y registrar cursos.
Proyecto integrador del primer parcial de **Desarrollo de Aplicaciones Web Avanzado**.

## Integrantes
- Kevin Lozada
- Andrea de los Angeles Moreira

## Tecnologías
- Angular
- Bootstrap
- TypeScript

## Componentes
| Componente | Descripción |
|---|---|
| `encabezado` | Muestra el nombre del sistema y un subtítulo |
| `lista-cursos` | Tabla con id, nombre, docente y estado (`*ngFor`, `*ngIf`) |
| `formulario-curso` | Formulario para registrar cursos (`ngModel`) |
| `pie-pagina` | Texto institucional |

## Requisitos
- Node.js LTS
- Angular CLI (`npm install -g @angular/cli`)

## Cómo ejecutarlo
```bash
npm install
ng serve
```
Abrir http://localhost:4200

## Repositorio del backend
https://github.com/KevinLC2828/cursos-backend