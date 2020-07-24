import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Project(props) {
    return (
        <div className="card">
            <div className="img-container">

                <img alt={props.name} src={props.image} />
            </div>

            <div className="content">

                <ul>
                    <li>

                        <strong>Project Name: </strong>
                        <a target="_blank" href={props.url}>{props.name}</a>


                    </li>

                    <li>

                        <strong>Repository: </strong>
                        <a target="_blank" href={props.repo}>{props.repository}</a>


                    </li>
                </ul>
            </div>
        </div >
    );
}

export default Project;
