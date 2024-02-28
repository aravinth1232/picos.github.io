
for(let i=1; i<=10;i++){
 console.log(i);
    
}

function li(){
console.log("")

}
li()
for(let i=1; i<=10;i++){
    if(i%2==0)
    console.log(i);     
   }
li()
let a=[2,1,3,5,6,7,"hi","f","fefe"]

for(let i of a )
console.log(i)

function isEven(num){
    if(num % 2 ==0)
    return true
    else
    return false

}
li()
console.log( `4 is even? ${isEven(4)}`)
console.log( `5 is even? ${isEven(5)}`)
li()

let b =[1,4,5,6,7,8,9,5,6]

let add=a=>{
    let sum=0
    for(let i of a)
    sum+=i
    return sum;
}

console.log(`b=[1,4,5,6,7,8,9,5,6]=${add(b)}`)


let vol= function(l,b,h){
    return l*b*h
}
li()
 b =[1,4,5,6,7,8,9,5,6]





b.forEach( val=>console.log(val))




