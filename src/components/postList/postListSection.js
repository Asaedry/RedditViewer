import React from "react";
import { PostCard } from "../postCard/postCard";


export const PostListSection = (props) => {

    const postList = React.createElement('div', {className: props.id}, 
        props.section.map(post =>
            <PostCard 
                key={post.id}
                id={post.id}
                title={post.title}
                imgsrc={post.url}
                author={post.author}
            />
        ))


    return (
        postList
    )

}