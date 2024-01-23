
import React from "react"



export default function Sorting() {

    const [inputFieldValue, setInputFieldValue] = React.useState()
    const [sortedResult, setsortedResult] = React.useState("")

    function handleInputField(event) {
        setsortedResult("")
        setInputFieldValue(event.target.value)
    }

    function handleSubmission(event) {
        event.preventDefault();
        // let size = inputFieldValue.length

        let numArr = inputFieldValue.split('').map((item) => parseInt(item, 10))

        let size = numArr.length

        divideArray(numArr, 0, size - 1)

    }


    function divideArray(inputArray, start, end) {
        if (start < end) {
            let mid = Math.floor((start + end) / 2);
            divideArray(inputArray, start, mid);
            divideArray(inputArray, mid + 1, end);
            sortArray(inputArray, start, mid, end);
        }
    }

    //helperFuncion
    function sortArray(inputArray, start, mid, end) {

        let tempArray = []

        let index1 = start
        let index2 = mid + 1
        let tempIndex = 0

        while (index1 <= mid && index2 <= end) {

            if (inputArray[index1] <= inputArray[index2]) {

                tempArray[tempIndex] = inputArray[index1]
                index1++, tempIndex++

            } else {
                tempArray[tempIndex] = inputArray[index2]
                index2++, tempIndex++
            }

        }
        while (index1 <= mid) {
            tempArray[tempIndex] = inputArray[index1]
            index1++, tempIndex++
        }
        while (index2 <= end) {
            tempArray[tempIndex] = inputArray[index2]
            index2++, tempIndex++
        }
        
        for (let i = 0; i < tempArray.length; i++) {
            inputArray[start + i] = tempArray[i];
        }
        // console.log(tempArray) 
        setsortedResult(`Sorted order = ${inputArray.toString()}`)


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
                <button>sort numbers</button>
            </form>
            {
                sortedResult !== "" ? <p>{sortedResult}</p> : <p>{sortedResult}</p>
            }

        </div>
    )
}