import React from "react";
import "./NewsItem.css";
export default function NewsItem(props) {
  return (
    <div>
      <div className="card my-2" style={{ width: "18rem" }}>
        <img src={props.source} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-truncate">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a
            href={props.read}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
