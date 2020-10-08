import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
        <h4 className="title">{props.fact.title}</h4>
        <p className="desc">{props.fact.desc}</p>
    </div>
  );
}