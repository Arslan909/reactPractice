import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import bodyImg from "/bodyImg.png"
import Warning from "./Warning";



export default function Body() {
    const [warningState, setWarningState] = useState(null)


    const [start,setStart] = React.useState(0)
    const  limit = 10

    const [titleData, setData] = React.useState(null);
    async function fetchData() {
        let reqObj = {
            url: `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`,
            method: "GET"
        }
        const result = await axios(reqObj)
        setData(result.data)
    }

    React.useEffect(() => {
        fetchData()

    }, [start])

    let titles
    if (titleData !== null) {
        titles = titleData.map(ele => (
            <div key={ele.id}>
                {/* <button className="article-deleteBtn" onClick={() => deleteFun(ele.id)}> X </button> */}
                <button className="article-deleteBtn" onClick={() => deleteWarning(ele.id)}> X </button>

                {warningState == ele.id ? <Warning setWarningState={setWarningState} titleId={ele.id} setData={setData} titleData={titleData} /> : <div></div>}

                <Link to={`/detail/${ele.id}`} className="title-link">
                    <h2 className="artcle-title">{ele.title}</h2>

                </Link>
                <p className="article-detail">{ele.body}</p>

            </div>
        ))

    } else {
        titles = <h2>Loading...</h2>
    }


    // function deleteFun(titleId) {

    //     let updateData = [...titleData]
    //     for (let i = 0; i < updateData.length; i++) {
    //         if (updateData[i].id == titleId) {
    //             updateData.splice(i, 1)
    //             break
    //         }
    //     }
    //     setData(updateData)
    // }

    function deleteWarning(titleId) {
        setWarningState(titleId)
    }




    return (
        <>
        <div className="body-top">
                <div className="text-side">
                    <h1 id="h1-part1">Articles for </h1>
                    <h1 id="h1-part2">front-end devs</h1>
                    <h3 id="h3-top">Articles on web performance, reponsive,<br></br> web design and more</h3>
                </div>
                <img src={bodyImg} alt="copule with laptop" className="body-img" />
            </div>


            <div className="body-bottom">

                {titles}
                <button onClick={()=>{setStart(pre => pre-10)}}>previous</button>
                <span>{start} to {start+ limit}</span>
                <button onClick={()=>{setStart(pre => pre+10)}}>next</button>
            </div>
        </>
    )
}