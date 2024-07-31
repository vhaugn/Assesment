import React, { useState } from "react";
import "./Tasks.css";

const Search = ({ tasks, setFilteredTasks }) => {
  const [searchQuery, setQuery] = useState("");

  const handlesearch = (e) => {
    const query = e.target.value.toLowerCase();
    setQuery(query);
    const filtered = tasks.filter(
      (task) =>
        task.description.toLowerCase().includes(query) ||
        task.assignee.toLowerCase().includes(query) ||
        task.status.toLowerCase().includes(query) ||
        task.deadline.includes(query)
    );
    setFilteredTasks(filtered);
  };
  return (
    <div className="search">
      <input type="text" value={searchQuery} onChange={handlesearch} />
    </div>
  );
};

export default Search;
