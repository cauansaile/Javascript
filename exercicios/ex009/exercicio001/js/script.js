function carregar(){

    var agora = new Date()

    var hora = agora.getHours()

    var minutos = agora.getMinutes()

    var img = window.document.getElementById('foto')
    var msg = window.document.getElementById('mensagem')

    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    
    /*if (hora < 12) {
        img.src = '../imagens/otomanha.png'

    }

    else if (hora < 18){
        img.src
    }
}