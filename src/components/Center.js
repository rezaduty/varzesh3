
import React from "react";

class Center extends React.Component {
  render() {
    return (
    
     <div className="col-xs-12 col-sm-6 pull-right no-padding-left home-column second-column">
        <div data-extension="gif" className="ad-container ad">
          <a href="http://tamasha.ir" target="_blank" rel="external">
            <img
              width={257}
              height={80}
              alt=""
              src="https://static.farakav.com/files/pictures/01409747.jpg?h=192"
            />
          </a>
        </div>
        <div className="widget video-slider">
          <div className="widget-header">
            <h1>ویدیو</h1>
          </div>
          <div className="widget-content">
            <div className="tab-list tabs-two-item videos">
              <ul>
                <li data-toggle="videoSliderFeatured">ویژه</li>
                <li className="active" data-toggle="videoSliderMostRecent">
                  جدیدترین ها
                </li>
              </ul>
            </div>
            <div className="tab-content md-padding">
              <div
                className="tab-pane hidden"
                id="videoSliderMostRecent"
                style={{
                  display: "block"
                }}
              >
                <div
                  className="widget-slider owl-carousel  owl-rtl owl-loaded owl-drag"
                  data-type="video"
                >
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(1446px, 0px, 0px)",
                        transition: "all 0.3s ease 0s",
                        width: "2892px"
                      }}
                    >
                      <div
                        className="owl-item cloned"
                        style={{
                          width: "241px"
                        }}
                      >
                        
