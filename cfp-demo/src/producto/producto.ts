export class Producto{
    private producto:string;
    private precio:number;

    public constructor(producto_:string,precio_:number){
        this.producto=producto_;
        this.precio=precio_;
    }

    public getProducto():string{
        return this.producto;
    }
    public setProducto(producto:string):any{
        this.producto=producto;
    }
    public getPrecio():number{
        return this.precio;
    }
    public setPrecio(precio:number):any{
        this.precio=precio;
    }
}