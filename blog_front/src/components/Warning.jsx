import PropTypes from 'prop-types';

export default function Warning(props){

    function deleteWarning(){
        props.setWarningState(null)
    }

    function deleteFun(titleId) {

        let updateData = [...props.titleData]
        for (let i = 0; i < updateData.length; i++) {
            if (updateData[i].id == titleId) {
                updateData.splice(i, 1)
                break
            }
        }
        props.setData(updateData)
    }

    return(
        <>
        <div className='warning-container'>
            <h3>This post will be deleted</h3>
            <button onClick={() => deleteFun(props.titleId)}>oK</button>
            <button onClick={deleteWarning}>cancel</button>

        </div>
        
        </>
    )
}

Warning.propTypes = {
    setWarningState: PropTypes.function,
    setData: PropTypes.function,
    titleId: PropTypes.string,
    titleData: PropTypes.array
};