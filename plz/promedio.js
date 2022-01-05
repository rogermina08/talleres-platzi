

function calcularPromedio(lista) {
    //let sumaLista = 0;

    //for(let i = 0; i < lista.length; i++) {
    //    sumaLista = sumaLista + lista[i];
    //}
    const sumaLista = sumaLista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;

        }
    );
    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}