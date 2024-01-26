import { useState, useEffect } from "react";
import axios from "axios";
import 'bulma/css/bulma.min.css';

const NewsList = () => {
  const [newses, setNewses] = useState([]);

  useEffect(() => {
    getNewses();
  }, []);

  const getNewses = async () => {
    const response = await axios.get("http://localhost:4001/newses");
    setNewses(response.data);
  };

    const deleteNews = async (newsId) => {
        try {
            await axios.delete(`http://localhost:4001/news/${newsId}`);
            getNewses();
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="container mt-5">
      <div className="flex flex-nowrap">
        {newses.map((news) => (
          <div className="column" key={news.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={news.url} alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{news.title}</p>
                    <p className="subtitle is-6">{news.category}</p>
                    <p className="subtitle is-6">{news.content}</p>
                  </div>
                </div>
              </div>
              <footer className="card-footer">
                <a className="card-footer-item">Edit</a>
                <a
                  onClick={() => deleteNews(news.id)}
                  className="card-footer-item"
                >
                  Delete
                </a>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
