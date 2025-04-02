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
        res.innerHTML = `Valor ${n1.value} adicionado com sucesso!`
    
    
    }else{
    window.alert('Número inválido')
    
    /*for(let pos in valores){
        let item = document.createElement ('option')
        item.text = `valor ${n2} adicionado`
        tela.appendChild(item)*/
        
    
        


        }
    }

/*function finalizar(){
    let n1 = document.getElementById('num')
    let n2 = Number(n1.value)
    let valores = []
    valores.push(n2)
    
    let total = valores.length
    res.innerHTML = `A lista contém ${total} itens.

}*/

