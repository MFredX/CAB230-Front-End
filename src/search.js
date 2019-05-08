import React from 'react';
import { useState } from "react";
import './styles.css';
import { useNewsArticles } from "./searchapi";





function Headline(props){
    return( 
        <h1>{props.title}</h1>
    )
}

function SearchBar(props) {
    const [innerSearch, setInnerSearch] = useState("");
    return (
      <div>
        <label htmlFor="offence">Enter Offence to Search:</label>
        <input
          aria-labelledby="search-button"
          name="search"
          id="search"
          type="search"
          value={innerSearch}
          onChange={e => setInnerSearch(e.target.value)}
        />
        
        <button
          id="search-button"
          type="button"
          onClick={() => props.onSubmit(innerSearch)}
        >
        Search
        </button>
      </div>
    );
  }

export function SearchApp(){
    const [search, setSearch] = useState("");
//    const { loading, headlines, error } = useNewsArticles(search);
    const { loading, headlines, error } = useNewsArticles(search);

    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>Something went wrong: {error.message}</p>;
    }
    return (
      <div className="App">
        <SearchBar onSubmit={setSearch} />
        {/* {headlines.map(headline => (
          // `headline` is now an object
          <Headline key={headline.url} title={headline.title} />
        ))} */}
        <Headline title={headlines}/>
      </div>
    );
}