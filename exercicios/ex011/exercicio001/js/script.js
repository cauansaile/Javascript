function contar(){
    var n1 = document.getElementById('inicio')
    n1 = Number(inicio.value)
    var n2 = document.getElementById('fim')
    n2 = Number(fim.value)
    var n3 = document.getElementById('passo')
    n3 = Number(passo.value)
    var msg = document.getElementById('msg')
    var c = 0
    for(c = n1; c <= n2; c += n3){
        msg.innerHTML = c
}
    msg.innerHTML = c
}