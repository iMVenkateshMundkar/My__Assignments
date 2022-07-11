import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const FilterSort = () => {
  const [serachParams, setSearchParams] = useSearchParams();
  const urlCategory = serachParams.getAll("category");
  const urlSortBy = serachParams.get("sortBy");
  const [category, setCategory] = useState(urlCategory || []);
  const [sortBy, setSortBy] = useState(urlSortBy || "");

  const handleCheckbox = (e) => {
    const option = e.target.value;
    let newCategory = [...category];
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    if (category || sortBy) {
      const params = {};
      category && (params.category = category);
      sortBy && (params.sortBy = sortBy);
      setSearchParams(params);
    }
  }, [category, setSearchParams, sortBy]);

  //   useEffect(() => {
  //     if (sortBy) {
  //       const params = {
  //         category: serachParams.getAll("category"),
  //         sortBy: sortBy,
  //       };
  //       setSearchParams(params);
  //     }
  //   }, [sortBy, serachParams, setSearchParams, dispatch]);

  return (
    <div>
      <h3>Filter</h3>
      <div>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Novel"
            defaultChecked={category.includes("Novel")}
          />
          <label>Novel</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Science_Fiction"
            defaultChecked={category.includes("Science_Fiction")}
          />
          <label>Science_Fiction</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Motivational"
            defaultChecked={category.includes("Motivational")}
          />
          <label>Motivational</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Thriller"
            defaultChecked={category.includes("Thriller")}
          />
          <label>Thriller</label>
        </div>
      </div>
      <h3>Sort</h3>
      <div onChange={handleSort}>
        <input
          type="radio"
          value="asc"
          name="sortBy"
          defaultChecked={sortBy === "asc"}
        />{" "}
        Ascending
        <input
          type="radio"
          value="desc"
          name="sortBy"
          defaultChecked={sortBy === "desc"}
        />{" "}
        Descending
      </div>
    </div>
  );
};

export default FilterSort;
