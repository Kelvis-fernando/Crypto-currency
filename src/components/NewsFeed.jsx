import axios from "axios";
import { useEffect, useState } from "react";

const NewsFeed = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://crypto-news-live3.p.rapidapi.com/news",
      headers: {
        "x-rapidapi-host": "crypto-news-live3.p.rapidapi.com",
        "x-rapidapi-key": "ad1a634496mshcc6365583085806p15f9bdjsn07f41c943008",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const first15Articles = articles ? articles.splice(0, 7) : [];

  return (
    <div className="news-feed">
      <h2 className="text-center">NewsFeed</h2>
      <div>
        {first15Articles.map((article, index) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg h-50 bg-zinc-100 my-4 text-black" key={index}>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{article.source}</div>
              <p className="text-gray-700 text-base see-more-spacing">{article.title}</p>
              <a target="_blank" href={article.url} rel="noreferrer" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded see-more">
                See More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
