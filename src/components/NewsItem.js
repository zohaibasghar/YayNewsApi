import React from "react";
import "./NewsItem.css";
export default function NewsItem(props) {
  return (
    <div>
      <div className="card my-2" style={{ width: "18rem" }}>
          <span className="position-absolute top-0 badge pill text-bg-light">
            {props.newSrc}
          </span>
        <img src={props.source} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">
            <small className="badge text-muted">
              by {props.author ? props.author : "Anonymous"} on{" "}
              {props.publish.slice(0, 16).replace("T", " ")}
            </small>
          </p>
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
