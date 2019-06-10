import React from "react";


const API = 'https://sample.api.com/api/';
const DEFAULT_QUERY = 'left_news';


class Right extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }
componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }


  render() {
    const { hits } = this.state;
    const { hits } = this.state;


    return (

<div className="col-xs-12 col-sm-6 pull-right no-padding-right home-column first-column">
        <div className="ad-container row-fluid" data-adposition={8}>
          <div data-extension="gif" className="ad undefined">
            <a
              href="http://ads.farakav.com/clk?av=C_YN&gl=90c00de5559895d6ae6d6be6ec34b728&lc=0"
              target="_blank"
            >
              <img
                width={257}
                height={80}
                alt=""
                src="https://static.farakav.com/v3/static/bpx/00910859.gif"
              />
            </a>
          </div>
          <div data-extension="gif" className="ad undefined">
            <a
              href="http://ads.farakav.com/clk?av=9eUN&gl=8f0b742ca465347701a3d5f83608b140&lc=1"
              target="_blank"
            >
              <img
                width={257}
                height={80}
                alt=""
                src="https://static.farakav.com/v3/static/bpx/00910837.gif"
              />
            </a>
          </div>
        </div>
        <div
          className="widget"
          data-scroll={1}
          id="widget12"
          data-widgetstageid="5/172"
        >
          <div className="widget-header">
            <h1>لیگ های ایران</h1>
          </div>
          <div className="widget-toolbar">
            <div className="league-selector">
              <select data-type="league-select">
                <option value="5/172" selected>
                  لیگ برتر ایران (جام خلیج فارس)
                </option>
                <option value="5/190">لیگ برتر فوتسال</option>
                <option value="5/189">لیگ آزادگان - دسته یک</option>
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
                <option value={25} selected="selected">
                  هفته 25
                </option>
                <option value={26}>هفته 26</option>
                <option value={27}>هفته 27</option>
                <option value={28}>هفته 28</option>
                <option value={29}>هفته 29</option>
                <option value={30}>هفته 30</option>
              </select>
            </div>
          </div>
          <div className="widget-content md-padding">
            <div className="custom-scroll-area">
              <div className="custom-scroll-area--fixtures">
                <div
                  className="league-table fixtures-list-static"
                  data-identity={12}
                >
                  <table>
                    <thead>
                      <tr>
                        <th className="header color-6" colSpan={10}>
                          لیگ برتر ایران (جام خلیج فارس)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="sub-header" colSpan={10}>
                          {" "}
                          جمعه 11 فروردین 1396
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left">{hit.match_oneteam}</td>
                        <td className="text-center sm-padding text-nowrap league-table--match-result">
                          -
                        </td>
                        <td className="text-right">{hit.match_twoteam}</td>
                        <td className="text-left matchtime">{hit.match_time} </td>
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
              href=""
              title=""
            >
              مشاهده جدول کامل لیگ برتر ایران (جام خلیج فارس)
            </a>
          </div>
          <div className="box-footer" />
        </div>
        <div className="ad-container row-fluid" data-adposition={12}>
          <div data-extension="gif" className="ad">
            <a
              href="http://fastclick.co/a.aspx?Task=Click&ZoneID=1705&CampaignID=1997&AdvertiserID=12&BannerID=798&SiteID=5"
              target="_blank"
            >
              <img
                width={257}
                alt=""
                src="http://static1.varzesh3.com/files/ads/00906087.gif"
              />
            </a>
          </div>
          <div data-extension="gif" className="ad">
            <a
              href="http://flightio.com/?utm_source=varzesh3&utm_medium=banner&utm_campaign=newyear"
              target="_blank"
            >
              <img
                width={257}
                alt=""
                src="http://static1.varzesh3.com/files/ads/00906090.gif"
              />
            </a>
          </div>
        </div>
        <div
          className="widget"
          data-scroll={0}
          id="widget13"
          data-widgetstageid="5/173"
        >
          <div className="widget-header">
            <h1>جدول لیگ های ایران</h1>
          </div>
          <div className="widget-toolbar">
            <div className="league-selector">
              <select data-type="league-select">
                <option value="5/173" selected>
                  لیگ برتر ایران (جام خلیج فارس)
                </option>
                <option value="5/192">لیگ برتر فوتسال</option>
                <option value="5/191">لیگ آزادگان</option>
              </select>
            </div>
          </div>
          <div className="widget-content md-padding">
            <div className="custom-scroll-area">
              <div className="custom-scroll-area--fixtures" />
              <div className="custom-scroll-area--league-table">
                <div
                  className="league-table league-table-static"
                  data-identity={13}
                >
                  <table>
                    <thead>
                      <tr>
                        <td className="header color-6" colSpan={10}>
                          جدول لیگ برتر ایران (جام خلیج فارس)
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
                      <tr>
                       
                      
                      
                      {hits.map(hit =>
                         <td>{hit.count}</td>
                        <td className="text-center">{hit.state_title}</td>
                        <td className="text-center">{hit.state_count}</td>
                        <td className="text-center">{hit.state_score}</td>
                         
                      )}

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
              href="/table/\u062C\u062F\u0648\u0644-\u0644\u06CC\u06AF-\u0628\u0631\u062A\u0631-\u062E\u0644\u06CC\u062C-\u0641\u0627\u0631\u0633-95-96"
              title="\u0645\u0634\u0627\u0647\u062F\u0647 \u062C\u062F\u0648\u0644 \u06A9\u0627\u0645\u0644 \u0644\u06CC\u06AF \u0628\u0631\u062A\u0631 (95-96) \u062C\u0627\u0645 \u062E\u0644\u06CC\u062C \u0641\u0627\u0631\u0633"
            >
              مشاهده جدول کامل لیگ برتر ایران (جام خلیج فارس)
            </a>
          </div>
          <div className="box-footer" />
        </div>
        <div
          className="widget scrollbar-initialized"
          data-scroll={4}
          id="widget58"
          data-widgetstageid="5/231"
        >
          <div className="widget-header">
            <h1>مقدماتی جام جهانی 2018 روسیه</h1>
          </div>
          <div className="widget-toolbar">
            <div className="league-selector">
              <div className="group-selector-container">
                <select className="v3-select">
                  <option value="\u0622\u0633\u06CC\u0627" selected="selected">
                    آسیا
                  </option>
                  <option value="\u0622\u0645\u0631\u06CC\u06A9\u0627\u06CC \u062C\u0646\u0648\u0628\u06CC">
                    آمریکای جنوبی
                  </option>
                  <option value="\u0627\u0631\u0648\u067E\u0627">اروپا</option>
                  <option value="\u0622\u0641\u0631\u06CC\u0642\u0627">
                    آفریقا
                  </option>
                  <option value="\u0622\u0645\u0631\u06CC\u06A9\u0627\u06CC \u0634\u0645\u0627\u0644\u06CC">
                    آمریکای شمالی
                  </option>
                </select>
              </div>
              <select data-type="league-select">
                <option
                  data-group="\u0622\u0633\u06CC\u0627"
                  value="5/234"
                  selected="selected"
                >
                  آسیا مرحله نهایی (گروه A)
                </option>
                <option data-group="\u0622\u0633\u06CC\u0627" value="5/231">
                  آسیا مرحله نهایی (گروه B)
                </option>
              </select>
            </div>
          </div>
          <div className="widget-content md-padding">
            <div className="custom-scroll-area">
              <div
                className="custom-scroll-area--fixtures mCustomScrollbar _mCS_1 mCS-autoHide mCS-dir-rtl"
                style={{
                  height: "300px",
                  position: "relative",
                  overflow: "visible"
                }}
              >
                <div
                  id="mCSB_1"
                  className="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                  style={{
                    maxHeight: "none"
                  }}
                  tabIndex={0}
                >
                  <div
                    id="mCSB_1_container"
                    className="mCSB_container"
                    style={{
                      position: "relative",
                      top: 0,
                      left: 0
                    }}
                    dir="rtl"
                  >
                    <div
                      className="league-table fixtures-list-static"
                      data-identity={58}
                    >
                      <table>
                        <thead>
                          <tr>
                            <th className="header color-2" colSpan={10}>
                              آسیا مرحله نهایی (گروه B)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-left">عربستان</td>
                            <td className="text-center sm-padding text-nowrap league-table--match-result">
                              1 - 0
                            </td>
                            <td className="text-right">{hit.league_title}</td>
                            <td className="text-left matchtime">
                              <a
                                target="_blank"
                                href="{hit.league_href}"
                              >
                                <img
                                  width={11}
                                  height={11}
                                  src="{hit.league_img}"
                                  border={0}
                                  className="mCS_img_loaded"
                                />
                              </a>
                              
                            </td>
                          </tr>
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div
                  id="mCSB_1_scrollbar_vertical"
                  className="mCSB_scrollTools mCSB_1_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                  style={{
                    display: "block"
                  }}
                >
                  <div className="mCSB_draggerContainer">
                    <div
                      id="mCSB_1_dragger_vertical"
                      className="mCSB_dragger"
                      style={{
                        position: "absolute",
                        minHeight: "50px",
                        display: "block",
                        height: "83px",
                        maxHeight: "266px",
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
              <div className="custom-scroll-area--league-table">
                <div
                  className="league-table league-table-static"
                  data-identity={58}
                >
                  <table>
                    <thead>
                      <tr>
                        <td className="header color-2" colSpan={10}>
                          جدول آسیا مرحله نهایی (گروه B)
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
                        <td className="text-center">ژاپن</td>
                        <td className="text-center">7</td>
                        <td className="text-center">16</td>
                      </tr>
                      <tr className="" alt="">
                        <td>2</td>
                        <td className="text-center">عربستان</td>
                        <td className="text-center">7</td>
                        <td className="text-center">16</td>
                      </tr>
                      <tr className>
                        <td>3</td>
                        <td className="text-center">استرالیا</td>
                        <td className="text-center">7</td>
                        <td className="text-center">13</td>
                      </tr>
                      <tr className="" alt="">
                        <td>4</td>
                        <td className="text-center">امارات</td>
                        <td className="text-center">7</td>
                        <td className="text-center">9</td>
                      </tr>
                      <tr className>
                        <td>5</td>
                        <td className="text-center">عراق</td>
                        <td className="text-center">7</td>
                        <td className="text-center">4</td>
                      </tr>
                      <tr className="" alt="">
                        <td>6</td>
                        <td className="text-center">تایلند</td>
                        <td className="text-center">7</td>
                        <td className="text-center">1</td>
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
              href=""
              title=""
            >
              مشاهده جدول کامل آسیا مرحله نهایی (گروه B)
            </a>
          </div>
          <div className="box-footer" />
        </div>
        <div className="ad-container row-fluid" data-adposition={13}>
          <div data-extension="gif" className="ad">
            <a
              href=""
              target="_blank"
            >
              <img
                width={257}
                alt=""
                src=""
              />
            </a>
          </div>
        </div>
        <div
          className="widget news-list"
          id="widget5"
          data-cookiename="NewsFilter"
        >
          <div className="widget-header">
            <h1> آخرین اخبار سایر ورزش‌ها</h1>
          </div>
          <div className="widget-content">
            <div
              className="tab-content scrollbar-initialized"
              data-scroll={5}
              data-scrolltype={2}
            >
              <div>
                <div id="mostRecentNews" className="tab-pane">
                  <div
                    className="custom-scroll-area mCustomScrollbar _mCS_2 mCS-autoHide mCS-dir-rtl mCS_no_scrollbar"
                    style={{
                      maxHeight: "1550px",
                      position: "relative",
                      overflow: "visible"
                    }}
                  >
                    <div
                      id="mCSB_2"
                      className="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                      style={{
                        maxHeight: "none"
                      }}
                      tabIndex={0}
                    >
                      <div
                        id="mCSB_2_container"
                        className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                        style={{
                          position: "relative",
                          top: 0,
                          left: 0
                        }}
                        dir="rtl"
                      >
                        <ul className="news-list--listed-news">
                       
