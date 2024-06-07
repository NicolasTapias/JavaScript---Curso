let valores = [7, 1, 5, 4, 2, 9]
valores.sort()
/*
for(let pos=0; pos < valores.length; pos++){
console.log(`A posição ${pos} tem o valor ${valores}`)
}
*/
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}