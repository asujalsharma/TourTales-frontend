import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams(); // user _id from URL
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        // fetch user info
        const userRes = await fetch(`${process.env.REACT_APP_API_URL}/${id}`);
        const userData = await userRes.json();
        console.log(userData);

        // fetch user posts
        const postsRes = await fetch(
          `${process.env.REACT_APP_API_URL}/user/${id}`
        );
        const postsData = await postsRes.json();
        console.log(postsData);

        setUser(userData);
        setPosts(postsData);
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-20 text-lg text-gray-600">Loading...</div>
    );
  }

  if (!user) {
    return (
      <div className="text-center mt-20 text-lg text-red-500">
        User not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* User Info */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-8 text-center">
        <h1 className="text-3xl font-bold text-green-600">{user.name}</h1>
        <p className="text-gray-600">{user.email}</p>
      </div>

      {/* Posts */}
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        {user.name}'s Posts
      </h2>

      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts yet.</p>
      ) : (
        <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white shadow-md rounded-2xl overflow-hidden"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-600">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
