
import React from "react"



export default function Palindrome(){

    const [inputFieldValue, setInputFieldValue] = React.useState()
    const [result, setResult] = React.useState("")

    function handleInputField(event){
        setResult("")
        setInputFieldValue(event.target.value) 
    }
    
    function handleSubmission(event){
        event.preventDefault();
        // console.log(inputFieldValue)
        isPalindrome(inputFieldValue)

    }
    function isPalindrome(inputString){
        let left = 0;
        let right = inputString.length -1;

        while(left<right){
            if(inputString[left] !== inputString[right]){
                setResult(`${inputString} is not a palindrome`)
                return
            }
            else{
                left++
                right--
            }
        }
        setResult(`${inputString} is a palindrome`)

    }


    return(
        <div>
            <form onSubmit={handleSubmission}>

            <input 
            type="text" 
            placeholder="Enter a string..."
            onChange={handleInputField}
            required
            />
            <button>Palindrome test</button>
            </form>
            {
                result !== "" ? <p>{result}</p> : <p>{result}</p>
            }

        </div>
    )
}