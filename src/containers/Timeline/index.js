import { useState, useEffect } from 'react';
// import AppContext from '../../context/AppContext';
import API from '../../utils/API';
import TimeLineList from '../../components/TimeLineList';
export default function TimeLine() {
    const [posts, setPosts] = useState([]);

    async function getAllPosts () {
        try {
            const data = await API.getPosts();
            setPosts(data.data.posts)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAllPosts();
    }, []);
    return (
        <div>
            <TimeLineList posts={posts}/>
        </div>
    )
}
