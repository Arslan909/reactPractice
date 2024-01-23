let string = "a string with spaces to remove"
let result = ""

for(let i =0; i<string.length; i++){
    if(string[i] != " "){
        result += string[i]
    }
}
console.log(result);