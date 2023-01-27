//DEFINICION DE VARIABLES Y CARGA DE DATOS
//--------------------------------------------------------------------------------------------------------------------------------------------------

//DATOS DE JSON Y FETCH 
const url = "http://127.0.0.1:5501/js/data.json";

fetch(url)
.then(res => res.json())
.then(data => {renderizarProductos(data)
    prods = data;
})

//VARIABLES 
let prods = 0;
let iconoCarrito = document.querySelector('#carrito-icono')
let carritoClase = document.querySelector('.carrito');
let cerrarCarrito = document.querySelector('#cerrar-carrito')
const itemsCarritoEl = document.querySelector(".carrito-contenido");
const productsEl = document.querySelector(".productos");
const subtotalEl = document.querySelector(".total");

//ARRAY DEL CARRITO

let carrito = JSON.parse(localStorage.getItem("CARRITO")) || [];
actualizarCarrito();

//--------------------------------------------------------------------------------------------------------------------------------------------------

//ABRIR Y CERRAR CARRITO
iconoCarrito.onclick = () => {
    carritoClase.classList.add("active");
}

cerrarCarrito.onclick = () => {
    carritoClase.classList.remove("active");
}

//--------------------------------------------------------------------------------------------------------------------------------------------------

//FUNCIONES DE FUNCIONAMIENTO DEL CARRITO Y HTML
//--------------------------------------------------------------------------------------------------------------------------------------------------

// RENDERIZAR PRODUCTOS
function renderizarProductos(productos){
    productos.forEach((prod) => {
        productsEl.innerHTML += `
        <div class="producto-caja">
            <img src="${prod.imgsrc}" alt="" class="producto-imagen">
            <h2 class="producto-titulo">${prod.name}</h2>
            <span class="precio">COP${prod.precio}</span>
            <i class='bx bx-shopping-bag añadir-carrito' onclick="añadirAlCarrito(${prod.id})"></i>
        </div>
        `
    })
}

//ACTUALIZAR CARRITO
function actualizarCarrito(){
    renderizarElementosDelCarrito();
    renderizarSubtotal();

    //GUARDAR AL LOCAL STORAGE
    localStorage.setItem("CARRITO", JSON.stringify(carrito));
}

//BOTON DE COMPRA
function btnCompraClicked(){

    if (itemsCarritoEl.hasChildNodes()){

        itemsCarritoEl.removeChild(itemsCarritoEl.firstChild);

        localStorage.removeItem("CARRITO");

        carrito = []

        itemsCarritoEl.innerHTML = "";

        Swal.fire(
            'Compra exitosa',
            'El pedido llegará en 2 días',
            'success'
        )
        
    } else {
        Swal.fire(
            'Carrito vacío',
            'Por favor agrega un producto al carrito',
            'error'
        )
    }

    subtotalEl.innerHTML = `
    <div class="total-titulo">TOTAL</div>
    <div class="total-precio">COP0</div>
    `
}

//AÑADIR, ELIMINAR Y CAMBIAR CANTIDADES DENTRO DEL CARRITO
//--------------------------------------------------------------------------------------------------------------------------------------------------

//AÑADIR
function añadirAlCarrito(id){
    //CHECAR SI EL PRODUCTO YA EXISTE
    if(carrito.some((elemento) => elemento.id === id)){
        cambiarNumeroDeUnidades("mas", id)
    } else {
        const elemento = prods.find((producto) => producto.id === id)

        carrito.push({
            ...elemento,
            numeroDeUnidades: 1,
        })
    }

    actualizarCarrito();
}

//ELIMINAR
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
//--------------------------------------------------------------------------------------------------------------------------------------------------

//FUNCIONES DE REDENRIZADO DEL CARRITO
//--------------------------------------------------------------------------------------------------------------------------------------------------

//SUBTOTAL
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

//ELEMENTOS DEL CARRITO
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
//--------------------------------------------------------------------------------------------------------------------------------------------------



