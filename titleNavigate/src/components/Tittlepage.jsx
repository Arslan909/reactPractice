import React from 'react'
import { Link } from "react-router-dom"


export default function Tittlepage() {

    const [Data, setData] = React.useState([])

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    let titles = Data.map(ele => (
        <div  key={ele.id}>
            <Link to={`/detail/${ele.id}`}>
                <h2>{ele.title}</h2>
            </Link>

        </div>
    ))
    return (
        <>
            {titles}
        </>
    )
}