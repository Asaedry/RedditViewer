import React from "react";


export const PostCard = (props) => {


    return (
        <div id='card' >
            <h3>{props.title}</h3>
            {props.imgsrc.endsWith('jpg') || props.imgsrc.endsWith('gif') || props.imgsrc.endsWith('jpeg') || props.imgsrc.endsWith('png') ? 
                <img src={props.imgsrc} /> : 
                <video poster={`${props.imgsrc}`} autoPlay muted="muted" loop="loop" >
                    <source src={`${props.imgsrc}`} type="video/mp4" />
                </video>
            }
            <h5>Author: <a href={`www.reddit.com/user/${props.author}`} >{props.author}</a></h5>
        </div>
    )
}