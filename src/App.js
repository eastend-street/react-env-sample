import React from "react";

const App = () => {
  const apiKey = process.env.REACT_APP_SOME_API_KEY
  return <h1>{apiKey}</h1>;
};

export default App;
