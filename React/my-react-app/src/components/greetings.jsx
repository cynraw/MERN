import React from 'react';

function Greetings(props) {
    return(
        <div>
            <h1>Hello, {props.name}!</h1>
            <p>Welcome to a deep dive session with Ronoh</p>
        </div>
    );
}

export default Greetings;