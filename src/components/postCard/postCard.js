import React from "react";
import { Link } from "react-router-dom";


export const PostCard = (props) => {


    return (
        <div id='card' >
            <h3>{props.title}</h3>
            {props.imgsrc.endsWith('jpg') || props.imgsrc.endsWith('gif') || props.imgsrc.endsWith('jpeg') || props.imgsrc.endsWith('png') ? 
                <img src={props.imgsrc} /> : 
                <video poster={`${props.imgsrc}`} autoPlay controls loop muted="muted" >
                    <source src={`${props.imgsrc}`} type="video/mp4" />
                </video>
            }
            <div className="info">
                <h5 className="authorname" >Author: <Link to={`/RedditViewer/user/${props.author}`}> {props.author} </Link> </h5>
                <h4 className="subname"> <Link to={`/RedditViewer/${props.sub}`}>{props.sub}</Link> </h4>
            </div>
            
        </div>
    )
}