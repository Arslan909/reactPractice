import { useParams } from "react-router-dom"
import React from "react";


export default function Detailpage() {
    const titleId = useParams()
    console.log(titleId);


    const [Data, setData] = React.useState([])

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    let body = Data.map(elem => {
        if (elem.id == titleId.id) {
            return (
                <div key={elem.id} className="body-container">
                    <h2>this is the body of the title you checked with id {elem.id}:</h2>
                    <h3>Title: {elem.title}</h3>
                    <p >Detail: {elem.body}</p>
                </div>
                
            )
            
        }
    })

    return (
        <>
            {body}
        </>
    )
}