import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import AddPost from "./pages/addPosts.jsx";
import Profile from "./pages/profile.jsx";

function App() {
  return (
    <div className="min-h-screen pb-20">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
