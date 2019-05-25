import React from "react";

class UEFA_Right extends React.Component {
  render() {
    return (
      

 <div className="widget">
                    <div className="widget-header">لیگ ملت های اروپا </div>
                    <div className="widget-toolbar">
                      <select className="leag-selector" name="leag">
                        <option value="5/470">لیگ A</option>
                        <option value="5/498">لیگ B</option>
                        <option value="5/478">لیگ C</option>
                      </select>
                    </div>
                    <div className="widget-toolbar">
                      <select className="leag-selector" name="week">
                        <option value={1}>گروه اول</option>
                        <option value={2}>گروه دوم</option>
                        <option value={3}>گروه سوم</option>
                        <option value={4}>گروه چهارم</option>
                      </select>
                    </div>
                    <div className="widget-content">
                      <div className="custom-scrool">
                        <div className="leag-table">
                          <table className="graytable">
                            <thead>
                              <tr>
                                <th className="thead theadgreen" colSpan={10}>
                                  گروه 1
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
                              <tr colSpan={10}>
                                <td> 15:00 فولاد- تهران</td>{" "}
                              </tr>
                              <tr colSpan={10}>
                                <td> پنجشنبه 15 شهریور 1397</td>{" "}
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
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="widget-content">
                      <div className="custom-scrool">
                        <div className="leag-table">
                          <table>
                            <thead>
                              <tr>
                                <th className="thead theadgreen" colSpan={10}>
                                  گروه 1جدول{" "}
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="thead theadgray" colSpan={10}>
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
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
    );
  }
}

export default UEFA_Right;


