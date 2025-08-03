import React from "react";

const Filter =({ titleFilter, rateFilter, onTitleChange, onRateChange }) => {
    return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search by title"
        value={titleFilter}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        value={rateFilter}
        onChange={(e) => onRateChange(e.target.value)}
        min="0"
        max="10"
      />
    </div>
  );
};

export default Filter;