const carrito = []

alert('Bienvenidos a Lunas de Valencia!')



const ordenarMenorMayor = () => {

    articulos.sort((a, b) => a.precio - b.precio)
    MostrarListaArticulos()
};

const MostrarListaArticulos = () => {
    const ListaArticulos = articulos.map(articulo => {
        return '* '+articulo.nombre+' '+articulo.precio+'€'
    })
    alert('Lista de Artículos:'+'\n\n'+ListaArticulos.join('\n'))
    comprarArticulos(ListaArticulos)
};

const comprarArticulos = (ListaArticulos) => {
    let articuloNombre = '';
    let articuloCantidad = 0;
    let otroArticulo;

    do {
        articuloNombre = prompt('¿Que artículo le gustaria comprar?'+'\n\n'+ListaArticulos.join('\n'))
        articuloCantidad = parseInt(prompt('Cuántos querés comprar?'))

        const articulo = articulos.find(articulo => articulo.nombre.toLowerCase() === articuloNombre.toLowerCase());

        // if (articulo) {
        //     agregarAlCarrito(articulo, articulo.id, articuloCantidad)
        // } else {
        //     alert('El artículo no se encuentra en el catálogo.')
        // }

               
        otroArticulo = confirm('¿Te gustaría agregar otro artículo?')
        
    } while (otroArticulo);

    confirmarCompra()

};

const agregarAlCarrito = (articulo, articuloId, articuloCantidad) => {
    const articuloDuplicado = carrito.find(articulo => articulo.id === articuloId)
    if(!articuloDuplicado) {
        articulo.cantidad += articuloCantidad
        carrito.push(articulo)
    } else {
        articuloDuplicado.cantidad += articuloCantidad;
    }

}

const eliminarArticuloCarrito = (articuloNombre) => {
    carrito.forEach((articulo, index) => {
        if (articulo.nombre.toLowerCase() === articuloNombre) {
            if (articulo.cantidad > 1) {
                articulo.cantidad--
            } else {
                carrito.splice(index, 1);
            }
        }
    });
    confirmarCompra()
};

const confirmarCompra = () => {
    const ListaArticulos = carrito.map(articulo => {
        return '- '+articulo.nombre+' | Cantidad: '+articulo.cantidad
    });

    const confirmar = confirm('Resúmen de su compra: '
    +'\n\n'+ListaArticulos.join('\n')
    +'\n\nPara continuar presione "Aceptar" sino "Cancelar" para elimininar articulos del carrito.')

    if (confirmar) {
        finalizarCompra(ListaArticulos)
    } else {
        const articuloAEliminar = prompt('Ingrese el nombre del articulo que desea eliminar:')
        eliminarArticuloCarrito(articuloAEliminar)
    }
};

const finalizarCompra = (ListaArticulos) => {
    const cantidadTotal = carrito.reduce((acc, elemento) => acc + elemento.cantidad, 0)
    const precioTotal = carrito.reduce((acc, elemento) => acc + (elemento.precio * elemento.cantidad), 0)
    alert('Aqui tiene el detalle de su compra:'
    +'\n\n'+ListaArticulos.join('\n')
    +'\n\nTotal de Artículos: '+cantidadTotal
    +'\n\nEl total de su compra es: €'+precioTotal
    +'\n\nGracias por su confianza!'
    )
}

ordenarMenorMayor()
