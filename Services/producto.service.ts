import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from '../Interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  apiurl = 'http://localhost/sexto/Proyectos/03MVC/controllers/productos.controller.php?op=';

  constructor(private lector: HttpClient) {}

  // Obtener todos los productos
  todosProductos(): Observable<IProducto[]> {
    return this.lector.get<IProducto[]>(this.apiurl + 'todosProductos');
  }

  // Agregar un nuevo producto
  agregarProducto(producto: IProducto): Observable<IProducto> {
    return this.lector.post<IProducto>(this.apiurl + 'agregarProducto', producto);
  }

  // Actualizar un producto existente
  actualizarProducto(producto: IProducto): Observable<IProducto> {
    return this.lector.post<IProducto>(this.apiurl + 'actualizarProducto', producto);
  }

  // Eliminar un producto
  eliminarProducto(idProducto: number): Observable<number> {
    const formData = new FormData();
    formData.append('idProducto', idProducto.toString());
    return this.lector.post<number>(this.apiurl + 'eliminarProducto', formData);
  }
}
