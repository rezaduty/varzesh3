import React from "react";

class Europe_League_Left extends React.Component {
  render() {
    return (
     
<div className="widget">
          <div className="widget-header">لیگ های اروپایی </div>
          <div className="widget-toolbar">
            <select className="leag-selector" name="leag">
              <option value="5/470">لیگ برتر انگلیس</option>
              <option value="5/498">برتر اسپانیا</option>
              <option value="5/478">لیگ فرانسه</option>
            </select>
          </div>
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
              <div className="leag-table">
                <table>
                  <thead>
                    <tr>
                      <th className="thead theadblue2" colSpan={10}>
                        {" "}
                        لیگ برتر انگلیس
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="thead theadgray" colSpan={10}>
                      {" "}
                      <td>جمعه 2 آذر97</td>
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
                    <tr colSpan={10}>
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
                    <tr colSpan={10}>
                      <td> 15:00 فولاد- تهران</td>{" "}
                    </tr>
                    <tr colSpan={10}>
                      <td> 15:00 فولاد- تهران</td>{" "}
                    </tr>
                    <tr colSpan={10}>
                      {" "}
                      <td>جمعه 2 آذر97</td>
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
                    <tr colSpan={10}>
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
                    <tr colSpan={10}>
                      <td> 15:00 فولاد- تهران</td>{" "}
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

export default Europe_League_Left;


