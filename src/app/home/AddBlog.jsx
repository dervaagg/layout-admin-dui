import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import React from "react";

const AddBlog = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const saveBlog = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4001/blog", {
      image: image,
      title: title,
      category: category,
      content: content,
    });
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300">
      <form onSubmit={saveBlog} className="my-9">
        <div className="flex flex-col">
          <div className="mb-5">
            <label className="font-bold text-slate-700">Image</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Upload News Headline"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Title</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="News Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Category</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="News Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Content</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="News Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
