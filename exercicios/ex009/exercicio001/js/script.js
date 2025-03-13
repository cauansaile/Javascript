function carregar(){
    var data = new Date()
    var hora = data.getHours()
    
    var msg = document.getElementById('msg')
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
}