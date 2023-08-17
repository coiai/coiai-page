import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from '@emotion/styled';

interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
}

const PostDetail: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    axios.get(`https://coiai.net/wp-json/wp/v2/posts/${postId}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <SArticle>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </SArticle>
  );
};

const SArticle = styled.article`
  padding: 0 16px;
  max-width: 760px;
  margin: auto;

  .wp-block-code {
    padding: 24px 24px;
    color: white;
    background-color: #2e2e2e;
  }

  figure {
    width: 100%;
    margin: 0;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }

    // youtubeサムネイル用調整
    iframe {
      width: 100%;
      height: auto;
      aspect-ratio: 16/9;
    }
  }
`

export default PostDetail;
