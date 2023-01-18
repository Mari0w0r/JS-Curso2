//DEFINICION DE VARIABLES
let iconoCarrito = document.querySelector('#carrito-icono')
let carritoClase = document.querySelector('.carrito');
let cerrarCarrito = document.querySelector('#cerrar-carrito')
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//FUNCIONES 

//RENDERIZAR
function renderizarProductos(){
    productos.forEach((producto) => {
        productsEl.innerHTML += `
        <div class="producto-caja">
            <img src="${producto.imgsrc}" alt="" class="producto-imagen">
            <h2 class="producto-titulo">${producto.name}</h2>
            <span class="precio">${producto.precio}</span>
            <i class='bx bx-shopping-bag añadir-carrito'></i>
            </div>
        `
    })
}

//FUNCION CARRITO
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

//FUNCION DEL FUNCIONAMIENTO DEL CARRITO
function ready() {
    //elimina objetos del carrito
    let botonEliminar = document.getElementsByClassName('carrito-eliminar')
    console.log(eliminarObjetosCarrito)
    for (let i = 0; i < botonEliminar.length; i++){
        let boton = botonEliminar[i];
        boton.addEventListener('click', eliminarObjetosCarrito)
    }
    //cambia la cantidad
    let inputsCantidad = document.getElementsByClassName('carrito-cantidad')
    for (let i = 0; i < inputsCantidad.length; i++){
        let input = inputsCantidad[i];
        input.addEventListener('change', cantidadCambiada)
    }
    //Añade productos al carrito
    let añadidoAlCarrito = document.getElementsByClassName('añadir-carrito')
    for (let i = 0; i < añadidoAlCarrito.length; i++){
        let botonPrenda = añadidoAlCarrito[i];
        botonPrenda.addEventListener('click', añadirCarritoClicked)
    }
    //boton de compra
    document.getElementsByClassName('btn-comprar')[0].addEventListener('click', btnCompraClicked)
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------- 

//ABRIR Y CERRAR CARRITO/ FUNCION DE COMPRA
//--------------------------------------------------------------------------------------------------------------------------------------------------------- 

//ABRIR CARRITO 
iconoCarrito.onclick = () => {
    carritoClase.classList.add("active");
}

//CERRAR CARRITO 

cerrarCarrito.onclick = () => {
    carritoClase.classList.remove("active");
}

//FUNCION DE BOTON DE COMPRA

function btnCompraClicked(){
    alert("Tu Compra ha sido realizada")
    let contenidocarro = document.getElementsByClassName('carrito-contenido')[0]
    while (contenidocarro.hasChildNodes()){
        contenidocarro.removeChild(contenidocarro.firstChild)
    }
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------

//AÑADIR Y ELIMINAR OBJETOS DEL CARRITO
//---------------------------------------------------------------------------------------------------------------------------------------------------------

//AÑADIR OBJETOS AL CARRITO 
function añadirCarritoClicked(añadido){
    let botonAñadir = añadido.target
    let comprarProductos = botonAñadir.parentElement
    let titulo = comprarProductos.getElementsByClassName('producto-titulo')[0].innerText
    let precio = comprarProductos.getElementsByClassName('precio')[0].innerText
    let imgPrenda = comprarProductos.getElementsByClassName('producto-imagen')[0].src
    añadirPrendaCarrito(titulo, precio, imgPrenda);
    actualizarPrecioTotal();
    }

//ELIMINAR OBJETOS DEL CARRITO
function eliminarObjetosCarrito(evento){
    let botonclickeado = evento.target
    botonclickeado.parentElement.remove()
    actualizarPrecioTotal();
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------

//ACTUALIZAR PRECIO Y CAMBIOS DE CANTIDAD
//---------------------------------------------------------------------------------------------------------------------------------------------------------

//ACTUALIZAR PRECIO TOTAL
function actualizarPrecioTotal(){
    let contenidoCarrito = document.getElementsByClassName('carrito-contenido')[0]
    let cajasCarrito = contenidoCarrito.getElementsByClassName('carrito-caja')
    let total = 0;
    for (let i = 0; i < cajasCarrito.length; i++){
        let cajaCarrito = cajasCarrito[i]
        let precioElemento = cajaCarrito.getElementsByClassName('producto-precio')[0]
        let cantidadElemento = cajaCarrito.getElementsByClassName('carrito-cantidad')[0 ]
        let precio = parseFloat(precioElemento.innerText.replace("COP", ""));
        let cantidad = cantidadElemento.value;
        total = total + (precio * cantidad);
        document.getElementsByClassName('total-precio')[0].innerText = "COP" + total;
    }
}

//FUNCION CAMBIOS DE CANTIDAD
function cantidadCambiada(precios){
    let input = precios.target;
    if(isNaN(input.value) || input.value <= 1){
        input.value = 1;
    }
    actualizarPrecioTotal();
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------

//PRENDAS PERSONALIZADAS DENTRO DEL CARRITO(IMAGENES, TITULOS Y PRECIOS)
//---------------------------------------------------------------------------------------------------------------------------------------------------------

function añadirPrendaCarrito(titulo, precio, imgPrenda){
    let cartShopBox = document.createElement('div')
    cartShopBox.classList.add('carrito-caja')
    let elementosCarrito = document.getElementsByClassName('carrito-contenido')[0];
    let elementosCarritoNombres = elementosCarrito.getElementsByClassName('carrito-producto-titulo')
    for (let i = 0; i < elementosCarritoNombres.length; i++){
        if (elementosCarritoNombres[i].innerText == titulo){
            alert("Ya tienes este producto en tu carrito")
            return;
        }
    }

let cartBoxContent = `
                        <img src="${imgPrenda}" alt="" class="carrito-imagen">
                        <div class="detalles-container">
                            <div class="carrito-producto-titulo">${titulo}</div>
                            <div class="producto-precio">${precio}</div>
                            <input type="number" value="1" class="carrito-cantidad">
                        </div>
                        <i class='bx bxs-trash-alt carrito-eliminar'></i> `;
cartShopBox.innerHTML = cartBoxContent;
elementosCarrito.append(cartShopBox)
cartShopBox
.getElementsByClassName('carrito-eliminar')[0]
.addEventListener('click', eliminarObjetosCarrito)
cartShopBox
.getElementsByClassName('carrito-cantidad')[0]
.addEventListener('change', cantidadCambiada)
}

