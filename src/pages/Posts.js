// src/pages/Posts.js
import React, { useEffect, useState } from 'react';
import '../styles/Posts.css'; // Importing CSS

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching posts from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <span>Loading posts...</span>
      </div>
    );
  }

  return (
    <div className="posts-container">
      <h2 className="page-title">All Posts</h2>
      <div className="posts-list">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-body">{post.body.substring(0, 100)}...</p>
            <a href={`/posts/${post.id}`} className="read-more">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
