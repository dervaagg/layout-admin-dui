import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddNews = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [source, setSource] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const createNews = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("content", content);
    formData.append("source", source);
    formData.append("date", date);
    formData.append("image", file);
    try {
         await axios.post("http://localhost:4001/news", formData,{
            headers: {
                "Content-Type": "multipart/form-data",
            },
         });
         navigate("/news");
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form onSubmit={createNews}>
          <div className="field">
            <label className="label">
              Title
              <div className="control">
                <input
                  className="input"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="News Title"
                />
              </div>
            </label>
          </div>
          <div className="field">
            <label className="label">
              Image
              <div className="control">
                <div className="file">
                  <label className="file-label">
                    <input
                      type="file"
                      className="file-input"
                      onChange={loadImage}
                    />
                    <span className="file-cta">
                      <span className="file-label">choose a file…</span>
                    </span>
                  </label>
                </div>
              </div>
            </label>
          </div>
          {preview ? (
            <figure className="image is-128x128">
              <img src={preview} alt="Preview Image" />
            </figure>
          ) : (
            ""
          )}
          <div className="field">
            <label className="label">
              Category
              <div className="control">
                <input
                  className="input"
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="News Category"
                />
              </div>
            </label>
          </div>
          <div className="field">
            <label className="label">
              Content
              <div className="control">
                <input
                  className="input"
                  type="text"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="News Content"
                />
              </div>
            </label>
          </div>
          <div className="field">
            <label className="label">
              Source
              <div className="control">
                <input
                  className="input"
                  type="text"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  placeholder="News Source"
                />
              </div>
            </label>
          </div>
          <div className="field">
            <label className="label">
              Date of Issue
              <div className="control">
                <input
                  className="input"
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="News Date of Issue"
                />
              </div>
            </label>
          </div>
          <div className="field">
            <div className="control">
                <button type="submit" className="button is-success">
                    Submit
                </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNews;
