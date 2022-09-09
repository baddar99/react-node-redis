import React from "react";

function InputSearch() {
  const [userName, setUserName] = React.useState("");

  const updateUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
    console.log(userName);
  };

  return (
    <>
      <div className="input-group search-input mt-3">
        <input
          type="text"
          className="form-control py-2 border-right-0 border"
          placeholder="Enter Github Username"
          onChange={updateUserName}
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
