import React from 'react';
import '../style/Profile.css';

function ProfileComponents(props) {
    return (
        <div className="ProfileComponents">
            <div className="innerElements">
                <img src={props.src} alt={props.title} className="profileImageComponents"/>
                <div className="innerElementsText">
                    <h3 className="innerElementsTitle">{props.title}</h3>
                    <p className="innerElementsDesc">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponents
