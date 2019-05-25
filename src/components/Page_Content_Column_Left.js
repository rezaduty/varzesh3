import React from "react";

class Page_Content_Column_Left extends React.Component {
  render() {
    return (
      <div className="page-content-column-left">
        <div className="add-gif-left">
          <div>
            {" "}
            <a href="#">
              <img src="imgs/gif1.gif" alt="gif" />
            </a>
          </div>
        </div>
        <div className="add-gif-left">
          <div>
            {" "}
            <a href="#">
              <img src="imgs/gif2.gif" alt="gif" />
            </a>
          </div>
        </div>
        <div className="add-gif-left">
          <div>
            {" "}
            <a href="#">
              <img src="imgs/gif3.gif" alt="gif" />
            </a>
          </div>
        </div>
        <div className="add-gif-left2">
          <div>
            {" "}
            <a href="#">
              <img src="imgs/gif4.gif" alt="gif" />
            </a>
          </div>
        </div>
        <div className="add-gif-left">
          <div>
            {" "}
            <a href="#">
              <img src="imgs/gif5.gif" alt="gif" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Page_Content_Column_Left;
