import { useState, useEffect } from 'react';
import axios from 'axios';
import getPosts from "../services/PostApi";
function PostList() {
    const [posts, setPosts] = useState([]);
    /* useEffect(() => {
        console.log('Cargando datos...');
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => setPosts(data));
        }, []); */ // La dependencia vacía asegura que se ejecute solo una vez.

    /* useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => setPosts(response.data))
            .catch((error) => console.error('Error:', error));
    }, []); */

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const data = await getPosts();
                setPosts()
            } catch (error) {
                console.error("Error: ", error)
            }
        }
        fetchPost();
    })
    return (
        <div>
            <h1>Lista de Posts</h1>
            <ul>
                {posts.slice(0, 10).map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default PostList;