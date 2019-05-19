import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header id="headerhiden">
        <nav className=" page-header--tiny-bar ">
          <div className=" container ">
            <ul className="tiny--bar">
              <li>
                <a href="#">تیم فانتزی</a>
              </li>
              <li>
                <a href="#">ویدیو </a>
              </li>
              <li>
                <a href="#">اخبار زنده</a>
              </li>
              <li>
                <a href="#">ارتباط با ما</a>
              </li>
              <li>
                <a href="#">کارت شارژ</a>
              </li>
            </ul>
            <div className="tiny--bar-left">
              <div className="left-text">
                <a href="#">
                  ورود{" "}
                  <i
                    style={{
                      fontSize: "14px"
                    }}
                    className="fas"
                  >
                    
                  </i>
                </a>
              </div>
              <div className="date">
                <i
                  style={{
                    fontSize: "14px"
                  }}
                  className="far"
                >
                  
                </i>
                تاریخ
              </div>
              <div className="time">
                <i
                  style={{
                    fontSize: "14px"
                  }}
                  className="far"
                >
                  ساعت
                </i>
              </div>
            </div>
            <div className="header-logo-right">
              <a href="#">
                <img
                  border={0}
                  src="imgs/varzesh3-logo.png"
                  width={141}
                  height={66}
                  alt="\u0644\u0648\u06AF\u0648 \u0648\u0631\u0632\u0634 \u0633\u0647"
                />
              </a>
            </div>
            <div className="header-logo-left">
              <a href="#" target="_blank" rel="nofollow noopener">
                <img width={468} height={60} alt src="imgs/00910312.gif" />{" "}
              </a>
            </div>
          </div>
        </nav>
        <div className="page-header--middle-row">
          <div>
            <div className="color-bar--item-red" />
            <div className="color-bar--item-yellow" />
            <div className="color-bar--item-blue" />
            <div className="color-bar--item-green" />
            <div className="color-bar--item-gray" />
          </div>
          <nav>
            <div className="container">
              <nav className="page-header--main-menu">
                <ul>
                  <li>
                    <a href="#">صفحه اصلی</a>
                  </li>
                  <li>
                    <a href="#">جداول لیگ ها </a>
                  </li>
                  <li>
                    <a href="#">روزنامه</a>
                  </li>
                  <li>
                    <a href="#">ویدئو</a>
                  </li>
                  <li>
                    <a
                      style={{
                        color: "red"
                      }}
                      href="#"
                    >
                      جام حذفی
                    </a>
                  </li>
                  <li>
                    <a href="#">تصاویر بازیکنان</a>
                  </li>
                  <li>
                    <a href="#">پخش زنده</a>
                  </li>
                  <li>
                    <a href="#">
                      نتایج زنده <span className="liveblink" />
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="page-search-pull-left">
                <input
                  className="page-search"
                  type="text"
                  name="searchkey"
                  placeholder="\u062C\u0633\u062A\u062C\u0648\u06CC \u0627\u062E\u0628\u0627\u0631\u060C \u062A\u06CC\u0645 \u0647\u0627\u060C \u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646 \u0648 \u0648\u06CC\u062F\u06CC\u0648\u0647\u0627\u06CC \u0648\u0631\u0632\u0634\u06CC..."
                  id="searchKey"
                />
                <button className="button">
                  {" "}
                  <i
                    style={{
                      fontSize: "14px"
                    }}
                    className="fa"
                  >
                    
                  </i>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
