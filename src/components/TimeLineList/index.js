import React from 'react'
import TimeLinePost from '../TimeLinePost'

export default function TimeLineList({ posts }) {
    console.log(posts);
    const postList = posts.map(post => <TimeLinePost key={post._id} post={post}/>)
    return (
        <div>
            {postList}
        </div>
    )
}
