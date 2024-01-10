// App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
// import Dashboard from "./components/Dashboard";
import Navbar from "./components/navbar";
import Blog from "./components/blog";
import Home from "./pages/home";
import AddBlog from "./components/addBlog";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
        </Routes>
      </Router>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/dashboard" exact element={<Home />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/add" exact element={<AddBlog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
