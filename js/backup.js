let iconoCarrito = document.querySelector('#carrito-icono')
let carritoClase = document.querySelector('.carrito');
let cerrarCarrito = document.querySelector('#cerrar-carrito')
const itemsCarritoEl = document.querySelector(".carrito-contenido");
const productsEl = document.querySelector(".productos");


//ABRIR CARRITO 
iconoCarrito.onclick = () => {
    carritoClase.classList.add("active");
}

//CERRAR CARRITO 

cerrarCarrito.onclick = () => {
    carritoClase.classList.remove("active");
}

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

renderizarProductos();

//cart array

let carrito =[]


//AÑADIR AL CARRITO
function añadirAlCarrito(id){
    if(carrito.some((item) => item.id === id)){
        alert("ya tienes ese producto en el carrito")
    } else {
        const elemento = productos.find((producto) => producto.id ===id)

        carrito.push({
            ...elemento,
            numeroDeUnidades: 1,
        });
    }

    actualizarCarrito();
}

//RENDERIZAR ELEMENTOS DEL CARRITO
function renderizarElementosDelCarrito(){
    itemsCarritoEl.innerHTML = "";
        carrito.forEach((elemento) => { 
            itemsCarritoEl.innerHTML += `
                                <img src="${elemento.imgsrc}" alt="" class="carrito-imagen">
                                <div class="detalles-container">
                                    <div class="carrito-producto-titulo">${elemento.name}</div>
                                    <div class="producto-precio">${elemento.precio}</div>
                                    <input type="number" value="1" class="carrito-cantidad">
                                </div>
                                <i class='bx bxs-trash-alt carrito-eliminar'></i> `;
        }) 
    };

    //ACTUALIZAR CARRITO
function actualizarCarrito(){
    renderizarElementosDelCarrito();
    //renderizarSubtotal();
}