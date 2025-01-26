import React, { useState } from 'react';
function PostForm() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, body }),
        })
            .then((response) => response.json())
            .then((data) => console.log('Post creado:', data))
            .catch((error) => console.error('Error:', error));
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Crear un nuevo post</h2>
            <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Contenido"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
            ></textarea>
            <button type="submit">Publicar</button>
        </form>
    );
}
export default PostForm;