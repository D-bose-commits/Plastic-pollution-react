import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ArticlesContext = createContext();

export const ArticlesContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "82df98b617c24936bfb9774a3ca5c4fa";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=Polution&apiKey=$apiKey`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ArticlesContext.Provider value={{ data }}>
      {props.children}
    </ArticlesContext.Provider>
  );
};
