import React from "react"



export default function Factorial(){

    const [inputFieldValue, setInputFieldValue] = React.useState()
    const [result, setResult] = React.useState("")

    function handleInputField(event){
        setResult("")
        setInputFieldValue(event.target.value) 
    }
    
    function handleSubmission(event){
        event.preventDefault();
        // console.log(inputFieldValue)
        FindFactorial(inputFieldValue)


    }
    function FindFactorial(inputValue){
        let fact = 1;

        if(inputValue < 0){inputValue > 0
            setResult("Undefined")
            return
        }

        if (inputValue < 2){
            // console.log(1)
            setResult(`Factorial = ${fact.toString()}`)
        }else{
            for(let i = 2; i<= inputValue; i++){
                fact *= i;
            }
            setResult(`Factorial = ${fact.toString()}`)
        }
    }


    return(
        <div>
            <form onSubmit={handleSubmission}>

            <input 
            type="number" 
            placeholder="Enter a number..."
            onChange={handleInputField}
            required
            />
            <button>Find Factorial</button>
            </form>
            {
                result !== "" ? <p>{result}</p> : <p>{result}</p>
            }

        </div>
    )
}