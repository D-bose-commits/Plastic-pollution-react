import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "5c080ec3ac27478d812241c854b92985";

  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/everything?q=Pollution&sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
      console.log(data);
  },[]);

  return (
    <NewsContext.Provider value={ data }>
      {props.children}
    </NewsContext.Provider>
  );
};
