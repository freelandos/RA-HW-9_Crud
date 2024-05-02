import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import PostsListPage from "./pages/PostsListPage";
import CreatePostPage from "./pages/CreatePostPage";
import ViewPostPage from "./pages/ViewPostPage";
import EditPostPage from "./pages/EditPostPage";
import { IPost } from "./models";
import './App.css'

export default function App() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/posts`);
      setPosts(response.data);
    } catch (error) {
      console.error('Ошибка при загрузке списка постов:', error);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsListPage posts={posts} />} />
        <Route path="/posts/new" element={<CreatePostPage fetchPosts={fetchPosts} />} />
        <Route path="/posts/:id" element={<ViewPostPage posts={posts} fetchPosts={fetchPosts} />} />
        <Route path="/posts/:id/edit" element={<EditPostPage posts={posts} fetchPosts={fetchPosts} />} />
      </Routes>
    </BrowserRouter>
  )
}
