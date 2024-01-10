// import axios from "axios";
// import { useNavigate } from "react-router-dom";

const addBlog = () => {
  // const [image, setImage] = React.useState("");
  // const [title, setTitle] = React.useState("");
  // const [category, setCategory] = React.useState("");
  // const [content, setContent] = React.useState("");

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300">
      <form className="my-10">
        <div className="flex fled-col">
          <div className="mb-5">
            <label className="font-bold text-slate-700">Blog Name</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Blog Name"
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Blog Name</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Blog Name"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default addBlog;
