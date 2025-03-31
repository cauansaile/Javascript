let valores = [1,4,8,2,6,5]
valores.sort()
/*for(pos = 0; pos < valores.length; pos++){
    console.log(`na posição ${pos} está o valor ${valores[pos]}`)
}*/

for(let pos in valores){
    console.log(`na posição ${pos} está o valor ${valores[pos]}`)
}