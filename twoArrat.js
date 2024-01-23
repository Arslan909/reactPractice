let arra1 = [1,2,3,4,5]
let arra2 = [1,2,6,7,8]

for(let i = 0; i<arra1.length; i++){
    for(let j =0; j<arra2.length; j++){
        if(arra1[i] === arra2[j]){
            arra2.splice(j,1)
        }
    }
}

console.log(arra2);