{hits.map(hit =>
           <a
                              target="_blank"
                              className="small-news-link"
                              href="{hits.news_href}"
                              title="{hits.title}"
                            >
                              {hot.desc}
                            </a>
          </li>
        )}




                        </ul>
                      </div>
                    </div>
                    <div
                      id="mCSB_2_scrollbar_vertical"
                      className="mCSB_scrollTools mCSB_2_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                      style={{
                        display: "none"
                      }}
                    >
                      <div className="mCSB_draggerContainer">
                        <div
                          id="mCSB_2_dragger_vertical"
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
        </div>
        <div
          className="widget tv-schedule-box scrollbar-initialized"
          id="tv-schedule"
          data-scroll={6}
        >
          <div className="widget-header">
            <h1>جدول پخش ورزش از تلویزیون</h1>
          </div>
          <div
            className="widget-content custom-scroll-area mCustomScrollbar _mCS_6 mCS-autoHide mCS-dir-rtl"
            style={{
              height: "300px",
              position: "relative",
              overflow: "visible"
            }}
          >
            <div
              id="mCSB_6"
              className="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
              style={{
                maxHeight: "none"
              }}
              tabIndex={0}
            >
              <div
                id="mCSB_6_container"
                className="mCSB_container"
                style={{
                  position: "relative",
                  top: 0,
                  left: 0
                }}
                dir="rtl"
              >
                <table className="full-width">
                  <tbody>
                    <tr className="match-date">
                      <th className="text-center">
                        <i className="icon-calendar" />
                      </th>
                      <td className="text-center sub-header">
                        جمعه 1396/01/11
                      </td>
                    </tr>
                    <tr className="stage-name">
                      <th />
                      <td className="text-center">{hit.week_text}</td>
                    </tr>
                    <tr>
                      <th />
                      <td className="text-center">{hit.week_match} </td>
                    </tr>
                    <tr className="extra-details">
                      <th className="text-center">
                        <i className="icon-clock" />
                      </th>
                      <td className="text-right">
                        <span className="match-time">ساعت: 17:00</span>
                        <span className="channel-name pull-left">
                          {hit.tv_time}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                 
                 
                </table>
              </div>
            </div>
            <div
              id="mCSB_6_scrollbar_vertical"
              className="mCSB_scrollTools mCSB_6_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
              style={{
                display: "block"
              }}
            >
              <div className="mCSB_draggerContainer">
                <div
                  id="mCSB_6_dragger_vertical"
                  className="mCSB_dragger"
                  style={{
                    position: "absolute",
                    minHeight: "50px",
                    display: "block",
                    height: "159px",
                    maxHeight: "266px",
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
          <div className="box-footer" />
        </div>
      </div>



    );
  }
}

export default Right;


