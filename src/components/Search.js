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

