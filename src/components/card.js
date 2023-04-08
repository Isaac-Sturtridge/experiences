import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img src={require(`../images/${props.img}`)} className="card--image"/>
            <div className="card--stats">
                <img src={require("../images/star.png")} className="card--star"/>
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) .</span>
                <span className="grey">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> per person</p>
        </div>
    )
}