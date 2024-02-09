import { useParams } from "react-router-dom"
// import { useNavigate } from "react-router-dom"
import React from "react";
import { Link } from "react-router-dom";


export default function Detailpage() {
    const titleId = useParams()
    // const navigate = useNavigate()
    // console.log(titleId);
    // console.log(navigate);


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
                    {/* <button onClick={() => navigate(-1)}>back</button> */}
                    <h2>this is the body of the title you checked with id {elem.id}:</h2>
                    <h3>Title: {elem.title}</h3>
                    <p >Detail: {elem.body}</p>
                    <Link to={`/detail/updatepost/${titleId.id}`}>update article detail</Link>
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