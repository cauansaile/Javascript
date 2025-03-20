function verificar(){
    var masc = document.getElementById('imasc')
    var fem = document.getElementById('ifem')
    var ano = document.getElementById('iano')
    ano = Number(iano.value)
    var idade = 2025 - ano
    var msg = document.getElementById('mensagem')
    var imagem = document.getElementById('foto')
    if (idade <= 15 && masc.checked == true) {
        msg.innerHTML = `Você em um menino de ${idade} anos`
        imagem.src = 'imagens/homem01.png'
    }
    else if (idade <= 15 && fem.checked == true) {
        msg.innerHTML = `Você é uma menina de ${idade} anos`
        imagem.src = 'imagens/mulher01.png'

    }
    else if (idade <=64 && masc.checked == true) {
        msg.innerHTML = `Você é um homem de ${idade} anos`
        imagem.src = 'imagens/homem02.png'
    }
    else if (idade <=64 && fem.checked == true) {
        msg.innerHTML = `Você é uma mulher de ${idade} anos`
        imagem.src = 'imagens/mulher02.png'
    }
    else if (idade > 64 && masc.checked == true) {
        msg.innerHTML = `Você é um homem de ${idade} anos`
        imagem.src = 'imagens/homem03.png'
    }
    else if (idade > 64 && fem.checked == true) {
        msg.innerHTML = `Você é uma mulher de ${idade} anos`
        imagem.src = 'imagens/mulher03.png'
        }
    else{
        msg.innerHTML = `Detectamos um erro, preencha corretamente!`
    }    

}