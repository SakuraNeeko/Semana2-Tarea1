import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICliente } from '../Interfaces/icliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  apiurl = 'http://localhost/sexto/Proyectos/03MVC/controllers/clientes.controller.php?op=';

  constructor(private lector: HttpClient) {}

  // Obtener todos los clientes
  todosClientes(): Observable<ICliente[]> {
    return this.lector.get<ICliente[]>(this.apiurl + 'todosClientes');
  }

  // Agregar un nuevo cliente
  agregarCliente(cliente: ICliente): Observable<ICliente> {
    return this.lector.post<ICliente>(this.apiurl + 'agregarCliente', cliente);
  }

  // Actualizar un cliente existente
  actualizarCliente(cliente: ICliente): Observable<ICliente> {
    return this.lector.post<ICliente>(this.apiurl + 'actualizarCliente', cliente);
  }

  // Eliminar un cliente
  eliminarCliente(idCliente: number): Observable<number> {
    const formData = new FormData();
    formData.append('idCliente', idCliente.toString());
    return this.lector.post<number>(this.apiurl + 'eliminarCliente', formData);
  }
}
