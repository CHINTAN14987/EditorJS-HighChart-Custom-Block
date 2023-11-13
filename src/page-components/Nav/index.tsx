import { navData } from "../../util/icons-data";
import { SearchI } from "../../util/types";
import "./Nav.css";
export default () => {
  return (
    <div className="nav__main">
      <h3> Resourcifi Inc.</h3>
      <div className="nav__icons_wrapper">
        {navData?.map((content: Omit<SearchI, "forward">) => {
          return (
            <div className="nav__icons_content">
              {content?.title}
              {content?.displayIcon}
            </div>
          );
        })}
      </div>
    </div>
  );
};
