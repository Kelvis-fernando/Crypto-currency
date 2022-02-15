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

  console.log(articles);

  const first15Articles = articles?.splice(0, 7);

  return (
    <div className="news-feed">
      <h2>NewsFeed</h2>
      <div>
        {first15Articles.map((article) => (
          <div>
            <h3>{article.title}</h3>
            <p>{article.source}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
