import React from "react"

// Need to dynamically import images.

export default function Card(props) {
    return (
        <div className="card">
            <img src={`./image/${props.item.image}.jpeg`} className="image"/>
            <div className="card--info">
                <div>
                    <span className="card--location">📍{props.item.location}</span>
                    <span className="card--city" >{props.item.city}</span>
                </div>
                <p className="card--event">{props.item.title}</p>
                <p className="card--date">{props.item.startDate}</p>
            </div>
        </div>
    )
}