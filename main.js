alert('Bienvenidos a Lunas de Valencia!')

const comprarArticulos = () => {
    let articulo = ''
    let cantidad = 0
    let precio = 0
    let subtotal = 0
    let = seguirComprando = false

    do {
        producto = prompt('¿Querés comprar una maceta, taza o animalitos?')
        cantidad = parseInt(prompt('¿Cuántos querés comprar?'))

        switch (producto) {
            case 'maceta':
                precio = 550               
                break;
            case 'taza':
                precio = 400
                break;
            case 'animalitos':
                precio = 750
                break;        
            default:
                alert('Alguno de los datos son incorrectos')
                precio = 0
                cantidad = 0
        }

        subtotal += precio * cantidad
        seguirComprando = confirm('¿Querés seguir comprando?')

    } while (seguirComprando);

    return subtotal

}

const aplicarDscto = (subtotal) => {
    if (subtotal >= 900) {
        const totalConDscto = subtotal * 0.90
        return totalConDscto
    } else {
        return subtotal
    }
}

const subtotal = comprarArticulos()

const subtotalConDscto = aplicarDscto(subtotal)




