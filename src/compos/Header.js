import React, { Fragment } from "react";
import "./header.css";
import Card from "./Card";

//destructure props
const Header = ({ searchMovie, query, setQuery, movies }) => {
  return (
    <Fragment>
      <div className="header">
        <h1 className="title">MehdisMv</h1>

        <div className="search">
          <form className="search-form" onSubmit={searchMovie}>
            <label htmlFor="query" className="name"></label>
            <input
              type="text"
              name="query"
              placeholder="Peaky Binders"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
      <div className="list-movie">
        <Card movies={movies} />
      </div>
    </Fragment>
  );
};

export default Header;
