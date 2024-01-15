import React from "react";

const SearchBar = ({ value, isLoading, handlerSubmit, onChange }) => {
  return (
    <>
      <form onSubmit={handlerSubmit}>
        <input
          value={value}
          className="form-control"
          placeholder="Search....."
          disabled={isLoading}
          onChange={onChange}
        />
        <input
          type="submit"
          className="btn"
          value="Search"
          disabled={isLoading || !value}
        />
      </form>
    </>
  );
};

export default SearchBar;
