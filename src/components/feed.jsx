import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";

export default function PostsFeed() {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // Fetch posts from backend
    const fetchPosts = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/posts");
        const data = await res.json();
        console.log(data.posts);
        setPosts(data.posts);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };
    fetchPosts();
  }, []);

  if (!posts.length) {
    return (
      <div className="text-center mt-20 text-gray-600 text-lg">
        No posts yet.{" "}
        {user ? "Be the first to add one!" : "Sign in to see posts."}
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-4 grid gap-6 grid-cols-1">
      {posts.map((post) => (
        <div
          key={post._id}
          className="bg-white shadow-lg rounded-2xl overflow-hidden"
        >
          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-2">{post.description}</p>
            <Link to={`/profile/${post.User?._id}`}>
              <p className="text-sm text-gray-400">by {post.User?.name}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
