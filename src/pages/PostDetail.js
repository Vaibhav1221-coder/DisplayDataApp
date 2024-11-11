// src/pages/PostDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PostDetail() {
  const { postID } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.error(error));
  }, [postID]);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {post ? (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <p className="mt-4 text-gray-700">{post.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PostDetail;
