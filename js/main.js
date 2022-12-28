class Prenda {
    constructor(nombre, precio, cantidad){
    this.nombre = nombre;   
    this.precio = parseInt(precio);
    this.cantidad = cantidad;
    this.cuantosComprados = 0;
    }
    
    
    calcularPrecio(cantidadDeseada){
    
        if(cantidadDeseada > this.cantidad) 
        {
            return "La cantidad deseada supera el stock";
        }
        else { 
            this.cantidad = this.cantidad - cantidadDeseada;
            this.cuantosComprados += parseInt(cantidadDeseada);
            alert("Quedan" + " " + this.cantidad + " " + this.nombre)
            let precioTotalPrenda = this.precio * cantidadDeseada;
            return "Por el momento el valor total de la compra es" + " " + "COP" + precioTotalPrenda;
        }
    }
    
    precioTotalProducto(){
        return this.precio * this.cuantosComprados; 
    }
    }

    const Prenda1 = new Prenda ("camibuso de dinosaurio", 100000, 50)
    const Prenda2 = new Prenda ("chaqueta de conejitos", 200000, 80)
    const Prenda3 = new Prenda ("camibuso de chica kitsune", 220000, 30)
    const Prenda4 = new Prenda ("camibuso de gatito", 80000, 7)
    const Prenda5 = new Prenda ("conjunto leyenda china", 250000, 15)
    const Prenda6 = new Prenda ("conjunto monte fuji", 280000, 5)
    const Prenda7 = new Prenda ("conjunto estilo colegiala", 210000, 12)
    const Prenda8 = new Prenda ("pantalon bota ancha", 80000, 23)
    const Prenda9 = new Prenda ("pantalon cuadros", 120000, 6)
    
    let prendas = [Prenda1, Prenda2, Prenda3, Prenda4, Prenda5, Prenda6, Prenda7, Prenda8, Prenda9];
    const prendasSuperiores = [Prenda1, Prenda2, Prenda3, Prenda4]
    const conjuntos = [Prenda5, Prenda6, Prenda7]
    const prendasInferiores = [Prenda8, Prenda9]

    let precioTotalCompra= 0;
    let x = true;

    // return "El precio de la compra es de" + " " + "COP" + precioTotal * this.precio; //

//-------------------------------------------------------------------------------------------

let ropaFiltro = prompt("Elige la categoria de ropa que quieras comprar \nprendas superiores \nprendas inferiores \nconjuntos \nEscribe salir para finalizar")
while (ropaFiltro != "salir"){
    switch (ropaFiltro){
        case "prendas superiores":
            let ropaSuperior = prompt("Elige cualquiera de nuestros productos disponiles: \ncamibuso de dinosaurio \nchaqueta de conejitos \ncamibuso de chica kitsune \ncamibuso de gatito \nEscribe x para regresar")
            while (ropaSuperior != "x"){
                switch (ropaSuperior) {
                    case "camibuso de dinosaurio":
                        while (x == true){
                            let cantidad = prompt("Elija la cantidad de unidades deseadas");
                            if (cantidad === "0"){
                                alert("Ingrese cantidad valida")
                            }
                            else {
                                let resultado = Prenda1.calcularPrecio(cantidad)
                                alert(resultado)
                                x = false;
                            }
                        
                        
                    }
                    break;

                    case "chaqueta de conejitos":
                        while (true){
                                let cantidad = prompt("Elija la cantidad de unidades deseadas");
                                if (cantidad === "0"){
                                alert("Ingrese cantidad valida")
                        }
                        else {
                                let resultado = Prenda2.calcularPrecio(cantidad)
                                alert(resultado)
                                break
                        }
                        
                    }
                    break;

                    case "camibuso de chica kitsune":
                        while (true){
                                let cantidad = prompt("Elija la cantidad de unidades deseadas");
                                if (cantidad === "0"){
                                alert("Ingrese cantidad valida")
                        }
                        else {
                                let resultado = Prenda3.calcularPrecio(cantidad)
                                alert(resultado)
                                break
                        }
                        
                    }
                    break;

                    case "camibuso de gatito":
                        while (true){
                                let cantidad = prompt("Elija la cantidad de unidades deseadas");
                                if (cantidad === "0"){
                                alert("Ingrese cantidad valida")
                        }
                        else {
                                let resultado = Prenda4.calcularPrecio(cantidad)
                                alert(resultado)
                                break
                            }
                        
                        }
                    break;
    }
    break;
    }




        case "conjuntos":
        let conjuntos = prompt("Elige cualquiera de nuestros productos disponiles: \nconjunto leyenda china \nconjunto monte fuji \nconjunto estilo colegiala \nEscribe x para regresar")
            while (conjuntos != "x"){
                switch (conjuntos) {
                    case "conjunto leyenda china":
                        while (true){
                                let cantidad = prompt("Elija la cantidad de unidades deseadas");
                                if (cantidad === "0"){
                                alert("Ingrese cantidad valida")
                            }
                        else {
                                let resultado = Prenda5.calcularPrecio(cantidad)
                                alert(resultado)
                                break
                            }
                            
                        }
                        break;

                    case "conjunto monte fuji":
                        while (true){
                                cantidad = prompt("Elija la cantidad de unidades deseadas");
                                if (cantidad === "0"){
                                alert("Ingrese cantidad valida")
                    }
                        else {
                                let resultado = Prenda6.calcularPrecio(cantidad)
                                alert(resultado)
                                break
                            }
                    
                }
                break;

                    case "conjunto estilo colegiala":
                        while (true){
                                cantidad = prompt("Elija la cantidad de unidades deseadas");
                                if (cantidad === "0"){
                                alert("Ingrese cantidad valida")
                    }
                        else {
                                let resultado = Prenda7.calcularPrecio(cantidad)
                                alert(resultado)
                                break
                            }
                    
                }
                break;
                        
            }
            break;
    }



        case "prendas inferiores":
        let ropaInferior = prompt("Elige cualquiera de nuestros productos disponiles: \npantalon bota ancha \nPantalon cuadros \nEscribe x para regresar")
            while (ropaInferior != "x"){
                switch (ropaInferior) {
                    case "pantalon bota ancha":
                        while (true){
                                let cantidad = prompt("Elija la cantidad de unidades deseadas");
                                if (cantidad === "0"){
                                alert("Ingrese cantidad valida")
                            }
                        else {
                                let resultado = Prenda8.calcularPrecio(cantidad)
                                alert(resultado)
                                break
                            }
                            
                        }
                        break;

                    case "pantalon cuadros":
                        while (true){
                                cantidad = prompt("Elija la cantidad de unidades deseadas");
                                if (cantidad === "0"){
                                alert("Ingrese cantidad valida")
                    }
                        else {
                                let resultado = Prenda9.calcularPrecio(cantidad)
                                alert(resultado)
                                break
                            }
                    
                        }
                    break;
                }
            break;
        }


} 

ropaFiltro = prompt("Elige la categoria de ropa que quieras comprar \nprendas superiores \nprendas inferiores \nconjuntos \nEscribe salir para finalizar")

}

//------------------------------------------------------------------------------------------------------------------------------------------------------------

console.log("Nombre del producto" + "    " + "cantidad" + "  " + "precio")
for(let i = 0; i < prendas.length; i++){
    console.table(prendas[i].nombre, prendas[i].cuantosComprados, prendas[i].precioTotalProducto());
    precioTotalCompra += prendas[i].precioTotalProducto()
}


console.log("Precio total:" + " " + precioTotalCompra);
