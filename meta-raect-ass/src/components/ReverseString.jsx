
import React from "react"



export default function ReverseString(){

    const [inputFieldValue, setInputFieldValue] = React.useState()
    const [result, setResult] = React.useState("")

    function handleInputField(event){
        setResult("")
        setInputFieldValue(event.target.value) 
    }
    
    function handleSubmission(event){
        event.preventDefault();
        // console.log(inputFieldValue)
        reverseString(inputFieldValue)

    }
    function reverseString(inputString){
        let reverse = "";

        for(let i = inputString.length-1; i>=0; i--){
            reverse += inputString[i];
        }
        setResult(reverse)
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
            <button>Reverse String</button>
            </form>
            {
                result !== "" ? <p>{result}</p> : <p>{result}</p>
            }

        </div>
    )
}