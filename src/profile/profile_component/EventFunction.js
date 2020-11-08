import React from 'react'

function EventFunction(props) {
    return (
        <button style={{width:"100%",height:"30px",marginTop:"10px"}} 
        className="btn-block btn-dark btn-secondary text-white" 
        onClick={e=>props.clickButton(e)}>Click me</button>
    )
}

export default EventFunction
