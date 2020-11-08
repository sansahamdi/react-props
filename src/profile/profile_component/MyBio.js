import React from 'react';
import PropTypes from 'prop-types'


function Bio(props){
    return (
        <div>
            <p>{props.bio}</p>
        </div>
    );
}

Bio.defaultProps = {
    bio: "you want to know more about me?"
}

Bio.propTypes = {
    bio: PropTypes.string
}

export default Bio;