                      <div
                        className="owl-item cloned"
                        style={{
                          width: "241px"
                        }}
                      >
                        <div className="item">
                         <a
                            href="{hit.video_link}"
                            className="image-container"
                            title=""
                            target="_blank"
                          >
                            <div className="video-datetime">{hit.video_release_date}</div>
                            <div className="video-play-btn"> </div>
                            <img
                              width={240}
                              height={160}
                              src="{hit.video_src}"
                              alt=""
                            />
                          </a>
                          <h4 className="slide-caption">
                            <a
                              href="{hit.video_link}"
                              target="_blank"
                            >
                              {hit.video_desc}
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
              <div
                className="tab-pane"
                id="videoSliderFeatured"
                style={{
                  display: "none"
                }}
              >
                <div
                  className="widget-slider owl-carousel owl-rtl owl-loaded owl-drag owl-hidden"
                  data-type="video"
                >
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(482px, 0px, 0px)",
                        transition: "all 0s ease 0s",
                        width: "2892px"
                      }}
                    >
                      
                      <div
                        className="owl-item cloned"
                        style={{
                          width: "241px"
                        }}
                      >
                        <div className="item">
                          <a
                            href="{hit.newspaper}"
                            className="image-container"
                            title=""
                            target="_blank"
                          >
                            <div className="video-datetime">{hit.newspaper_release_date}</div>
                            <div className="video-play-btn"> </div>
                            <img
                              width={240}
                              height={160}
                              src="{hit.newspaper_src}"
                              alt=""
                            />
                          </a>
                          <h4 className="slide-caption">
                            <a
                              href="{hit.newspaper_link}"
                              target="_blank"
                            >
                             {hit.newspaper_desc}
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ad-container row-fluid" data-adposition={10}>
          <div data-extension="jpg" className="ad">
            <a
              href="http://fastclick.co/a.aspx?Task=Click&ZoneID=2368&CampaignID=3164&AdvertiserID=165&BannerID=1301&SiteID=5"
              target="_blank"
            >
              <img
                width={257}
                alt
                src="http://static1.varzesh3.com/files/ads/00906057.jpg"
              />
            </a>
          </div>
          <div data-extension="gif" className="ad">
            <a
              href="http://fastclick.co/a.aspx?Task=Click&ZoneID=843&CampaignID=931&AdvertiserID=105&BannerID=585&SiteID=5"
              target="_blank"
            >
              <img
                width={257}
                alt
                src="http://static1.varzesh3.com/files/ads/00905547.gif"
              />
            </a>
          </div>
          <div data-extension="gif" className="ad">
            <a
              href="http://fastclick.co/a.aspx?Task=Click&ZoneID=2278&CampaignID=3074&AdvertiserID=396&BannerID=1271&SiteID=5"
              target="_blank"
            >
              <img
                width={257}
                alt
                src="http://static1.varzesh3.com/files/ads/00906011.gif"
              />
            </a>
          </div>
        </div>
        <div className="widget newspaper-slider" id="widget6">
          <div className="widget-header">
            <h1>گیشه روزنامه ورزشی</h1>
          </div>
          <div className="widget-content md-padding">
            <div className="owl-carousel widget-slider owl-rtl owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(1542px, 0px, 0px)",
                    transition: "all 0.3s ease 0s",
                    width: "4883px"
                  }}
                >
                  
                  <div
                    className="owl-item cloned"
                    style={{
                      width: "257px"
                    }}
                  >
                    <a
                      href="{knockout_slider_href}"
                      target="_blank"
                    >
                      <img
                        width={200}
                        height={135}
                        src="{knockout_slider_src}"
                      />
                      <div className="newspaper-slider--caption">
                        <span className="newspaper-slider--caption-title">
                         {knockout_slider_res}
                        </span>
                        <span className="newspaper-slider--caption-date">
                          {knockout_slider_time}
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className="box-footer" />
        </div>
        <div className="widget top-scorers" id="widget51" data-scroll={7}>
          <div className="widget-header">
            <h1>گلزنان برتر</h1>
          </div>
          <div className="widget-toolbar">
            <div>
              <label>انتخاب لیگ : </label>
              <select data-type="topscore-select">
                <option value="900931/7">جام خلیج فارس</option>
                <option value="900957/7">لیگ برتر انگلیس</option>
                <option value="900958/7">لالیگا اسپانیا</option>
                <option value="900959/7">بوندسلیگا آلمان</option>
                <option value="900960/7">سری آ ایتالیا</option>
                <option value="900961/7">لوشامپیونا فرانسه</option>
                <option value="900962/7">اردیویسه هلند</option>
              </select>
            </div>
          </div>
          <div className="widget-content md-padding">
            <table className="full-width">
              <tbody>
               
                <tr>
                  <td className="text-center">
                    <span>{hit.knockout_value} گل</span>
                  </td>
                  <td>
                    <div className="player-name">
                    {hit.knockout_player_name} <span className="team-name">{hit.knockout_team_name}</span>
                    </div>
                  </td>
                </tr>
              
              </tbody>
            </table>
          </div>
        </div>
        <div className="widget top-scorers" id="widget52" data-scroll={7}>
          <div className="widget-header">
            <h1>بهترین پاسورها</h1>
          </div>
          <div className="widget-content md-padding">
            <table className="full-width">
              <tbody>
                <tr>
                  <td className="text-center">
                    <span>
                      <img
                        width={16}
                        height={16}
                        src="{hit.knockout_src}"
                      />
                      8 پاس
                    </span>
                  </td>
                  <td>
                    <div className="player-name">
                     {hit.knockout_player} <span className="team-name">{hit.knockout_team}</span>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
        <div
          className="widget"
          data-scroll={0}
          id="widget71"
          data-widgetstageid="5/287"
        >
          <div className="widget-header">
            <h1>لیگ قهرمانان آسیا</h1>
          </div>
          <div className="widget-toolbar">
            <div className="league-selector">
              <select data-type="league-select">
                <option value="5/279">مرحله پلی‌آف</option>
                <option value="5/280">گروه H</option>
                <option value="5/281">گروه G</option>
                <option value="5/282">گروه F</option>
                <option value="5/283">گروه E</option>
                <option value="5/284">گروه D</option>
                <option value="5/285">گروه C</option>
                <option value="5/286">گروه B</option>
                <option value="5/287" selected>
                  گروه A
                </option>
              </select>
            </div>
          </div>
          <div className="widget-content md-padding">
            <div className="custom-scroll-area">
              <div className="custom-scroll-area--fixtures">
                <div
                  className="league-table fixtures-list-static"
                  data-identity={71}
                >
                  <table>
                    <thead>
                      <tr>
                        <th className="header color-7" colSpan={10}>
                          گروه A
                        </th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr>
                        <td className="text-left">{hit.asia_match_oneteam}</td>
                        <td className="text-center sm-padding text-nowrap league-table--match-result">
                          -
                        </td>
                        <td className="text-right">{hit.asia_match_oneteam}</td>
                        <td className="text-left matchtime">{hit.asia_match_time} </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="custom-scroll-area--league-table">
                <div
                  className="league-table league-table-static"
                  data-identity={71}
                >
                  <table>
                    <thead>
                      <tr>
                        <td className="header color-7" colSpan={10}>
                          جدول گروه A
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
                        <td className="text-center">استقلال</td>
                        <td className="text-center">3</td>
                        <td className="text-center">6</td>
                      </tr>
                      <tr className="alt">
                        <td>2</td>
                        <td className="text-center">الاهلی امارات</td>
                        <td className="text-center">3</td>
                        <td className="text-center">4</td>
                      </tr>
                      <tr className>
                        <td>3</td>
                        <td className="text-center">التعاون عربستان</td>
                        <td className="text-center">3</td>
                        <td className="text-center">4</td>
                      </tr>
                      <tr className="alt">
                        <td>4</td>
                        <td className="text-center">لوکوموتیو تاشکند</td>
                        <td className="text-center">3</td>
                        <td className="text-center">3</td>
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
              مشاهده جدول کامل گروه A
            </a>
          </div>
          <div className="box-footer" />
        </div>
        <div
          className="widget"
          data-scroll={0}
          id="widget53"
          data-widgetstageid="5/293"
        >
          <div className="widget-header">
            <h1>لیگ قهرمانان اروپا</h1>
          </div>
          <div className="widget-toolbar">
            <div className="league-selector">
              <select data-type="league-select">
                <option value="5/203">گروه A</option>
                <option value="5/204">گروه B</option>
                <option value="5/205">گروه C</option>
                <option value="5/206">گروه D</option>
                <option value="5/207">گروه E</option>
                <option value="5/208">گروه F</option>
                <option value="5/209">گروه G</option>
                <option value="5/210">گروه H</option>
                <option value="5/268">یک هشتم نهایی</option>
                <option value="5/293" selected>
                  یک چهارم نهایی
                </option>
              </select>
            </div>
          </div>
          <div className="widget-content md-padding">
            <div className="custom-scroll-area">
              <div className="custom-scroll-area--fixtures">
                <div
                  className="league-table fixtures-list-static"
                  data-identity={53}
                >
                  <table>
                    <thead>
                      <tr>
                        <th className="header color-5" colSpan={10}>
                          یک چهارم نهایی
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="sub-header" colSpan={10}>
                          
                         {hits.world_cup_desc}
                        </td>
                      </tr>
                     
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="custom-scroll-area--league-table" />
            </div>
            <div className="clr" />
          </div>
          <div className="box-footer" />
        </div>
        <div
          className="widget"
          data-scroll={0}
          id="widget54"
          data-widgetstageid="5/294"
        >
          <div className="widget-header">
            <h1>لیگ اروپا</h1>
          </div>
          <div className="widget-toolbar">
            <div className="league-selector">
              <select data-type="league-select">
                <option value="5/211">گروه A</option>
                <option value="5/212">گروه B</option>
                <option value="5/213">گروه C</option>
                <option value="5/214">گروه D</option>
                <option value="5/215">گروه E</option>
                <option value="5/216">گروه F</option>
                <option value="5/217">گروه G</option>
                <option value="5/218">گروه H</option>
                <option value="5/219">گروه I</option>
                <option value="5/220">گروه J</option>
                <option value="5/221">گروه K</option>
                <option value="5/222">گروه L</option>
                <option value="5/269">يک شانزدهم نهايي</option>
                <option value="5/291">یک هشتم نهایی</option>
                <option value="5/294" selected>
                  یک چهارم نهایی
                </option>
              </select>
            </div>
          </div>
          <div className="widget-content md-padding">
            <div className="custom-scroll-area">
              <div className="custom-scroll-area--fixtures">
                <div
                  className="league-table fixtures-list-static"
                  data-identity={54}
                >
                  <table>
                    <thead>
                      <tr>
                        <th className="header color-5" colSpan={10}>
                          یک چهارم نهایی
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="sub-header" colSpan={10}>
                          {" "}
                          پنجشنبه 24 فروردین 1396
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left">اندرلخت</td>
                        <td className="text-center sm-padding text-nowrap league-table--match-result">
                          -
                        </td>
                        <td className="text-right">منچستریونایتد</td>
                        <td className="text-left matchtime">23:35 </td>
                      </tr>
                      <tr>
                        <td className="text-left">سلتاویگو</td>
                        <td className="text-center sm-padding text-nowrap league-table--match-result">
                          -
                        </td>
                        <td className="text-right">خنک</td>
                        <td className="text-left matchtime">23:35 </td>
                      </tr>
                      <tr>
                        <td className="text-left">آژاکس</td>
                        <td className="text-center sm-padding text-nowrap league-table--match-result">
                          -
                        </td>
                        <td className="text-right">شالکه</td>
                        <td className="text-left matchtime">23:35 </td>
                      </tr>
                      <tr>
                        <td className="text-left">لیون</td>
                        <td className="text-center sm-padding text-nowrap league-table--match-result">
                          -
                        </td>
                        <td className="text-right">بشیکتاش</td>
                        <td className="text-left matchtime">23:35 </td>
                      </tr>
                      <tr>
                        <td className="sub-header" colSpan={10}>
                          {" "}
                          پنجشنبه 31 فروردین 1396
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left">منچستریونایتد</td>
                        <td className="text-center sm-padding text-nowrap league-table--match-result">
                          -
                        </td>
                        <td className="text-right">اندرلخت</td>
                        <td className="text-left matchtime">23:35 </td>
                      </tr>
                      <tr>
                        <td className="text-left">خنک</td>
                        <td className="text-center sm-padding text-nowrap league-table--match-result">
                          -
                        </td>
                        <td className="text-right">سلتاویگو</td>
                        <td className="text-left matchtime">23:35 </td>
                      </tr>
                      <tr>
                        <td className="text-left">شالکه</td>
                        <td className="text-center sm-padding text-nowrap league-table--match-result">
                          -
                        </td>
                        <td className="text-right">آژاکس</td>
                        <td className="text-left matchtime">23:35 </td>
                      </tr>
                      <tr>
                        <td className="text-left">بشیکتاش</td>
                        <td className="text-center sm-padding text-nowrap league-table--match-result">
                          -
                        </td>
                        <td className="text-right">لیون</td>
                        <td className="text-left matchtime">23:35 </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="custom-scroll-area--league-table" />
            </div>
            <div className="clr" />
          </div>
          <div className="box-footer" />
        </div>
      </div>

    );
  }
}

export default Center;


