import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Pedido} from "../models/Pedido";
import {Producto} from "../models/Producto";
import 'rxjs/Rx';

@Injectable()
export class ProductosService {

  constructor(private http: Http) { }

  obtenerProductos(){
    return this.http.get("https://tiendaonline-18869.firebaseio.com/productos/.json")
      .map((res: Response) => {
      	console.log(res.json());
      	return res.json();
      });
  }
  obtenerProductoPorId(id:number){
    return this.http.get("https://tiendaonline-18869.firebaseio.com/productos/"+ (id) + "/.json")
      .map((res: Response) => res.json());
  }


}
