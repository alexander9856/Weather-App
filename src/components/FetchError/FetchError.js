import './FetchError.css';
import React from "react";

export const FetchError = () => {
    return (
        <div className='err-wrapper'>
            <p className="err-msg">There was an error fetching the data.</p>
            <button className='err-btn' onClick={() => window.location.reload(true)}>Try again</button>
        </div>
    )
}