import React from "react";

class Top_News_Right extends React.Component {
  render() {
    return (
      

<div className="first-column-right">
                <div className="news-slider-wide wide">
                  <div className="news-sliderfixtext"> مهمترین اخبار</div>
                  <div className="owl-stage-outer">
                    <div
                      className="box1"
                      style={{
                        width: "521px",
                        height: "163px"
                      }}
                    >
                      <div className="imgs">
                        <a href>
                          <img
                            width="246px"
                            height="163px"
                            src="imgs/01355692.jpg"
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
                        <div className="title">
                          سه شیرها راهی نیمه نهایی شدند؛
                        </div>
                        <div className="h1">
                          {" "}
                          <a href="#">پشت پرده انتشار ویدیوعادل </a>{" "}
                        </div>
                        <p className="ptitle">
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفه
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="owl-nav">
                    <div className="owl-prev" />
                    <div className="owl-next"> </div>
                  </div>
                  <div className="owl-dots">
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                  </div>
                </div>
                </div>
    );
  }
}

export default Top_News_Right;


