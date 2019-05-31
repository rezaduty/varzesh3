import React from "react";

class Content_Column_Left extends React.Component {
  render() {
    return (
      

 <div>
        <div className="ad-container row-fluid" data-adposition={7}>
          <div data-extension="gif" className="ad">
            <a
              href="http://irancell.ir/Portal/Home/?188479/&utm_source=banner&utm_medium=varzesh3&utm_term=varzesh3&utm_campaign=MNP"
              target="_blank"
            >
              <img
                width={257}
                alt
                src="http://static1.varzesh3.com/files/ads/00905909.gif"
              />
            </a>
          </div>
          <div data-extension="gif" className="ad">
            <a href="http://780.ir/" target="_blank">
              <img
                width={257}
                alt
                src="http://static1.varzesh3.com/files/ads/00906064.gif"
              />
            </a>
          </div>
          <div data-extension="gif" className="ad">
            <a href="http://ghasreshirin.com" target="_blank">
              <img
                width={257}
                alt
                src="http://static1.varzesh3.com/files/ads/00905863.gif"
              />
            </a>
          </div>
        </div>
        <div
          className="widget news-list"
          id="widget3"
          data-cookiename="NewsFilter"
        >
          <div className="widget-header">
            <h1>اخبار فوتبال</h1>
          </div>
          <div className="widget-content">
            <div className="tab-list tabs-three-item news">
              <ul>
                <li onclick data-toggle="mostRecentNews" className="active">
                  جدیدترین ها
                </li>
                <li onclick data-toggle="mostViewedNews">
                  پربازدیدترین ها
                </li>
                <li onclick data-toggle="mostCommentedNews">
                  پرحاشیه ترین ها
                </li>
              </ul>
            </div>
            <div
              className="tab-content scrollbar-initialized"
              data-scroll={5}
              data-scrolltype={2}
            >
              <div>
                <div id="mostRecentNews" className="tab-pane">
                  <div className="widget-toolbar">
                    <div className="news-list--filter">
                      <label htmlFor="latest-internal">داخلی</label>
                      <input
                        id="latest-internal"
                        type="checkbox"
                        defaultChecked="checked"
                        data-filter={1}
                      />
                      <label htmlFor="latest-external">خارجی</label>
                      <input
                        id="latest-external"
                        type="checkbox"
                        defaultChecked="checked"
                        data-filter={2}
                      />
                      <label htmlFor="latest-video">ویدیو</label>
                      <input
                        id="latest-video"
                        type="checkbox"
                        defaultChecked="checked"
                        data-filter={4}
                      />
                      <div className="widget-error hidden">
                        حداقل یکی از گزینه ها باید فعال باشد.
                      </div>
                    </div>
                  </div>
                  <div
                    className="custom-scroll-area mCustomScrollbar _mCS_3 mCS-autoHide mCS-dir-rtl mCS_no_scrollbar"
                    style={{
                      maxHeight: "1550px",
                      position: "relative",
                      overflow: "visible"
                    }}
                  >
                    <div
                      id="mCSB_3"
                      className="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                      style={{
                        maxHeight: "none"
                      }}
                      tabIndex={0}
                    >
                      <div
                        id="mCSB_3_container"
                        className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                        style={{
                          position: "relative",
                          top: 0,
                          left: 0
                        }}
                        dir="rtl"
                      >
                        <ul className="news-list--listed-news">
                          <li data-filter={2}>
                            <a
                              target="_blank"
                              className="small-news-link"
                              href="http://www.varzesh3.com/news/1405148/\u0648\u0646\u062A\u0648\u0631\u0627-\u0627\u06CC\u062A\u0627\u0644\u06CC\u0627-\u062F\u0631-\u0631\u0648\u0633\u06CC\u0647-\u0647\u0645\u0647-\u0631\u0627-\u0634\u06AF\u0641\u062A-\u0632\u062F\u0647-\u0645\u06CC-\u06A9\u0646\u062F"
                              title="\u0648\u0646\u062A\u0648\u0631\u0627: \u0627\u06CC\u062A\u0627\u0644\u06CC\u0627 \u062F\u0631 \u0631\u0648\u0633\u06CC\u0647 \u0647\u0645\u0647 \u0631\u0627 \u0634\u06AF\u0641\u062A \u0632\u062F\u0647 \u0645\u06CC \u06A9\u0646\u062F"
                            >
                              ونتورا: ایتالیا در روسیه همه را شگفت زده می کند
                            </a>
                          </li>
                          <li data-filter={1}>
                            <a
                              target="_blank"
                              className="small-news-link"
                              href="http://www.varzesh3.com/news/1405147/\u0639\u0630\u0631\u062E\u0648\u0627\u0647\u06CC-\u0645\u062F\u0627\u0641\u0639-\u0686\u06CC\u0646-\u0627\u0632-\u0627\u0634\u062A\u0628\u0627\u0647-\u062A\u0627\u062B\u06CC\u0631\u06AF\u0630\u0627\u0631\u0634"
                              title="\u0639\u0630\u0631\u062E\u0648\u0627\u0647\u06CC \u0645\u062F\u0627\u0641\u0639 \u0686\u06CC\u0646 \u0627\u0632 \u0627\u0634\u062A\u0628\u0627\u0647 \u062A\u0627\u062B\u06CC\u0631\u06AF\u0630\u0627\u0631\u0634"
                            >
                              عذرخواهی مدافع چین از اشتباه تاثیرگذارش
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      id="mCSB_3_scrollbar_vertical"
                      className="mCSB_scrollTools mCSB_3_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                      style={{
                        display: "none"
                      }}
                    >
                      <div className="mCSB_draggerContainer">
                        <div
                          id="mCSB_3_dragger_vertical"
                          className="mCSB_dragger"
                          style={{
                            position: "absolute",
                            minHeight: "50px",
                            height: "0px",
                            top: "0px"
                          }}
                          oncontextmenu="return false;"
                        >
                          <div
                            className="mCSB_dragger_bar"
                            style={{
                              lineHeight: "50px"
                            }}
                          />
                        </div>
                        <div className="mCSB_draggerRail" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="custom-scroll-area mCustomScrollbar _mCS_4 mCS-autoHide mCS-dir-rtl mCS_no_scrollbar"
                  style={{
                    maxHeight: "1550px",
                    position: "relative",
                    overflow: "visible"
                  }}
                >
                  <div
                    id="mCSB_4"
                    className="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                    style={{
                      maxHeight: "none"
                    }}
                    tabIndex={0}
                  >
                    <div
                      id="mCSB_4_container"
                      className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                      style={{
                        position: "relative",
                        top: 0,
                        left: 0
                      }}
                      dir="rtl"
                    >
                      <ul
                        id="mostViewedNews"
                        className="news-list--listed-news tab-pane"
                        style={{
                          display: "none"
                        }}
                      >
                        <li>
                          <a
                            target="_blank"
                            className="small-news-link"
                            href="http://www.varzesh3.com/news/1404829/\u062A\u0631\u06A9\u06CC\u0628-\u0627\u062D\u062A\u0645\u0627\u0644\u06CC-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0627\u06CC\u0631\u0627\u0646-\u0645\u0642\u0627\u0628\u0644-\u0686\u06CC\u0646"
                            title="\u062A\u0631\u06A9\u06CC\u0628 \u0627\u062D\u062A\u0645\u0627\u0644\u06CC \u062A\u06CC\u0645 \u0645\u0644\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0645\u0642\u0627\u0628\u0644 \u0686\u06CC\u0646"
                          >
                            ترکیب احتمالی تیم ملی ایران مقابل چین
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            className="small-news-link"
                            href="http://www.varzesh3.com/news/1404986/\u0641\u0642\u0637-\u06CC\u06A9-\u06AF\u0644-\u0628\u0631\u0627\u06CC-\u06CC\u06A9\u0635\u062F-\u0647\u0632\u0627\u0631"
                            title="\u0641\u0642\u0637 \u06CC\u06A9 \u06AF\u0644 \u0628\u0631\u0627\u06CC \u06CC\u06A9\u0635\u062F \u0647\u0632\u0627\u0631"
                          >
                            فقط یک گل برای یکصد هزار
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    id="mCSB_4_scrollbar_vertical"
                    className="mCSB_scrollTools mCSB_4_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                    style={{
                      display: "none"
                    }}
                  >
                    <div className="mCSB_draggerContainer">
                      <div
                        id="mCSB_4_dragger_vertical"
                        className="mCSB_dragger"
                        style={{
                          position: "absolute",
                          minHeight: "50px",
                          height: "0px",
                          top: "0px"
                        }}
                        oncontextmenu="return false;"
                      >
                        <div
                          className="mCSB_dragger_bar"
                          style={{
                            lineHeight: "50px"
                          }}
                        />
                      </div>
                      <div className="mCSB_draggerRail" />
                    </div>
                  </div>
                </div>
                <div
                  className="custom-scroll-area mCustomScrollbar _mCS_5 mCS-autoHide mCS-dir-rtl mCS_no_scrollbar"
                  style={{
                    maxHeight: "1550px",
                    position: "relative",
                    overflow: "visible"
                  }}
                >
                  <div
                    id="mCSB_5"
                    className="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                    style={{
                      maxHeight: "none"
                    }}
                    tabIndex={0}
                  >
                    <div
                      id="mCSB_5_container"
                      className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                      style={{
                        position: "relative",
                        top: 0,
                        left: 0
                      }}
                      dir="rtl"
                    >
                      <ul
                        id="mostCommentedNews"
                        className="news-list--listed-news tab-pane"
                        style={{
                          display: "none"
                        }}
                      >
                        <li>
                          <a
                            target="_blank"
                            className="small-news-link"
                            href="http://www.varzesh3.com/news/1405148/\u0648\u0646\u062A\u0648\u0631\u0627-\u0627\u06CC\u062A\u0627\u0644\u06CC\u0627-\u062F\u0631-\u0631\u0648\u0633\u06CC\u0647-\u0647\u0645\u0647-\u0631\u0627-\u0634\u06AF\u0641\u062A-\u0632\u062F\u0647-\u0645\u06CC-\u06A9\u0646\u062F"
                            title="\u0648\u0646\u062A\u0648\u0631\u0627: \u0627\u06CC\u062A\u0627\u0644\u06CC\u0627 \u062F\u0631 \u0631\u0648\u0633\u06CC\u0647 \u0647\u0645\u0647 \u0631\u0627 \u0634\u06AF\u0641\u062A \u0632\u062F\u0647 \u0645\u06CC \u06A9\u0646\u062F"
                          >
                            ونتورا: ایتالیا در روسیه همه را شگفت زده می کند
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            className="small-news-link"
                            href="http://www.varzesh3.com/news/1405147/\u0639\u0630\u0631\u062E\u0648\u0627\u0647\u06CC-\u0645\u062F\u0627\u0641\u0639-\u0686\u06CC\u0646-\u0627\u0632-\u0627\u0634\u062A\u0628\u0627\u0647-\u062A\u0627\u062B\u06CC\u0631\u06AF\u0630\u0627\u0631\u0634"
                            title="\u0639\u0630\u0631\u062E\u0648\u0627\u0647\u06CC \u0645\u062F\u0627\u0641\u0639 \u0686\u06CC\u0646 \u0627\u0632 \u0627\u0634\u062A\u0628\u0627\u0647 \u062A\u0627\u062B\u06CC\u0631\u06AF\u0630\u0627\u0631\u0634"
                          >
                            عذرخواهی مدافع چین از اشتباه تاثیرگذارش
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    id="mCSB_5_scrollbar_vertical"
                    className="mCSB_scrollTools mCSB_5_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                    style={{
                      display: "none"
                    }}
                  >
                    <div className="mCSB_draggerContainer">
                      <div
                        id="mCSB_5_dragger_vertical"
                        className="mCSB_dragger"
                        style={{
                          position: "absolute",
                          minHeight: "50px",
                          height: "0px",
                          top: "0px"
                        }}
                        oncontextmenu="return false;"
                      >
                        <div
                          className="mCSB_dragger_bar"
                          style={{
                            lineHeight: "50px"
                          }}
                        />
                      </div>
                      <div className="mCSB_draggerRail" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ad-container row-fluid" data-adposition={9}>
          <div data-extension="gif" className="ad">
            <a
              href="http://www.rocoland.com?utm_source=varzesh3&utm_campaign=promotions&utm_medium=banner"
              target="_blank"
            >
              <img
                width={257}
                alt
                src="http://static1.varzesh3.com/files/ads/00906077.gif"
              />
            </a>
          </div>
        </div>
        <div
          className="widget"
          data-scroll={0}
          id="widget20"
          data-widgetstageid="5/174"
        >
          <div className="widget-header">
            <h1>لیگ های اروپایی</h1>
          </div>
          <div className="widget-toolbar">
            <div className="league-selector">
              <select data-type="league-select">
                <option value="5/174" selected>
                  لیگ برتر انگلیس
                </option>
                <option value="5/180">لالیگا اسپانیا</option>
                <option value="5/181">بوندسلیگا آلمان</option>
                <option value="5/182">لوشامپیونا فرانسه</option>
                <option value="5/187">سری آ ایتالیا</option>
                <option value="5/193">اردیویسه هلند</option>
              </select>
            </div>
            <div className="week-selector">
              <label>انتخاب هفته :</label>
              <select data-type="week-select">
                <option value={1}>هفته 1</option>
                <option value={2}>هفته 2</option>
                <option value={3}>هفته 3</option>
                <option value={4}>هفته 4</option>
                <option value={5}>هفته 5</option>
                <option value={6}>هفته 6</option>
                <option value={7}>هفته 7</option>
                <option value={8}>هفته 8</option>
                <option value={9}>هفته 9</option>
                <option value={10}>هفته 10</option>
                <option value={11}>هفته 11</option>
                <option value={12}>هفته 12</option>
                <option value={13}>هفته 13</option>
                <option value={14}>هفته 14</option>
                <option value={15}>هفته 15</option>
                <option value={16}>هفته 16</option>
                <option value={17}>هفته 17</option>
                <option value={18}>هفته 18</option>
                <option value={19}>هفته 19</option>
                <option value={20}>هفته 20</option>
                <option value={21}>هفته 21</option>
                <option value={22}>هفته 22</option>
                <option value={23}>هفته 23</option>
                <option value={24}>هفته 24</option>
                <option value={25}>هفته 25</option>
                <option value={26}>هفته 26</option>
                <option value={27}>هفته 27</option>
                <option value={28}>هفته 28</option>
                <option value={29}>هفته 29</option>
                <option value={30} selected="selected">
                  هفته 30
                </option>
                <option value={31}>هفته 31</option>
                <option value={32}>هفته 32</option>
                <option value={33}>هفته 33</option>
                <option value={34}>هفته 34</option>
                <option value={35}>هفته 35</option>
                <option value={36}>هفته 36</option>
                <option value={37}>هفته 37</option>
                <option value={38}>هفته 38</option>
              </select>
            </div>
          </div>
          <div className="widget-content md-padding">
            <div className="custom-scroll-area">
              <div className="custom-scroll-area--fixtures">
                <div
                  className="league-table fixtures-list-static"
                  data-identity={20}
                >
                  <table>
                    <thead>
                      <tr>
                        <th className="header color-8" colSpan={10}>
                          لیگ برتر انگلیس
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="sub-header" colSpan={10}>
                          {" "}
                          شنبه 12 فروردین 1396
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left">لیورپول</td>
                        <td className="text-center sm-padding text-nowrap league-table--match-result">
                          -
                        </td>
                        <td className="text-right">اورتون</td>
                        <td className="text-left matchtime">16:00 </td>
                      </tr>
                      <tr>
                        <td className="text-left">منچستریونایتد</td>
                        <td className="text-center sm-padding text-nowrap league-table--match-result">
                          -
                        </td>
                        <td className="text-right">وست برومویچ</td>
                        <td className="text-left matchtime">18:30 </td>
                      </tr>
                      <tr>
                        <td className="text-left">برنلی</td>
                        <td className="text-center sm-padding text-nowrap league-table--match-result">
                          -
                        </td>
                        <td className="text-right">تاتنهام</td>
                        <td className="text-left matchtime">18:30 </td>
                      </tr>
                      <tr>
                        <td className="text-left">چلسی</td>
                        <td className="text-center sm-padding text-nowrap league-table--match-result">
                          -
                        </td>
                        <td className="text-right">کریستال پالاس</td>
                        <td className="text-left matchtime">18:30 </td>
                      </tr>
                      <tr>
                        <td className="text-left">هال سیتی</td>
                        <td className="text-center sm-padding text-nowrap league-table--match-result">
                          -
                        </td>
                        <td className="text-right">وستهام</td>
                        <td className="text-left matchtime">18:30 </td>
                      </tr>
                      <tr>
                        <td className="text-left">لسترسیتی</td>
                        <td className="text-center sm-padding text-nowrap league-table--match-result">
                          -
                        </td>
                        <td className="text-right">استوک‌سیتی</td>
                        <td className="text-left matchtime">18:30 </td>
                      </tr>
                      <tr>
                        <td className="text-left">واتفورد</td>
                        <td className="text-center sm-padding text-nowrap league-table--match-result">
                          -
                        </td>
                        <td className="text-right">ساندرلند</td>
                        <td className="text-left matchtime">18:30 </td>
                      </tr>
                      <tr>
                        <td className="text-left">ساوتهمپتون</td>
                        <td className="text-center sm-padding text-nowrap league-table--match-result">
                          -
                        </td>
                        <td className="text-right">بورنموث</td>
                        <td className="text-left matchtime">21:00 </td>
                      </tr>
                      <tr>
                        <td className="sub-header" colSpan={10}>
                          {" "}
                          یکشنبه 13 فروردین 1396
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left">سوانسی</td>
                        <td className="text-center sm-padding text-nowrap league-table--match-result">
                          -
                        </td>
                        <td className="text-right">میدلزبورو</td>
                        <td className="text-left matchtime">17:00 </td>
                      </tr>
                      <tr>
                        <td className="text-left">آرسنال</td>
                        <td className="text-center sm-padding text-nowrap league-table--match-result">
                          -
                        </td>
                        <td className="text-right">منچسترسیتی</td>
                        <td className="text-left matchtime">19:30 </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="custom-scroll-area--league-table" />
            </div>
            <div className="clr" />
            <a
              className="widget--more-link"
              target="_blank"
              href="/table/\u062C\u062F\u0648\u0644-\u0627\u0646\u06AF\u0644\u06CC\u0633-2016-2017-\u0644\u06CC\u06AF-\u0628\u0631\u062A\u0631"
              title="\u0645\u0634\u0627\u0647\u062F\u0647 \u062C\u062F\u0648\u0644 \u06A9\u0627\u0645\u0644 \u0627\u0646\u06AF\u0644\u06CC\u0633 (2016-2017) \u0644\u06CC\u06AF \u0628\u0631\u062A\u0631"
            >
              مشاهده جدول کامل لیگ برتر انگلیس
            </a>
          </div>
          <div className="box-footer" />
        </div>
        <div
          className="widget"
          data-scroll={0}
          id="widget21"
          data-widgetstageid="5/177"
        >
          <div className="widget-header">
            <h1>جدول لیگ های اروپایی</h1>
          </div>
          <div className="widget-toolbar">
            <div className="league-selector">
              <select data-type="league-select">
                <option value="5/177" selected>
                  لیگ برتر انگلیس
                </option>
                <option value="5/178">بوندسلیگا آلمان</option>
                <option value="5/179">لوشامپیونا فرانسه</option>
                <option value="5/183">لالیگا اسپانیا</option>
                <option value="5/188">سری آ ایتالیا</option>
                <option value="5/194">اردیویسه هلند</option>
              </select>
            </div>
          </div>
          <div className="widget-content md-padding">
            <div className="custom-scroll-area">
              <div className="custom-scroll-area--fixtures" />
              <div className="custom-scroll-area--league-table">
                <div
                  className="league-table league-table-static"
                  data-identity={21}
                >
                  <table>
                    <thead>
                      <tr>
                        <td className="header color-8" colSpan={10}>
                          جدول لیگ برتر انگلیس
                        </td>
                      </tr>
                      <tr className="sub-header">
                        <td />
                        <td>تیم</td>
                        <td>بازیها</td>
                        <td>امتیاز</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className>
                        <td>1</td>
                        <td className="text-center">چلسی</td>
                        <td className="text-center">28</td>
                        <td className="text-center">69</td>
                      </tr>
                      <tr className="alt">
                        <td>2</td>
                        <td className="text-center">تاتنهام</td>
                        <td className="text-center">28</td>
                        <td className="text-center">59</td>
                      </tr>
                      <tr className>
                        <td>3</td>
                        <td className="text-center">منچسترسیتی</td>
                        <td className="text-center">28</td>
                        <td className="text-center">57</td>
                      </tr>
                      <tr className="alt">
                        <td>4</td>
                        <td className="text-center">لیورپول</td>
                        <td className="text-center">29</td>
                        <td className="text-center">56</td>
                      </tr>
                      <tr className>
                        <td>5</td>
                        <td className="text-center">منچستریونایتد</td>
                        <td className="text-center">27</td>
                        <td className="text-center">52</td>
                      </tr>
                      <tr className="alt">
                        <td>6</td>
                        <td className="text-center">آرسنال</td>
                        <td className="text-center">27</td>
                        <td className="text-center">50</td>
                      </tr>
                      <tr className>
                        <td>7</td>
                        <td className="text-center">اورتون</td>
                        <td className="text-center">29</td>
                        <td className="text-center">50</td>
                      </tr>
                      <tr className="alt">
                        <td>8</td>
                        <td className="text-center">وست برومویچ</td>
                        <td className="text-center">29</td>
                        <td className="text-center">43</td>
                      </tr>
                      <tr className>
                        <td>9</td>
                        <td className="text-center">استوک‌سیتی</td>
                        <td className="text-center">29</td>
                        <td className="text-center">36</td>
                      </tr>
                      <tr className="alt">
                        <td>10</td>
                        <td className="text-center">ساوتهمپتون</td>
                        <td className="text-center">27</td>
                        <td className="text-center">33</td>
                      </tr>
                      <tr className>
                        <td>11</td>
                        <td className="text-center">بورنموث</td>
                        <td className="text-center">29</td>
                        <td className="text-center">33</td>
                      </tr>
                      <tr className="alt">
                        <td>12</td>
                        <td className="text-center">وستهام</td>
                        <td className="text-center">29</td>
                        <td className="text-center">33</td>
                      </tr>
                      <tr className>
                        <td>13</td>
                        <td className="text-center">برنلی</td>
                        <td className="text-center">29</td>
                        <td className="text-center">32</td>
                      </tr>
                      <tr className="alt">
                        <td>14</td>
                        <td className="text-center">واتفورد</td>
                        <td className="text-center">28</td>
                        <td className="text-center">31</td>
                      </tr>
                      <tr className>
                        <td>15</td>
                        <td className="text-center">لسترسیتی</td>
                        <td className="text-center">28</td>
                        <td className="text-center">30</td>
                      </tr>
                      <tr className="alt">
                        <td>16</td>
                        <td className="text-center">کریستال پالاس</td>
                        <td className="text-center">28</td>
                        <td className="text-center">28</td>
                      </tr>
                      <tr className>
                        <td>17</td>
                        <td className="text-center">سوانسی</td>
                        <td className="text-center">29</td>
                        <td className="text-center">27</td>
                      </tr>
                      <tr className="alt">
                        <td>18</td>
                        <td className="text-center">هال سیتی</td>
                        <td className="text-center">29</td>
                        <td className="text-center">24</td>
                      </tr>
                      <tr className>
                        <td>19</td>
                        <td className="text-center">میدلزبورو</td>
                        <td className="text-center">28</td>
                        <td className="text-center">22</td>
                      </tr>
                      <tr className="alt">
                        <td>20</td>
                        <td className="text-center">ساندرلند</td>
                        <td className="text-center">28</td>
                        <td className="text-center">20</td>
                      </tr>
                    </tbody>
                  </table>
                </div>{" "}
              </div>
            </div>
            <div className="clr" />
            <a
              className="widget--more-link"
              target="_blank"
              href="/table/\u062C\u062F\u0648\u0644-\u0627\u0646\u06AF\u0644\u06CC\u0633-2016-2017-\u0644\u06CC\u06AF-\u0628\u0631\u062A\u0631"
              title="\u0645\u0634\u0627\u0647\u062F\u0647 \u062C\u062F\u0648\u0644 \u06A9\u0627\u0645\u0644 \u0627\u0646\u06AF\u0644\u06CC\u0633 (2016-2017) \u0644\u06CC\u06AF \u0628\u0631\u062A\u0631"
            >
              مشاهده جدول کامل لیگ برتر انگلیس
            </a>
          </div>
          <div className="box-footer" />
        </div>
        <div
          className="widget"
          data-scroll={0}
          id="widget69"
          data-widgetstageid="10/290"
        >
          <div className="widget-header">
            <h1>لیگ برتر بسکتبال</h1>
          </div>
          <div className="widget-toolbar">
            <div className="league-selector">
              <label>انتخاب لیگ : </label>
              <select data-type="league-select">
                <option value="10/258">لیگ برتر بسکتبال ایران</option>
                <option value="10/289">مرحله اول پلی آف گروه B</option>
                <option value="10/290" selected>
                  مرحله اول پلی آف گروه A
                </option>
              </select>
            </div>
            <div className="week-selector">
              <label>انتخاب هفته :</label>
              <select data-type="week-select">
                <option value={1}>هفته 1</option>
                <option value={2}>هفته 2</option>
                <option value={3}>هفته 3</option>
                <option value={4}>هفته 4</option>
                <option value={5} selected="selected">
                  هفته 5
                </option>
              </select>
            </div>
          </div>
          <div className="widget-content md-padding">
            <div className="custom-scroll-area">
              <div className="custom-scroll-area--fixtures">
                <div className="league-table" data-identity={69}>
                  <table>
                    <thead>
                      <tr className="header color-6">
                        <th colSpan={10}>مرحله اول پلی آف گروه A</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="sub-header">
                        <td colSpan={10}>پنجشنبه 19 اسفند 1395</td>
                      </tr>
                      <tr>
                        <td className="text-left">دانشگاه آزاد</td>
                        <td className="text-center">75 - 76 </td>
                        <td className="text-right">شهرداری گرگان</td>
                        <td className="matchtime">16:00</td>
                      </tr>
                      <tr className="sub-header">
                        <td colSpan={10}>پنجشنبه 17 فروردین 1396</td>
                      </tr>
                      <tr>
                        <td className="text-left">شهرداری کاشان</td>
                        <td className="text-center"> -</td>
                        <td className="text-right">شیمیدر</td>
                        <td className="matchtime">16:00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="custom-scroll-area--league-table">
                <div
                  className="league-table league-table-static"
                  data-identity={69}
                >
                  <table>
                    <thead>
                      <tr>
                        <td className="header color-6" colSpan={10}>
                          جدول مرحله اول پلی آف گروه A
                        </td>
                      </tr>
                      <tr className="sub-header">
                        <td />
                        <td>تیم</td>
                        <td>بازیها</td>
                        <td>امتیاز</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className>
                        <td>1</td>
                        <td className="text-center">پتروشیمی ب.ا</td>
                        <td className="text-center">4</td>
                        <td className="text-center">7</td>
                      </tr>
                      <tr className="alt">
                        <td>2</td>
                        <td className="text-center">دانشگاه آزاد</td>
                        <td className="text-center">4</td>
                        <td className="text-center">6</td>
                      </tr>
                      <tr className>
                        <td>3</td>
                        <td className="text-center">شهرداری کاشان</td>
                        <td className="text-center">3</td>
                        <td className="text-center">5</td>
                      </tr>
                      <tr className="alt">
                        <td>4</td>
                        <td className="text-center">شهرداری گرگان</td>
                        <td className="text-center">4</td>
                        <td className="text-center">5</td>
                      </tr>
                      <tr className>
                        <td>5</td>
                        <td className="text-center">شیمیدر</td>
                        <td className="text-center">3</td>
                        <td className="text-center">4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="box-footer" />
        </div>
      </div>
      
    );
  }
}

export default Content_Column_Left;