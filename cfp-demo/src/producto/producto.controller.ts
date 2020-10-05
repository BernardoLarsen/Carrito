import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { Producto } from './producto';
import { create } from 'domain';

@Controller('productos')
export class ProductoController {
    constructor(private productoService: ProductoService) { }
    @Get()
    public getProductos(): Producto[] {
        return this.productoService.getProductos();
    }
    @Get(":index")
    public getProducto(@Param('index') index:number): Producto {
        return this.productoService.getProducto((index));
    }
    @Post()
    create(@Body() prod: any): string {
        return this.productoService.create(prod);
    }
}