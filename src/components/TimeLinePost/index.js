import React from 'react'
export default function TimeLinePost({ post }) {
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <div>
            <p dangerouslySetInnerHTML={{
                __html: post.postText
            }}>
            </p>
            <p><small>{post.createdAt}</small></p>
        </div>
    )
}
