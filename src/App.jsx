import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./app/home/LandingPage";
import Profile from "./app/profile/Profile";
import Sidebar from "./components/Sidebar";
import Blog from "./app/home/Blog";
// import Login from "./pages/login";
// import Navbar from "./components/Navbar";
// import Blog from "./components/blog";
// import Home from "./pages/Home";
import AddBlog from "./app/home/AddBlog";
import EditBlog from "./app/home/EditBlog";
import NewsList from "./app/news/NewsList";
import AddNews from "./app/news/AddNews";

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
          <Route path="news" element={<NewsList />} />
          <Route path="addNews" element={<AddNews />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
