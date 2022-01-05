import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { convocatorias } from '../Modelo/convocatorias';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor(private http: HttpClient,) { }
  url = 'http://localhost:3000';
  

  getConvocatorias() {
      return this.http.get<convocatorias[]>(this.url);
      
  }
  getConvocatoria(id: string) {
      return this.http.get<convocatorias>(this.url + '/' + id);
  }

  createConvocatoria(convocatoria: convocatorias) {
      return this.http.post<convocatorias>(this.url, convocatoria);
  }

  updateConvocatoria(convocatoria: convocatorias) {
      return this.http.put<convocatorias>(this.url + '/' + convocatoria._id, convocatoria);
  }

  deleteConvocatoria(id: string) {
      return this.http.delete<convocatorias>(this.url + '/' + id);
  }

  duplicadosConvocatorias(nombre: string) {
      return this.http.get<convocatorias[]>(this.url + '/' + nombre);
  }
}
