var contenedor = document.getElementById("productos");
var contenedorCarrito = document.getElementById("carrito");
var total = 0;
var carrito = [];
var indice = 0;
var productos = [
        {
                nombre: 'harina',
                precio: 35
        },
        {
                nombre: 'pan',
                precio: 25
        },
        {
                nombre: 'papa',
                precio: 52
        },
        {
                nombre: 'palta',
                precio: 55
        },
        {
                nombre: 'fideos',
                precio: 85
        },
        {
                nombre: 'aceite',
                precio: 350
        },
        {
                nombre: 'sopa',
                precio: 86
        },
        {
                nombre: 'mermelada',
                precio: 108
        },
        {
                nombre: 'porotos',
                precio: 69
        },
        {
                nombre: 'lentejas',
                precio: 85
        },
        {
                nombre: 'mandarina',
                precio: 43
        },
        {
                nombre: 'harina',
                precio: 35
        },
        {
                nombre: 'banana',
                precio: 79
        },
        {
                nombre: 'leche de almendras',
                precio: 145
        },
        {
                nombre: 'papel higiénico',
                precio: 147
        },
        {
                nombre: 'lavandina',
                precio: 55
        },
        {
                nombre: 'alcohol en gel',
                precio: 123
        },
        {
                nombre: 'shampoo',
                precio: 400
        },
        {
                nombre: 'arroz',
                precio: 66
        },
        {
                nombre: 'salsa de tomate',
                precio: 35
        }
        ];

function cargar(){
        for (let i = 0; i < productos.length; i++){
                let lineaProducto = document.createElement("div");
                let parrafo = document.createElement("p");
                let parrafoPrecio = document.createElement("p");
                let texto = document.createTextNode(productos[i].nombre);
                let precio = document.createTextNode('$ ' + productos[i].precio);
                let boton = document.createElement("button");
                parrafo.appendChild(texto);
                parrafoPrecio.appendChild(precio);
                lineaProducto.appendChild(parrafo);
                lineaProducto.appendChild(parrafoPrecio);
                lineaProducto.appendChild(boton);
                boton.innerHTML = "Agregar";
                boton.setAttribute("id", "boton" + i);
                boton.setAttribute("onClick", "agregar(" + i + ")");
                lineaProducto.className = "producto";
                contenedor.appendChild(lineaProducto);
        }       
}

function agregar(x){          
        let lineaProducto = document.createElement("div");
        let parrafo = document.createElement("p");
        let parrafoPrecio = document.createElement("p");
        let texto = document.createTextNode(productos[x].nombre);
        let precio = document.createTextNode('$ ' + productos[x].precio);
        let boton = document.createElement("button");
        parrafo.appendChild(texto);
        parrafoPrecio.appendChild(precio);
        lineaProducto.appendChild(parrafo);
        lineaProducto.appendChild(parrafoPrecio);
        lineaProducto.appendChild(boton);
        boton.innerHTML = "Quitar";
        boton.setAttribute("onClick", "quitar(" + x + ")");
        lineaProducto.className = "producto";
        lineaProducto.setAttribute("id", "divit" + x + '"');
        contenedorCarrito.appendChild(lineaProducto);
        boton = document.getElementById("boton" + x);
        boton.style.display = 'none';
        total += productos[x].precio;
}

function quitar(x){
        let boton = document.getElementById("boton" + x);
        boton.style.display = 'block';
        let lineaProducto = document.getElementById("divit" + x + '"');
        contenedorCarrito.removeChild(lineaProducto);
        total -= productos[x].precio;
}

function valorTotal(){        
        alert('El total de su compra es: $' + total);        
}
