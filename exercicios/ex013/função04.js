function fatorial(n){
    let r = 1
    for (let c = n; c>1; c--){
       r =  r* c
    }
    return r
}
console.log(fatorial(6))