import React from 'react';
import PropTypes from 'prop-types';


function FullName(props){
    return (
        <div className="navbar bg-dark rounded text-white">
            <h1>{props.name}</h1>
        </div>
    );
}

FullName.defaultProps = {
    name: "the full name please!!"
}

FullName.propTypes = {
    name: PropTypes.string.isRequired
}

export default FullName;