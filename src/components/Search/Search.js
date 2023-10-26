import React from "react";
import styles from "./Search.module.scss";
const Search = ({ setSearch, setPageNum }) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input
        onChange={(e) => {
          setPageNum(1);
          setSearch(e.target.value);
        }}
        type="text"
        className={styles.input}
        placeholder="Search"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className={`${styles.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
