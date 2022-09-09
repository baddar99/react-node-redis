import React from "react";

function InputSearch() {
  const [userName, setUserName] = React.useState("");

  return (
    <>
      <div className="input-group search-input mt-3">
        <input
          type="text"
          className="form-control py-2 border-right-0 border"
          placeholder="Enter Github Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <span className="input-group-append">
          <div className="input-group-text bg-transparent">
            <i className="fa fa-search"></i>
          </div>
        </span>
      </div>
    </>
  );
}

export default InputSearch;
