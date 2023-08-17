import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

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
      <h1>Posts</h1>
        <SCardContainer>
        {posts.map((post, index) => (
        <SCard>
          {/* 詳細ページへのリンク */}
          <Link to={`/post/${post.id}`}>
            <img src={mediaUrls[index]} alt="" />
            <SCardContent>
              <SCardTitle>{post.title.rendered}</SCardTitle>
            </SCardContent>
          </Link>
        </SCard>
        ))}
        </SCardContainer>
    </div>
  );
};


const SCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const SCard = styled.div`
  border: 1px solid #d2d2d7;
  border-top: none;
  border-right: none;
  img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }
  a {
    text-decoration: none;
  }
`

const SCardContent = styled.div`
  padding: 0 14px
`

const SCardTitle = styled.p`
  color: #1e1e1f;
`

export default PostList;
