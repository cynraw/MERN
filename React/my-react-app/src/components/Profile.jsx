import React from 'react';
import './profile.css';

function Profile(props){
    return(
        <div className = "profile-card">
            <h1>{props.firstName} {props.secondName}</h1>
            <p>I am {props.age} years Old</p>
        </div>
    );
}


export default Profile;