import Search from "../../page-components/Search";
import Nav from "../../page-components/Nav";
import Editor from "../../page-components/Editor";
import "./HomePage.css";
import React from "react";
export default () => {
  return (
    <React.Fragment>
      <Nav />
      <div className="homepage__container ">
        <div className="homepage__editor_wrapper">
          <div className="homepage__editor_flex">
            <Editor />
          </div>
        </div>
        <div className="searchpage__wrapper">
          <Search />
        </div>
      </div>
    </React.Fragment>
  );
};
