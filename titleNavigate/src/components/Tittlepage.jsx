// import React from 'react'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';


export default function Tittlepage(props) {

    const { titleData, setData } = props;

    let titles = titleData.map(ele => (
        <div key={ele.id}>
            <Link to={`/detail/${ele.id}`}>
                <h2>{ele.title}</h2>
            </Link>
            <button onClick={() => deleteFun(ele.id)}>delete title</button>

        </div>
    ))

    function deleteFun(titleId){
        let updateData = [...titleData]
        for(let i = 0; i<updateData.length; i++){
            if(updateData[i].id == titleId){
                updateData.splice(i, 1)
                break
            }
        }
        setData(updateData)
    }



    return (
        <>
            {titles}
        </>
    )
}


Tittlepage.propTypes = {
    titleData: PropTypes.array.isRequired,
    setData: PropTypes.func.isRequired,
};