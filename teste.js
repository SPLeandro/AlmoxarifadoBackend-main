function listItems(items, pageActual, limitItems){
    let result = [];
    let totalPage = Math.ceil( items.length / limitItems)
    let contador = ( pageActual * limitItems) - limitItems
    let delimitador = contador + limitItems

    if (pageActual <= totalPage){
        for (let i=contador; i<delimitador; i++){
            if(items[i] != null){
                result.push(items[i]);
            }
            contador++;
        }
    }
    return result;
}

var next = ['Next 1', 'Next 2', 'Next 3', 'Next 4', 'Next 5'];

var resultNext = listItems(next, 1, 2);
var resultNext2 = listItems(next, 2, 2);
var resultNext3 = listItems(next, 3, 2);

console.log(resultNext);
console.log(resultNext2);
console.log(resultNext3);