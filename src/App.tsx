import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SlideRoutes from 'react-slide-routes';

import PostList from './components/pages/PostList';
import PostDetail from './components/pages/PostDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="Contents">
          <SlideRoutes duration={500} >
            <Route index path="/" element={<PostList/>} />
            <Route index path="/post/:postId" element={<PostDetail/>} />
          </SlideRoutes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
