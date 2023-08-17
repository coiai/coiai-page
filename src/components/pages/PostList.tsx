import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Post {
  id: number;
  title: { rendered: string };
  featured_media: number;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [mediaUrls, setMediaUrls] = useState<string[]>([]);

  useEffect(() => {
    axios.get('https://coiai.net/wp-json/wp/v2/posts')
      .then(response => {
        setPosts(response.data);
        const mediaRequests = response.data.map((post: Post) => 
          axios.get(`https://coiai.net/wp-json/wp/v2/media/${post.featured_media}`)
        );
        return Promise.all(mediaRequests);
      })
      .then(mediaResponses => {
        const mediaUrls = mediaResponses.map(response => response.data.guid.rendered);
        setMediaUrls(mediaUrls);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>WordPress Post List</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={post.id}>
            {/* 詳細ページへのリンク */}
            <Link to={`/post/${post.id}`}>
              <img src={mediaUrls[index]} alt="" style={{ maxWidth: '100px', maxHeight: '100px' }} />
              {post.title.rendered}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
