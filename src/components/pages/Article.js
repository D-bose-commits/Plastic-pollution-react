import React, { useContext } from "react";
import { ArticlesContext } from "../ArticlesContext";
import PolutionArticle from "./PolutionArticle";

function Article(props) {
  const { data } = useContext(ArticlesContext);
  console.log(data);

  return (
    <div>
      <h1 className="head__text">News App</h1>
      <div className="all__news">
        {data
          ? data.article.map((articles) => (
              <PolutionArticle data={articles} key={articles.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}
export default Article;
