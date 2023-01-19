let iconoCarrito = document.querySelector('#carrito-icono')
let carritoClase = document.querySelector('.carrito');
let cerrarCarrito = document.querySelector('#cerrar-carrito')
const itemsCarritoEl = document.querySelector(".carrito-contenido");
const productsEl = document.querySelector(".productos");
const subtotalEl = document.querySelector(".total");


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
            <i class='bx bx-shopping-bag añadir-carrito' onclick="añadirAlCarrito(${producto.id})"></i>
        </div>
        `
    })
}
renderizarProductos();

//cart array

let carrito = JSON.parse(localStorage.getItem("CARRITO")) || [];
actualizarCarrito();

//AÑADIR AL CARRITO
function añadirAlCarrito(id){
    //CHEQUEAR SI EL PRODUCTO YA EXISTE
    if(carrito.some((elemento) => elemento.id === id)){
        cambiarNumeroDeUnidades("mas", id)
    } else {
        const elemento = productos.find((producto) => producto.id === id)

        carrito.push({
            ...elemento,
            numeroDeUnidades: 1,
        })
    }

    actualizarCarrito();
}

//ACTUALIZAR CARRITO
function actualizarCarrito(){
    renderizarElementosDelCarrito();
    renderizarSubtotal();

    //GUARDAR AL LOCAL STORAGE
    localStorage.setItem("CARRITO", JSON.stringify(carrito));
}

//CALCULAR TOTAL
function renderizarSubtotal(){
    let precioTotal = 0, totalElementos = 0;

    carrito.forEach((elemento) =>{
        precioTotal += elemento.precio * elemento.numeroDeUnidades;
        totalElementos += elemento.numeroDeUnidades;

        subtotalEl.innerHTML = `
        <div class="total-titulo">TOTAL</div>
        <div class="total-precio">COP${precioTotal}(${totalElementos} productos)</div>
        `
    })
}


//RENDERIZAR ELEMENTOS DEL CARRITO
function renderizarElementosDelCarrito(){
    console.log(carrito);
    itemsCarritoEl.innerHTML = "";
    carrito.forEach((elemento) => {
        itemsCarritoEl.innerHTML +=`
        <div class="carrito-box">
            <img src="${elemento.imgsrc}" alt="" class="carrito-imagen">
                <div class="detalles-container">
                    <div class="carrito-producto-titulo">${elemento.name}</div>
                    <div class="producto-precio">COP${elemento.precio}</div>
                        <div class="unidades">
                            <i class='bx bx-minus cambiar-cantidad' onclick="cambiarNumeroDeUnidades('menos', ${elemento.id})"></i>
                            <div class="number">${elemento.numeroDeUnidades}</div>
                            <i class='bx bx-plus cambiar-cantidad' onclick="cambiarNumeroDeUnidades('mas', ${elemento.id})"></i>          
                        </div>
                </div>
                    <i class='bx bxs-trash-alt carrito-eliminar' onclick="eliminarElementosDelCarrito(${elemento.id})"></i>
        </div>
        `
    });
}

//ELIMINAR OBJETOS DEL CARRITO
function eliminarElementosDelCarrito(id){
    carrito = carrito.filter((elemento) => elemento.id !== id)

    actualizarCarrito();

    if(carrito.length == 0){
        subtotalEl.innerHTML = `
        <div class="total-titulo">TOTAL</div>
        <div class="total-precio">COP0</div>
        `
    }
}

//CAMBIAR NUMERO DE UNIDADES
function cambiarNumeroDeUnidades(accion, id){
    carrito = carrito.map((elemento)=>{

        let numeroDeUnidades = elemento.numeroDeUnidades;

        if(elemento.id === id){
            if(accion === "menos" && numeroDeUnidades > 1){
                numeroDeUnidades--
            } else if(accion === "mas" && numeroDeUnidades < elemento.instock){
                numeroDeUnidades++
            }
        }

        return {
            ...elemento,
            numeroDeUnidades,
        };
    });

    actualizarCarrito();  
}

function btnCompraClicked(){
    while (itemsCarritoEl.hasChildNodes()){
        itemsCarritoEl.removeChild(itemsCarritoEl.firstChild)
    }
    alert("Tu Compra ha sido realizada")

    subtotalEl.innerHTML = `
    <div class="total-titulo">TOTAL</div>
    <div class="total-precio">COP0</div>
    `
    localStorage.removeItem("CARRITO");
    }


