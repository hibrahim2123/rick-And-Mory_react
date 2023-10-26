import React from "react";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";

const Filter = ({ pageNum, setPageNum, setStatus, setGender, setSpecies }) => {
  let clear = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    setPageNum(1);
    window.location.reload(false);
  };
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-primary text-center mb-3 "
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status setPageNum={setPageNum} setStatus={setStatus} />
        <Species setPageNum={setPageNum} setSpecies={setSpecies} />
        <Gender setPageNum={setPageNum} setGender={setGender} />
      </div>
    </div>
  );
};

export default Filter;
