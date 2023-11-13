import { searchData } from "../../util/icons-data";
import { SearchI } from "../../util/types";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";
import React, { useState } from "react";
export default () => {
  const nav: string[] = ["Projects", "Insert"];
  const [inputData, setInputData] = useState("");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputData(e.target.value);
  };
  return (
    <div className="search__container">
      <div className="search__list">
        {nav?.map((content: string) => {
          return <div key={content}>{content}</div>;
        })}
      </div>
      <div className="search__container_input">
        <TextField
          id="outlined-basic"
          InputProps={{
            style: {
              borderRadius: "30px",
              width: "100%",
            },
          }}
          label={
            <div className="search__input">
              <SearchIcon fontSize="large" />
              <span className="search__placeholder">Search All..</span>
            </div>
          }
          variant="outlined"
          value={inputData}
          onChange={changeHandler}
        />
        <div className="search__content_main">
          {searchData?.filter((item: SearchI) =>
            item.title.toLowerCase().includes(inputData.toLowerCase())
          ).length ? (
            <React.Fragment>
              {searchData
                ?.filter((item: SearchI) =>
                  item.title.toLowerCase().includes(inputData.toLowerCase())
                )
                ?.map((content: SearchI, index: number) => (
                  <div className="search__flex_content" key={index}>
                    <span className="icon">{content.displayIcon}</span>
                    <span className="search__title">{content.title}</span>

                    {content.forward}
                  </div>
                ))}
            </React.Fragment>
          ) : (
            <div className="search__none">No Result Found...</div>
          )}
        </div>
      </div>
    </div>
  );
};
