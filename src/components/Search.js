import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {
  const [term, setTerm] = useState("swimming");
  const [results, setResults] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    })();
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="content">
          <div className="header">{result.title}</div>
          {result.snippet}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="input">Enter Search Term</label>
          <input
            type="text"
            className="input"
            id="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
}

// useEffect depandencies
// [] - Run at initial render
// [term] - Run at initial render and run after every rerender (change in the arr)
// nothing - run at initial render if data has changed since last render
//   useEffect(() => console.log("i run only once"), []);
//   useEffect(() => console.log("i run at initial and after every rerender"));
//   useEffect(() => console.log("i Run at initial render and run after every rerender (change in the arr)"), [term, term2]); either one
/* 
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
 
const App = () => {
  const [count, setCount] = useState(0);
 
  useEffect(() => {
    console.log('TEST!');
  }, [count]);
 
  const onClick = () => {
    setCount(count + 1);
  };
 
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
};
 
ReactDOM.render(<App />, document.querySelector('#root'));

*/
