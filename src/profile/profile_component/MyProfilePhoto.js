import React from 'react';
import photo from '../../quentin.jpg'
import EventFunction from './EventFunction'
import PropTypes from 'prop-types'


function Picture(props){
    function handleClick (e){
        e.preventDefault();
        alert(`Im ${props.name}, and im looking for Bill`)
    }
    return (
        <div>
            <img src={photo} alt={props.name} />
            <EventFunction clickButton={handleClick}/>
        </div>
    );
}

Picture.defaultProps = {
    name: "movie star"
}

Picture.propTypes = {
    name: PropTypes.string
}

export default Picture;