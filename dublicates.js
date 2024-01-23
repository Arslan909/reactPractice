let string = "abcde"

let set = new Set()

let duplicates = false;

for(let i=0; i<string.length; i++){
    if(set.has(string[i])){
        duplicates = true;
        break
    }else{
        set.add(string[i])
    }
}

if(duplicates){
    console.log("duplicates in string")
}else{
    console.log("no duplicates in string")   
}
