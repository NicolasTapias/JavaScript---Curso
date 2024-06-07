let num = [5, 7, 2, 9, 3]
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posiçoes `)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(6)
if (pos == -1){
    console.log(`O valor não foi encontrado!`)
} else{
    console.log(`O valor está na posição ${pos}`)
}
