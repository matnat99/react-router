import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";

const initialData = {
  title: "",
  content: "",
  image: "",
  tags: "",
};

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState(initialData);

  const fetchPosts = () => {
    axios.get("http://localhost:3000/posts").then((res) => setPosts(res.data));
  };

  useEffect(fetchPosts, []);

  const handleFormField = (fieldName, value) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formattedTags = formData.tags.split(",").map((tag) => tag.trim());

    const postData = { ...formData, tags: formattedTags };

    axios.post("http://localhost:3000/posts", postData).then((res) => {
      setPosts((currentPosts) => [...currentPosts, res.data]);
      setFormData(initialData);
    });
  };

  const handleDeletePost = (postId) => {
    axios.delete(`http://localhost:3000/posts/${postId}`).then(() => {
      setPosts((currentPost) =>
        currentPost.filter((post) => post.id !== postId)
      );
    });
  };

  return (
    <main>
      <section className="container">
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <PostCard post={post} handleDeletePost={handleDeletePost} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
