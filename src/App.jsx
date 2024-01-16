import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./pages/login";
import Navbar from "./components/navbar";
// import Blog from "./components/blog";
import Home from "./pages/home";
import AddBlog from "./components/addBlog";
import EditBlog from "./components/EditBlog";

function App() {
  return (
    <>
      <Router>
        {/* <Routes>
          <Route path="/" exact element={<Login />} />
        </Routes> */}
      </Router>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/addBlogs" exact element={<AddBlog />} />
          <Route path="/edit/:id" exact element={<EditBlog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
