import React from 'react';

const validation = (props) => {
    return (
        <div>
            <p>{props.textLength}</p>
            
            {
                props.textLength >= 5 ? 
                <p>Text is long enough</p> :
                <p>Not enough characters</p>
            }
            
        </div>
    )
}

export default validation;