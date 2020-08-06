import React from "react";
import "./App.css";
import Lex from "./components/Lex";
import Chatbot from "./components/Chatbot";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
       <Chatbot />
      </header>
      <div>
        <h1>chatbot:</h1>
      </div>
    </div>
  );
};

export default App;
