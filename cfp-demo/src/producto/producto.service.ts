import { Injectable } from '@nestjs/common';
import fs = require('fs');
import { Producto } from './producto';

@Injectable()
export class ProductoService {
    private static readonly CANTIDAD_PRODUCTOS = 10;
    private listaProductos: Producto[]=[];

    // public getRandom(): any {
    //     let productos = [];
    //     for (let i = 0; i < ProductoService.CANTIDAD_PRODUCTOS; i++) {
    //         let producto = {
    //             'producto': "producto_" + i,
    //             'precio': Math.floor(Math.random() * 100)
    //         };
    //         productos.push(producto);
    //     }
    //     return productos;
    // }
    public getProducto(indexParam:number) :Producto{
        return this.listaProductos[indexParam];
        // this.listaProductos.forEach((item,index) =>{
        //     if(index===indexParam){
        //         return item[index];
        //     }
        // })
    }
    public getProductos(): Producto[] {
        return this.listaProductos;
    }
    public create(prod: any) {
        const producto = new Producto(prod['nombre_producto'],prod['precio']);
        console.log(producto);
        if (producto.getProducto() && producto.getPrecio()) {
            this.listaProductos.push(prod);
            console.log(producto);
            fs.appendFileSync('productos.csv',
                "\n" +producto.getProducto() + ","+ producto.getPrecio());
            return "ok";
        }
        else
            return "parametros incorrectos";
    }
    private loadProductos(): void {
        let archivo = fs.readFileSync('productos.csv', 'utf8');
        let lineas = archivo.split('\n');
        const elementos = [];
        for (let i = 0; i < lineas.length; i++) {
            let linea = lineas[i].replace('\r', '');
            let p = linea.split(',');
            elementos.push(p);
        }
        this.listaProductos = [];
        for (let i = 0; i < elementos.length; i++) {
            let producto = new Producto(elementos[i][0],
                parseInt(elementos[i][1]));
            this.listaProductos.push(producto);
        }
    }
}
