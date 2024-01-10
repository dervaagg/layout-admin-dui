import { Link } from "react-router-dom";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";

const Blog = () => {
  const { mutate } = useSWRConfig();
  const fetcher = async () => {
    const response = await axios.get("http://localhost:4001/blogs");
    return response.data;
  };

  const { data } = useSWR("blogs", fetcher);
  if (!data) {
    return <h2>Loading...</h2>;
  }

  const deleteBlog = async (blogId) => {
    await axios.delete(`http://localhost:4001/blog/${blogId}`);
    mutate("blogs");
  };

  return (
    <div className="flex flex-col mt-5">
      <div className="w-full">
        <Link
          to={`/addBlogs`}
          className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg"
        >
          Add Blog
        </Link>
        <div className="relative shadow rounded-lg mt-3">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="py-3 px-1 text-center">No</th>
                <th className="py-3 px-6">Image</th>
                <th className="py-3 px-6">Title</th>
                <th className="py-3 px-6">Category</th>
                <th className="py-3 px-6">Content</th>
                <th className="py-3 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((blog, index) => (
                <tr className="bg-white border-b" key={blog.id}>
                  <td className="py-3 px-1 text-center">{index + 1}</td>
                  <td className="py-3 px-6">{blog.image}</td>
                  <td className="py-3 px-6 font-medium text-gray-900">
                    {blog.title}
                  </td>
                  <td className="py-3 px-6">{blog.category}</td>
                  <td className="py-3 px-6">{blog.content}</td>
                  <td className="py-3 px-6 text-center">
                    <Link
                      to={`/edit/${blog.id}`}
                      className="font-medium bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded text-white mr-1"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteBlog(blog.id)}
                      className="font-medium bg-red-400 hover:bg-red-500 px-3 py-1 rounded text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Blog;
