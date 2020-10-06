export class Producto{
    private nombre_producto:string;
    private precio:number;

    public constructor(producto_:string,precio_:number){
        this.nombre_producto=producto_;
        this.precio=precio_;
    }

    public getProducto():string{
        return this.nombre_producto;
    }
    public setProducto(producto:string):any{
        this.nombre_producto=producto;
    }
    public getPrecio():number{
        return this.precio;
    }
    public setPrecio(precio:number):any{
        this.precio=precio;
    }
}