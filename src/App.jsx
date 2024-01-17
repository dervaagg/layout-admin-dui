import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/LandingPage";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import Blog from "./components/Blog";
// import Login from "./pages/login";
// import Navbar from "./components/Navbar";
// import Blog from "./components/blog";
// import Home from "./pages/Home";
import AddBlog from "./components/AddBlog";
import EditBlog from "./components/EditBlog";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addBlogs" element={<AddBlog />} />
          <Route path="/edit/:id" element={<EditBlog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
