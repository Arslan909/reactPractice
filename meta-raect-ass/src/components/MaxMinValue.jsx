
import React from "react"



export default function MaxMinValue() {

    const [inputFieldValue, setInputFieldValue] = React.useState()
    const [MaxValueResult, setMaxValueResult] = React.useState("")
    const [MinValueResult, setMinValueResult] = React.useState("")

    function handleInputField(event) {
        setMaxValueResult("")
        setMinValueResult("")
        setInputFieldValue(event.target.value)
    }

    function handleSubmission(event) {
        event.preventDefault();
        // console.log(inputFieldValue)
        findMinMaxValues(inputFieldValue)

    }
    function findMinMaxValues(inputArray) {
        let max = inputArray[0]
        let min = inputArray[0]

        if (inputArray.length === 1) {
            setMaxValueResult(`Maximum value from numbers = ${max}`)
            setMinValueResult(`Minimum value from numbers = ${min}`)
            return
        }

        for (let i = 1; i < inputArray.length; i++) {
            if (inputArray[i] > max) {
                max = inputArray[i]
            }
            else if (inputArray[i] < min) {
                min = inputArray[i]
            }
        }
        setMaxValueResult(`Maximum value from numbers = ${max}`)
        setMinValueResult(`Minimum value from numbers = ${min}`)
    }


    return (
        <div>
            <form onSubmit={handleSubmission}>

                <input
                    type="number"
                    placeholder="Enter numbers..."
                    onChange={handleInputField}
                    required
                />
                <button>Find maximum and minimum value</button>
            </form>
            {
                MaxValueResult !== "" ? <p>{MaxValueResult}</p> : <p>{MaxValueResult}</p>
            }

            {
                MinValueResult !== "" ? <p>{MinValueResult}</p> : <p>{MinValueResult}</p>
            }

        </div>
    )
}