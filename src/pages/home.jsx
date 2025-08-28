import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, logoutUser } from "../utils/auth";
import Navbar from "../components/navbar";
import BottomNav from "../components/bottomNav";
import PostsFeed from "../components/feed";

export default function Home() {
  const navigate = useNavigate();
  const user = getUser();

  useEffect(() => {
    const checkUser = async () => {
      const user = await getUser();
      if (!user) navigate("/signin");
    };
    checkUser();
  }, [navigate]);

  return (
    <div className="min-h-screen">
      <header>
        <Navbar />
      </header>
      <PostsFeed />
      <BottomNav />
    </div>
  );
}
