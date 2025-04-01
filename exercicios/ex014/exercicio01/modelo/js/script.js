

function add(){
let n1 = document.getElementById('num')
let tela = document.getElementById('lista')
let n2 = Number(n1.value)
let valores = [n2]
if(n1.value.length == 0 || n1.value >100){
    window.alert('Por favor, digite um número válido!')
}else{
    
    for(let pos in valores){
        let item = document.createElement ('option')
        item.text = `valor ${n2} adicionado`
        tela.appendChild(item)
        
    
        


        }
    }
}function finalizar(){
    let n1 = document.getElementById('num')
    let n2 = Number(n1.value)
    let valores = []
    valores.push(n2)
    let res = document.getElementById('resultado')
    let total = valores.length
    res.innerHTML = `A lista contém ${total} itens.`

}

