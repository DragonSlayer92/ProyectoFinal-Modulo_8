import { Injectable } from '@angular/core';
import {Pedido} from "../models/Pedido";
import {ProductosService} from "../services/productos.service";
import {Response} from "@angular/http";


@Injectable()
export class CarritoComprasService {


  pedidos: Array<Pedido>;

  constructor(private productosService: ProductosService) {
    this.pedidos = [];
  }

  agregarPedido(pedido:Pedido){
    this.pedidos.push(pedido);
  }

  pagarPedido(){
      this.pedidos = [];
   //   this.productosService.sendDatos({pedido: Pedido})
   //   .subscribe(
   //    (data: Response) => console.log(data)
   //  )
  }


}
