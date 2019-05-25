
import React from "react";

class Basketball extends React.Component {
  render() {
    return (
      
<div className="widget">
          <div className="widget-header">لیگ برتر بسکتبال </div>
          <div className="widget-toolbar">
            <label>انتخاب هفته:</label>
            <select className="leag-selector" name="week">
              <option value={1}>هفته اول</option>
              <option value={2}>هفته دوم</option>
              <option value={3}>هفته سوم</option>
              <option value={4}>هفته چهارم</option>
              <option value={5}>هفته پنجم</option>
            </select>
          </div>
          <div className="widget-content">
            <div className="custom-scrool">
              <div className="leag-table ">
                <table className="valibal">
                  <thead>
                    <tr>
                      <th className="thead theadyellow" colSpan={10}>
                        لیگ برتر بسکتبال ایران
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="thead theadgray" colSpan={8}>
                      {" "}
                      <td>جمعه 2 آذر97</td>
                    </tr>
                    <tr className="thead theadgray" colSpan={8}>
                      <td> 15:00 فولاد- تهران</td>{" "}
                    </tr>
                    <tr>
                      <td> 15:00 فولاد- تهران</td>{" "}
                    </tr>
                    <tr>
                      <td> 15:00 فولاد- تهران</td>{" "}
                    </tr>
                    <tr colSpan={10}>
                      <td> 15:00 فولاد- تهران</td>{" "}
                    </tr>
                    <tr colSpan={10}>
                      <td> 15:00 فولاد- تهران</td>{" "}
                    </tr>
                    <tr colSpan={10}>
                      <td> 15:00 فولاد- تهران</td>{" "}
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="leag-table ">
                <table>
                  <thead>
                    <tr>
                      <th className="thead theadyellow" colSpan={10}>
                        جدول لیگ برتر بسکتبال ایران
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="thead theadgray" colSpan={8}>
                      {" "}
                      <td>جمعه 2 آذر97</td>
                    </tr>
                    <tr colSpan={8}>
                      <td> 6 شهروند اراک 8 5</td>{" "}
                    </tr>
                    <tr colSpan={10}>
                      <td>6 شهروند اراک 8 5</td>{" "}
                    </tr>
                    <tr colSpan={10}>
                      <td> 6 شهروند اراک 8 5</td>{" "}
                    </tr>
                    <tr colSpan={10}>
                      <td> 6 شهروند اراک 8 5</td>{" "}
                    </tr>
                    <tr colSpan={10}>
                      <td> 6 شهروند اراک 8 5</td>{" "}
                    </tr>
                    <tr colSpan={8}>
                      <td> 6 شهروند اراک 8 5</td>{" "}
                    </tr>
                    <tr colSpan={10}>
                      <td> 6 شهروند اراک 8 5</td>{" "}
                    </tr>
                    <tr colSpan={10}>
                      <td> 6 شهروند اراک 8 5</td>{" "}
                    </tr>
                    <tr colSpan={10}>
                      <td> 6 شهروند اراک 8 5</td>{" "}
                    </tr>
                    <tr colSpan={10}>
                      <td> 6 شهروند اراک 8 5</td>{" "}
                    </tr>
                    <tr colSpan={10}>
                      <td> 6 شهروند اراک 8 5</td>{" "}
                    </tr>
                    <tr colSpan={10}>
                      <td> 6 شهروند اراک 8 5</td>{" "}
                    </tr>
                    <tr colSpan={10}>
                      <td> 6 شهروند اراک 8 5</td>{" "}
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

export default Basketball;


