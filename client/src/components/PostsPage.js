import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Fetch all posts from the server
        setLoading(true);
        axios.get('/api/posts')
            .then(response => {
                setPosts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    const handlePostSubmit = () => {
        // Post a new post to the server
        if (newPost.trim()) {
            setLoading(true);
            axios.post('/api/posts', { content: newPost })
                .then(response => {
                    setPosts([response.data, ...posts]); // Add the new post at the top
                    setNewPost(''); // Clear the text area
                    setLoading(false);
                })
                .catch(error => {
                    console.error(error);
                    setLoading(false);
                });
        }
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>Community Posts</h1>
            </header>

            {/* New Post Creation */}
            <section style={styles.newPostSection}>
                <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="What's on your mind? Share your thoughts here..."
                    style={styles.textarea}
                    rows="6"
                />
                <button
                    onClick={handlePostSubmit}
                    style={styles.button}
                >
                    {loading ? 'Posting...' : 'Post'}
                </button>
            </section>

            {/* Posts List */}
            <section style={styles.postsList}>
                {loading && <div style={styles.loadingSpinner}>Loading...</div>}
                {posts.map((post, index) => (
                    <div key={index} style={styles.postCard}>
                        <p style={styles.postContent}>{post.content}</p>
                        <p style={styles.postDate}>Posted on {new Date(post.createdAt).toLocaleDateString()}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}

// Inline styles for the component
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    header: {
        width: '100%',
        maxWidth: '800px',
        textAlign: 'center',
        marginBottom: '20px',
    },
    title: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#333',
    },
    newPostSection: {
        width: '100%',
        maxWidth: '800px',
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        marginBottom: '20px',
    },
    textarea: {
        width: '100%',
        padding: '12px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        fontSize: '1rem',
        resize: 'none',
        marginBottom: '10px',
    },
    button: {
        width: '100%',
        backgroundColor: '#8a8f7c',
        color: 'white',
        padding: '12px',
        border: 'none',
        borderRadius: '8px',
        fontSize: '1.2rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    buttonHover: {
        backgroundColor: '#7a7f6e',
    },
    postsList: {
        width: '100%',
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    postCard: {
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '15px',
    },
    postContent: {
        fontSize: '1rem',
        color: '#333',
    },
    postDate: {
        fontSize: '0.875rem',
        color: '#888',
        marginTop: '5px',
    },
    loadingSpinner: {
        fontSize: '1.5rem',
        color: '#8a8f7c',
        textAlign: 'center',
        margin: '20px 0',
    },
};

export default PostsPage;
