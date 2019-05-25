import React from "react";

class Football_Goal_Scorers extends React.Component {
  render() {
    return (
      


 <div className="col-left">
                  <div className="widget">
                    <div className="widget-header">گلزنان برتر</div>
                    <div className="widget-toolbar">
                      <label>انتخاب لیگ:</label>
                      <select className="leag-selector" name="week">
                        <option value={1}>لیگ برتر ایران </option>
                        <option value={2}>لیگ برتر انگلیس</option>
                        <option value={3}>لیگ قهرمانان اروپا</option>
                      </select>
                    </div>
                    <div className="widget-content">
                      <div className="custom-scrool">
                        <div className="leag-table ">
                          <table className="valibal row-color">
                            <tbody>
                              <tr>
                                <td className="center-red">
                                  {" "}
                                  <span>
                                    <img src="imgs/ball.png" alt="ball" /> گل 9
                                  </span>{" "}
                                </td>
                                <td> کی روش استایلر (سپاهان) </td>
                              </tr>
                              <tr>
                                {" "}
                                <td
                                  style={{
                                    textAlign: "center",
                                    color: "white",
                                    backgroundColor: "#999"
                                  }}
                                >
                                  {" "}
                                  <span> گل 8</span>{" "}
                                </td>
                                <td> کی روش استایلر (سپاهان) </td>{" "}
                              </tr>
                              <tr>
                                {" "}
                                <td
                                  style={{
                                    verticalAlign: "middle",
                                    textAlign: "center",
                                    color: "white",
                                    backgroundColor: "#767676"
                                  }}
                                >
                                  {" "}
                                  <span> گل5</span>{" "}
                                </td>
                                <td>
                                  {" "}
                                  <div>یونس شاکری (پدیده)</div>
                                  <div>یونس شاکری (پدیده)</div>
                                  <div>یونس شاکری (پدیده)</div>
                                  <div>یونس شاکری (پدیده)</div>
                                  <div>یونس شاکری (پدیده)</div>
                                </td>
                              </tr>
                              <tr>
                                {" "}
                                <td
                                  style={{
                                    verticalAlign: "middle",
                                    textAlign: "center",
                                    color: "white",
                                    backgroundColor: "#999"
                                  }}
                                >
                                  {" "}
                                  <span>گل4</span>{" "}
                                </td>
                                <td>
                                  {" "}
                                  <div>علی دشتی(سایپا)</div>
                                  <div>علی دشتی(سایپا)</div>
                                  <div>علی دشتی(سایپا)</div>
                                  <div>علی دشتی(سایپا)</div>
                                  <div>علی دشتی(سایپا)</div>
                                  <div>علی دشتی(سایپا)</div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="widget">
                      <div className="widget-header">بهترین پاسورها</div>
                      <div className="widget-toolbar">
                        <label>انتخاب لیگ:</label>
                        <select className="leag-selector" name="week">
                          <option value={1}>لیگ برتر ایران </option>
                          <option value={2}>لیگ برتر انگلیس</option>
                          <option value={3}>لیگ قهرمانان اروپا</option>
                        </select>
                      </div>
                      <div className="widget-content">
                        <div className="custom-scrool">
                          <div className="leag-table ">
                            <table className="valibal row-color">
                              <tbody>
                                <tr>
                                  <td className="center-red">
                                    {" "}
                                    <span>
                                      <img src="imgs/assist-1.png" alt="ball" />{" "}
                                      پاس 9
                                    </span>{" "}
                                  </td>
                                  <td> کی روش استایلر (سپاهان) </td>
                                </tr>
                                <tr>
                                  {" "}
                                  <td
                                    style={{
                                      textAlign: "center",
                                      color: "white",
                                      backgroundColor: "#999"
                                    }}
                                  >
                                    {" "}
                                    <span>پاس 8</span>{" "}
                                  </td>
                                  <td> کی روش استایلر (سپاهان) </td>{" "}
                                </tr>
                                <tr>
                                  {" "}
                                  <td
                                    style={{
                                      verticalAlign: "middle",
                                      textAlign: "center",
                                      color: "white",
                                      backgroundColor: "#767676"
                                    }}
                                  >
                                    {" "}
                                    <span> پاس 5</span>{" "}
                                  </td>
                                  <td>
                                    {" "}
                                    <div>یونس شاکری (پدیده)</div>
                                    <div>یونس شاکری (پدیده)</div>
                                    <div>یونس شاکری (پدیده)</div>
                                    <div>یونس شاکری (پدیده)</div>
                                    <div>یونس شاکری (پدیده)</div>
                                  </td>
                                </tr>
                                <tr>
                                  {" "}
                                  <td
                                    style={{
                                      verticalAlign: "middle",
                                      textAlign: "center",
                                      color: "white",
                                      backgroundColor: "#999"
                                    }}
                                  >
                                    {" "}
                                    <span> گل 4 </span>{" "}
                                  </td>
                                  <td>
                                    {" "}
                                    <div>علی دشتی(سایپا)</div>
                                    <div>علی دشتی(سایپا)</div>
                                    <div>علی دشتی(سایپا)</div>
                                    <div>علی دشتی(سایپا)</div>
                                    <div>علی دشتی(سایپا)</div>
                                    <div>علی دشتی(سایپا)</div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    );
  }
}

export default Football_Goal_Scorers;


