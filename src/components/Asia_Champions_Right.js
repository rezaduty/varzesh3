import React from "react";

class Asia_Champions_Right extends React.Component {
  render() {
    return (
      


<div className="col-left">
                  <div className="widget">
                    <div className="widget-header">لیگ قهرمانان آسیا </div>
                    <div className="widget-toolbar">
                      <select className="leag-selector" name="leag">
                        <option value="5/470">فینال</option>
                        <option value="5/498">لیگ B</option>
                        <option value="5/478">لیگ C</option>
                      </select>
                    </div>
                    <div className="widget-content">
                      <div className="custom-scrool">
                        <div className="leag-table">
                          <table className="graytable">
                            <thead>
                              <tr>
                                <th className="thead theadred" colSpan={10}>
                                  فینال
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr colSpan={10}>
                                {" "}
                                <td>پنجشنبه 15 شهریور 1397</td>
                              </tr>
                              <tr colSpan={10}>
                                <td> 15:00 فولاد- تهران</td>{" "}
                              </tr>
                              <tr colSpan={10}>
                                <td>پنجشنبه 15 شهریور 1397</td>{" "}
                              </tr>
                              <tr colSpan={10}>
                                <td> 15:00 فولاد- تهران</td>{" "}
                              </tr>
                              <tr colSpan={10}>
                                <td> پنجشنبه 15 شهریور 1397</td>{" "}
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    );
  }
}

export default Asia_Champions_Right;


