function gerar(){
    let n = document.getElementById('numero')
    let res = document.getElementById('tabuada')
    if (n.value.length == 0){
        window.alert('Por favor, digite um número')
    }
    else{
        let num = Number(n.value)
        let c = 1
        res . innerHTML = " "
        while (c<=10){
            let item = document.createElement('option')
            item.text = `${num} * ${c} = ${num*c}`
            item.value = `tab${c}`
            res.appendChild(item)
            c++
            
        }
    }

   
    }


