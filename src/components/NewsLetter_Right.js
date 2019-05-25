import React from "react";

class NewsLetter_Right extends React.Component {
  render() {
    return (
      


   <div className="col-left">
                  <div className="widget">
                    <div className="widget-header">گیشه روزنامه ورزشی</div>
                    <div className="widget-cont">
                      <div className="tabslider">
                        <div className="recent-news ">
                          <div className="news-slider-wide wide2">
                            <div className="owl-stage-outer">
                              <div
                                className="box1"
                                style={{
                                  width: "100%",
                                  height: "163px"
                                }}
                              >
                                <div className="imgs2">
                                  <a href>
                                    <img
                                      width="100%"
                                      height="163px"
                                      src="imgs/01353937.jpg"
                                      alt="\u0627\u0646\u06AF\u0644\u06CC\u06332"
                                    />
                                  </a>
                                  <div className="caption-show">
                                    {" "}
                                    <i
                                      style={{
                                        fontSize: "14px"
                                      }}
                                      className="far"
                                    >
                                      6 ساعت پیش 
                                    </i>
                                  </div>
                                </div>
                                <div className="content">
                                  <p className="ptitle">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفه
                                  </p>
                                </div>
                              </div>
                              <div className="owl-nav2">
                                <div className="owl-prev" />
                                <div className="owl-next"> </div>
                              </div>
                              <div className="owl-dots2">
                                <div className="dot" />
                                <div className="dot" />
                                <div className="dot" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    );
  }
}

export default NewsLetter_Right;


