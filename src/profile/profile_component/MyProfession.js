import React from 'react';
import PropTypes from 'prop-types'


function Profession(props){
    return (
        <div>
            <h2>{props.profession}</h2>
        </div>
    )
}


Profession.defaultProps = {
    profession: "you must have a job!!!"
}

Profession.propTypes = {
    profession: PropTypes.string.isRequired
}

export default Profession;