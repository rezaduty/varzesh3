import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="scroll-top">
          <a href="#">
            <img
              src="imgs/arrow-up.png"
              alt="top-scroll"
              width={39}
              height={39}
            />
          </a>
        </div>
        <div className="page-footer">
          <div className="foot-box1">
            <ul>
              <li>
                <a href="#"> جداول لیگ ها</a>
              </li>
              <li>
                <a href="#"> نتایج زنده</a>
              </li>
              <li>
                <a href="#"> ارتباط با ما</a>
              </li>
              <li>
                <a href="#"> قوانین و مقررات</a>
              </li>
            </ul>
          </div>
          <div className="foot-box1">
            <ul>
              <li>
                <a href="#"> ابزار توسعه دهندگان</a>
              </li>
              <li>
                <a href="#">همکاری با ما</a>
              </li>
              <li>
                <a href="#"> درباره ما</a>
              </li>
              <li>
                <a href="#">کارت شارژ</a>
              </li>
            </ul>
          </div>
          <div className="foot-box1" />
          <div className="foot-box1">
            <div>
              <img src="imgs/varzesh3-grayscale.png" alt="logo" />{" "}
            </div>
            <div className="line" />
            <div className="icon">
              <a href="#">
                <img src="imgs/facebook.png" alt="facebook" />
              </a>
              <a href="#">
                <img src="imgs/instagram.png" alt="facebook" />
              </a>
              <a href="#">
                <img src="imgs/twitter.png" alt="facebook" />
              </a>
              <a href="#">
                <img src="imgs/rss.png" alt="facebook" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className=" color-bar color-bar--item-red" />
          <div className=" color-bar color-bar--item-gray" />
          <div className=" color-bar color-bar--item-blue" />
          <div className=" color-bar color-bar--item-green" />
          <div className=" color-bar color-bar--item-yellow" />
        </div>
        <div className="text">
          تمام حقوق مادی و معنوی این سایت متعلق به ورزش سه میباشد. شما می توانید
          از سایت ورزش سه استفاده نمایید.
        </div>
      </div>
    );
  }
}

export default Footer;
