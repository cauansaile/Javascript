function carregar(){

    var data = new Date()

    var hora = data.getHours()

    var minutos = data.getMinutes()

   


    var img = window.document.getElementById('foto')
    var msg = window.document.getElementById('mensagem')

    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#fee476'

    }

    else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#909090'
        
    }

    else{
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#3484bf'
    }
}

