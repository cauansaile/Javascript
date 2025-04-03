let n1 = document.getElementById('num')
let lista = document.getElementById('lista')
let valores = []
let res = document.getElementById('resultado')

function isNumero(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true
}else{
    return false
}
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}
function add(){
    if(isNumero(n1.value) && !inLista(n1.value, valores)){
        valores.push(Number(n1.value))
        let item = document.createElement ('option')
        item.text = `valor ${n1.value} adicionado`
        lista.appendChild(item)
    
    
    }else{
    window.alert('Número inválido ou já encontrado na lista')
}}

function finalizar(){
    let total = valores.length
    res.innerHTML = `A lista contém ${total} itens.
}
    



