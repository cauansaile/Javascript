function contar(){
    var n1 = document.getElementById('inicio')
    n1 = Number(inicio.value)
    var n2 = document.getElementById('fim')
    n2 = Number(fim.value)
    var n3 = document.getElementById('passo')
    n3 = Number(passo.value)
    var msg = document.getElementById('msg')
    var c = n1
    while(c<=n2){
        msg.innerHTML = ` ${c} `
        c += n3
    }
    
}