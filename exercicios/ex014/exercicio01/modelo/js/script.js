let n1 = document.getElementById('num')
let lista = document.getElementById('lista')
let valores = []
let res1 = document.getElementById('resultado1')
let res2 = document.getElementById('resultado2')
let res3 = document.getElementById('resultado3')
let res4 = document.getElementById('resultado4')
let res5 = document.getElementById('resultado5')

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
        c = n1.value
        soma = c + n1.value
    
    
    }else{
    window.alert('Número inválido ou já encontrado na lista')

    
}
    n1.value = ' '
    n1.focus()
}

function finalizar(){
    valores.sort()
    let qtlista = valores.length
    let maiorn = valores[valores.length - 1]
    let menorn = valores[0]
    if(qtlista == 1){
        res1.innerHTML = `A lista contém 1 valor cadstrado apenas `
    }else{
        res1.innerHTML = `A lista contém ${qtlista} valores cadastrados `
        res2.innerHTML = `O maior número cadastrado foi ${maiorn}`
        res3.innerHTML = `O menor número cadastrado foi ${menorn}`
        res4.innerHTML = `A soma dos valores cadastrados foi de ${soma}`
    }

    
    
}
    



