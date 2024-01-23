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
            return <p key={elem.id}>{elem.body}</p>
            
        }
    })

    return (
        // <h3>this is detail page</h3>
        <>
            {body}
        </>
    )
}