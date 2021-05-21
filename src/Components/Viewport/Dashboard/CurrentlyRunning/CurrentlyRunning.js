import React from 'react'
import "./CurrentlyRunning.css"
const CurrentlyRunning = () => {
    return (
        <div className="currentlyRunning">
            <p className="currentlyRunning_name">Currently Running <span className="currentlyRunning_proj_num_span">13 projets</span></p>
            <button>Month</button>
        </div>
    )
}

export default CurrentlyRunning
