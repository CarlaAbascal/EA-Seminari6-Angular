import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Experiencia } from '../models/experiencia.model'; // Importar el modelo de experiencia
import { User } from '../models/user.model'; // Importar el modelo de usuario

@Injectable({
  providedIn: 'root' // El servicio estará disponible en toda la aplicación
})
export class BuscadorService {

  private apiUrl = 'http://localhost:3000/api'; // Base URL del backend

  constructor(private http: HttpClient) {}

   //Metode per trobar experiencies d'un owner

   getExperienciasByOwner(name: string): Observable<Experiencia[]> {
    const url = `${this.apiUrl}/experiencias/owner/${name}`;
    return this.http.get<Experiencia[]>(url)
      .pipe(
        catchError(error => {
         console.error('Error al obtener experiencias del usuario:', error);
           return of([]); // Retornar un array buit en cas d'error
         })
      );
   }

}