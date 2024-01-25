import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// import Profile from "./pages/profile/Profile";
import Sidebar from "./components/Sidebar";
import Blog from "./widgets/Blog";
// import Login from "./pages/login";
// import Navbar from "./components/Navbar";
// import Blog from "./components/blog";
// import Home from "./pages/Home";
import AddBlog from "./widgets/AddBlog";
import EditBlog from "./widgets/EditBlog";
import NewsList from "./pages/home/NewsList";
import AddNews from "./pages/home/AddNews";

const App = () => {
  return (
    <BrowserRouter>
      <main className="app">
        <Sidebar />

        <section className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/blogs" element={<Blog />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/addBlogs" element={<AddBlog />} />
            <Route path="/edit/:id" element={<EditBlog />} />
            <Route path="/news" element={<NewsList />} />
            <Route path="/addNews" element={<AddNews />} />
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
