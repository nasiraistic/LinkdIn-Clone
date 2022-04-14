import React, { useEffect } from "react";
import InfoIcon from "@mui/icons-material/Info";
import "./Widget.css";
import axios from "axios";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useState } from "react";
import { WbIridescentTwoTone } from "@mui/icons-material";
function Widget() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://gnews.io/api/v4/search?q=example&token=" +
          process.env.REACT_APP_API_TOKEN
      )
      .then(function (response) {
        // handle success
        // console.log(response);
        let articles_ = [];
        const data = response.data.articles;
        for (var i = 0; i < data.length; i++) {
          const article = {
            title: data[i].title,
            description: data[i].description,
            url: data[i].url,
            image: data[i].image,
          };
          articles_.push(article);
          console.log(articles_);
        }
        setArticles(articles_);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [articles]);

  const openLink = (link) => {
    window.open(link);
  };
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkdin News</h2>
        <InfoIcon />
      </div>

      <div className="widgets__article">
        {articles?.map((a) => {
          return (
            <div className="widgets__article__all">
              <div className="widgets__article__left">
                <FiberManualRecordIcon />
              </div>
              <div className="widgets__article__right">
                <h4 onClick={openLink(a.url)}>{a.title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Widget;
