alert("Bienvenido usuario")

let dinosaurio = 100000;
let conejito = 200000;
let kitsune = 220000;
let gatito = 80000;
let conjunto = 250000;
let fuji = 280000;
let precioFinal = 0;
let validador = true;


let productos = prompt("Elige cualquiera de nuestros productos disponiles: \nCamibuso de dinosaurio \nChaqueta de Conejitos \nCamibuso de chica Kitsune \nCamibuso de gatito \nConjunto leyenda China \nChaqueta Monte Fuji \nPresiona x para finalizar.")
while (productos != "x") {

    switch (productos) {
        case "Camibuso de dinosaurio":
            while (validador==true){
                cantidad = prompt("Elija la cantidad de unidades deseadas");
                if (cantidad === "0"){
                    alert("Ingrese cantidad valida")
                }
                else {
                    precioFinal = parseInt(cantidad) * dinosaurio;
                    alert ("El precio final de su compra es" + " " + "COP" + precioFinal)
                    validador =false;
                }
                
            }
            break;

            case "Chaqueta de Conejitos":
            while (validador==true){
                cantidad = prompt("Elija la cantidad de unidades deseadas");
                if (cantidad === "0"){
                    alert("Ingrese cantidad valida")
                }
                else {
                    precioFinal = parseInt(cantidad) * conejito;
                    alert ("El precio final de su compra es" + " " + "COP" + precioFinal)
                    validador =false;
                }
                
            }
            break;

            case "Camibuso de chica Kitsune":
            while (validador==true){
                cantidad = prompt("Elija la cantidad de unidades deseadas");
                if (cantidad === "0"){
                    alert("Ingrese cantidad valida")
                }
                else {
                    precioFinal = parseInt(cantidad) * kitsune;
                    alert ("El precio final de su compra es" + " " + "COP" + precioFinal)
                    validador =false;
                }
                
            }
            break;

            case "Camibuso de gatito":
            while (validador==true){
                cantidad = prompt("Elija la cantidad de unidades deseadas");
                if (cantidad === "0"){
                    alert("Ingrese cantidad valida")
                }
                else {
                    precioFinal = parseInt(cantidad) * gatito;
                    alert ("El precio final de su compra es" + " " + "COP" + precioFinal)
                    validador =false;
                }
                
            }
            break;

            case "Conjunto leyenda China":
            while (validador==true){
                cantidad = prompt("Elija la cantidad de unidades deseadas");
                if (cantidad === "0"){
                    alert("Ingrese cantidad valida")
                }
                else {
                    precioFinal = parseInt(cantidad) * conjunto;
                    alert ("El precio final de su compra es" + " " + "COP" + precioFinal)
                    validador =false;
                }
                
            }
            break;

            case "Chaqueta Monte Fuji":
            while (validador==true){
                cantidad = prompt("Elija la cantidad de unidades deseadas");
                if (cantidad === "0"){
                    alert("Ingrese cantidad valida")
                }
                else {
                    precioFinal = parseInt(cantidad) * fuji;
                    alert ("El precio final de su compra es" + " " + "COP" + precioFinal)
                    validador =false;
                }
                
            }
            break;
        }
        break;
    }