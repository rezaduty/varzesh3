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
            <li onClick={this} data-toggle="mostRecentNews" className="active">
              جدیدترین ها
            </li>
            <li onClick={this} data-toggle="mostViewedNews">
              پربازدیدترین ها
            </li>
            <li onClick={this} data-toggle="mostCommentedNews">
              پرحاشیه ترین ها
            </li>
          </ul>
        </div>
        <div className="tab-content" data-scroll={5} data-scrolltype={2}>
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
              <div className="custom-scroll-area">
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
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405146/\u062F\u06CC\u062F\u0646\u06CC-\u062A\u0631\u06CC\u0646-\u0648-\u0628\u0631\u062A\u0631\u06CC\u0646-\u06AF\u0644\u0647\u0627\u06CC-\u0627\u0646\u0641\u0631\u0627\u062F\u06CC"
                      title="\u062F\u06CC\u062F\u0646\u06CC \u062A\u0631\u06CC\u0646 \u0648 \u0628\u0631\u062A\u0631\u06CC\u0646 \u06AF\u0644\u0647\u0627\u06CC \u0627\u0646\u0641\u0631\u0627\u062F\u06CC"
                    >
                      دیدنی ترین و برترین گلهای انفرادی
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405145/\u0628\u0627\u0626\u0648\u0633\u0627-\u0631\u0641\u062A\u0627\u0631-\u0641\u06CC\u0641\u0627-\u062F\u0631-\u0642\u0628\u0627\u0644-\u0645\u0633\u06CC-\u0639\u062C\u06CC\u0628-\u0628\u0648\u062F"
                      title="\u0628\u0627\u0626\u0648\u0633\u0627: \u0631\u0641\u062A\u0627\u0631 \u0641\u06CC\u0641\u0627 \u062F\u0631 \u0642\u0628\u0627\u0644 \u0645\u0633\u06CC \u0639\u062C\u06CC\u0628 \u0628\u0648\u062F"
                    >
                      بائوسا: رفتار فیفا در قبال مسی عجیب بود
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405144/\u062D\u0627\u0644-\u0648-\u0647\u0648\u0627\u06CC-\u0645\u0633\u06CC-\u062F\u0631-\u0628\u0627\u0632\u06CC-\u0628\u0648\u0644\u06CC\u0648\u06CC-\u0627\u0631\u0698\u0627\u0646\u062A\u06CC\u0646"
                      title="\u062D\u0627\u0644 \u0648 \u0647\u0648\u0627\u06CC \u0645\u0633\u06CC \u062F\u0631 \u0628\u0627\u0632\u06CC \u0628\u0648\u0644\u06CC\u0648\u06CC - \u0627\u0631\u0698\u0627\u0646\u062A\u06CC\u0646"
                    >
                      حال و هوای مسی در بازی بولیوی - ارژانتین
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405142/\u062E\u0644\u0627\u0635\u0647-\u0628\u0627\u0632\u06CC-\u067E\u0631\u0648-2-1-\u0627\u0631\u0648\u06AF\u0648\u0626\u0647"
                      title="\u062E\u0644\u0627\u0635\u0647 \u0628\u0627\u0632\u06CC \u067E\u0631\u0648 2-1 \u0627\u0631\u0648\u06AF\u0648\u0626\u0647"
                    >
                      خلاصه بازی پرو 2-1 اروگوئه
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405141/\u0645\u0631\u06AF-\u062A\u062F\u0631\u06CC\u062C\u06CC-\u0641\u0648\u062A\u0628\u0627\u0644-\u0647\u0644\u0646\u062F-\u0686\u0631\u0627-\u0648-\u0686\u06AF\u0648\u0646\u0647\u061F"
                      title="\u0645\u0631\u06AF \u062A\u062F\u0631\u06CC\u062C\u06CC \u0641\u0648\u062A\u0628\u0627\u0644 \u0647\u0644\u0646\u062F: \u0686\u0631\u0627 \u0648 \u0686\u06AF\u0648\u0646\u0647\u061F"
                    >
                      مرگ تدریجی فوتبال هلند: چرا و چگونه؟
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405140/\u062A\u0631\u0642\u0647\u200C\u0627\u06CC-\u06A9\u0647-\u0631\u0648\u06CC-\u0633\u0631-\u06A9\u0645\u06A9-\u062F\u0627\u0648\u0631-\u062A\u0631\u06A9\u06CC\u062F(\u06AF\u0632\u0627\u0631\u0634-\u062A\u0635\u0648\u06CC\u0631\u06CC)"
                      title="\u062A\u0631\u0642\u0647\u200C\u0627\u06CC \u06A9\u0647 \u0631\u0648\u06CC \u0633\u0631 \u06A9\u0645\u06A9 \u062F\u0627\u0648\u0631 \u062A\u0631\u06A9\u06CC\u062F(\u06AF\u0632\u0627\u0631\u0634 \u062A\u0635\u0648\u06CC\u0631\u06CC)"
                    >
                      ترقه‌ای که روی سر کمک داور ترکید(گزارش تصویری)
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405143/\u0627\u0648\u0644\u06CC\u0646-\u0645\u0633\u0627\u0641\u0631\u0627\u0646-\u062C\u0627\u0645-\u062C\u0647\u0627\u0646\u06CC\u061B-\u0628\u0631\u0632\u06CC\u0644-100-\u0627\u06CC\u0631\u0627\u0646-99!"
                      title="\u0627\u0648\u0644\u06CC\u0646 \u0645\u0633\u0627\u0641\u0631\u0627\u0646 \u062C\u0627\u0645 \u062C\u0647\u0627\u0646\u06CC\u061B \u0628\u0631\u0632\u06CC\u0644 100 - \u0627\u06CC\u0631\u0627\u0646 99!"
                    >
                      اولین مسافران جام جهانی؛ برزیل 100 - ایران 99!
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405139/\u062E\u0644\u0627\u0635\u0647-\u0628\u0627\u0632\u06CC-\u0628\u0631\u0632\u06CC\u0644-3-0-\u067E\u0627\u0631\u0627\u06AF\u0648\u0626\u0647"
                      title="\u062E\u0644\u0627\u0635\u0647 \u0628\u0627\u0632\u06CC \u0628\u0631\u0632\u06CC\u0644 3-0 \u067E\u0627\u0631\u0627\u06AF\u0648\u0626\u0647"
                    >
                      خلاصه بازی برزیل 3-0 پاراگوئه
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405138/\u062E\u0644\u0627\u0635\u0647-\u0628\u0627\u0632\u06CC-\u0634\u06CC\u0644\u06CC-3-1-\u0648\u0646\u0632\u0648\u0626\u0644\u0627-(\u0633\u0648\u067E\u0631\u06AF\u0644-\u0633\u0627\u0646\u0686\u0632)"
                      title="\u062E\u0644\u0627\u0635\u0647 \u0628\u0627\u0632\u06CC \u0634\u06CC\u0644\u06CC 3-1 \u0648\u0646\u0632\u0648\u0626\u0644\u0627 (\u0633\u0648\u067E\u0631\u06AF\u0644 \u0633\u0627\u0646\u0686\u0632)"
                    >
                      خلاصه بازی شیلی 3-1 ونزوئلا (سوپرگل سانچز)
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405137/\u062E\u0644\u0627\u0635\u0647-\u0628\u0627\u0632\u06CC-\u0627\u06A9\u0648\u0627\u062F\u0648\u0631-0-2-\u06A9\u0644\u0645\u0628\u06CC\u0627"
                      title="\u062E\u0644\u0627\u0635\u0647 \u0628\u0627\u0632\u06CC \u0627\u06A9\u0648\u0627\u062F\u0648\u0631 0-2 \u06A9\u0644\u0645\u0628\u06CC\u0627"
                    >
                      خلاصه بازی اکوادور 0-2 کلمبیا
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405136/\u062E\u0644\u0627\u0635\u0647-\u0628\u0627\u0632\u06CC-\u0628\u0648\u0644\u06CC\u0648\u06CC-2-0-\u0622\u0631\u0698\u0627\u0646\u062A\u06CC\u0646"
                      title="\u062E\u0644\u0627\u0635\u0647 \u0628\u0627\u0632\u06CC \u0628\u0648\u0644\u06CC\u0648\u06CC 2-0 \u0622\u0631\u0698\u0627\u0646\u062A\u06CC\u0646"
                    >
                      خلاصه بازی بولیوی 2-0 آرژانتین
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405134/\u0628\u0648\u0644\u06CC\u0648\u06CC-2-0\u0622\u0631\u0698\u0627\u0646\u062A\u06CC\u0646\u061B-\u0645\u062C\u0627\u0632\u0627\u062A-\u0628\u062F\u0648\u0646-\u0645\u0633\u06CC"
                      title="\u0628\u0648\u0644\u06CC\u0648\u06CC 2-0\u0622\u0631\u0698\u0627\u0646\u062A\u06CC\u0646\u061B \u0645\u062C\u0627\u0632\u0627\u062A \u0628\u062F\u0648\u0646 \u0645\u0633\u06CC"
                    >
                      بولیوی 2-0آرژانتین؛ مجازات بدون مسی
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405135/\u06AF\u0644\u0647\u0627\u06CC-\u0628\u0627\u0632\u06CC-\u0627\u062A\u0631\u06CC\u0634-1-1-\u0641\u0646\u0644\u0627\u0646\u062F"
                      title="\u06AF\u0644\u0647\u0627\u06CC \u0628\u0627\u0632\u06CC \u0627\u062A\u0631\u06CC\u0634 1-1 \u0641\u0646\u0644\u0627\u0646\u062F"
                    >
                      گلهای بازی اتریش 1-1 فنلاند
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405133/\u062E\u0644\u0627\u0635\u0647-\u0628\u0627\u0632\u06CC-\u0639\u0631\u0628\u0633\u062A\u0627\u0646-1-0-\u0639\u0631\u0627\u0642"
                      title="\u062E\u0644\u0627\u0635\u0647 \u0628\u0627\u0632\u06CC \u0639\u0631\u0628\u0633\u062A\u0627\u0646 1-0 \u0639\u0631\u0627\u0642"
                    >
                      خلاصه بازی عربستان 1-0 عراق
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405132/\u062E\u0644\u0627\u0635\u0647-\u0628\u0627\u0632\u06CC-\u0641\u0631\u0627\u0646\u0633\u0647-0-2-\u0627\u0633\u067E\u0627\u0646\u06CC\u0627"
                      title="\u062E\u0644\u0627\u0635\u0647 \u0628\u0627\u0632\u06CC \u0641\u0631\u0627\u0646\u0633\u0647 0-2 \u0627\u0633\u067E\u0627\u0646\u06CC\u0627"
                    >
                      خلاصه بازی فرانسه 0-2 اسپانیا
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405131/\u0628\u0631\u062A\u0631\u06CC-\u0627\u0633\u067E\u0627\u0646\u06CC\u0627-\u0628\u0631\u0627\u0628\u0631-\u0641\u0631\u0627\u0646\u0633\u0647-\u0628\u0627-\u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC-\u0628\u0627\u0632\u0628\u06CC\u0646\u06CC-\u0635\u062D\u0646\u0647!"
                      title="\u0628\u0631\u062A\u0631\u06CC \u0627\u0633\u067E\u0627\u0646\u06CC\u0627 \u0628\u0631\u0627\u0628\u0631 \u0641\u0631\u0627\u0646\u0633\u0647 \u0628\u0627 \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0628\u0627\u0632\u0628\u06CC\u0646\u06CC \u0635\u062D\u0646\u0647!"
                    >
                      برتری اسپانیا برابر فرانسه با تکنولوژی بازبینی صحنه!
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405130/\u062E\u0644\u0627\u0635\u0647-\u0628\u0627\u0632\u06CC-\u067E\u0631\u062A\u063A\u0627\u0644-2-3-\u0633\u0648\u0626\u062F"
                      title="\u062E\u0644\u0627\u0635\u0647 \u0628\u0627\u0632\u06CC \u067E\u0631\u062A\u063A\u0627\u0644 2-3 \u0633\u0648\u0626\u062F"
                    >
                      خلاصه بازی پرتغال 2-3 سوئد
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405129/\u06AF\u0644-\u062F\u0644\u0648\u0641\u0626\u0648\u061B-\u0641\u0631\u0627\u0646\u0633\u0647-\u0627\u0633\u067E\u0627\u0646\u06CC\u0627"
                      title="\u06AF\u0644 \u062F\u0644\u0648\u0641\u0626\u0648\u061B \u0641\u0631\u0627\u0646\u0633\u0647 - \u0627\u0633\u067E\u0627\u0646\u06CC\u0627"
                    >
                      گل دلوفئو؛ فرانسه - اسپانیا
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405128/\u0627\u062F\u0627\u0645\u0647-\u0628\u062D\u0631\u0627\u0646-\u0647\u0644\u0646\u062F-\u0628\u0627-\u0634\u06A9\u0633\u062A-\u0628\u0631\u0627\u0628\u0631-\u0627\u06CC\u062A\u0627\u0644\u06CC\u0627"
                      title="\u0627\u062F\u0627\u0645\u0647 \u0628\u062D\u0631\u0627\u0646 \u0647\u0644\u0646\u062F \u0628\u0627 \u0634\u06A9\u0633\u062A \u0628\u0631\u0627\u0628\u0631 \u0627\u06CC\u062A\u0627\u0644\u06CC\u0627"
                    >
                      ادامه بحران هلند با شکست برابر ایتالیا
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405127/\u062E\u0644\u0627\u0635\u0647-\u0628\u0627\u0632\u06CC-\u0647\u0644\u0646\u062F-1-2-\u0627\u06CC\u062A\u0627\u0644\u06CC\u0627"
                      title="\u062E\u0644\u0627\u0635\u0647 \u0628\u0627\u0632\u06CC \u0647\u0644\u0646\u062F 1-2 \u0627\u06CC\u062A\u0627\u0644\u06CC\u0627"
                    >
                      خلاصه بازی هلند 1-2 ایتالیا
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405126/\u06AF\u0644-\u062F\u0627\u0648\u06CC\u062F-\u0633\u06CC\u0644\u0648\u0627\u061B-\u0641\u0631\u0627\u0646\u0633\u0647-\u0627\u0633\u067E\u0627\u0646\u06CC\u0627"
                      title="\u06AF\u0644 \u062F\u0627\u0648\u06CC\u062F \u0633\u06CC\u0644\u0648\u0627\u061B \u0641\u0631\u0627\u0646\u0633\u0647 - \u0627\u0633\u067E\u0627\u0646\u06CC\u0627"
                    >
                      گل داوید سیلوا؛ فرانسه - اسپانیا
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405125/\u062E\u0644\u0627\u0635\u0647-\u0628\u0627\u0632\u06CC-\u0627\u0633\u062A\u0648\u0646\u06CC-3-0-\u06A9\u0631\u0648\u0627\u0633\u06CC"
                      title="\u062E\u0644\u0627\u0635\u0647 \u0628\u0627\u0632\u06CC \u0627\u0633\u062A\u0648\u0646\u06CC 3-0 \u06A9\u0631\u0648\u0627\u0633\u06CC"
                    >
                      خلاصه بازی استونی 3-0 کرواسی
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405124/\u062A\u0634\u0648\u06CC\u0642-\u0627\u06CC\u0633\u0644\u0646\u062F\u06CC-\u0647\u0648\u0627\u062F\u0627\u0631\u0627\u0646-\u062F\u0631-\u0628\u0627\u0632\u06CC-\u0627\u06CC\u0631\u0627\u0646-\u0686\u06CC\u0646"
                      title="\u062A\u0634\u0648\u06CC\u0642 \u0627\u06CC\u0633\u0644\u0646\u062F\u06CC \u0647\u0648\u0627\u062F\u0627\u0631\u0627\u0646 \u062F\u0631 \u0628\u0627\u0632\u06CC \u0627\u06CC\u0631\u0627\u0646 - \u0686\u06CC\u0646"
                    >
                      تشویق ایسلندی هواداران در بازی ایران - چین
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405119/\u0641\u0631\u06AF\u0648\u0633\u0646-\u0645\u0648\u0631\u06CC\u0646\u06CC\u0648-\u062F\u0631-\u06CC\u0648\u0646\u0627\u06CC\u062A\u062F-\u0628\u062F\u0634\u0627\u0646\u0633-\u0628\u0648\u062F\u0647-\u0627\u0633\u062A"
                      title="\u0641\u0631\u06AF\u0648\u0633\u0646: \u0645\u0648\u0631\u06CC\u0646\u06CC\u0648 \u062F\u0631 \u06CC\u0648\u0646\u0627\u06CC\u062A\u062F \u0628\u062F\u0634\u0627\u0646\u0633 \u0628\u0648\u062F\u0647 \u0627\u0633\u062A"
                    >
                      فرگوسن: مورینیو در یونایتد بدشانس بوده است
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405123/\u06AF\u0644-\u0644\u0626\u0648\u0646\u0627\u0631\u062F\u0648-\u0628\u0648\u0646\u0648\u0686\u06CC\u061B-\u0647\u0644\u0646\u062F-\u0627\u06CC\u062A\u0627\u0644\u06CC\u0627"
                      title="\u06AF\u0644 \u0644\u0626\u0648\u0646\u0627\u0631\u062F\u0648 \u0628\u0648\u0646\u0648\u0686\u06CC\u061B \u0647\u0644\u0646\u062F - \u0627\u06CC\u062A\u0627\u0644\u06CC\u0627"
                    >
                      گل لئوناردو بونوچی؛ هلند - ایتالیا
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404990/\u06AF\u0632\u0627\u0631\u0634-\u06A9\u0627\u0645\u0644-\u0627\u0632-\u062C\u0646\u06AF-\u063A\u0648\u0644\u200C\u0647\u0627\u06CC-\u0622\u0633\u06CC\u0627\u06CC\u06CC-\u0628\u0631\u0627\u06CC-\u062C\u0627\u0645-2018"
                      title="\u06AF\u0632\u0627\u0631\u0634 \u06A9\u0627\u0645\u0644 \u0627\u0632 \u062C\u0646\u06AF \u063A\u0648\u0644\u200C\u0647\u0627\u06CC \u0622\u0633\u06CC\u0627\u06CC\u06CC \u0628\u0631\u0627\u06CC \u062C\u0627\u0645 2018"
                    >
                      گزارش کامل از جنگ غول‌های آسیایی برای جام 2018
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405122/\u062A\u0631\u06A9\u06CC\u0628-\u0627\u0635\u0644\u06CC-\u0628\u0648\u0644\u06CC\u0648\u06CC-\u2013-\u0622\u0631\u0698\u0627\u0646\u062A\u06CC\u0646"
                      title="\u062A\u0631\u06A9\u06CC\u0628 \u0627\u0635\u0644\u06CC \u0628\u0648\u0644\u06CC\u0648\u06CC \u2013 \u0622\u0631\u0698\u0627\u0646\u062A\u06CC\u0646"
                    >
                      ترکیب اصلی بولیوی – آرژانتین
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405121/\u06AF\u0644-\u0627\u062F\u0631\u061B-\u0647\u0644\u0646\u062F-\u0627\u06CC\u062A\u0627\u0644\u06CC\u0627"
                      title="\u06AF\u0644 \u0627\u062F\u0631\u061B \u0647\u0644\u0646\u062F - \u0627\u06CC\u062A\u0627\u0644\u06CC\u0627"
                    >
                      گل ادر؛ هلند - ایتالیا
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405120/\u06AF\u0644-\u0628\u0647-\u062E\u0648\u062F\u06CC-\u0622\u0644\u0633\u06CC\u0648-\u0631\u0648\u0645\u0627\u0646\u0648\u0644\u06CC\u061B-\u0647\u0644\u0646\u062F-\u0627\u06CC\u062A\u0627\u0644\u06CC\u0627"
                      title="\u06AF\u0644 \u0628\u0647 \u062E\u0648\u062F\u06CC \u0622\u0644\u0633\u06CC\u0648 \u0631\u0648\u0645\u0627\u0646\u0648\u0644\u06CC\u061B \u0647\u0644\u0646\u062F - \u0627\u06CC\u062A\u0627\u0644\u06CC\u0627"
                    >
                      گل به خودی آلسیو رومانولی؛ هلند - ایتالیا
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405118/\u0645\u0627\u0644\u062F\u06CC\u0646\u06CC-\u062F\u0631-\u0645\u06CC\u0644\u0627\u0646-\u0645\u0631\u0627-\u0628\u0647-\u0686\u0634\u0645-\u06CC\u06A9-\u0645\u0634\u06A9\u0644-\u0645\u06CC-\u0628\u06CC\u0646\u0646\u062F"
                      title="\u0645\u0627\u0644\u062F\u06CC\u0646\u06CC: \u062F\u0631 \u0645\u06CC\u0644\u0627\u0646 \u0645\u0631\u0627 \u0628\u0647 \u0686\u0634\u0645 \u06CC\u06A9 \u0645\u0634\u06A9\u0644 \u0645\u06CC \u0628\u06CC\u0646\u0646\u062F"
                    >
                      مالدینی: در میلان مرا به چشم یک مشکل می بینند
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405114/\u062A\u0631\u0633-\u0631\u0626\u0627\u0644-\u0645\u0627\u062F\u0631\u06CC\u062F-\u0627\u0632-\u0636\u0631\u0631-\u0628\u0632\u0631\u06AF-\u062F\u0631-\u0645\u0648\u0631\u062F-\u0627\u06CC\u0633\u06A9\u0648"
                      title="\u062A\u0631\u0633 \u0631\u0626\u0627\u0644 \u0645\u0627\u062F\u0631\u06CC\u062F \u0627\u0632 \u0636\u0631\u0631 \u0628\u0632\u0631\u06AF \u062F\u0631 \u0645\u0648\u0631\u062F \u0627\u06CC\u0633\u06A9\u0648"
                    >
                      ترس رئال مادرید از ضرر بزرگ در مورد ایسکو
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405117/\u062A\u0631\u06A9\u06CC\u0628-\u0627\u0635\u0644\u06CC-\u0641\u0631\u0627\u0646\u0633\u0647-\u2013-\u0627\u0633\u067E\u0627\u0646\u06CC\u0627"
                      title="\u062A\u0631\u06A9\u06CC\u0628 \u0627\u0635\u0644\u06CC \u0641\u0631\u0627\u0646\u0633\u0647 \u2013 \u0627\u0633\u067E\u0627\u0646\u06CC\u0627"
                    >
                      ترکیب اصلی فرانسه – اسپانیا
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405116/\u0686\u0627\u0644\u0634-\u062C\u0627\u0644\u0628-\u067E\u0646\u0627\u0644\u062A\u06CC-\u0645\u06CC\u0631\u0633\u0644\u0627\u0648-\u06A9\u0644\u0648\u0632\u0647"
                      title="\u0686\u0627\u0644\u0634 \u062C\u0627\u0644\u0628 \u067E\u0646\u0627\u0644\u062A\u06CC \u0645\u06CC\u0631\u0633\u0644\u0627\u0648 \u06A9\u0644\u0648\u0632\u0647"
                    >
                      چالش جالب پنالتی میرسلاو کلوزه
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405115/\u0627\u06A9\u06CC\u067E-\u0627\u06CC\u0631\u0627\u0646-\u062F\u0631-\u0642\u0644\u0647\u060C-\u06A9\u0631\u0647-\u062C\u0646\u0648\u0628\u06CC-\u062E\u0648\u062F\u0634-\u0631\u0627-\u0646\u06AF\u0647-\u0646\u062F\u0627\u0634\u062A"
                      title="\u0627\u06A9\u06CC\u067E: \u0627\u06CC\u0631\u0627\u0646 \u062F\u0631 \u0642\u0644\u0647\u060C \u06A9\u0631\u0647 \u062C\u0646\u0648\u0628\u06CC \u062E\u0648\u062F\u0634 \u0631\u0627 \u0646\u06AF\u0647 \u0646\u062F\u0627\u0634\u062A"
                    >
                      اکیپ: ایران در قله، کره جنوبی خودش را نگه نداشت
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405113/\u062A\u0631\u06A9\u06CC\u0628-\u0627\u0635\u0644\u06CC-\u0647\u0644\u0646\u062F-\u2013-\u0627\u06CC\u062A\u0627\u0644\u06CC\u0627"
                      title="\u062A\u0631\u06A9\u06CC\u0628 \u0627\u0635\u0644\u06CC \u0647\u0644\u0646\u062F \u2013 \u0627\u06CC\u062A\u0627\u0644\u06CC\u0627"
                    >
                      ترکیب اصلی هلند – ایتالیا
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405112/\u062E\u0644\u0627\u0635\u0647-\u0628\u0627\u0632\u06CC-\u0631\u0648\u0633\u06CC\u0647-3-3-\u0628\u0644\u0698\u06CC\u06A9"
                      title="\u062E\u0644\u0627\u0635\u0647 \u0628\u0627\u0632\u06CC \u0631\u0648\u0633\u06CC\u0647 3-3 \u0628\u0644\u0698\u06CC\u06A9"
                    >
                      خلاصه بازی روسیه 3-3 بلژیک
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405111/\u06AF\u0644\u0633\u0627\u067E\u0648\u0634-\u0627\u06CC\u0631\u0627\u0646\u060C-\u0644\u0648\u06A9\u0648\u0645\u0648\u062A\u06CC\u0648-\u0631\u0648\u0633\u06CC\u0647-\u0631\u0627-\u0645\u063A\u0644\u0648\u0628-\u06A9\u0631\u062F"
                      title="\u06AF\u0644\u0633\u0627\u067E\u0648\u0634 \u0627\u06CC\u0631\u0627\u0646\u060C \u0644\u0648\u06A9\u0648\u0645\u0648\u062A\u06CC\u0648 \u0631\u0648\u0633\u06CC\u0647 \u0631\u0627 \u0645\u063A\u0644\u0648\u0628 \u06A9\u0631\u062F"
                    >
                      گلساپوش ایران، لوکوموتیو روسیه را مغلوب کرد
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405106/\u0631\u0627\u0645\u0648\u0633-\u0628\u0647\u062A\u0631-\u0627\u0633\u062A-\u06AF\u0631\u06CC\u0632\u0645\u0627\u0646-\u062F\u0631-\u0644\u0627\u0644\u06CC\u06AF\u0627-\u0628\u0645\u0627\u0646\u062F"
                      title="\u0631\u0627\u0645\u0648\u0633: \u0628\u0647\u062A\u0631 \u0627\u0633\u062A \u06AF\u0631\u06CC\u0632\u0645\u0627\u0646 \u062F\u0631 \u0644\u0627\u0644\u06CC\u06AF\u0627 \u0628\u0645\u0627\u0646\u062F"
                    >
                      راموس: بهتر است گریزمان در لالیگا بماند
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405109/\u062A\u0645\u0631\u06CC\u0646-\u06AF\u0644-\u06A9\u0648\u0686\u06CC\u06A9-\u0627\u06CC\u0646\u062A\u0631\u0645\u06CC\u0644\u0627\u0646-(96-01-08)"
                      title="\u062A\u0645\u0631\u06CC\u0646 \u06AF\u0644 \u06A9\u0648\u0686\u06CC\u06A9 \u0627\u06CC\u0646\u062A\u0631\u0645\u06CC\u0644\u0627\u0646 (96/01/08)"
                    >
                      تمرین گل کوچیک اینترمیلان (96/01/08)
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405110/\u06AF\u0632\u0627\u0631\u0634-\u0648\u06CC\u0698\u0647\u061B-\u0622\u0645\u0627\u0631-\u0627\u0633\u0641\u0646\u0627\u06A9-\u0622\u0631\u0698\u0627\u0646\u062A\u06CC\u0646-\u0628\u062F\u0648\u0646-\u0644\u06CC\u0648\u0646\u0644-\u0645\u0633\u06CC"
                      title="\u06AF\u0632\u0627\u0631\u0634 \u0648\u06CC\u0698\u0647\u061B \u0622\u0645\u0627\u0631 \u0627\u0633\u0641\u0646\u0627\u06A9 \u0622\u0631\u0698\u0627\u0646\u062A\u06CC\u0646 \u0628\u062F\u0648\u0646 \u0644\u06CC\u0648\u0646\u0644 \u0645\u0633\u06CC"
                    >
                      گزارش ویژه؛ آمار اسفناک آرژانتین بدون لیونل مسی
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405108/\u0646\u06AF\u0631\u0627\u0646\u06CC-\u062F\u0631-\u0627\u0631\u062F\u0648\u06CC-\u0627\u0633\u062A\u0642\u0644\u0627\u0644-\u0628\u0627\u0628\u062A-\u0645\u0635\u062F\u0648\u0645\u06CC\u062A-\u063A\u0641\u0648\u0631\u06CC"
                      title="\u0646\u06AF\u0631\u0627\u0646\u06CC \u062F\u0631 \u0627\u0631\u062F\u0648\u06CC \u0627\u0633\u062A\u0642\u0644\u0627\u0644 \u0628\u0627\u0628\u062A \u0645\u0635\u062F\u0648\u0645\u06CC\u062A \u063A\u0641\u0648\u0631\u06CC"
                    >
                      نگرانی در اردوی استقلال بابت مصدومیت غفوری
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405107/\u06AF\u0644\u0647\u0627\u06CC-\u0641\u0648\u062A\u0628\u0627\u0644-\u0633\u0627\u062D\u0644\u06CC-\u06AF\u0644\u0633\u0627\u067E\u0648\u0634-5-4-\u0644\u0648\u06A9\u0648\u0645\u0648\u062A\u06CC\u0648"
                      title="\u06AF\u0644\u0647\u0627\u06CC \u0641\u0648\u062A\u0628\u0627\u0644 \u0633\u0627\u062D\u0644\u06CC \u06AF\u0644\u0633\u0627\u067E\u0648\u0634 5-4 \u0644\u0648\u06A9\u0648\u0645\u0648\u062A\u06CC\u0648"
                    >
                      گلهای فوتبال ساحلی گلساپوش 5-4 لوکوموتیو
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405105/\u0631\u06A9\u0648\u0631\u062F-\u0648\u06CC\u0698\u0647\u200C\u06CC-\u0628\u06CC\u0631\u0627\u0646\u0648\u0646\u062F\u061B-11-\u0628\u0627\u0632\u06CC-\u0645\u0644\u06CC\u060C-10-\u06A9\u0644\u06CC\u0646-\u0634\u06CC\u062A"
                      title="\u0631\u06A9\u0648\u0631\u062F \u0648\u06CC\u0698\u0647\u200C\u06CC \u0628\u06CC\u0631\u0627\u0646\u0648\u0646\u062F\u061B 11 \u0628\u0627\u0632\u06CC \u0645\u0644\u06CC\u060C 10 \u06A9\u0644\u06CC\u0646 \u0634\u06CC\u062A"
                    >
                      رکورد ویژه‌ی بیرانوند؛ 11 بازی ملی، 10 کلین شیت
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405101/\u0631\u0627\u0645\u06CC\u0646\u061B-\u0627\u06A9\u0646\u0648\u0646-\u0639\u06CC\u062F\u0649-\u0628\u0631\u0627\u0646\u06A9\u0648-\u0628\u0627\u0642\u0649-\u0645\u0627\u0646\u062F\u0647"
                      title="\u0631\u0627\u0645\u06CC\u0646\u061B \u0627\u06A9\u0646\u0648\u0646 \u0639\u06CC\u062F\u0649 \u0628\u0631\u0627\u0646\u06A9\u0648 \u0628\u0627\u0642\u0649 \u0645\u0627\u0646\u062F\u0647"
                    >
                      رامین؛ اکنون عیدى برانکو باقى مانده
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405095/\u062F\u0631\u062E\u0648\u0627\u0633\u062A-\u062A\u062C\u062F\u06CC\u062F-\u0646\u0638\u0631-\u0622\u0631\u0698\u0627\u0646\u062A\u06CC\u0646-\u0628\u0631\u0627\u06CC-\u0644\u06CC\u0648\u0646\u0644-\u0645\u0633\u06CC"
                      title="\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u062A\u062C\u062F\u06CC\u062F \u0646\u0638\u0631 \u0622\u0631\u0698\u0627\u0646\u062A\u06CC\u0646 \u0628\u0631\u0627\u06CC \u0644\u06CC\u0648\u0646\u0644 \u0645\u0633\u06CC"
                    >
                      درخواست تجدید نظر آرژانتین برای لیونل مسی
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405099/\u0628\u0631\u062F-6\u06AF\u0644\u0647-\u0627\u0633\u062A\u0642\u0644\u0627\u0644-\u062E\u0648\u0632\u0633\u062A\u0627\u0646-\u0628\u0631\u0627\u0628\u0631-\u0634\u0627\u0647\u06CC\u0646-\u0648\u06CC\u0633"
                      title="\u0628\u0631\u062F 6\u06AF\u0644\u0647 \u0627\u0633\u062A\u0642\u0644\u0627\u0644 \u062E\u0648\u0632\u0633\u062A\u0627\u0646 \u0628\u0631\u0627\u0628\u0631 \u0634\u0627\u0647\u06CC\u0646 \u0648\u06CC\u0633"
                    >
                      برد 6گله استقلال خوزستان برابر شاهین ویس
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405098/\u062A\u0631\u06A9\u06CC\u0628-\u0639\u0631\u0628\u0633\u062A\u0627\u0646-\u0627\u0639\u0644\u0627\u0645-\u0634\u062F"
                      title="\u062A\u0631\u06A9\u06CC\u0628 \u0639\u0631\u0628\u0633\u062A\u0627\u0646 \u0627\u0639\u0644\u0627\u0645 \u0634\u062F"
                    >
                      ترکیب عربستان اعلام شد
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405096/\u0645\u0647\u0627\u0631\u062A\u0647\u0627\u06CC-\u0641\u0648\u0642-\u0627\u0644\u0639\u0627\u062F\u0647-\u0645\u0633\u06CC-\u062F\u0631-\u062A\u06CC\u0645-\u0632\u06CC\u0631-16-\u0633\u0627\u0644-\u0628\u0627\u0631\u0633\u0644\u0648\u0646\u0627"
                      title="\u0645\u0647\u0627\u0631\u062A\u0647\u0627\u06CC \u0641\u0648\u0642 \u0627\u0644\u0639\u0627\u062F\u0647 \u0645\u0633\u06CC \u062F\u0631 \u062A\u06CC\u0645 \u0632\u06CC\u0631 16 \u0633\u0627\u0644 \u0628\u0627\u0631\u0633\u0644\u0648\u0646\u0627"
                    >
                      مهارتهای فوق العاده مسی در تیم زیر 16 سال بارسلونا
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405094/\u062A\u0645\u0627\u0645-\u06AF\u0644\u0647\u0627\u06CC-\u0641\u06CC\u0646\u0627\u0644-\u0644\u06CC\u06AF-\u0642\u0647\u0631\u0645\u0627\u0646\u0627\u0646-\u0627\u0631\u0648\u067E\u0627-\u0627\u0632-\u0633\u0627\u0644-1993"
                      title="\u062A\u0645\u0627\u0645 \u06AF\u0644\u0647\u0627\u06CC \u0641\u06CC\u0646\u0627\u0644 \u0644\u06CC\u06AF \u0642\u0647\u0631\u0645\u0627\u0646\u0627\u0646 \u0627\u0631\u0648\u067E\u0627 \u0627\u0632 \u0633\u0627\u0644 1993"
                    >
                      تمام گلهای فینال لیگ قهرمانان اروپا از سال 1993
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405091/\u0631\u0636\u0627\u06CC\u062A-\u06A9\u0648\u0646\u062A\u0647-\u0628\u0647-\u0641\u0631\u0648\u0634-\u0633\u062A\u0627\u0631\u0647-\u062E\u0648\u062F-\u0628\u0647-\u0645\u0648\u0631\u06CC\u0646\u06CC\u0648"
                      title="\u0631\u0636\u0627\u06CC\u062A \u06A9\u0648\u0646\u062A\u0647 \u0628\u0647 \u0641\u0631\u0648\u0634 \u0633\u062A\u0627\u0631\u0647 \u062E\u0648\u062F \u0628\u0647 \u0645\u0648\u0631\u06CC\u0646\u06CC\u0648"
                    >
                      رضایت کونته به فروش ستاره خود به مورینیو
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405092/\u062D\u0630\u0641-\u0686\u0646\u062F-\u0645\u0644\u06CC\u062A\u06CC\u200C\u0647\u0627\u06CC-\u0642\u0637\u0631\u061B-\u062F\u06CC\u062F\u0627\u0631-\u0628\u0647-\u0662\u0660\u0662\u0662!"
                      title="\u062D\u0630\u0641 \u0686\u0646\u062F \u0645\u0644\u06CC\u062A\u06CC\u200C\u0647\u0627\u06CC \u0642\u0637\u0631\u061B \u062F\u06CC\u062F\u0627\u0631 \u0628\u0647 \u0662\u0660\u0662\u0662!"
                    >
                      حذف چند ملیتی‌های قطر؛ دیدار به ٢٠٢٢!
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405078/\u062C\u0647\u0627\u0646\u0628\u062E\u0634-\u0628\u0647-\u0627\u06CC\u0631\u0627\u0646\u06CC-\u0628\u0648\u062F\u0646\u0645-\u0627\u0641\u062A\u062E\u0627\u0631-\u0645\u06CC-\u06A9\u0646\u0645"
                      title="\u062C\u0647\u0627\u0646\u0628\u062E\u0634: \u0628\u0647 \u0627\u06CC\u0631\u0627\u0646\u06CC \u0628\u0648\u062F\u0646\u0645 \u0627\u0641\u062A\u062E\u0627\u0631 \u0645\u06CC \u06A9\u0646\u0645"
                    >
                      جهانبخش: به ایرانی بودنم افتخار می کنم
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405090/\u0631\u0648\u0633\u06CC\u0647\u060C-\u0645\u0627-\u062F\u0627\u0631\u06CC\u0645-\u0645\u06CC\u200C\u0622\u06CC\u06CC\u0645"
                      title="\u0631\u0648\u0633\u06CC\u0647\u060C \u0645\u0627 \u062F\u0627\u0631\u06CC\u0645 \u0645\u06CC\u200C\u0622\u06CC\u06CC\u0645"
                    >
                      روسیه، ما داریم می‌آییم
                    </a>
                  </li>
                  <li data-filter={3}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405089/\u067E\u0627\u06CC-\u06A9\u0627\u0631\u062A-\u0646\u0627\u0631\u062C\u06CC-\u0628\u0647-\u0641\u0648\u062A\u0628\u0627\u0644-\u0628\u0627\u0632-\u0645\u06CC\u200C\u0634\u0648\u062F\u061F-(\u0639\u06A9\u0633)"
                      title="\u067E\u0627\u06CC \u06A9\u0627\u0631\u062A \u0646\u0627\u0631\u062C\u06CC \u0628\u0647 \u0641\u0648\u062A\u0628\u0627\u0644 \u0628\u0627\u0632 \u0645\u06CC\u200C\u0634\u0648\u062F\u061F (\u0639\u06A9\u0633)"
                    >
                      پای کارت نارجی به فوتبال باز می‌شود؟ (عکس)
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405087/\u062E\u0644\u0627\u0635\u0647-\u0628\u0627\u0632\u06CC-\u0627\u0632\u0628\u06A9\u0633\u062A\u0627\u0646-1-0-\u0642\u0637\u0631"
                      title="\u062E\u0644\u0627\u0635\u0647 \u0628\u0627\u0632\u06CC \u0627\u0632\u0628\u06A9\u0633\u062A\u0627\u0646 1-0 \u0642\u0637\u0631"
                    >
                      خلاصه بازی ازبکستان 1-0 قطر
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405086/\u06A9\u0646\u0641\u0631\u0627\u0646\u0633-\u062E\u0628\u0631\u06CC-\u06A9\u06CC\u0631\u0648\u0634-\u0628\u0639\u062F-\u0627\u0632-\u0628\u0627\u0632\u06CC-\u0628\u0627-\u0686\u06CC\u0646"
                      title="\u06A9\u0646\u0641\u0631\u0627\u0646\u0633 \u062E\u0628\u0631\u06CC \u06A9\u06CC\u0631\u0648\u0634 \u0628\u0639\u062F \u0627\u0632 \u0628\u0627\u0632\u06CC \u0628\u0627 \u0686\u06CC\u0646"
                    >
                      کنفرانس خبری کیروش بعد از بازی با چین
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405088/\u06A9\u06CC\u200C\u0631\u0648\u0634-\u0645\u0686-\u0644\u06CC\u067E\u06CC-\u0631\u0627-\u06AF\u0631\u0641\u062A"
                      title="\u06A9\u06CC\u200C\u0631\u0648\u0634 \u0645\u0686 \u0644\u06CC\u067E\u06CC \u0631\u0627 \u06AF\u0631\u0641\u062A"
                    >
                      کی‌روش مچ لیپی را گرفت
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405081/\u0627\u0648\u0632\u06CC\u0644-\u0628\u0631\u0627\u06CC-\u062A\u0635\u0645\u06CC\u0645-\u06AF\u06CC\u0631\u06CC-\u0645\u0646\u062A\u0638\u0631-\u0622\u06CC\u0646\u062F\u0647-\u0648\u0646\u06AF\u0631-\u0627\u0633\u062A"
                      title="\u0627\u0648\u0632\u06CC\u0644 \u0628\u0631\u0627\u06CC \u062A\u0635\u0645\u06CC\u0645 \u06AF\u06CC\u0631\u06CC \u0645\u0646\u062A\u0638\u0631 \u0622\u06CC\u0646\u062F\u0647 \u0648\u0646\u06AF\u0631 \u0627\u0633\u062A"
                    >
                      اوزیل برای تصمیم گیری منتظر آینده ونگر است
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405085/\u0644\u062D\u0638\u0647-\u0634\u06A9\u0627\u0631-\u0627\u0698\u062F\u0647\u0627-\u062A\u0648\u0633\u0637-\u0637\u0627\u0631\u0645\u0649-(\u06AF\u0632\u0627\u0631\u0634-\u062A\u0635\u0648\u06CC\u0631\u0649)"
                      title="\u0644\u062D\u0638\u0647 \u0634\u06A9\u0627\u0631 \u0627\u0698\u062F\u0647\u0627 \u062A\u0648\u0633\u0637 \u0637\u0627\u0631\u0645\u0649 (\u06AF\u0632\u0627\u0631\u0634 \u062A\u0635\u0648\u06CC\u0631\u0649)"
                    >
                      لحظه شکار اژدها توسط طارمى (گزارش تصویرى)
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405084/\u0642\u0648\u0686\u0627\u0646-\u0646\u0698\u0627\u062F-\u0631\u06A9\u0648\u0631\u062F\u0647\u0627\u06CC-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0628\u0631\u0627\u06CC-\u0645\u0627-\u0645\u0647\u0645-\u0646\u06CC\u0633\u062A"
                      title="\u0642\u0648\u0686\u0627\u0646 \u0646\u0698\u0627\u062F: \u0631\u06A9\u0648\u0631\u062F\u0647\u0627\u06CC \u062A\u06CC\u0645 \u0645\u0644\u06CC \u0628\u0631\u0627\u06CC \u0645\u0627 \u0645\u0647\u0645 \u0646\u06CC\u0633\u062A"
                    >
                      قوچان نژاد: رکوردهای تیم ملی برای ما مهم نیست
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405083/\u0634\u0627\u062F\u06CC-\u0645\u0639\u0646\u0627\u062F\u0627\u0631-\u06A9\u06CC\u200C\u0631\u0648\u0634-\u0631\u0648-\u0628\u0647-\u062C\u0627\u06CC\u06AF\u0627\u0647-\u0648\u06CC-\u0622\u06CC-\u067E\u06CC"
                      title="\u0634\u0627\u062F\u06CC \u0645\u0639\u0646\u0627\u062F\u0627\u0631 \u06A9\u06CC\u200C\u0631\u0648\u0634 \u0631\u0648 \u0628\u0647 \u062C\u0627\u06CC\u06AF\u0627\u0647 \u0648\u06CC \u0622\u06CC \u067E\u06CC"
                    >
                      شادی معنادار کی‌روش رو به جایگاه وی آی پی
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405082/\u067E\u06CC\u0631\u0648\u0632\u06CC-\u0627\u0642\u062A\u0635\u0627\u062F\u06CC-\u0645\u062F\u0639\u06CC\u0627\u0646-\u062F\u0631-\u06AF\u0631\u0648\u0647-\u0627\u06CC\u0631\u0627\u0646"
                      title="\u067E\u06CC\u0631\u0648\u0632\u06CC \u0627\u0642\u062A\u0635\u0627\u062F\u06CC \u0645\u062F\u0639\u06CC\u0627\u0646 \u062F\u0631 \u06AF\u0631\u0648\u0647 \u0627\u06CC\u0631\u0627\u0646\xA0"
                    >
                      پیروزی اقتصادی مدعیان در گروه ایران 
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405104/\u067E\u06CC\u0631\u0648\u0632\u06CC-\u0646\u0627\u067E\u0644\u0626\u0648\u0646\u06CC-\u0627\u0632\u0628\u06A9-\u0647\u0627-\u0628\u0627-\u06AF\u0644-\u06A9\u0627\u067E\u06CC\u062A\u0627\u0646"
                      title="\u067E\u06CC\u0631\u0648\u0632\u06CC \u0646\u0627\u067E\u0644\u0626\u0648\u0646\u06CC \u0627\u0632\u0628\u06A9 \u0647\u0627 \u0628\u0627 \u06AF\u0644 \u06A9\u0627\u067E\u06CC\u062A\u0627\u0646"
                    >
                      پیروزی ناپلئونی ازبک ها با گل کاپیتان
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405077/\u0627\u0646\u0635\u0627\u0631\u06CC\u0641\u0631\u062F-\u0635\u0639\u0648\u062F-\u0628\u0647-\u0631\u0648\u0633\u06CC\u0647-\u0642\u0637\u0639\u0649-\u0646\u0634\u062F\u0647-\u0627\u0633\u062A"
                      title="\u0627\u0646\u0635\u0627\u0631\u06CC\u0641\u0631\u062F: \u0635\u0639\u0648\u062F \u0628\u0647 \u0631\u0648\u0633\u06CC\u0647 \u0642\u0637\u0639\u0649 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A"
                    >
                      انصاریفرد: صعود به روسیه قطعى نشده است
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405076/\u0627\u0628\u0631\u0627\u0647\u06CC\u0645\u06CC-\u062A\u0635\u0648\u0631-\u0627\u06CC\u0646-\u0647\u0645\u0647-\u062A\u0645\u0627\u0634\u0627\u06AF\u0631-\u0631\u0627-\u0646\u0645\u06CC\u200C\u06A9\u0631\u062F\u0645"
                      title="\u0627\u0628\u0631\u0627\u0647\u06CC\u0645\u06CC: \u062A\u0635\u0648\u0631 \u0627\u06CC\u0646 \u0647\u0645\u0647 \u062A\u0645\u0627\u0634\u0627\u06AF\u0631 \u0631\u0627 \u0646\u0645\u06CC\u200C\u06A9\u0631\u062F\u0645"
                    >
                      ابراهیمی: تصور این همه تماشاگر را نمی‌کردم
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405080/\u0647\u0648\u0627\u062F\u0627\u0631\u0627\u0646-\u0628\u0627\u0632\u06CC-\u0627\u06CC\u0631\u0627\u0646-\u0686\u06CC\u0646\u061B-\u0628\u062F\u0648\u0646-\u0634\u0631\u062D!"
                      title="\u0647\u0648\u0627\u062F\u0627\u0631\u0627\u0646 \u0628\u0627\u0632\u06CC \u0627\u06CC\u0631\u0627\u0646 - \u0686\u06CC\u0646\u061B \u0628\u062F\u0648\u0646 \u0634\u0631\u062D!"
                    >
                      هواداران بازی ایران - چین؛ بدون شرح!
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405079/\u067E\u06CC\u0627\u0645-\u0628\u0627\u0644\u0627\u062A\u0631\u06CC\u0646-\u0645\u0642\u0627\u0645-\u0648\u0631\u0632\u0634-\u0628\u0631\u0627\u0649-\u06CC\u0648\u0632\u067E\u0644\u0646\u06AF-\u0647\u0627\u0649-\u06A9\u0649\u200C\u0631\u0648\u0634"
                      title="\u067E\u06CC\u0627\u0645 \u0628\u0627\u0644\u0627\u062A\u0631\u06CC\u0646 \u0645\u0642\u0627\u0645 \u0648\u0631\u0632\u0634 \u0628\u0631\u0627\u0649 \u06CC\u0648\u0632\u067E\u0644\u0646\u06AF \u0647\u0627\u0649 \u06A9\u0649\u200C\u0631\u0648\u0634"
                    >
                      پیام بالاترین مقام ورزش براى یوزپلنگ هاى کى‌روش
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405075/\u0627\u0645\u06CC\u0631\u06CC-\u0631\u0627\u0647-\u0647\u0627\u06CC-\u0646\u0641\u0648\u0630-\u0686\u06CC\u0646-\u0631\u0627-\u0628\u0633\u062A\u0647-\u0628\u0648\u062F\u06CC\u0645"
                      title="\u0627\u0645\u06CC\u0631\u06CC: \u0631\u0627\u0647 \u0647\u0627\u06CC \u0646\u0641\u0648\u0630 \u0686\u06CC\u0646 \u0631\u0627 \u0628\u0633\u062A\u0647 \u0628\u0648\u062F\u06CC\u0645"
                    >
                      امیری: راه های نفوذ چین را بسته بودیم
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405074/\u06A9\u06CC\u200C\u0631\u0648\u0634-\u062C\u0646\u06AF-\u0628\u0627-\u062E\u0628\u0631\u0646\u06AF\u0627\u0631\u0627\u0646-\u0631\u0627-\u0639\u0644\u0646\u06CC-\u06A9\u0631\u062F"
                      title="\u06A9\u06CC\u200C\u0631\u0648\u0634 \u062C\u0646\u06AF \u0628\u0627 \u062E\u0628\u0631\u0646\u06AF\u0627\u0631\u0627\u0646 \u0631\u0627 \u0639\u0644\u0646\u06CC \u06A9\u0631\u062F"
                    >
                      کی‌روش جنگ با خبرنگاران را علنی کرد
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405073/\u0631\u06A9\u0648\u0631\u062F-\u062C\u0647\u0627\u0646\u06CC-\u06A9\u0644\u06CC\u0646-\u0634\u06CC\u062A-\u0628\u0647-\u0646\u0627\u0645-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0627\u06CC\u0631\u0627\u0646"
                      title="\u0631\u06A9\u0648\u0631\u062F \u062C\u0647\u0627\u0646\u06CC \u06A9\u0644\u06CC\u0646 \u0634\u06CC\u062A \u0628\u0647 \u0646\u0627\u0645 \u062A\u06CC\u0645 \u0645\u0644\u06CC \u0627\u06CC\u0631\u0627\u0646\xA0"
                    >
                      رکورد جهانی کلین شیت به نام تیم ملی ایران 
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405070/\u0637\u0627\u0631\u0645\u06CC-\u062F\u0631-\u0646\u0642\u0634-\u06AF\u0648\u0686\u06CC-2014\u061F"
                      title="\u0637\u0627\u0631\u0645\u06CC \u062F\u0631 \u0646\u0642\u0634 \u06AF\u0648\u0686\u06CC 2014\u061F\xA0"
                    >
                      طارمی در نقش گوچی 2014؟ 
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405068/\u0644\u06CC\u0648\u0646\u0644-\u0645\u0633\u06CC-4-\u062C\u0644\u0633\u0647-\u0645\u062D\u0631\u0648\u0645-\u0634\u062F"
                      title="\u0644\u06CC\u0648\u0646\u0644 \u0645\u0633\u06CC 4 \u062C\u0644\u0633\u0647 \u0645\u062D\u0631\u0648\u0645 \u0634\u062F"
                    >
                      لیونل مسی 4 جلسه محروم شد
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405072/\u0644\u0627\u06CC\u06CC-\u0641\u0648\u0642-\u0627\u0644\u0639\u0627\u062F\u0647-\u0631\u0627\u0641\u06CC\u0646\u06CC\u0627-\u0628\u0647-\u0631\u06CC\u0628\u0631\u06CC-\u062F\u0631-\u062A\u0645\u0631\u06CC\u0646"
                      title="\u0644\u0627\u06CC\u06CC \u0641\u0648\u0642 \u0627\u0644\u0639\u0627\u062F\u0647 \u0631\u0627\u0641\u06CC\u0646\u06CC\u0627 \u0628\u0647 \u0631\u06CC\u0628\u0631\u06CC \u062F\u0631 \u062A\u0645\u0631\u06CC\u0646"
                    >
                      لایی فوق العاده رافینیا به ریبری در تمرین
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405071/\u0631\u06A9\u0648\u0631\u062F-\u0686\u06CC\u0646\u06CC\u061B-100%-\u067E\u06CC\u0631\u0648\u0632\u06CC-\u0628\u0631\u0627\u0628\u0631-\u0627\u0698\u062F\u0647\u0627!"
                      title="\u0631\u06A9\u0648\u0631\u062F \u0686\u06CC\u0646\u06CC\u061B 100% \u067E\u06CC\u0631\u0648\u0632\u06CC \u0628\u0631\u0627\u0628\u0631 \u0627\u0698\u062F\u0647\u0627!"
                    >
                      رکورد چینی؛ 100% پیروزی برابر اژدها!
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405063/\u0646\u0641\u0631-\u0628\u0647-\u0646\u0641\u0631-\u0628\u0627-\u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0645\u0642\u0627\u0628\u0644-\u0686\u06CC\u0646"
                      title="\u0646\u0641\u0631 \u0628\u0647 \u0646\u0641\u0631 \u0628\u0627 \u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646 \u062A\u06CC\u0645 \u0645\u0644\u06CC \u0645\u0642\u0627\u0628\u0644 \u0686\u06CC\u0646"
                    >
                      نفر به نفر با بازیکنان تیم ملی مقابل چین
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405069/\u067E\u0627\u062F\u0627\u0634-\u0648\u06CC\u0698\u0647-\u0648\u0632\u06CC\u0631-\u0648\u0631\u0632\u0634-\u0628\u0631\u0627\u06CC-\u0645\u0644\u06CC-\u067E\u0648\u0634\u0627\u0646"
                      title="\u067E\u0627\u062F\u0627\u0634 \u0648\u06CC\u0698\u0647 \u0648\u0632\u06CC\u0631 \u0648\u0631\u0632\u0634 \u0628\u0631\u0627\u06CC \u0645\u0644\u06CC \u067E\u0648\u0634\u0627\u0646"
                    >
                      پاداش ویژه وزیر ورزش برای ملی پوشان
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405067/\u06A9\u06CC\u200C\u0631\u0648\u0634-\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0633\u062A\u06CC\u0645-\u06AF\u0644\u200C\u0647\u0627\u06CC-\u0628\u06CC\u0634\u062A\u0631\u06CC-\u0628\u0632\u0646\u06CC\u0645"
                      title="\u06A9\u06CC\u200C\u0631\u0648\u0634: \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0633\u062A\u06CC\u0645 \u06AF\u0644\u200C\u0647\u0627\u06CC \u0628\u06CC\u0634\u062A\u0631\u06CC \u0628\u0632\u0646\u06CC\u0645"
                    >
                      کی‌روش: می‌توانستیم گل‌های بیشتری بزنیم
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405066/\u0634\u062C\u0627\u0639\u06CC\u060C-\u0628\u0647\u062A\u0631\u06CC\u0646-\u0628\u0627\u0632\u06CC\u06A9\u0646-\u062F\u06CC\u062F\u0627\u0631-\u0627\u06CC\u0631\u0627\u0646-\u0648-\u0686\u06CC\u0646"
                      title="\u0634\u062C\u0627\u0639\u06CC\u060C \u0628\u0647\u062A\u0631\u06CC\u0646 \u0628\u0627\u0632\u06CC\u06A9\u0646 \u062F\u06CC\u062F\u0627\u0631 \u0627\u06CC\u0631\u0627\u0646 \u0648 \u0686\u06CC\u0646"
                    >
                      شجاعی، بهترین بازیکن دیدار ایران و چین
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405065/\u0645\u062F\u06CC\u0631\u0639\u0627\u0645\u0644-\u0646\u0641\u062A-\u062A\u063A\u06CC\u06CC\u0631-\u06A9\u0631\u062F"
                      title="\u0645\u062F\u06CC\u0631\u0639\u0627\u0645\u0644 \u0646\u0641\u062A \u062A\u063A\u06CC\u06CC\u0631 \u06A9\u0631\u062F\xA0"
                    >
                      مدیرعامل نفت تغییر کرد 
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405062/\u0627\u062D\u062A\u0645\u0627\u0644-\u062C\u0627-\u0628\u0647-\u062C\u0627\u06CC\u06CC-\u0633\u062A\u0627\u0631\u06AF\u0627\u0646-\u0631\u0626\u0627\u0644-\u0645\u0627\u062F\u0631\u06CC\u062F-\u0648-\u0686\u0644\u0633\u06CC"
                      title="\u0627\u062D\u062A\u0645\u0627\u0644 \u062C\u0627 \u0628\u0647 \u062C\u0627\u06CC\u06CC \u0633\u062A\u0627\u0631\u06AF\u0627\u0646 \u0631\u0626\u0627\u0644 \u0645\u0627\u062F\u0631\u06CC\u062F \u0648 \u0686\u0644\u0633\u06CC"
                    >
                      احتمال جا به جایی ستارگان رئال مادرید و چلسی
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405064/\u06A9\u06CC\u200C\u0631\u0648\u0634-\u062F\u0631-\u062C\u0634\u0646-\u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646-\u0634\u0631\u06A9\u062A-\u0646\u06A9\u0631\u062F"
                      title="\u06A9\u06CC\u200C\u0631\u0648\u0634 \u062F\u0631 \u062C\u0634\u0646 \u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646 \u0634\u0631\u06A9\u062A \u0646\u06A9\u0631\u062F"
                    >
                      کی‌روش در جشن بازیکنان شرکت نکرد
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405061/\u0644\u06CC\u067E\u06CC-\u0627\u0646\u062A\u0638\u0627\u0631-\u0627\u06CC\u0646-\u062C\u0645\u0639\u06CC\u062A-\u0631\u0627-\u062F\u0627\u0634\u062A\u0645"
                      title="\u0644\u06CC\u067E\u06CC: \u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u06CC\u0646 \u062C\u0645\u0639\u06CC\u062A \u0631\u0627 \u062F\u0627\u0634\u062A\u0645"
                    >
                      لیپی: انتظار این جمعیت را داشتم
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404986/\u0641\u0642\u0637-\u06CC\u06A9-\u06AF\u0644-\u0628\u0631\u0627\u06CC-\u06CC\u06A9\u0635\u062F-\u0647\u0632\u0627\u0631"
                      title="\u0641\u0642\u0637 \u06CC\u06A9 \u06AF\u0644 \u0628\u0631\u0627\u06CC \u06CC\u06A9\u0635\u062F \u0647\u0632\u0627\u0631"
                    >
                      فقط یک گل برای یکصد هزار
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405060/\u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646-\u067E\u0627\u0631\u06CC-\u0633\u0646-\u0698\u0631\u0645\u0646-\u0648-\u0639\u06CC\u0627\u062F\u062A-\u0627\u0632-\u06A9\u0648\u062F\u06A9\u0627\u0646-\u0628\u06CC\u0645\u0627\u0631"
                      title="\u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646 \u067E\u0627\u0631\u06CC \u0633\u0646 \u0698\u0631\u0645\u0646 \u0648 \u0639\u06CC\u0627\u062F\u062A \u0627\u0632 \u06A9\u0648\u062F\u06A9\u0627\u0646 \u0628\u06CC\u0645\u0627\u0631"
                    >
                      بازیکنان پاری سن ژرمن و عیادت از کودکان بیمار
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405059/\u062E\u0644\u0627\u0635\u0647-\u0628\u0627\u0632\u06CC-\u0627\u06CC\u0631\u0627\u0646-1-0-\u0686\u06CC\u0646"
                      title="\u062E\u0644\u0627\u0635\u0647 \u0628\u0627\u0632\u06CC \u0627\u06CC\u0631\u0627\u0646 1-0 \u0686\u06CC\u0646"
                    >
                      خلاصه بازی ایران 1-0 چین
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405058/\u0627\u0648\u062C-\u0647\u0645\u0627\u0647\u0646\u06AF\u06CC-\u0645\u06CC\u0627\u0646-\u0631\u0636\u0627\u0626\u06CC\u0627\u0646-\u0648-\u0628\u06CC\u0631\u0627\u0646\u0648\u0646\u062F!"
                      title="\u0627\u0648\u062C \u0647\u0645\u0627\u0647\u0646\u06AF\u06CC \u0645\u06CC\u0627\u0646 \u0631\u0636\u0627\u0626\u06CC\u0627\u0646 \u0648 \u0628\u06CC\u0631\u0627\u0646\u0648\u0646\u062F!"
                    >
                      اوج هماهنگی میان رضائیان و بیرانوند!
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405025/\u0627\u06CC\u0631\u0627\u0646-1-\u2013-\u0686\u06CC\u0646-0-\u061B-\u0628\u0686\u0647\u200C\u0647\u0627-\u0645\u062A\u0634\u06A9\u0631\u06CC\u0645"
                      title="\u0627\u06CC\u0631\u0627\u0646 1 \u2013 \u0686\u06CC\u0646 0 \u061B \u0628\u0686\u0647\u200C\u0647\u0627 \u0645\u062A\u0634\u06A9\u0631\u06CC\u0645"
                    >
                      ایران 1 – چین 0 ؛ بچه‌ها متشکریم
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405057/\u06A9\u0644\u06CC\u0646-\u0634\u06CC\u062A-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0627\u0632-\u06F9\u06F0\u06F0-\u062F\u0642\u06CC\u0642\u0647-\u06AF\u0630\u0634\u062A"
                      title="\u06A9\u0644\u06CC\u0646 \u0634\u06CC\u062A \u062A\u06CC\u0645 \u0645\u0644\u06CC \u0627\u0632 \u06F9\u06F0\u06F0 \u062F\u0642\u06CC\u0642\u0647 \u06AF\u0630\u0634\u062A"
                    >
                      کلین شیت تیم ملی از ۹۰۰ دقیقه گذشت
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405056/\u0633\u0648\u062A\u06CC-\u0647\u0627\u06CC-\u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646-\u0627\u062A\u0644\u062A\u06CC\u06A9\u0648\u0645\u0627\u062F\u0631\u06CC\u062F-\u062F\u0631-\u062A\u0645\u0631\u06CC\u0646\u0627\u062A"
                      title="\u0633\u0648\u062A\u06CC \u0647\u0627\u06CC \u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646 \u0627\u062A\u0644\u062A\u06CC\u06A9\u0648\u0645\u0627\u062F\u0631\u06CC\u062F \u062F\u0631 \u062A\u0645\u0631\u06CC\u0646\u0627\u062A"
                    >
                      سوتی های بازیکنان اتلتیکومادرید در تمرینات
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405055/\u0634\u0628\u06CC\u0647-\u0633\u0627\u0632\u06CC-\u0628\u0627\u0632\u06CC-\u0627\u0631\u0648\u06AF\u0648\u0626\u0647-\u0628\u0631\u0632\u06CC\u0644-\u0628\u0627-\u0644\u06AF\u0648"
                      title="\u0634\u0628\u06CC\u0647 \u0633\u0627\u0632\u06CC \u0628\u0627\u0632\u06CC \u0627\u0631\u0648\u06AF\u0648\u0626\u0647 - \u0628\u0631\u0632\u06CC\u0644 \u0628\u0627 \u0644\u06AF\u0648"
                    >
                      شبیه سازی بازی اروگوئه - برزیل با لگو
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405054/\u062A\u06CC\u0645-\u0631\u0648\u06CC\u0627\u06CC\u06CC-\u0622\u0645\u0631\u06CC\u06A9\u0627\u06CC-\u062C\u0646\u0648\u0628\u06CC-\u062F\u0631-\u0645\u0642\u0627\u0628\u0644-\u0645\u0646\u062A\u062E\u0628-\u0627\u0631\u0648\u067E\u0627"
                      title="\u062A\u06CC\u0645 \u0631\u0648\u06CC\u0627\u06CC\u06CC \u0622\u0645\u0631\u06CC\u06A9\u0627\u06CC \u062C\u0646\u0648\u0628\u06CC \u062F\u0631 \u0645\u0642\u0627\u0628\u0644 \u0645\u0646\u062A\u062E\u0628 \u0627\u0631\u0648\u067E\u0627"
                    >
                      تیم رویایی آمریکای جنوبی در مقابل منتخب اروپا
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405053/\u06AF\u0648\u0686\u06CC-\u062F\u0631-\u062D\u0633\u0631\u062A-\u06AF\u0644\u0632\u0646\u06CC-\u0628\u0647-\u0686\u06CC\u0646(\u0639\u06A9\u0633)"
                      title="\u06AF\u0648\u0686\u06CC \u062F\u0631 \u062D\u0633\u0631\u062A \u06AF\u0644\u0632\u0646\u06CC \u0628\u0647 \u0686\u06CC\u0646(\u0639\u06A9\u0633)"
                    >
                      گوچی در حسرت گلزنی به چین(عکس)
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405052/\u0634\u0645\u0627\u0631\u0647\u06F1\u06F7-\u0627\u06CC\u0631\u0627\u0646-\u06F7\u06AF\u0644\u0647-\u0634\u062F(\u0639\u06A9\u0633)"
                      title="\u0634\u0645\u0627\u0631\u0647\u06F1\u06F7 \u0627\u06CC\u0631\u0627\u0646 \u06F7\u06AF\u0644\u0647 \u0634\u062F(\u0639\u06A9\u0633)"
                    >
                      شماره۱۷ ایران ۷گله شد(عکس)
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405051/\u0644\u06CC\u067E\u06CC-\u062E\u0648\u062F\u0634-\u0631\u0627-\u062E\u0644\u0639-\u0633\u0644\u0627\u062D-\u06A9\u0631\u062F"
                      title="\u0644\u06CC\u067E\u06CC \u062E\u0648\u062F\u0634 \u0631\u0627 \u062E\u0644\u0639 \u0633\u0644\u0627\u062D \u06A9\u0631\u062F"
                    >
                      لیپی خودش را خلع سلاح کرد
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405050/\u062E\u0644\u0627\u0635\u0647-\u0628\u0627\u0632\u06CC-\u0627\u0633\u062A\u0631\u0627\u0644\u06CC\u0627-2-0-\u0627\u0645\u0627\u0631\u0627\u062A"
                      title="\u062E\u0644\u0627\u0635\u0647 \u0628\u0627\u0632\u06CC \u0627\u0633\u062A\u0631\u0627\u0644\u06CC\u0627 2-0 \u0627\u0645\u0627\u0631\u0627\u062A"
                    >
                      خلاصه بازی استرالیا 2-0 امارات
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405047/\u0635\u0639\u0648\u062F-\u0642\u0631\u06CC\u0628-\u0627\u0644\u0648\u0642\u0648\u0639-\u062F\u0631-\u0633\u0627\u0642\u200C\u0647\u0627\u06CC-\u0641\u0631\u0634\u062A\u0647"
                      title="\u0635\u0639\u0648\u062F \u0642\u0631\u06CC\u0628 \u0627\u0644\u0648\u0642\u0648\u0639 \u062F\u0631 \u0633\u0627\u0642\u200C\u0647\u0627\u06CC \u0641\u0631\u0634\u062A\u0647"
                    >
                      صعود قریب الوقوع در ساق‌های فرشته
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405049/\u062E\u0644\u0627\u0635\u0647-\u0628\u0627\u0632\u06CC-\u06A9\u0631\u0647\u200C-\u062C\u0646\u0648\u0628\u06CC-1-0-\u0633\u0648\u0631\u06CC\u0647"
                      title="\u062E\u0644\u0627\u0635\u0647 \u0628\u0627\u0632\u06CC \u06A9\u0631\u0647\u200C \u062C\u0646\u0648\u0628\u06CC 1-0 \u0633\u0648\u0631\u06CC\u0647"
                    >
                      خلاصه بازی کره‌ جنوبی 1-0 سوریه
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405103/\u067E\u06CC\u0631\u0648\u0632\u06CC-\u0645\u06CC\u0644\u06CC-\u0645\u062A\u0631\u06CC-\u06A9\u0631\u0647-\u062F\u0631-\u062E\u0627\u0646\u0647-\u0628\u0631\u0627\u0628\u0631-\u0633\u0648\u0631\u06CC\u0647"
                      title="\u067E\u06CC\u0631\u0648\u0632\u06CC \u0645\u06CC\u0644\u06CC \u0645\u062A\u0631\u06CC \u06A9\u0631\u0647 \u062F\u0631 \u062E\u0627\u0646\u0647 \u0628\u0631\u0627\u0628\u0631 \u0633\u0648\u0631\u06CC\u0647"
                    >
                      پیروزی میلی متری کره در خانه برابر سوریه
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405048/\u06AF\u0644-\u0645\u0647\u062F\u06CC-\u0637\u0627\u0631\u0645\u06CC\u061B-\u0627\u06CC\u0631\u0627\u0646-\u0686\u06CC\u0646"
                      title="\u06AF\u0644 \u0645\u0647\u062F\u06CC \u0637\u0627\u0631\u0645\u06CC\u061B \u0627\u06CC\u0631\u0627\u0646 - \u0686\u06CC\u0646"
                    >
                      گل مهدی طارمی؛ ایران - چین
                    </a>
                  </li>
                  <li data-filter={3}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405046/\u0633\u0631\u0645\u0631\u0628\u06CC-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0627\u0645\u0627\u0631\u0627\u062A-\u0627\u0633\u062A\u0639\u0641\u0627-\u062F\u0627\u062F"
                      title="\u0633\u0631\u0645\u0631\u0628\u06CC \u062A\u06CC\u0645 \u0645\u0644\u06CC \u0627\u0645\u0627\u0631\u0627\u062A \u0627\u0633\u062A\u0639\u0641\u0627 \u062F\u0627\u062F"
                    >
                      سرمربی تیم ملی امارات استعفا داد
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405044/\u062E\u0644\u0627\u0635\u0647-\u0628\u0627\u0632\u06CC-\u0698\u0627\u067E\u0646-4-0-\u062A\u0627\u06CC\u0644\u0646\u062F"
                      title="\u062E\u0644\u0627\u0635\u0647 \u0628\u0627\u0632\u06CC \u0698\u0627\u067E\u0646 4-0 \u062A\u0627\u06CC\u0644\u0646\u062F"
                    >
                      خلاصه بازی ژاپن 4-0 تایلند
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405045/\u062A\u0634\u0648\u06CC\u0642-\u0639\u062C\u06CC\u0628-\u0644\u06CC\u067E\u06CC-\u062F\u0631-\u0648\u0631\u0632\u0634\u06AF\u0627\u0647-\u0622\u0632\u0627\u062F\u06CC"
                      title="\u062A\u0634\u0648\u06CC\u0642 \u0639\u062C\u06CC\u0628 \u0644\u06CC\u067E\u06CC \u062F\u0631 \u0648\u0631\u0632\u0634\u06AF\u0627\u0647 \u0622\u0632\u0627\u062F\u06CC"
                    >
                      تشویق عجیب لیپی در ورزشگاه آزادی
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405043/\u0642\u06CC\u0686\u06CC-\u0628\u0631\u06AF\u0631\u062F\u0648\u0646-\u062E\u0627\u0631\u0642-\u0627\u0644\u0639\u0627\u062F\u0647-\u0637\u0627\u0631\u0645\u06CC-\u06A9\u0647-\u06AF\u0644-\u0646\u0634\u062F"
                      title="\u0642\u06CC\u0686\u06CC \u0628\u0631\u06AF\u0631\u062F\u0648\u0646 \u062E\u0627\u0631\u0642 \u0627\u0644\u0639\u0627\u062F\u0647 \u0637\u0627\u0631\u0645\u06CC \u06A9\u0647 \u06AF\u0644 \u0646\u0634\u062F"
                    >
                      قیچی برگردون خارق العاده طارمی که گل نشد
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405042/\u062F\u0627\u0648\u0631\u060C-\u0645\u0627\u0646\u0639-\u0627\u062A\u0644\u0627\u0641-\u0648\u0642\u062A-\u062F\u0631\u0648\u0627\u0632\u0647\u200C\u0628\u0627\u0646-\u0686\u06CC\u0646"
                      title="\u062F\u0627\u0648\u0631\u060C \u0645\u0627\u0646\u0639 \u0627\u062A\u0644\u0627\u0641 \u0648\u0642\u062A \u062F\u0631\u0648\u0627\u0632\u0647\u200C\u0628\u0627\u0646 \u0686\u06CC\u0646"
                    >
                      داور، مانع اتلاف وقت دروازه‌بان چین
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405102/\u0698\u0627\u067E\u0646-\u0628\u0627-4-\u06AF\u0644-\u062A\u0627\u06CC\u0644\u0646\u062F-\u0631\u0627-\u062F\u0631-\u0647\u0645-\u06A9\u0648\u0628\u06CC\u062F"
                      title="\u0698\u0627\u067E\u0646 \u0628\u0627 4 \u06AF\u0644 \u062A\u0627\u06CC\u0644\u0646\u062F \u0631\u0627 \u062F\u0631 \u0647\u0645 \u06A9\u0648\u0628\u06CC\u062F"
                    >
                      ژاپن با 4 گل تایلند را در هم کوبید
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405041/\u062A\u0630\u06A9\u0631-\u06A9\u06CC-\u0631\u0648\u0634-\u0628\u0647-\u0639\u0632\u062A-\u0627\u0644\u0644\u0647\u06CC-\u0648-\u062C\u0647\u0627\u0646\u0628\u062E\u0634"
                      title="\u062A\u0630\u06A9\u0631 \u06A9\u06CC \u0631\u0648\u0634 \u0628\u0647 \u0639\u0632\u062A \u0627\u0644\u0644\u0647\u06CC \u0648 \u062C\u0647\u0627\u0646\u0628\u062E\u0634"
                    >
                      تذکر کی روش به عزت اللهی و جهانبخش
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405040/\u0627\u0641\u0633\u0648\u0633-\u062C\u0647\u0627\u0646\u0628\u062E\u0634-\u067E\u0633-\u0627\u0632-\u0645\u0648\u0642\u0639\u06CC\u062A-\u0627\u0631\u0648\u067E\u0627\u06CC\u06CC(\u0639\u06A9\u0633)"
                      title="\u0627\u0641\u0633\u0648\u0633 \u062C\u0647\u0627\u0646\u0628\u062E\u0634 \u067E\u0633 \u0627\u0632 \u0645\u0648\u0642\u0639\u06CC\u062A \u0627\u0631\u0648\u067E\u0627\u06CC\u06CC(\u0639\u06A9\u0633)"
                    >
                      افسوس جهانبخش پس از موقعیت اروپایی(عکس)
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405039/\u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646-\u0627\u06CC\u0631\u0627\u0646-\u0627\u0632-5-\u0644\u06CC\u06AF-\u0645\u062A\u0646\u0648\u0639-\u0628\u0631\u0627\u0628\u0631-\u0686\u06CC\u0646"
                      title="\u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646 \u0627\u06CC\u0631\u0627\u0646 \u0627\u0632 5 \u0644\u06CC\u06AF \u0645\u062A\u0646\u0648\u0639 \u0628\u0631\u0627\u0628\u0631 \u0686\u06CC\u0646"
                    >
                      بازیکنان ایران از 5 لیگ متنوع برابر چین
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405038/\u0639\u0645\u0644\u06A9\u0631\u062F-\u062F\u0631\u062E\u0634\u0627\u0646-\u062F\u0648\u0646\u0627\u0631\u0648\u0645\u0627-\u062F\u0631-\u0641\u0635\u0644-2017-2016"
                      title="\u0639\u0645\u0644\u06A9\u0631\u062F \u062F\u0631\u062E\u0634\u0627\u0646 \u062F\u0648\u0646\u0627\u0631\u0648\u0645\u0627 \u062F\u0631 \u0641\u0635\u0644 2017-2016"
                    >
                      عملکرد درخشان دوناروما در فصل 2017-2016
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405037/\u062D\u0631\u06A9\u062A-\u0632\u06CC\u0628\u0627\u06CC-\u0639\u0632\u062A\u200C\u0627\u0644\u0644\u0647\u06CC-\u0628\u06CC-\u062B\u0645\u0631-\u0645\u0627\u0646\u062F(\u0639\u06A9\u0633)"
                      title="\u062D\u0631\u06A9\u062A \u0632\u06CC\u0628\u0627\u06CC \u0639\u0632\u062A\u200C\u0627\u0644\u0644\u0647\u06CC \u0628\u06CC \u062B\u0645\u0631 \u0645\u0627\u0646\u062F(\u0639\u06A9\u0633)"
                    >
                      حرکت زیبای عزت‌اللهی بی ثمر ماند(عکس)
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405036/\u0627\u06CC\u0646\u062C\u0627-\u0622\u0632\u0627\u062F\u06CC\u061B-11-\u0628\u0647-\u0639\u0644\u0627\u0648\u0647-\u06CC\u06A9\u0635\u062F\u0647\u0632\u0627\u0631-\u0646\u0641\u0631-(\u0639\u06A9\u0633)"
                      title="\u0627\u06CC\u0646\u062C\u0627 \u0622\u0632\u0627\u062F\u06CC\u061B 11 \u0628\u0647 \u0639\u0644\u0627\u0648\u0647 \u06CC\u06A9\u0635\u062F\u0647\u0632\u0627\u0631 \u0646\u0641\u0631 (\u0639\u06A9\u0633)"
                    >
                      اینجا آزادی؛ 11 به علاوه یکصدهزار نفر (عکس)
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405035/\u0637\u0627\u0631\u0645\u06CC-\u0648-\u0622\u0632\u0627\u0631-\u062D\u0637-\u062F\u0641\u0627\u0639-\u0686\u06CC\u0646(\u0639\u06A9\u0633)"
                      title="\u0637\u0627\u0631\u0645\u06CC \u0648 \u0622\u0632\u0627\u0631 \u062D\u0637 \u062F\u0641\u0627\u0639 \u0686\u06CC\u0646(\u0639\u06A9\u0633)"
                    >
                      طارمی و آزار حط دفاع چین(عکس)
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405034/\u0627\u0648\u0644\u06CC\u0646-\u062F\u0633\u062A\u0648\u0631\u0627\u062A-\u062A\u0627\u06A9\u062A\u06CC\u06A9\u06CC-\u0641\u0627\u062A\u062D-\u062C\u0627\u0645-\u062C\u0647\u0627\u0646\u06CC-\u062F\u0631-\u0622\u0632\u0627\u062F\u06CC"
                      title="\u0627\u0648\u0644\u06CC\u0646 \u062F\u0633\u062A\u0648\u0631\u0627\u062A \u062A\u0627\u06A9\u062A\u06CC\u06A9\u06CC \u0641\u0627\u062A\u062D \u062C\u0627\u0645 \u062C\u0647\u0627\u0646\u06CC \u062F\u0631 \u0622\u0632\u0627\u062F\u06CC"
                    >
                      اولین دستورات تاکتیکی فاتح جام جهانی در آزادی
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405033/\u0686\u0634\u0645-\u0647\u0627-\u0628\u0647-\u0633\u0627\u0642-\u062A\u06A9\u0646\u06CC\u06A9\u06CC-\u0645\u0633\u0639\u0648\u062F-(\u0639\u06A9\u0633)"
                      title="\u0686\u0634\u0645 \u0647\u0627 \u0628\u0647 \u0633\u0627\u0642 \u062A\u06A9\u0646\u06CC\u06A9\u06CC \u0645\u0633\u0639\u0648\u062F (\u0639\u06A9\u0633)"
                    >
                      چشم ها به ساق تکنیکی مسعود (عکس)
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405032/\u0628\u0627\u0646\u0648\u0627\u0646-\u0686\u06CC\u0646\u06CC-\u0648-\u0645\u062C\u0648\u0632-\u062D\u0636\u0648\u0631-\u062F\u0631-\u0622\u0632\u0627\u062F\u06CC"
                      title="\u0628\u0627\u0646\u0648\u0627\u0646 \u0686\u06CC\u0646\u06CC \u0648 \u0645\u062C\u0648\u0632 \u062D\u0636\u0648\u0631 \u062F\u0631 \u0622\u0632\u0627\u062F\u06CC"
                    >
                      بانوان چینی و مجوز حضور در آزادی
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405031/\u0633\u0631\u0645\u0631\u0628\u06CC-\u0627\u0645\u0627\u0631\u0627\u062A-\u0627\u0633\u062A\u0639\u0641\u0627-\u06A9\u0631\u062F"
                      title="\u0633\u0631\u0645\u0631\u0628\u06CC \u0627\u0645\u0627\u0631\u0627\u062A \u0627\u0633\u062A\u0639\u0641\u0627 \u06A9\u0631\u062F"
                    >
                      سرمربی امارات استعفا کرد
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405030/\u0648\u0631\u0632\u0634\u06AF\u0627\u0647-\u0622\u0632\u0627\u062F\u06CC-\u062F\u0631-\u0645\u0631\u0632-\u062E\u0637\u0631!"
                      title="\u0648\u0631\u0632\u0634\u06AF\u0627\u0647 \u0622\u0632\u0627\u062F\u06CC \u062F\u0631 \u0645\u0631\u0632 \u062E\u0637\u0631!"
                    >
                      ورزشگاه آزادی در مرز خطر!
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405029/\u0648\u0631\u0627\u062A\u06CC-\u0634\u06A9\u0627\u06CC\u062A-\u062E\u0648\u062F-\u0627\u0632-\u0646\u0634\u0631\u06CC\u0647-\u0627\u06A9\u06CC\u067E-\u0631\u0627-\u067E\u0633-\u06AF\u0631\u0641\u062A"
                      title="\u0648\u0631\u0627\u062A\u06CC \u0634\u06A9\u0627\u06CC\u062A \u062E\u0648\u062F \u0627\u0632 \u0646\u0634\u0631\u06CC\u0647 \u0627\u06A9\u06CC\u067E \u0631\u0627 \u067E\u0633 \u06AF\u0631\u0641\u062A"
                    >
                      وراتی شکایت خود از نشریه اکیپ را پس گرفت
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405028/\u062D\u0636\u0648\u0631-\u0648\u0632\u06CC\u0631-\u0648\u0631\u0632\u0634-\u062F\u0631-\u0648\u0631\u0632\u0634\u06AF\u0627\u0647-\u0622\u0632\u0627\u062F\u06CC(\u0639\u06A9\u0633)"
                      title="\u062D\u0636\u0648\u0631 \u0648\u0632\u06CC\u0631 \u0648\u0631\u0632\u0634 \u062F\u0631 \u0648\u0631\u0632\u0634\u06AF\u0627\u0647 \u0622\u0632\u0627\u062F\u06CC(\u0639\u06A9\u0633)"
                    >
                      حضور وزیر ورزش در ورزشگاه آزادی(عکس)
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405027/\u0648\u0627\u0631\u0627\u0646-\u062F\u0631-\u0627\u0628\u062A\u062F\u0627-\u0628\u0627-\u0632\u06CC\u062F\u0627\u0646-\u0627\u062E\u062A\u0644\u0627\u0641-\u062F\u0627\u0634\u062A\u0645"
                      title="\u0648\u0627\u0631\u0627\u0646: \u062F\u0631 \u0627\u0628\u062A\u062F\u0627 \u0628\u0627 \u0632\u06CC\u062F\u0627\u0646 \u0627\u062E\u062A\u0644\u0627\u0641 \u062F\u0627\u0634\u062A\u0645"
                    >
                      واران: در ابتدا با زیدان اختلاف داشتم
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405026/\u062F\u0648\u0645\u06CC\u0646-\u062D\u0636\u0648\u0631-\u0641\u06CC\u06A9\u0633-\u0627\u0628\u0631\u0627\u0647\u06CC\u0645\u06CC-\u062F\u0631-\u062A\u0631\u06A9\u06CC\u0628-\u062A\u06CC\u0645-\u0645\u0644\u06CC"
                      title="\u062F\u0648\u0645\u06CC\u0646 \u062D\u0636\u0648\u0631 \u0641\u06CC\u06A9\u0633 \u0627\u0628\u0631\u0627\u0647\u06CC\u0645\u06CC \u062F\u0631 \u062A\u0631\u06A9\u06CC\u0628 \u062A\u06CC\u0645 \u0645\u0644\u06CC"
                    >
                      دومین حضور فیکس ابراهیمی در ترکیب تیم ملی
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405100/\u067E\u06CC\u0631\u0648\u0632\u06CC-\u0627\u0633\u062A\u0631\u0627\u0644\u06CC\u0627-\u0628\u0631\u0627\u0628\u0631-\u0627\u0645\u0627\u0631\u0627\u062A-\u0628\u0627-2-\u06A9\u0631\u0646\u0631"
                      title="\u067E\u06CC\u0631\u0648\u0632\u06CC \u0627\u0633\u062A\u0631\u0627\u0644\u06CC\u0627 \u0628\u0631\u0627\u0628\u0631 \u0627\u0645\u0627\u0631\u0627\u062A \u0628\u0627 2 \u06A9\u0631\u0646\u0631"
                    >
                      پیروزی استرالیا برابر امارات با 2 کرنر
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405017/\u0627\u06AF\u0631-\u0645\u0633\u06CC-\u062A\u062E\u0644\u0641-\u06A9\u0631\u062F\u0647-\u0628\u0627\u06CC\u062F-\u0645\u062D\u0631\u0648\u0645-\u0634\u0648\u062F"
                      title="\u0627\u06AF\u0631 \u0645\u0633\u06CC \u062A\u062E\u0644\u0641 \u06A9\u0631\u062F\u0647 \u0628\u0627\u06CC\u062F \u0645\u062D\u0631\u0648\u0645 \u0634\u0648\u062F"
                    >
                      اگر مسی تخلف کرده باید محروم شود
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405024/\u0628\u0627\u0632\u062A\u0627\u0628-\u062D\u0636\u0648\u0631-\u06AF\u0633\u062A\u0631\u062F\u0647-\u0686\u06CC\u0646\u06CC\u200C\u0647\u0627-\u062F\u0631-\u062C\u0647\u0646\u0645-\u0622\u0632\u0627\u062F\u06CC"
                      title="\u0628\u0627\u0632\u062A\u0627\u0628 \u062D\u0636\u0648\u0631 \u06AF\u0633\u062A\u0631\u062F\u0647 \u0686\u06CC\u0646\u06CC\u200C\u0647\u0627 \u062F\u0631 \u062C\u0647\u0646\u0645 \u0622\u0632\u0627\u062F\u06CC"
                    >
                      بازتاب حضور گسترده چینی‌ها در جهنم آزادی
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405023/\u0645\u0644\u06CC-\u067E\u0648\u0634\u0627\u0646-\u0627\u06CC\u0631\u0627\u0646-\u0622\u0632\u0627\u062F\u06CC-\u0631\u0627-\u062A\u0631\u06A9\u0627\u0646\u062F\u0646\u062F!"
                      title="\u0645\u0644\u06CC \u067E\u0648\u0634\u0627\u0646 \u0627\u06CC\u0631\u0627\u0646 \u0622\u0632\u0627\u062F\u06CC \u0631\u0627 \u062A\u0631\u06A9\u0627\u0646\u062F\u0646\u062F!"
                    >
                      ملی پوشان ایران آزادی را ترکاندند!
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405022/\u06A9\u06CC\u200C\u0631\u0648\u0634-\u0628\u0647-\u0648\u0639\u062F\u0647-\u0627\u0634-\u0639\u0645\u0644-\u06A9\u0631\u062F"
                      title="\u06A9\u06CC\u200C\u0631\u0648\u0634 \u0628\u0647 \u0648\u0639\u062F\u0647 \u0627\u0634 \u0639\u0645\u0644 \u06A9\u0631\u062F"
                    >
                      کی‌روش به وعده اش عمل کرد
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405021/\u0631\u0627\u0645\u06CC\u0646-\u0631\u0636\u0627\u06CC\u06CC\u0627\u0646-\u0628\u0627\u0631-\u062F\u06CC\u06AF\u0631-\u0631\u0648\u06CC-\u0646\u06CC\u0645\u06A9\u062A"
                      title="\u0631\u0627\u0645\u06CC\u0646 \u0631\u0636\u0627\u06CC\u06CC\u0627\u0646 \u0628\u0627\u0631 \u062F\u06CC\u06AF\u0631 \u0631\u0648\u06CC \u0646\u06CC\u0645\u06A9\u062A"
                    >
                      رامین رضاییان بار دیگر روی نیمکت
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405020/\u06AF\u0648\u0686\u06CC-\u062F\u0631-\u0627\u0646\u062F\u06CC\u0634\u0647-\u06AF\u0644-\u0635\u0639\u0648\u062F-\u0628\u0647-\u062C\u0627\u0645-\u062C\u0647\u0627\u0646\u06CC"
                      title="\u06AF\u0648\u0686\u06CC \u062F\u0631 \u0627\u0646\u062F\u06CC\u0634\u0647 \u06AF\u0644 \u0635\u0639\u0648\u062F \u0628\u0647 \u062C\u0627\u0645 \u062C\u0647\u0627\u0646\u06CC\xA0"
                    >
                      گوچی در اندیشه گل صعود به جام جهانی 
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405019/\u0633\u0627\u0632\u0646\u062F\u0647-\u06AF\u0644-\u067E\u06CC\u0631\u0648\u0632\u06CC-\u062F\u0631-\u062F\u0648\u062D\u0647-\u0631\u0648\u06CC-\u0646\u06CC\u0645\u06A9\u062A"
                      title="\u0633\u0627\u0632\u0646\u062F\u0647 \u06AF\u0644 \u067E\u06CC\u0631\u0648\u0632\u06CC \u062F\u0631 \u062F\u0648\u062D\u0647 \u0631\u0648\u06CC \u0646\u06CC\u0645\u06A9\u062A"
                    >
                      سازنده گل پیروزی در دوحه روی نیمکت
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405018/\u062A\u0645\u0631\u06CC\u0646-\u0627\u0645\u0631\u0648\u0632-\u0628\u0627\u0631\u0633\u0644\u0648\u0646\u0627-(96-01-08)"
                      title="\u062A\u0645\u0631\u06CC\u0646 \u0627\u0645\u0631\u0648\u0632 \u0628\u0627\u0631\u0633\u0644\u0648\u0646\u0627 (96/01/08)"
                    >
                      تمرین امروز بارسلونا (96/01/08)
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405016/\u0634\u062C\u0627\u0639\u06CC-\u06A9\u0627\u067E\u06CC\u062A\u0627\u0646-\u0627\u06CC\u0631\u0627\u0646-\u0628\u0631\u0627\u0628\u0631-\u0686\u06CC\u0646-\u0634\u062F"
                      title="\u0634\u062C\u0627\u0639\u06CC \u06A9\u0627\u067E\u06CC\u062A\u0627\u0646 \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631\u0627\u0628\u0631 \u0686\u06CC\u0646 \u0634\u062F"
                    >
                      شجاعی کاپیتان ایران برابر چین شد
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405015/\u0686\u06CC\u0646\u06CC-\u0647\u0627-\u0647\u0648\u0627\u062F\u0627\u0631\u0627\u0646-\u0627\u06CC\u0631\u0627\u0646-\u0631\u0627-\u0627\u0632-\u0647\u0645-\u067E\u0627\u0634\u0627\u0646\u062F\u0646\u062F"
                      title="\u0686\u06CC\u0646\u06CC \u0647\u0627 \u0647\u0648\u0627\u062F\u0627\u0631\u0627\u0646 \u0627\u06CC\u0631\u0627\u0646 \u0631\u0627 \u0627\u0632 \u0647\u0645 \u067E\u0627\u0634\u0627\u0646\u062F\u0646\u062F"
                    >
                      چینی ها هواداران ایران را از هم پاشاندند
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405014/\u0648\u0631\u0632\u0634\u06AF\u0627\u0647-\u0622\u0632\u0627\u062F\u06CC-\u067E\u0631-\u0634\u062F"
                      title="\u0648\u0631\u0632\u0634\u06AF\u0627\u0647 \u0622\u0632\u0627\u062F\u06CC \u067E\u0631 \u0634\u062F"
                    >
                      ورزشگاه آزادی پر شد
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404971/\u062A\u0631\u06A9\u06CC\u0628-\u0627\u06CC\u0631\u0627\u0646-\u0628\u0631\u0627\u0628\u0631-\u0686\u06CC\u0646-\u0645\u0634\u062E\u0635-\u0634\u062F"
                      title="\u062A\u0631\u06A9\u06CC\u0628 \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631\u0627\u0628\u0631 \u0686\u06CC\u0646 \u0645\u0634\u062E\u0635 \u0634\u062F"
                    >
                      ترکیب ایران برابر چین مشخص شد
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405005/\u0646\u06CC\u0645\u0627\u0631-\u0639\u0644\u0627\u0642\u0647-\u0627\u06CC-\u0628\u0647-\u0645\u0642\u0627\u06CC\u0633\u0647-\u0634\u062F\u0646-\u0628\u0627-\u0645\u0633\u06CC-\u0648-\u0633\u0648\u0627\u0631\u0632-\u0646\u062F\u0627\u0631\u0645"
                      title="\u0646\u06CC\u0645\u0627\u0631: \u0639\u0644\u0627\u0642\u0647 \u0627\u06CC \u0628\u0647 \u0645\u0642\u0627\u06CC\u0633\u0647 \u0634\u062F\u0646 \u0628\u0627 \u0645\u0633\u06CC \u0648 \u0633\u0648\u0627\u0631\u0632 \u0646\u062F\u0627\u0631\u0645"
                    >
                      نیمار: علاقه ای به مقایسه شدن با مسی و سوارز ندارم
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405013/\u0686\u06CC\u0646\u06CC-\u0647\u0627\u06CC-\u0645\u062A\u0639\u062C\u0628-\u0631\u0648\u06CC-\u0686\u0645\u0646-\u0648\u0631\u0632\u0634\u06AF\u0627\u0647-\u0622\u0632\u0627\u062F\u06CC"
                      title="\u0686\u06CC\u0646\u06CC \u0647\u0627\u06CC \u0645\u062A\u0639\u062C\u0628 \u0631\u0648\u06CC \u0686\u0645\u0646 \u0648\u0631\u0632\u0634\u06AF\u0627\u0647 \u0622\u0632\u0627\u062F\u06CC\xA0"
                    >
                      چینی های متعجب روی چمن ورزشگاه آزادی 
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405012/\u062C\u0648-\u0622\u0632\u0627\u062F\u06CC-\u0622\u0632\u0645\u0648\u0646-\u0631\u0627-\u0647\u0645-\u06AF\u0631\u0641\u062A"
                      title="\u062C\u0648 \u0622\u0632\u0627\u062F\u06CC \u0622\u0632\u0645\u0648\u0646 \u0631\u0627 \u0647\u0645 \u06AF\u0631\u0641\u062A"
                    >
                      جو آزادی آزمون را هم گرفت
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404998/\u067E\u06CC\u0634-\u0628\u0627\u0632\u06CC-\u0628\u0631\u0632\u06CC\u0644-\u2013-\u067E\u0627\u0631\u0627\u06AF\u0648\u0626\u0647"
                      title="\u067E\u06CC\u0634 \u0628\u0627\u0632\u06CC \u0628\u0631\u0632\u06CC\u0644 \u2013 \u067E\u0627\u0631\u0627\u06AF\u0648\u0626\u0647"
                    >
                      پیش بازی برزیل – پاراگوئه
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405009/\u067E\u0631-\u0634\u062F\u0646-\u0645\u0634\u0631\u0648\u0637-\u0637\u0628\u0642\u0647-\u0627\u0648\u0644-\u0648\u0631\u0632\u0634\u06AF\u0627\u0647-\u0622\u0632\u0627\u062F\u06CC"
                      title="\u067E\u0631 \u0634\u062F\u0646 \u0645\u0634\u0631\u0648\u0637 \u0637\u0628\u0642\u0647 \u0627\u0648\u0644 \u0648\u0631\u0632\u0634\u06AF\u0627\u0647 \u0622\u0632\u0627\u062F\u06CC"
                    >
                      پر شدن مشروط طبقه اول ورزشگاه آزادی
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405007/\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0628\u0627-\u0627\u062A\u0648\u0628\u0648\u0633-\u0634\u062E\u0635\u06CC-\u062F\u0631-\u0631\u0627\u0647-\u0622\u0632\u0627\u062F\u06CC(\u0639\u06A9\u0633)"
                      title="\u062A\u06CC\u0645 \u0645\u0644\u06CC \u0628\u0627 \u0627\u062A\u0648\u0628\u0648\u0633 \u0634\u062E\u0635\u06CC \u062F\u0631 \u0631\u0627\u0647 \u0622\u0632\u0627\u062F\u06CC(\u0639\u06A9\u0633)"
                    >
                      تیم ملی با اتوبوس شخصی در راه آزادی(عکس)
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405006/\u062F\u0644\u06CC\u0644-\u063A\u06CC\u0628\u062A-\u06A9\u0627\u067E\u06CC\u062A\u0627\u0646-\u062F\u0631-\u062A\u0645\u0631\u06CC\u0646\u0627\u062A-\u062A\u0631\u0627\u06A9\u062A\u0648\u0631\u0633\u0627\u0632\u06CC"
                      title="\u062F\u0644\u06CC\u0644 \u063A\u06CC\u0628\u062A \u06A9\u0627\u067E\u06CC\u062A\u0627\u0646 \u062F\u0631 \u062A\u0645\u0631\u06CC\u0646\u0627\u062A \u062A\u0631\u0627\u06A9\u062A\u0648\u0631\u0633\u0627\u0632\u06CC"
                    >
                      دلیل غیبت کاپیتان در تمرینات تراکتورسازی
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405004/\u06A9\u0644-\u06A9\u0644-\u0645\u0631\u0628\u06CC\u0627\u0646-\u062A\u0631\u0627\u06A9\u062A\u0648\u0631-\u062F\u0631-\u067E\u0646\u0627\u0644\u062A\u06CC(\u0639\u06A9\u0633)"
                      title="\u06A9\u0644 \u06A9\u0644 \u0645\u0631\u0628\u06CC\u0627\u0646 \u062A\u0631\u0627\u06A9\u062A\u0648\u0631 \u062F\u0631 \u067E\u0646\u0627\u0644\u062A\u06CC(\u0639\u06A9\u0633)"
                    >
                      کل کل مربیان تراکتور در پنالتی(عکس)
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405003/\u0627\u062A\u0641\u0627\u0642-\u0646\u0627\u062E\u0648\u0634\u0627\u06CC\u0646\u062F\u06CC-\u06A9\u0647-\u0627\u0632-\u0686\u0634\u0645-\u0686\u06CC\u0646\u06CC\u200C\u0647\u0627-\u067E\u0646\u0647\u0627\u0646-\u0646\u0645\u0627\u0646\u062F"
                      title="\u0627\u062A\u0641\u0627\u0642 \u0646\u0627\u062E\u0648\u0634\u0627\u06CC\u0646\u062F\u06CC \u06A9\u0647 \u0627\u0632 \u0686\u0634\u0645 \u0686\u06CC\u0646\u06CC\u200C\u0647\u0627 \u067E\u0646\u0647\u0627\u0646 \u0646\u0645\u0627\u0646\u062F"
                    >
                      اتفاق ناخوشایندی که از چشم چینی‌ها پنهان نماند
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404994/\u0631\u0627\u0645\u0648\u0633-\u062F\u0631-\u0645\u0627\u062F\u0631\u06CC\u062F-\u0627\u0632-\u062E\u0631\u06CC\u062F-\u0627\u0645\u0628\u0627\u067E\u0647-\u0627\u0633\u062A\u0642\u0628\u0627\u0644-\u0645\u06CC-\u06A9\u0646\u06CC\u0645"
                      title="\u0631\u0627\u0645\u0648\u0633: \u062F\u0631 \u0645\u0627\u062F\u0631\u06CC\u062F \u0627\u0632 \u062E\u0631\u06CC\u062F \u0627\u0645\u0628\u0627\u067E\u0647 \u0627\u0633\u062A\u0642\u0628\u0627\u0644 \u0645\u06CC \u06A9\u0646\u06CC\u0645"
                    >
                      راموس: در مادرید از خرید امباپه استقبال می کنیم
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405002/\u0632\u0645\u0627\u0646-\u062F\u0631\u0628\u06CC-\u062A\u0628\u0631\u06CC\u0632-\u062A\u063A\u06CC\u06CC\u0631-\u06A9\u0631\u062F"
                      title="\u0632\u0645\u0627\u0646 \u062F\u0631\u0628\u06CC \u062A\u0628\u0631\u06CC\u0632 \u062A\u063A\u06CC\u06CC\u0631 \u06A9\u0631\u062F"
                    >
                      زمان دربی تبریز تغییر کرد
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405001/\u062A\u0631\u06A9\u06CC\u0628-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u06A9\u0631\u0647-\u062C\u0646\u0648\u0628\u06CC-\u0627\u0639\u0644\u0627\u0645-\u0634\u062F"
                      title="\u062A\u0631\u06A9\u06CC\u0628 \u062A\u06CC\u0645 \u0645\u0644\u06CC \u06A9\u0631\u0647 \u062C\u0646\u0648\u0628\u06CC \u0627\u0639\u0644\u0627\u0645 \u0634\u062F"
                    >
                      ترکیب تیم ملی کره جنوبی اعلام شد
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1405000/\u067E\u0631\u062F\u0627\u062E\u062A-\u0642\u0633\u0637-\u062F\u0648\u0645-\u0628\u062F\u0647\u06CC-\u062A\u0631\u0627\u06A9\u062A\u0648\u0631-\u0628\u0647-\u062A\u0648\u0646\u06CC-\u0648-\u0648\u06CC\u0644\u0627"
                      title="\u067E\u0631\u062F\u0627\u062E\u062A \u0642\u0633\u0637 \u062F\u0648\u0645 \u0628\u062F\u0647\u06CC \u062A\u0631\u0627\u06A9\u062A\u0648\u0631 \u0628\u0647 \u062A\u0648\u0646\u06CC \u0648 \u0648\u06CC\u0644\u0627"
                    >
                      پرداخت قسط دوم بدهی تراکتور به تونی و ویلا
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404999/\u0641\u0631\u0645\u0627\u0646\u062F\u0627\u0631-\u0627\u0646\u0632\u0644\u06CC-\u062F\u0631-\u0647\u06CC\u0627\u062A-\u0645\u062F\u06CC\u0631\u0647-\u0645\u0644\u0648\u0627\u0646"
                      title="\u0641\u0631\u0645\u0627\u0646\u062F\u0627\u0631 \u0627\u0646\u0632\u0644\u06CC \u062F\u0631 \u0647\u06CC\u0627\u062A \u0645\u062F\u06CC\u0631\u0647 \u0645\u0644\u0648\u0627\u0646"
                    >
                      فرماندار انزلی در هیات مدیره ملوان
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404989/\u067E\u06CC\u0634-\u0628\u0627\u0632\u06CC-\u0647\u0644\u0646\u062F-\u2013-\u0627\u06CC\u062A\u0627\u0644\u06CC\u0627"
                      title="\u067E\u06CC\u0634 \u0628\u0627\u0632\u06CC \u0647\u0644\u0646\u062F \u2013 \u0627\u06CC\u062A\u0627\u0644\u06CC\u0627"
                    >
                      پیش بازی هلند – ایتالیا
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404996/10-\u062A\u0639\u0648\u06CC\u0636-\u0637\u0644\u0627\u06CC\u06CC-\u062F\u0631-\u062A\u0627\u0631\u06CC\u062E-\u0641\u0648\u062A\u0628\u0627\u0644"
                      title="10 \u062A\u0639\u0648\u06CC\u0636 \u0637\u0644\u0627\u06CC\u06CC \u062F\u0631 \u062A\u0627\u0631\u06CC\u062E \u0641\u0648\u062A\u0628\u0627\u0644"
                    >
                      10 تعویض طلایی در تاریخ فوتبال
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404995/\u062D\u0636\u0648\u0631-\u0633\u0627\u06A9\u062A-\u062F\u0631-\u0627\u0631\u062F\u0648\u06CC-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0628\u0627\u0646\u0648\u0627\u0646-\u0627\u06CC\u0631\u0627\u0646"
                      title="\u062D\u0636\u0648\u0631 \u0633\u0627\u06A9\u062A \u062F\u0631 \u0627\u0631\u062F\u0648\u06CC \u062A\u06CC\u0645 \u0645\u0644\u06CC \u0628\u0627\u0646\u0648\u0627\u0646 \u0627\u06CC\u0631\u0627\u0646"
                    >
                      حضور ساکت در اردوی تیم ملی بانوان ایران
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404991/\u062A\u0631\u06A9\u06CC\u0628-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0698\u0627\u067E\u0646-\u0627\u0639\u0644\u0627\u0645-\u0634\u062F"
                      title="\u062A\u0631\u06A9\u06CC\u0628 \u062A\u06CC\u0645 \u0645\u0644\u06CC \u0698\u0627\u067E\u0646 \u0627\u0639\u0644\u0627\u0645 \u0634\u062F"
                    >
                      ترکیب تیم ملی ژاپن اعلام شد
                    </a>
                  </li>
                  <li data-filter={3}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404983/\u062A\u0639\u062C\u0628-\u0686\u06CC\u0646\u06CC-\u0647\u0627-\u0627\u0632-\u0627\u0641\u0632\u0627\u06CC\u0634-\u0642\u06CC\u0645\u062A-\u0633\u0631\u062F\u0627\u0631-\u0622\u0632\u0645\u0648\u0646"
                      title="\u062A\u0639\u062C\u0628 \u0686\u06CC\u0646\u06CC \u0647\u0627 \u0627\u0632 \u0627\u0641\u0632\u0627\u06CC\u0634 \u0642\u06CC\u0645\u062A \u0633\u0631\u062F\u0627\u0631 \u0622\u0632\u0645\u0648\u0646"
                    >
                      تعجب چینی ها از افزایش قیمت سردار آزمون
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404988/\u0627\u0641\u062A\u062E\u0627\u0631\u06CC-\u062F\u0631-\u062A\u0645\u0631\u06CC\u0646-\u0627\u0633\u062A\u0642\u0644\u0627\u0644-\u062D\u0627\u0636\u0631-\u0634\u062F"
                      title="\u0627\u0641\u062A\u062E\u0627\u0631\u06CC \u062F\u0631 \u062A\u0645\u0631\u06CC\u0646 \u0627\u0633\u062A\u0642\u0644\u0627\u0644 \u062D\u0627\u0636\u0631 \u0634\u062F"
                    >
                      افتخاری در تمرین استقلال حاضر شد
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404987/\u062A\u0631\u06A9\u06CC\u0628-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0633\u0648\u0631\u06CC\u0647-\u0627\u0639\u0644\u0627\u0645-\u0634\u062F"
                      title="\u062A\u0631\u06A9\u06CC\u0628 \u062A\u06CC\u0645 \u0645\u0644\u06CC \u0633\u0648\u0631\u06CC\u0647 \u0627\u0639\u0644\u0627\u0645 \u0634\u062F"
                    >
                      ترکیب تیم ملی سوریه اعلام شد
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404985/\u062F\u0648\u0626\u0644-\u0642\u0647\u0631\u0645\u0627\u0646\u0627\u0646-\u062C\u0627\u0645-\u062C\u0647\u0627\u0646\u06CC-\u062F\u0631-\u0622\u0632\u0627\u062F\u06CC"
                      title="\u062F\u0648\u0626\u0644 \u0642\u0647\u0631\u0645\u0627\u0646\u0627\u0646 \u062C\u0627\u0645 \u062C\u0647\u0627\u0646\u06CC \u062F\u0631 \u0622\u0632\u0627\u062F\u06CC"
                    >
                      دوئل قهرمانان جام جهانی در آزادی
                    </a>
                  </li>
                  <li data-filter={3}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404981/\u0647\u0648\u0648\u0627\u0646\u06AF-\u0628\u0648\u0648\u0646-\u0627\u0646\u06AF\u0627\u0631-\u062F\u0631-\u0627\u0633\u062A\u0627\u062F\u06CC\u0648\u0645-\u0622\u0632\u0627\u062F\u06CC-\u0632\u0644\u0632\u0644\u0647-\u0645\u06CC-\u0622\u06CC\u062F"
                      title="\u0647\u0648\u0648\u0627\u0646\u06AF \u0628\u0648\u0648\u0646: \u0627\u0646\u06AF\u0627\u0631 \u062F\u0631 \u0627\u0633\u062A\u0627\u062F\u06CC\u0648\u0645 \u0622\u0632\u0627\u062F\u06CC \u0632\u0644\u0632\u0644\u0647 \u0645\u06CC \u0622\u06CC\u062F"
                    >
                      هووانگ بوون: انگار در استادیوم آزادی زلزله می آید
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404984/\u0622\u0631\u0632\u0648\u06CC-\u0645\u0648\u0641\u0642\u06CC\u062A-\u0627\u0644\u0645\u067E\u06CC\u0627\u06A9\u0648\u0633-\u0628\u0631\u0627\u06CC-\u0627\u0646\u0635\u0627\u0631\u06CC-\u0641\u0631\u062F(\u0639\u06A9\u0633)"
                      title="\u0622\u0631\u0632\u0648\u06CC \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0644\u0645\u067E\u06CC\u0627\u06A9\u0648\u0633 \u0628\u0631\u0627\u06CC \u0627\u0646\u0635\u0627\u0631\u06CC \u0641\u0631\u062F(\u0639\u06A9\u0633)"
                    >
                      آرزوی موفقیت المپیاکوس برای انصاری فرد(عکس)
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404982/\u0645\u0647\u0627\u0631\u062A-\u0647\u0627-\u0648-\u062A\u06A9\u0646\u06CC\u06A9-\u0647\u0627\u06CC-\u062F\u06CC\u062F\u0646\u06CC-\u062F\u0631-\u0645\u0633\u062A\u0637\u06CC\u0644-\u0633\u0628\u0632"
                      title="\u0645\u0647\u0627\u0631\u062A \u0647\u0627 \u0648 \u062A\u06A9\u0646\u06CC\u06A9 \u0647\u0627\u06CC \u062F\u06CC\u062F\u0646\u06CC \u062F\u0631 \u0645\u0633\u062A\u0637\u06CC\u0644 \u0633\u0628\u0632"
                    >
                      مهارت ها و تکنیک های دیدنی در مستطیل سبز
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404979/\u0645\u062F\u0627\u0641\u0639-\u0645\u0635\u062F\u0648\u0645-\u0627\u0633\u062A\u0642\u0644\u0627\u0644-\u067E\u0627-\u0628\u0647-\u062A\u0648\u067E-\u0634\u062F"
                      title="\u0645\u062F\u0627\u0641\u0639 \u0645\u0635\u062F\u0648\u0645 \u0627\u0633\u062A\u0642\u0644\u0627\u0644 \u067E\u0627 \u0628\u0647 \u062A\u0648\u067E \u0634\u062F"
                    >
                      مدافع مصدوم استقلال پا به توپ شد
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404978/\u0645\u062F\u0627\u0641\u0639-\u0627\u0631\u0645\u0646\u0633\u062A\u0627\u0646\u06CC-\u062F\u0648\u0631-\u0627\u0632-\u062A\u0645\u0631\u06CC\u0646\u0627\u062A-\u0627\u0633\u062A\u0642\u0644\u0627\u0644"
                      title="\u0645\u062F\u0627\u0641\u0639 \u0627\u0631\u0645\u0646\u0633\u062A\u0627\u0646\u06CC \u062F\u0648\u0631 \u0627\u0632 \u062A\u0645\u0631\u06CC\u0646\u0627\u062A \u0627\u0633\u062A\u0642\u0644\u0627\u0644"
                    >
                      مدافع ارمنستانی دور از تمرینات استقلال
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404977/\u062A\u0631\u06A9\u06CC\u0628-\u0627\u0633\u062A\u0631\u0627\u0644\u06CC\u0627-\u0627\u0639\u0644\u0627\u0645-\u0634\u062F"
                      title="\u062A\u0631\u06A9\u06CC\u0628 \u0627\u0633\u062A\u0631\u0627\u0644\u06CC\u0627 \u0627\u0639\u0644\u0627\u0645 \u0634\u062F"
                    >
                      ترکیب استرالیا اعلام شد
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404976/\u062A\u0631\u06A9\u06CC\u0628-\u0627\u0645\u0627\u0631\u0627\u062A-\u0627\u0639\u0644\u0627\u0645-\u0634\u062F"
                      title="\u062A\u0631\u06A9\u06CC\u0628 \u0627\u0645\u0627\u0631\u0627\u062A \u0627\u0639\u0644\u0627\u0645 \u0634\u062F"
                    >
                      ترکیب امارات اعلام شد
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404975/\u0637\u0631\u0641\u062F\u0627\u0631\u0627\u0646-\u0627\u06CC\u0631\u0627\u0646\u06CC-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0631\u0627-\u062A\u0646\u0647\u0627-\u0646\u06AF\u0630\u0627\u0634\u062A\u0646\u062F"
                      title="\u0637\u0631\u0641\u062F\u0627\u0631\u0627\u0646 \u0627\u06CC\u0631\u0627\u0646\u06CC \u062A\u06CC\u0645 \u0645\u0644\u06CC \u0631\u0627 \u062A\u0646\u0647\u0627 \u0646\u06AF\u0630\u0627\u0634\u062A\u0646\u062F"
                    >
                      طرفداران ایرانی تیم ملی را تنها نگذاشتند
                    </a>
                  </li>
                  <li data-filter={3}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404973/\u0647\u062C\u0648\u0645-\u0627\u06CC\u0631\u0627\u0646\u06CC-\u0647\u0627-\u0628\u0647-\u0633\u0641\u0627\u0631\u062A-\u0686\u06CC\u0646-\u0628\u0631\u0627\u06CC-\u062F\u0631\u06CC\u0627\u0641\u062A-\u0628\u0644\u06CC\u062A"
                      title="\u0647\u062C\u0648\u0645 \u0627\u06CC\u0631\u0627\u0646\u06CC \u0647\u0627 \u0628\u0647 \u0633\u0641\u0627\u0631\u062A \u0686\u06CC\u0646 \u0628\u0631\u0627\u06CC \u062F\u0631\u06CC\u0627\u0641\u062A \u0628\u0644\u06CC\u062A"
                    >
                      هجوم ایرانی ها به سفارت چین برای دریافت بلیت
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404829/\u062A\u0631\u06A9\u06CC\u0628-\u0627\u062D\u062A\u0645\u0627\u0644\u06CC-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0627\u06CC\u0631\u0627\u0646-\u0645\u0642\u0627\u0628\u0644-\u0686\u06CC\u0646"
                      title="\u062A\u0631\u06A9\u06CC\u0628 \u0627\u062D\u062A\u0645\u0627\u0644\u06CC \u062A\u06CC\u0645 \u0645\u0644\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0645\u0642\u0627\u0628\u0644 \u0686\u06CC\u0646"
                    >
                      ترکیب احتمالی تیم ملی ایران مقابل چین
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404972/\u0622\u062E\u0631\u06CC\u0646-\u062E\u0627\u0637\u0631\u0627\u062A-\u0627\u0632-\u06AF\u0644\u0647\u0627\u06CC-\u0627\u06CC\u0631\u0627\u0646-\u0648-\u0686\u06CC\u0646"
                      title="\u0622\u062E\u0631\u06CC\u0646 \u062E\u0627\u0637\u0631\u0627\u062A \u0627\u0632 \u06AF\u0644\u0647\u0627\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0648 \u0686\u06CC\u0646\xA0"
                    >
                      آخرین خاطرات از گلهای ایران و چین 
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404970/\u0628\u0648\u0641\u0648\u0646-\u0645\u0631\u062F-\u0633\u0627\u0644-\u0641\u0648\u062A\u0628\u0627\u0644-\u0627\u06CC\u062A\u0627\u0644\u06CC\u0627-\u0634\u062F-(\u0639\u06A9\u0633)"
                      title="\u0628\u0648\u0641\u0648\u0646 \u0645\u0631\u062F \u0633\u0627\u0644 \u0641\u0648\u062A\u0628\u0627\u0644 \u0627\u06CC\u062A\u0627\u0644\u06CC\u0627 \u0634\u062F (\u0639\u06A9\u0633)"
                    >
                      بوفون مرد سال فوتبال ایتالیا شد (عکس)
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404969/\u0622\u0632\u0627\u062F\u06CC-\u0642\u062A\u0644\u06AF\u0627\u0647-\u0633\u0646\u062A\u06CC-\u0686\u06CC\u0646\u06CC\u200C\u0647\u0627"
                      title="\u0622\u0632\u0627\u062F\u06CC \u0642\u062A\u0644\u06AF\u0627\u0647 \u0633\u0646\u062A\u06CC \u0686\u06CC\u0646\u06CC\u200C\u0647\u0627\xA0"
                    >
                      آزادی قتلگاه سنتی چینی‌ها 
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404968/\u062F\u0639\u0648\u062A-22-\u0628\u0627\u0632\u06CC\u06A9\u0646-\u0628\u0647-\u0627\u0631\u062F\u0648\u06CC-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0641\u0648\u062A\u0633\u0627\u0644-\u0628\u0627\u0646\u0648\u0627\u0646"
                      title="\u062F\u0639\u0648\u062A 22 \u0628\u0627\u0632\u06CC\u06A9\u0646 \u0628\u0647 \u0627\u0631\u062F\u0648\u06CC \u062A\u06CC\u0645 \u0645\u0644\u06CC \u0641\u0648\u062A\u0633\u0627\u0644 \u0628\u0627\u0646\u0648\u0627\u0646"
                    >
                      دعوت 22 بازیکن به اردوی تیم ملی فوتسال بانوان
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404966/\u062F\u062E\u06CC\u0627\u060C-\u062A\u06CC\u0628\u0648-\u06A9\u0648\u0631\u062A\u0648\u0627-\u0648-\u062F\u0648\u0646\u0627\u0631\u0648\u0645\u0627\u061B-\u0686\u0647-\u06A9\u0633\u06CC-\u0628\u0647\u062A\u0631-\u0627\u0633\u062A\u061F"
                      title="\u062F\u062E\u06CC\u0627\u060C \u062A\u06CC\u0628\u0648 \u06A9\u0648\u0631\u062A\u0648\u0627 \u0648 \u062F\u0648\u0646\u0627\u0631\u0648\u0645\u0627\u061B \u0686\u0647 \u06A9\u0633\u06CC \u0628\u0647\u062A\u0631 \u0627\u0633\u062A\u061F"
                    >
                      دخیا، تیبو کورتوا و دوناروما؛ چه کسی بهتر است؟
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404967/\u067E\u06CC\u0634-\u0628\u0627\u0632\u06CC-\u0628\u0648\u0644\u06CC\u0648\u06CC-\u2013-\u0622\u0631\u0698\u0627\u0646\u062A\u06CC\u0646"
                      title="\u067E\u06CC\u0634 \u0628\u0627\u0632\u06CC \u0628\u0648\u0644\u06CC\u0648\u06CC \u2013 \u0622\u0631\u0698\u0627\u0646\u062A\u06CC\u0646"
                    >
                      پیش بازی بولیوی – آرژانتین
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404963/\u0628\u06CC\u200C\u062E\u0648\u0627\u0628\u06CC-\u0628\u0631\u0647\u0627\u0646\u06CC-\u0627\u0632-\u0627\u0633\u062A\u0631\u0633-\u062F\u06CC\u062F\u0627\u0631-\u0627\u06CC\u0631\u0627\u0646-\u0648-\u0686\u06CC\u0646!"
                      title="\u0628\u06CC\u200C\u062E\u0648\u0627\u0628\u06CC \u0628\u0631\u0647\u0627\u0646\u06CC \u0627\u0632 \u0627\u0633\u062A\u0631\u0633 \u062F\u06CC\u062F\u0627\u0631 \u0627\u06CC\u0631\u0627\u0646 \u0648 \u0686\u06CC\u0646!"
                    >
                      بی‌خوابی برهانی از استرس دیدار ایران و چین!
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404962/\u0631\u06A9\u0648\u0631\u062F-\u06A9\u0644\u06CC\u0646-\u0634\u06CC\u062A-\u0628\u0627-810-\u062F\u0642\u06CC\u0642\u0647-\u0634\u06A9\u0633\u062A!"
                      title="\u0631\u06A9\u0648\u0631\u062F \u06A9\u0644\u06CC\u0646 \u0634\u06CC\u062A \u0628\u0627 810 \u062F\u0642\u06CC\u0642\u0647 \u0634\u06A9\u0633\u062A!"
                    >
                      رکورد کلین شیت با 810 دقیقه شکست!
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404961/\u062F\u0631\u0647\u0627\u0649-\u0627\u0633\u062A\u0627\u062F\u06CC\u0648\u0645-\u0622\u0632\u0627\u062F\u0649-\u06AF\u0634\u0648\u062F\u0647-\u0634\u062F"
                      title="\u062F\u0631\u0647\u0627\u0649 \u0627\u0633\u062A\u0627\u062F\u06CC\u0648\u0645 \u0622\u0632\u0627\u062F\u0649 \u06AF\u0634\u0648\u062F\u0647 \u0634\u062F"
                    >
                      درهاى استادیوم آزادى گشوده شد
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404960/\u062D\u0627\u062C-\u0635\u0641\u06CC-\u0627\u0645\u0631\u0648\u0632-\u06CC\u06A9-\u0631\u0642\u0645\u06CC-\u0645\u06CC\u200C\u0634\u0648\u062F"
                      title="\u062D\u0627\u062C \u0635\u0641\u06CC \u0627\u0645\u0631\u0648\u0632 \u06CC\u06A9 \u0631\u0642\u0645\u06CC \u0645\u06CC\u200C\u0634\u0648\u062F\xA0"
                    >
                      حاج صفی امروز یک رقمی می‌شود 
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404959/12-\u0647\u0632\u0627\u0631-\u062F\u0644\u0627\u0631-\u067E\u0627\u062F\u0627\u0634-4-\u0627\u0645\u062A\u06CC\u0627\u0632-\u062A\u06CC\u0645-\u0645\u0644\u0649"
                      title="12 \u0647\u0632\u0627\u0631 \u062F\u0644\u0627\u0631 \u067E\u0627\u062F\u0627\u0634 4 \u0627\u0645\u062A\u06CC\u0627\u0632 \u062A\u06CC\u0645 \u0645\u0644\u0649"
                    >
                      12 هزار دلار پاداش 4 امتیاز تیم ملى
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404958/\u06CC\u0648\u0648\u0646\u062A\u0648\u0633-\u062D\u0631\u06CC\u0641-\u0628\u0627\u0631\u0633\u0644\u0648\u0646\u0627\u06CC-\u0622\u0645\u0627\u062F\u0647-\u0646\u062E\u0648\u0627\u0647\u062F-\u0634\u062F"
                      title="\u06CC\u0648\u0648\u0646\u062A\u0648\u0633 \u062D\u0631\u06CC\u0641 \u0628\u0627\u0631\u0633\u0644\u0648\u0646\u0627\u06CC \u0622\u0645\u0627\u062F\u0647 \u0646\u062E\u0648\u0627\u0647\u062F \u0634\u062F"
                    >
                      یوونتوس حریف بارسلونای آماده نخواهد شد
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404957/\u0645\u0627\u0634\u06CC\u0646\u0647\u0627\u06CC-\u06AF\u0644\u0632\u0646\u06CC-\u0628\u0648\u0646\u062F\u0633\u0644\u06CC\u06AF\u0627-\u062F\u0631-\u0641\u0635\u0644-2017-2016"
                      title="\u0645\u0627\u0634\u06CC\u0646\u0647\u0627\u06CC \u06AF\u0644\u0632\u0646\u06CC \u0628\u0648\u0646\u062F\u0633\u0644\u06CC\u06AF\u0627 \u062F\u0631 \u0641\u0635\u0644 2017-2016"
                    >
                      ماشینهای گلزنی بوندسلیگا در فصل 2017-2016
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404956/\u0631\u06CC\u0628\u0631\u06CC-\u0628\u0627\u06CC\u0631\u0646-\u0648-\u0631\u0626\u0627\u0644-\u062F\u0631-\u06CC\u06A9-\u0633\u0637\u062D-\u0647\u0633\u062A\u0646\u062F"
                      title="\u0631\u06CC\u0628\u0631\u06CC: \u0628\u0627\u06CC\u0631\u0646 \u0648 \u0631\u0626\u0627\u0644 \u062F\u0631 \u06CC\u06A9 \u0633\u0637\u062D \u0647\u0633\u062A\u0646\u062F"
                    >
                      ریبری: بایرن و رئال در یک سطح هستند
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404955/\u0628\u0631\u062A\u0631\u06CC\u0646-\u0633\u06CC\u0648\u0647\u0627\u06CC-\u06A9\u06CC\u0644\u0648\u0631-\u0646\u0627\u0648\u0627\u0633-\u0627\u0632-2014-\u062A\u0627-2017"
                      title="\u0628\u0631\u062A\u0631\u06CC\u0646 \u0633\u06CC\u0648\u0647\u0627\u06CC \u06A9\u06CC\u0644\u0648\u0631 \u0646\u0627\u0648\u0627\u0633 \u0627\u0632 2014 \u062A\u0627 2017"
                    >
                      برترین سیوهای کیلور ناواس از 2014 تا 2017
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404954/\u067E\u06CC\u0634-\u0628\u0627\u0632\u06CC-\u0641\u0631\u0627\u0646\u0633\u0647-\u2013-\u0627\u0633\u067E\u0627\u0646\u06CC\u0627"
                      title="\u067E\u06CC\u0634 \u0628\u0627\u0632\u06CC \u0641\u0631\u0627\u0646\u0633\u0647 \u2013 \u0627\u0633\u067E\u0627\u0646\u06CC\u0627"
                    >
                      پیش بازی فرانسه – اسپانیا
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404953/\u0631\u0627\u0626\u0648\u0644-\u062D\u0636\u0648\u0631-\u0645\u0646-\u062F\u0631-\u0628\u0627\u0631\u0633\u0644\u0648\u0646\u0627-\u063A\u06CC\u0631\u0645\u0645\u06A9\u0646-\u0646\u06CC\u0633\u062A"
                      title="\u0631\u0627\u0626\u0648\u0644: \u062D\u0636\u0648\u0631 \u0645\u0646 \u062F\u0631 \u0628\u0627\u0631\u0633\u0644\u0648\u0646\u0627 \u063A\u06CC\u0631\u0645\u0645\u06A9\u0646 \u0646\u06CC\u0633\u062A"
                    >
                      رائول: حضور من در بارسلونا غیرممکن نیست
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404952/\u062A\u0645\u0631\u06CC\u0646-\u0627\u0645\u0627\u0631\u0627\u062A\u06CC\u200C\u0647\u0627-\u062F\u0631-\u0648\u0631\u0632\u0634\u06AF\u0627\u0647-\u0633\u06CC\u062F\u0646\u06CC"
                      title="\u062A\u0645\u0631\u06CC\u0646 \u0627\u0645\u0627\u0631\u0627\u062A\u06CC\u200C\u0647\u0627 \u062F\u0631 \u0648\u0631\u0632\u0634\u06AF\u0627\u0647 \u0633\u06CC\u062F\u0646\u06CC"
                    >
                      تمرین اماراتی‌ها در ورزشگاه سیدنی
                    </a>
                  </li>
                  <li data-filter={3}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404951/\u0627\u0648\u0644\u06CC\u0646-\u0648-\u0622\u062E\u0631\u06CC\u0646-\u062A\u0645\u0631\u06CC\u0646-\u0642\u0637\u0631\u06CC\u200C\u0647\u0627-\u062F\u0631-\u0627\u0632\u0628\u06A9\u0633\u062A\u0627\u0646"
                      title="\u0627\u0648\u0644\u06CC\u0646 \u0648 \u0622\u062E\u0631\u06CC\u0646 \u062A\u0645\u0631\u06CC\u0646 \u0642\u0637\u0631\u06CC\u200C\u0647\u0627 \u062F\u0631 \u0627\u0632\u0628\u06A9\u0633\u062A\u0627\u0646"
                    >
                      اولین و آخرین تمرین قطری‌ها در ازبکستان
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404950/\u067E\u0631\u0633\u067E\u0648\u0644\u06CC\u0633-\u0645\u0646\u062A\u0638\u0631-\u0628\u0627\u0632\u06AF\u0634\u062A-\u0645\u0644\u06CC\u200C\u067E\u0648\u0634\u200C\u0647\u0627(\u0639\u06A9\u0633)"
                      title="\u067E\u0631\u0633\u067E\u0648\u0644\u06CC\u0633 \u0645\u0646\u062A\u0638\u0631 \u0628\u0627\u0632\u06AF\u0634\u062A \u0645\u0644\u06CC\u200C\u067E\u0648\u0634\u200C\u0647\u0627(\u0639\u06A9\u0633)"
                    >
                      پرسپولیس منتظر بازگشت ملی‌پوش‌ها(عکس)
                    </a>
                  </li>
                  <li data-filter={3}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404949/\u0647\u0627\u06CC\u062F\u0648\u0646\u06AF-\u062A\u0633\u0627\u0648\u06CC-\u062F\u0631-\u062A\u0647\u0631\u0627\u0646-\u0646\u062A\u06CC\u062C\u0647-\u0628\u062F\u06CC-\u0646\u062E\u0648\u0627\u0647\u062F-\u0628\u0648\u062F"
                      title="\u0647\u0627\u06CC\u062F\u0648\u0646\u06AF: \u062A\u0633\u0627\u0648\u06CC \u062F\u0631 \u062A\u0647\u0631\u0627\u0646 \u0646\u062A\u06CC\u062C\u0647 \u0628\u062F\u06CC \u0646\u062E\u0648\u0627\u0647\u062F \u0628\u0648\u062F"
                    >
                      هایدونگ: تساوی در تهران نتیجه بدی نخواهد بود
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404948/\u062A\u0645\u0631\u06CC\u0646-\u0622\u0645\u0627\u062F\u0647-\u0633\u0627\u0632\u06CC-\u062A\u06CC\u0645-\u0628\u0627\u06CC\u0631\u0646-\u0645\u0648\u0646\u06CC\u062E-(96-01-07)"
                      title="\u062A\u0645\u0631\u06CC\u0646 \u0622\u0645\u0627\u062F\u0647 \u0633\u0627\u0632\u06CC \u062A\u06CC\u0645 \u0628\u0627\u06CC\u0631\u0646 \u0645\u0648\u0646\u06CC\u062E (96/01/07)"
                    >
                      تمرین آماده سازی تیم بایرن مونیخ (96/01/07)
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404947/10-\u06AF\u0644-\u0641\u0648\u0642-\u0627\u0644\u0639\u0627\u062F\u0647-\u0648-\u062F\u06CC\u062F\u0646\u06CC-\u0627\u0632-\u0632\u0627\u0648\u06CC\u0647-\u0628\u0633\u062A\u0647"
                      title="10 \u06AF\u0644 \u0641\u0648\u0642 \u0627\u0644\u0639\u0627\u062F\u0647 \u0648 \u062F\u06CC\u062F\u0646\u06CC \u0627\u0632 \u0632\u0627\u0648\u06CC\u0647 \u0628\u0633\u062A\u0647"
                    >
                      10 گل فوق العاده و دیدنی از زاویه بسته
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404945/\u0646\u0627\u062A\u0645\u0627\u0645-\u0645\u0627\u0646\u062F\u0646-\u0628\u0627\u0632\u06CC-\u0633\u0646\u06AF\u0627\u0644-\u0633\u0627\u062D\u0644-\u0639\u0627\u062C"
                      title="\u0646\u0627\u062A\u0645\u0627\u0645 \u0645\u0627\u0646\u062F\u0646 \u0628\u0627\u0632\u06CC \u0633\u0646\u06AF\u0627\u0644 - \u0633\u0627\u062D\u0644 \u0639\u0627\u062C"
                    >
                      ناتمام ماندن بازی سنگال - ساحل عاج
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404944/\u062E\u062F\u0627\u062D\u0627\u0641\u0638\u06CC-\u0645\u0631\u062F-\u0645\u0646\u0641\u0648\u0631-\u067E\u0631\u0633\u067E\u0648\u0644\u06CC\u0633"
                      title="\u062E\u062F\u0627\u062D\u0627\u0641\u0638\u06CC \u0645\u0631\u062F \u0645\u0646\u0641\u0648\u0631 \u067E\u0631\u0633\u067E\u0648\u0644\u06CC\u0633"
                    >
                      خداحافظی مرد منفور پرسپولیس
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404943/\u0631\u0627\u067E\u0648\u0631\u062A-\u062E\u0628\u0631\u0646\u06AF\u0627\u0631-\u0686\u06CC\u0646\u06CC-\u0627\u0632-\u0632\u0645\u06CC\u0646-\u062A\u0645\u0631\u06CC\u0646-\u0686\u06CC\u0646!-(\u0639\u06A9\u0633)"
                      title="\u0631\u0627\u067E\u0648\u0631\u062A \u062E\u0628\u0631\u0646\u06AF\u0627\u0631 \u0686\u06CC\u0646\u06CC \u0627\u0632 \u0632\u0645\u06CC\u0646 \u062A\u0645\u0631\u06CC\u0646 \u0686\u06CC\u0646! (\u0639\u06A9\u0633)"
                    >
                      راپورت خبرنگار چینی از زمین تمرین چین! (عکس)
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404942/\u06A9\u0627\u0631\u0646\u0627\u0645\u0647-\u0686\u06CC\u0646-\u062F\u0631-\u0622\u0632\u0627\u062F\u06CC-\u0634\u06A9\u0633\u062A-\u0645\u0637\u0644\u0642!"
                      title="\u06A9\u0627\u0631\u0646\u0627\u0645\u0647 \u0686\u06CC\u0646 \u062F\u0631 \u0622\u0632\u0627\u062F\u06CC: \u0634\u06A9\u0633\u062A \u0645\u0637\u0644\u0642!"
                    >
                      کارنامه چین در آزادی: شکست مطلق!
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404941/\u062A\u0645\u0631\u06CC\u0646-\u0627\u0645\u0631\u0648\u0632-\u062A\u06CC\u0645-\u0631\u0626\u0627\u0644-\u0645\u0627\u062F\u0631\u06CC\u062F-(96-01-07)"
                      title="\u062A\u0645\u0631\u06CC\u0646 \u0627\u0645\u0631\u0648\u0632 \u062A\u06CC\u0645 \u0631\u0626\u0627\u0644 \u0645\u0627\u062F\u0631\u06CC\u062F (96/01/07)"
                    >
                      تمرین امروز تیم رئال مادرید (96/01/07)
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404911/\u06AF\u0632\u0627\u0631\u0634-\u06A9\u0627\u0645\u0644-\u0627\u0648\u0644\u06CC\u0646-\u0628\u0631\u0646\u0627\u0645\u0647-\u0646\u0648\u062F-\u06F9\u06F6-\u0628\u0627-\u06A9\u06CC\u200C\u0631\u0648\u0634"
                      title="\u06AF\u0632\u0627\u0631\u0634 \u06A9\u0627\u0645\u0644 \u0627\u0648\u0644\u06CC\u0646 \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u062F \u06F9\u06F6 \u0628\u0627 \u06A9\u06CC\u200C\u0631\u0648\u0634"
                    >
                      گزارش کامل اولین برنامه نود ۹۶ با کی‌روش
                    </a>
                  </li>
                  <li data-filter={3}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404940/\u0686\u06AF\u0648\u0646\u0647-\u0644\u06CC\u067E\u06CC-\u06A9\u06CC-\u0631\u0648\u0634-\u0631\u0627-\u0633\u0631\u0645\u0631\u0628\u06CC-\u0631\u0626\u0627\u0644-\u06A9\u0631\u062F"
                      title="\u0686\u06AF\u0648\u0646\u0647 \u0644\u06CC\u067E\u06CC \u06A9\u06CC \u0631\u0648\u0634 \u0631\u0627 \u0633\u0631\u0645\u0631\u0628\u06CC \u0631\u0626\u0627\u0644 \u06A9\u0631\u062F"
                    >
                      چگونه لیپی کی روش را سرمربی رئال کرد
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404939/\u062A\u062E\u0644\u0641-\u0639\u062C\u06CC\u0628-\u062F\u0631-\u0644\u06CC\u06AF-\u0641\u0648\u062A\u0633\u0627\u0644"
                      title="\u062A\u062E\u0644\u0641 \u0639\u062C\u06CC\u0628 \u062F\u0631 \u0644\u06CC\u06AF \u0641\u0648\u062A\u0633\u0627\u0644 "
                    >
                      تخلف عجیب در لیگ فوتسال{" "}
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404938/\u0628\u0631\u0631\u0633\u06CC-\u062F\u0642\u06CC\u0642-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0686\u06CC\u0646-\u0642\u0628\u0644-\u0627\u0632-\u0628\u0627\u0632\u06CC-\u0628\u0627-\u0627\u06CC\u0631\u0627\u0646"
                      title="\u0628\u0631\u0631\u0633\u06CC \u062F\u0642\u06CC\u0642 \u062A\u06CC\u0645 \u0645\u0644\u06CC \u0686\u06CC\u0646 \u0642\u0628\u0644 \u0627\u0632 \u0628\u0627\u0632\u06CC \u0628\u0627 \u0627\u06CC\u0631\u0627\u0646"
                    >
                      بررسی دقیق تیم ملی چین قبل از بازی با ایران
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404937/\u0628\u0631\u0631\u0633\u06CC-\u0639\u0645\u0644\u06A9\u0631\u062F-\u0644\u0698\u06CC\u0648\u0646\u0631\u0647\u0627-(96-01-07)"
                      title="\u0628\u0631\u0631\u0633\u06CC \u0639\u0645\u0644\u06A9\u0631\u062F \u0644\u0698\u06CC\u0648\u0646\u0631\u0647\u0627 (96/01/07)"
                    >
                      بررسی عملکرد لژیونرها (96/01/07)
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404936/\u0645\u06CC\u0644\u0627\u062F-\u0645\u062D\u0645\u062F\u06CC-\u0628\u0647\u062A\u0631\u06CC\u0646-\u0628\u0627\u0632\u06CC\u06A9\u0646-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u062F\u0631-\u0645\u0642\u0627\u0628\u0644-\u0642\u0637\u0631"
                      title="\u0645\u06CC\u0644\u0627\u062F \u0645\u062D\u0645\u062F\u06CC \u0628\u0647\u062A\u0631\u06CC\u0646 \u0628\u0627\u0632\u06CC\u06A9\u0646 \u062A\u06CC\u0645 \u0645\u0644\u06CC \u062F\u0631 \u0645\u0642\u0627\u0628\u0644 \u0642\u0637\u0631"
                    >
                      میلاد محمدی بهترین بازیکن تیم ملی در مقابل قطر
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404934/\u0646\u0627\u0628\u063A\u0647-\u0627\u06CC\u062A\u0627\u0644\u06CC\u0627\u06CC\u06CC-\u062F\u0631-\u0648\u0631\u0632\u0634\u06AF\u0627\u0647-\u0622\u0632\u0627\u062F\u06CC(\u0639\u06A9\u0633)"
                      title="\u0646\u0627\u0628\u063A\u0647 \u0627\u06CC\u062A\u0627\u0644\u06CC\u0627\u06CC\u06CC \u062F\u0631 \u0648\u0631\u0632\u0634\u06AF\u0627\u0647 \u0622\u0632\u0627\u062F\u06CC(\u0639\u06A9\u0633)"
                    >
                      نابغه ایتالیایی در ورزشگاه آزادی(عکس)
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404933/\u0622\u0646\u0627\u0644\u06CC\u0632-\u0641\u0646\u06CC-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0627\u06CC\u0631\u0627\u0646-\u062F\u0631-\u0645\u0642\u0627\u0628\u0644-\u0642\u0637\u0631"
                      title="\u0622\u0646\u0627\u0644\u06CC\u0632 \u0641\u0646\u06CC \u062A\u06CC\u0645 \u0645\u0644\u06CC \u0627\u06CC\u0631\u0627\u0646 \u062F\u0631 \u0645\u0642\u0627\u0628\u0644 \u0642\u0637\u0631"
                    >
                      آنالیز فنی تیم ملی ایران در مقابل قطر
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404932/\u0646\u0642\u0634\u0647-\u0644\u06CC\u067E\u06CC-\u0628\u0631\u0627\u06CC-\u0645\u0647\u0627\u0631-100-\u0647\u0632\u0627\u0631-\u0647\u0648\u0627\u062F\u0627\u0631-\u0627\u06CC\u0631\u0627\u0646!"
                      title="\u0646\u0642\u0634\u0647 \u0644\u06CC\u067E\u06CC \u0628\u0631\u0627\u06CC \u0645\u0647\u0627\u0631 100 \u0647\u0632\u0627\u0631 \u0647\u0648\u0627\u062F\u0627\u0631 \u0627\u06CC\u0631\u0627\u0646!"
                    >
                      نقشه لیپی برای مهار 100 هزار هوادار ایران!
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404931/\u0641\u0631\u062F\u0648\u0633\u06CC\u200C\u067E\u0648\u0631-\u06AF\u0632\u0627\u0631\u0634\u06AF\u0631-\u0627\u06CC\u0631\u0627\u0646-\u0648-\u0686\u06CC\u0646-\u0634\u062F"
                      title="\u0641\u0631\u062F\u0648\u0633\u06CC\u200C\u067E\u0648\u0631 \u06AF\u0632\u0627\u0631\u0634\u06AF\u0631 \u0627\u06CC\u0631\u0627\u0646 \u0648 \u0686\u06CC\u0646 \u0634\u062F"
                    >
                      فردوسی‌پور گزارشگر ایران و چین شد
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404930/\u0644\u062D\u0638\u0627\u062A-\u0634\u0627\u062F-\u0646\u0648\u0631\u0648\u0632-\u0628\u0627-\u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646-\u062A\u06CC\u0645-\u0645\u0644\u06CC"
                      title="\u0644\u062D\u0638\u0627\u062A \u0634\u0627\u062F \u0646\u0648\u0631\u0648\u0632 \u0628\u0627 \u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646 \u062A\u06CC\u0645 \u0645\u0644\u06CC"
                    >
                      لحظات شاد نوروز با بازیکنان تیم ملی
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404929/\u062D\u0648\u0627\u0634\u06CC-\u067E\u06CC\u0631\u0648\u0632\u06CC-\u0634\u06CC\u0631\u06CC\u0646-\u0627\u06CC\u0631\u0627\u0646-\u0645\u0642\u0627\u0628\u0644-\u0642\u0637\u0631"
                      title="\u062D\u0648\u0627\u0634\u06CC \u067E\u06CC\u0631\u0648\u0632\u06CC \u0634\u06CC\u0631\u06CC\u0646 \u0627\u06CC\u0631\u0627\u0646 \u0645\u0642\u0627\u0628\u0644 \u0642\u0637\u0631"
                    >
                      حواشی پیروزی شیرین ایران مقابل قطر
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404928/\u062C\u0631\u06CC\u0645\u0647-\u0633\u06CC\u062A\u06CC-\u0628\u0647-\u062E\u0627\u0637\u0631-\u062C\u0646\u062C\u0627\u0644-\u062F\u06CC\u062F\u0627\u0631-\u0628\u0627-\u0644\u06CC\u0648\u0631\u067E\u0648\u0644"
                      title="\u062C\u0631\u06CC\u0645\u0647 \u0633\u06CC\u062A\u06CC \u0628\u0647 \u062E\u0627\u0637\u0631 \u062C\u0646\u062C\u0627\u0644 \u062F\u06CC\u062F\u0627\u0631 \u0628\u0627 \u0644\u06CC\u0648\u0631\u067E\u0648\u0644"
                    >
                      جریمه سیتی به خاطر جنجال دیدار با لیورپول
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404927/\u0645\u0648\u0641\u0642-\u062A\u0631\u06CC\u0646-\u06A9\u0634\u0648\u0631\u0647\u0627\u06CC-\u062F\u0646\u06CC\u0627-\u062F\u0631-\u0632\u0645\u06CC\u0646\u0647-\u0635\u0639\u0648\u062F-\u0628\u0647-\u062C\u0627\u0645-\u062C\u0647\u0627\u0646\u06CC"
                      title="\u0645\u0648\u0641\u0642 \u062A\u0631\u06CC\u0646 \u06A9\u0634\u0648\u0631\u0647\u0627\u06CC \u062F\u0646\u06CC\u0627 \u062F\u0631 \u0632\u0645\u06CC\u0646\u0647 \u0635\u0639\u0648\u062F \u0628\u0647 \u062C\u0627\u0645 \u062C\u0647\u0627\u0646\u06CC"
                    >
                      موفق ترین کشورهای دنیا در زمینه صعود به جام جهانی
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404926/\u0622\u0645\u0627\u0631-\u0641\u0648\u0642-\u0627\u0644\u0639\u0627\u062F\u0647-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0627\u06CC\u0631\u0627\u0646-\u062F\u0631-\u0645\u0642\u062F\u0645\u0627\u062A\u06CC-\u062C\u0627\u0645-\u062C\u0647\u0627\u0646\u06CC"
                      title="\u0622\u0645\u0627\u0631 \u0641\u0648\u0642 \u0627\u0644\u0639\u0627\u062F\u0647 \u062A\u06CC\u0645 \u0645\u0644\u06CC \u0627\u06CC\u0631\u0627\u0646 \u062F\u0631 \u0645\u0642\u062F\u0645\u0627\u062A\u06CC \u062C\u0627\u0645 \u062C\u0647\u0627\u0646\u06CC"
                    >
                      آمار فوق العاده تیم ملی ایران در مقدماتی جام جهانی
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404924/\u0644\u062D\u0638\u0647-\u062A\u062D\u0648\u06CC\u0644-\u0633\u0627\u0644-96-\u062F\u0631-\u06A9\u0646\u0627\u0631-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0627\u06CC\u0631\u0627\u0646"
                      title="\u0644\u062D\u0638\u0647 \u062A\u062D\u0648\u06CC\u0644 \u0633\u0627\u0644 96 \u062F\u0631 \u06A9\u0646\u0627\u0631 \u062A\u06CC\u0645 \u0645\u0644\u06CC \u0627\u06CC\u0631\u0627\u0646"
                    >
                      لحظه تحویل سال 96 در کنار تیم ملی ایران
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404925/\u06A9\u06CC\u200C\u0631\u0648\u0634-\u0644\u06CC\u067E\u06CC-\u0628\u0627\u0634\u062F-\u06CC\u0627-\u0646\u0628\u0627\u0634\u062F-\u0641\u0631\u0642-\u0646\u0645\u06CC\u200C\u06A9\u0646\u062F"
                      title="\u06A9\u06CC\u200C\u0631\u0648\u0634: \u0644\u06CC\u067E\u06CC \u0628\u0627\u0634\u062F \u06CC\u0627 \u0646\u0628\u0627\u0634\u062F \u0641\u0631\u0642 \u0646\u0645\u06CC\u200C\u06A9\u0646\u062F"
                    >
                      کی‌روش: لیپی باشد یا نباشد فرق نمی‌کند
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404923/\u062C\u0647\u0646\u0645-\u0622\u0632\u0627\u062F\u06CC\u061B-\u0627\u0698\u062F\u0647\u0627-\u0633\u0648\u0632\u0627\u0646\u062F\u0647-\u0645\u06CC\u200C\u0634\u0648\u062F\u061F"
                      title="\u062C\u0647\u0646\u0645 \u0622\u0632\u0627\u062F\u06CC\u061B \u0627\u0698\u062F\u0647\u0627 \u0633\u0648\u0632\u0627\u0646\u062F\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F\u061F"
                    >
                      جهنم آزادی؛ اژدها سوزانده می‌شود؟
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404922/\u062A\u0648\u0636\u06CC\u062D-\u0646\u0635\u06CC\u0631\u0632\u0627\u062F\u0647-\u062F\u0631\u0628\u0627\u0631\u0647-\u062D\u06A9\u0645-\u062F\u06CC\u062F\u0627\u0631-\u062C\u0646\u062C\u0627\u0644\u06CC-\u062F\u0633\u062A\u0647-\u0627\u0648\u0644"
                      title="\u062A\u0648\u0636\u06CC\u062D \u0646\u0635\u06CC\u0631\u0632\u0627\u062F\u0647 \u062F\u0631\u0628\u0627\u0631\u0647 \u062D\u06A9\u0645 \u062F\u06CC\u062F\u0627\u0631 \u062C\u0646\u062C\u0627\u0644\u06CC \u062F\u0633\u062A\u0647 \u0627\u0648\u0644"
                    >
                      توضیح نصیرزاده درباره حکم دیدار جنجالی دسته اول
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404920/\u0635\u062D\u0628\u062A\u0647\u0627\u06CC-\u06A9\u06CC\u0631\u0648\u0634-\u0627\u0632-\u062C\u0646\u062C\u0627\u0644-\u062F\u0631-\u0628\u0627\u0632\u06CC-\u0642\u0637\u0631-\u062A\u0627-\u062C\u062F\u0627\u0644-\u0628\u0627-\u0644\u06CC\u067E\u06CC"
                      title="\u0635\u062D\u0628\u062A\u0647\u0627\u06CC \u06A9\u06CC\u0631\u0648\u0634 \u0627\u0632 \u062C\u0646\u062C\u0627\u0644 \u062F\u0631 \u0628\u0627\u0632\u06CC \u0642\u0637\u0631 \u062A\u0627 \u062C\u062F\u0627\u0644 \u0628\u0627 \u0644\u06CC\u067E\u06CC"
                    >
                      صحبتهای کیروش از جنجال در بازی قطر تا جدال با لیپی
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404921/\u06A9\u06CC\u200C\u0631\u0648\u0634-\u0628\u0627\u0632-\u0647\u0645-\u062A\u0631\u06A9\u06CC\u0628-\u062A\u06CC\u0645-\u0631\u0627-\u062A\u063A\u06CC\u06CC\u0631-\u0645\u06CC\u200C\u062F\u0647\u062F"
                      title="\u06A9\u06CC\u200C\u0631\u0648\u0634 \u0628\u0627\u0632 \u0647\u0645 \u062A\u0631\u06A9\u06CC\u0628 \u062A\u06CC\u0645 \u0631\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u0645\u06CC\u200C\u062F\u0647\u062F"
                    >
                      کی‌روش باز هم ترکیب تیم را تغییر می‌دهد
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404919/\u062C\u0634\u0646-\u062A\u0648\u0644\u062F-\u067E\u0648\u0631\u0645\u0648\u0633\u0648\u06CC-\u062F\u0631-\u062A\u0645\u0631\u06CC\u0646-\u0627\u0633\u062A\u0642\u0644\u0627\u0644-\u062E\u0648\u0632\u0633\u062A\u0627\u0646"
                      title="\u062C\u0634\u0646 \u062A\u0648\u0644\u062F \u067E\u0648\u0631\u0645\u0648\u0633\u0648\u06CC \u062F\u0631 \u062A\u0645\u0631\u06CC\u0646 \u0627\u0633\u062A\u0642\u0644\u0627\u0644 \u062E\u0648\u0632\u0633\u062A\u0627\u0646 "
                    >
                      جشن تولد پورموسوی در تمرین استقلال خوزستان{" "}
                    </a>
                  </li>
                  <li data-filter={3}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404918/\u062A\u0631\u06A9\u06CC\u0628-11-\u0646\u0641\u0631\u0647-\u0686\u06CC\u0646-\u0628\u0631\u0627\u06CC-\u0645\u0642\u0627\u0628\u0644\u0647-\u0628\u0627-\u0627\u06CC\u0631\u0627\u0646"
                      title="\u062A\u0631\u06A9\u06CC\u0628 11 \u0646\u0641\u0631\u0647 \u0686\u06CC\u0646 \u0628\u0631\u0627\u06CC \u0645\u0642\u0627\u0628\u0644\u0647 \u0628\u0627 \u0627\u06CC\u0631\u0627\u0646\xA0"
                    >
                      ترکیب 11 نفره چین برای مقابله با ایران 
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404917/\u062A\u0642\u062F\u06CC\u0631-\u0648-\u062A\u0634\u06A9\u0631-\u0627\u0632-\u0647\u0648\u0627\u067E\u06CC\u0645\u0627\u06CC-\u0627\u062E\u062A\u0635\u0627\u0635\u06CC-\u062A\u06CC\u0645-\u0645\u0644\u06CC"
                      title="\u062A\u0642\u062F\u06CC\u0631 \u0648 \u062A\u0634\u06A9\u0631 \u0627\u0632 \u0647\u0648\u0627\u067E\u06CC\u0645\u0627\u06CC \u0627\u062E\u062A\u0635\u0627\u0635\u06CC \u062A\u06CC\u0645 \u0645\u0644\u06CC\xA0"
                    >
                      تقدیر و تشکر از هواپیمای اختصاصی تیم ملی 
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404916/\u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646-\u062A\u06CC\u0645\u200C\u0645\u0644\u06CC\u200C\u0628\u0631\u0627\u06CC-\u0633\u0641\u06CC\u062F\u067E\u0648\u0634-\u06A9\u0631\u062F\u0646\u200C\u0622\u0632\u0627\u062F\u06CC"
                      title="\u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646 \u062A\u06CC\u0645\u200C\u0645\u0644\u06CC\u200C\u0628\u0631\u0627\u06CC \u0633\u0641\u06CC\u062F\u067E\u0648\u0634 \u06A9\u0631\u062F\u0646\u200C\u0622\u0632\u0627\u062F\u06CC"
                    >
                      درخواست‌بازیکنان تیم‌ملی‌برای سفیدپوش کردن‌آزادی
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404914/\u062D\u0627\u0644-\u0648-\u0647\u0648\u0627\u06CC-\u0647\u0648\u0627\u062F\u0627\u0631\u0627\u0646-\u0627\u06CC\u0631\u0627\u0646-\u0642\u0628\u0644-\u0627\u0632-\u0628\u0627\u0632\u06CC-\u0628\u0627-\u0642\u0637\u0631"
                      title="\u062D\u0627\u0644 \u0648 \u0647\u0648\u0627\u06CC \u0647\u0648\u0627\u062F\u0627\u0631\u0627\u0646 \u0627\u06CC\u0631\u0627\u0646 \u0642\u0628\u0644 \u0627\u0632 \u0628\u0627\u0632\u06CC \u0628\u0627 \u0642\u0637\u0631 "
                    >
                      حال و هوای هواداران ایران قبل از بازی با قطر{" "}
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404915/\u0648\u0646\u06AF\u0631-\u0641\u0631\u0627\u0646\u0633\u0647-\u0645\u0627\u0646\u0646\u062F-\u0628\u0631\u0632\u06CC\u0644-20-\u0633\u0627\u0644-\u0642\u0628\u0644-\u0627\u0633\u062A"
                      title="\u0648\u0646\u06AF\u0631: \u0641\u0631\u0627\u0646\u0633\u0647 \u0645\u0627\u0646\u0646\u062F \u0628\u0631\u0632\u06CC\u0644 20 \u0633\u0627\u0644 \u0642\u0628\u0644 \u0627\u0633\u062A"
                    >
                      ونگر: فرانسه مانند برزیل 20 سال قبل است
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404913/\u0644\u062D\u0638\u0627\u062A-\u062C\u0627\u0644\u0628-\u0628\u0631\u0646\u0627\u0645\u0647-\u0646\u0648\u062F-\u062F\u0631-\u0633\u0627\u0644-95"
                      title="\u0644\u062D\u0638\u0627\u062A \u062C\u0627\u0644\u0628 \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u062F \u062F\u0631 \u0633\u0627\u0644 95"
                    >
                      لحظات جالب برنامه نود در سال 95
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404912/\u062E\u0644\u0627\u0635\u0647-\u0628\u0627\u0632\u06CC-\u062A\u0631\u06A9\u06CC\u0647-3-1-\u0645\u0648\u0644\u062F\u0627\u0648\u06CC"
                      title="\u062E\u0644\u0627\u0635\u0647 \u0628\u0627\u0632\u06CC \u062A\u0631\u06A9\u06CC\u0647 3-1 \u0645\u0648\u0644\u062F\u0627\u0648\u06CC"
                    >
                      خلاصه بازی ترکیه 3-1 مولداوی
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404910/\u062A\u0645\u0631\u06CC\u0646-\u0627\u0645\u0631\u0648\u0632-\u0628\u0627\u0631\u0633\u0644\u0648\u0646\u0627-(96-01-07)"
                      title="\u062A\u0645\u0631\u06CC\u0646 \u0627\u0645\u0631\u0648\u0632 \u0628\u0627\u0631\u0633\u0644\u0648\u0646\u0627 (96/01/07)"
                    >
                      تمرین امروز بارسلونا (96/01/07)
                    </a>
                  </li>
                  <li data-filter={3}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404908/\u0645\u0627\u0631\u0686\u0644\u0648-\u0644\u06CC\u067E\u06CC-\u0628\u0639\u062F-\u0627\u0632-\u0645\u0648\u0631\u06CC\u0646\u06CC\u0648-\u062F\u0648\u0645-\u0634\u062F"
                      title="\u0645\u0627\u0631\u0686\u0644\u0648 \u0644\u06CC\u067E\u06CC \u0628\u0639\u062F \u0627\u0632 \u0645\u0648\u0631\u06CC\u0646\u06CC\u0648 \u062F\u0648\u0645 \u0634\u062F"
                    >
                      مارچلو لیپی بعد از مورینیو دوم شد
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404909/\u062C\u0634\u0646-\u062A\u0648\u0644\u062F-\u067E\u0648\u0631\u0645\u0648\u0633\u0648\u06CC-\u062F\u0631-\u062A\u0645\u0631\u06CC\u0646-\u0627\u0633\u062A\u0642\u0644\u0627\u0644-\u062E\u0648\u0632\u0633\u062A\u0627\u0646"
                      title="\u062C\u0634\u0646 \u062A\u0648\u0644\u062F \u067E\u0648\u0631\u0645\u0648\u0633\u0648\u06CC \u062F\u0631 \u062A\u0645\u0631\u06CC\u0646 \u0627\u0633\u062A\u0642\u0644\u0627\u0644 \u062E\u0648\u0632\u0633\u062A\u0627\u0646"
                    >
                      جشن تولد پورموسوی در تمرین استقلال خوزستان
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404907/\u0686\u0627\u0644\u0634-\u0631\u0648\u067E\u0627\u06CC\u06CC-\u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646-\u0628\u0627\u0631\u0633\u0644\u0648\u0646\u0627-\u0628\u0627-\u06A9\u0645\u06A9-\u062F\u06CC\u0648\u0627\u0631-!"
                      title="\u0686\u0627\u0644\u0634 \u0631\u0648\u067E\u0627\u06CC\u06CC \u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646 \u0628\u0627\u0631\u0633\u0644\u0648\u0646\u0627 \u0628\u0627 \u06A9\u0645\u06A9 \u062F\u06CC\u0648\u0627\u0631 !"
                    >
                      چالش روپایی بازیکنان بارسلونا با کمک دیوار !
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404906/\u0648\u0644\u062E\u0631\u062C\u06CC-\u0686\u0644\u0633\u06CC-\u0628\u0631\u0627\u06CC-\u0631\u062F-\u067E\u06CC\u0634\u0646\u0647\u0627\u062F-\u0631\u0626\u0627\u0644-\u062A\u0648\u0633\u0637-\u0647\u0627\u0632\u0627\u0631\u062F"
                      title="\u0648\u0644\u062E\u0631\u062C\u06CC \u0686\u0644\u0633\u06CC \u0628\u0631\u0627\u06CC \u0631\u062F \u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u0631\u0626\u0627\u0644 \u062A\u0648\u0633\u0637 \u0647\u0627\u0632\u0627\u0631\u062F"
                    >
                      ولخرجی چلسی برای رد پیشنهاد رئال توسط هازارد
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404904/\u0634\u06CC\u0648\u0647-\u0639\u062C\u06CC\u0628-\u0631\u0626\u0627\u0644-\u0645\u0627\u062F\u0631\u06CC\u062F-\u0628\u0631\u0627\u06CC-\u062E\u0631\u06CC\u062F-\u0698\u0627\u0628\u06CC-\u0622\u0644\u0648\u0646\u0633\u0648"
                      title="\u0634\u06CC\u0648\u0647 \u0639\u062C\u06CC\u0628 \u0631\u0626\u0627\u0644 \u0645\u0627\u062F\u0631\u06CC\u062F \u0628\u0631\u0627\u06CC \u062E\u0631\u06CC\u062F \u0698\u0627\u0628\u06CC \u0622\u0644\u0648\u0646\u0633\u0648"
                    >
                      شیوه عجیب رئال مادرید برای خرید ژابی آلونسو
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404903/\u06AF\u0644\u0647\u0627\u06CC-\u0641\u0648\u062A\u0628\u0627\u0644-\u0633\u0627\u062D\u0644\u06CC-\u06AF\u0644\u0633\u0627\u067E\u0648\u0634-9-1-\u0644\u0648\u0627\u0646\u062A\u0647"
                      title="\u06AF\u0644\u0647\u0627\u06CC \u0641\u0648\u062A\u0628\u0627\u0644 \u0633\u0627\u062D\u0644\u06CC \u06AF\u0644\u0633\u0627\u067E\u0648\u0634 9-1 \u0644\u0648\u0627\u0646\u062A\u0647"
                    >
                      گلهای فوتبال ساحلی گلساپوش 9-1 لوانته
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404901/\u0628\u0646\u0632\u0645\u0627-\u062A\u0631\u06A9\u06CC\u0628\u06CC-\u0627\u0632-\u0632\u06CC\u062F\u0627\u0646-\u0648-\u0631\u0648\u0646\u0627\u0644\u062F\u0648-\u0627\u0633\u062A"
                      title="\u0628\u0646\u0632\u0645\u0627 \u062A\u0631\u06A9\u06CC\u0628\u06CC \u0627\u0632 \u0632\u06CC\u062F\u0627\u0646 \u0648 \u0631\u0648\u0646\u0627\u0644\u062F\u0648 \u0627\u0633\u062A"
                    >
                      بنزما ترکیبی از زیدان و رونالدو است
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404900/\u0639\u0645\u0644\u06A9\u0631\u062F-\u062F\u06CC\u062F\u0646\u06CC-\u0645\u0627\u0631\u062A\u06CC\u0646\u0632-\u062F\u0631-\u062E\u0637-\u062F\u0641\u0627\u0639-\u0628\u0627\u06CC\u0631\u0646\u200C\u0645\u0648\u0646\u06CC\u062E"
                      title="\u0639\u0645\u0644\u06A9\u0631\u062F \u062F\u06CC\u062F\u0646\u06CC \u0645\u0627\u0631\u062A\u06CC\u0646\u0632 \u062F\u0631 \u062E\u0637 \u062F\u0641\u0627\u0639 \u0628\u0627\u06CC\u0631\u0646\u200C\u0645\u0648\u0646\u06CC\u062E"
                    >
                      عملکرد دیدنی مارتینز در خط دفاع بایرن‌مونیخ
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404899/\u0622\u0645\u0627\u0631-\u063A\u06CC\u0631\u0642\u0627\u0628\u0644-\u0628\u0627\u0648\u0631-\u0647\u0644\u0646\u062F-\u0627\u0632-\u0633\u0627\u0644-2014(\u06AF\u0632\u0627\u0631\u0634-\u062A\u0635\u0648\u06CC\u0631\u06CC)"
                      title="\u0622\u0645\u0627\u0631 \u063A\u06CC\u0631\u0642\u0627\u0628\u0644 \u0628\u0627\u0648\u0631 \u0647\u0644\u0646\u062F \u0627\u0632 \u0633\u0627\u0644 2014(\u06AF\u0632\u0627\u0631\u0634 \u062A\u0635\u0648\u06CC\u0631\u06CC)"
                    >
                      آمار غیرقابل باور هلند از سال 2014(گزارش تصویری)
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404897/\u0645\u0627\u0646\u0686\u06CC\u0646\u06CC-\u06AF\u0648\u0627\u0631\u062F\u06CC\u0648\u0644\u0627-\u062F\u0631-\u0628\u0627\u0631\u0633\u0627-\u062A\u0646\u0647\u0627-\u06CC\u06A9-\u0631\u0642\u06CC\u0628-\u062F\u0627\u0634\u062A"
                      title="\u0645\u0627\u0646\u0686\u06CC\u0646\u06CC: \u06AF\u0648\u0627\u0631\u062F\u06CC\u0648\u0644\u0627 \u062F\u0631 \u0628\u0627\u0631\u0633\u0627 \u062A\u0646\u0647\u0627 \u06CC\u06A9 \u0631\u0642\u06CC\u0628 \u062F\u0627\u0634\u062A"
                    >
                      مانچینی: گواردیولا در بارسا تنها یک رقیب داشت
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404898/\u062A\u0645\u0631\u06CC\u0646-\u0627\u0645\u0631\u0648\u0632-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0627\u0646\u06AF\u0644\u06CC\u0633-(96-01-07)"
                      title="\u062A\u0645\u0631\u06CC\u0646 \u0627\u0645\u0631\u0648\u0632 \u062A\u06CC\u0645 \u0645\u0644\u06CC \u0627\u0646\u06AF\u0644\u06CC\u0633 (96/01/07)"
                    >
                      تمرین امروز تیم ملی انگلیس (96/01/07)
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404896/\u062A\u0648\u0635\u06CC\u0647-\u0628\u06A9\u0627\u0645-\u0628\u0647-\u0647\u0627\u0641\u0628\u06A9-\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC-\u0628\u0631\u0627\u06CC-\u0631\u0641\u062A\u0646-\u0628\u0647-\u0645\u06CC\u0644\u0627\u0646"
                      title="\u062A\u0648\u0635\u06CC\u0647 \u0628\u06A9\u0627\u0645 \u0628\u0647 \u0647\u0627\u0641\u0628\u06A9 \u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC \u0628\u0631\u0627\u06CC \u0631\u0641\u062A\u0646 \u0628\u0647 \u0645\u06CC\u0644\u0627\u0646"
                    >
                      توصیه بکام به هافبک انگلیسی برای رفتن به میلان
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404895/\u0627\u0644-\u06A9\u0644\u0627\u0633\u06CC\u06A9\u0648-\u0628\u0627-\u062D\u0636\u0648\u0631-\u0631\u0648\u0646\u0627\u0644\u062F\u06CC\u0646\u06CC\u0648-\u062F\u0631-\u0644\u0628\u0646\u0627\u0646-(\u0639\u06A9\u0633)"
                      title="\u0627\u0644 \u06A9\u0644\u0627\u0633\u06CC\u06A9\u0648 \u0628\u0627 \u062D\u0636\u0648\u0631 \u0631\u0648\u0646\u0627\u0644\u062F\u06CC\u0646\u06CC\u0648 \u062F\u0631 \u0644\u0628\u0646\u0627\u0646 (\u0639\u06A9\u0633)"
                    >
                      ال کلاسیکو با حضور رونالدینیو در لبنان (عکس)
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404893/\u0648\u0627\u0631\u0627\u0646-\u0634\u0627\u06CC\u0639\u0627\u062A-\u067E\u06CC\u0648\u0633\u062A\u0646-\u0628\u0647-\u06CC\u0648\u0646\u0627\u06CC\u062A\u062F-\u0631\u0627-\u062A\u0642\u0648\u06CC\u062A-\u06A9\u0631\u062F"
                      title="\u0648\u0627\u0631\u0627\u0646 \u0634\u0627\u06CC\u0639\u0627\u062A \u067E\u06CC\u0648\u0633\u062A\u0646 \u0628\u0647 \u06CC\u0648\u0646\u0627\u06CC\u062A\u062F \u0631\u0627 \u062A\u0642\u0648\u06CC\u062A \u06A9\u0631\u062F"
                    >
                      واران شایعات پیوستن به یونایتد را تقویت کرد
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404892/\u0644\u062D\u0638\u0627\u062A-\u0639\u0635\u0628\u0627\u0646\u06CC\u062A-\u0634\u062F\u06CC\u062F-\u0646\u06CC\u0645\u0627\u0631-\u062F\u0631-\u0645\u0633\u062A\u0637\u06CC\u0644-\u0633\u0628\u0632"
                      title="\u0644\u062D\u0638\u0627\u062A \u0639\u0635\u0628\u0627\u0646\u06CC\u062A \u0634\u062F\u06CC\u062F \u0646\u06CC\u0645\u0627\u0631 \u062F\u0631 \u0645\u0633\u062A\u0637\u06CC\u0644 \u0633\u0628\u0632"
                    >
                      لحظات عصبانیت شدید نیمار در مستطیل سبز
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404891/\u0644\u06CC\u0648\u0646\u0644-\u0645\u0633\u06CC-\u062E\u0648\u0627\u0633\u062A\u0627\u0631-\u0628\u0627\u0632\u06AF\u0634\u062A-\u0633\u062A\u0627\u0631\u0647-\u0628\u0627\u06CC\u0631\u0646-\u0628\u0647-\u0628\u0627\u0631\u0633\u0627"
                      title="\u0644\u06CC\u0648\u0646\u0644 \u0645\u0633\u06CC \u062E\u0648\u0627\u0633\u062A\u0627\u0631 \u0628\u0627\u0632\u06AF\u0634\u062A \u0633\u062A\u0627\u0631\u0647 \u0628\u0627\u06CC\u0631\u0646 \u0628\u0647 \u0628\u0627\u0631\u0633\u0627"
                    >
                      لیونل مسی خواستار بازگشت ستاره بایرن به بارسا
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404890/\u0628\u0627\u0632\u06AF\u0634\u062A-\u0645\u0646\u0635\u0648\u0631\u06CC\u0627\u0646-\u0648-\u0627\u0633\u0645\u0627\u0639\u06CC\u0644\u06CC-\u0628\u0647-\u062A\u0645\u0631\u06CC\u0646-\u0627\u0633\u062A\u0642\u0644\u0627\u0644"
                      title="\u0628\u0627\u0632\u06AF\u0634\u062A \u0645\u0646\u0635\u0648\u0631\u06CC\u0627\u0646 \u0648 \u0627\u0633\u0645\u0627\u0639\u06CC\u0644\u06CC \u0628\u0647 \u062A\u0645\u0631\u06CC\u0646 \u0627\u0633\u062A\u0642\u0644\u0627\u0644"
                    >
                      بازگشت منصوریان و اسماعیلی به تمرین استقلال
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404889/\u0631\u0648\u0646\u0627\u0644\u062F\u0648-\u0642\u0631\u0628\u0627\u0646\u06CC-\u0633\u06CC\u0633\u062A\u0645-\u0686\u0631\u062E\u0634\u06CC-\u0632\u06CC\u062F\u0627\u0646"
                      title="\u0631\u0648\u0646\u0627\u0644\u062F\u0648 \u0642\u0631\u0628\u0627\u0646\u06CC \u0633\u06CC\u0633\u062A\u0645 \u0686\u0631\u062E\u0634\u06CC \u0632\u06CC\u062F\u0627\u0646"
                    >
                      رونالدو قربانی سیستم چرخشی زیدان
                    </a>
                  </li>
                  <li data-filter={1}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404866/\u0632\u0645\u06CC\u0646-\u06A9\u0634\u062A-\u0633\u0628\u0632\u06CC-\u0628\u0631\u0627\u06CC-\u0686\u06CC\u0646(\u0639\u06A9\u0633)"
                      title="\u0632\u0645\u06CC\u0646 \u06A9\u0634\u062A \u0633\u0628\u0632\u06CC \u0628\u0631\u0627\u06CC \u0686\u06CC\u0646(\u0639\u06A9\u0633)"
                    >
                      زمین کشت سبزی برای چین(عکس)
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404888/\u0645\u0627\u0631\u0633\u0644\u0648-\u06AF\u0644\u200C\u0633\u0627\u0632\u062A\u0631\u06CC\u0646-\u0628\u0627\u0632\u06CC\u06A9\u0646-\u0631\u0626\u0627\u0644-\u0645\u0627\u062F\u0631\u06CC\u062F-\u0628\u0631\u0627\u06CC-\u0631\u0648\u0646\u0627\u0644\u062F\u0648"
                      title="\u0645\u0627\u0631\u0633\u0644\u0648 \u06AF\u0644\u200C\u0633\u0627\u0632\u062A\u0631\u06CC\u0646 \u0628\u0627\u0632\u06CC\u06A9\u0646 \u0631\u0626\u0627\u0644 \u0645\u0627\u062F\u0631\u06CC\u062F \u0628\u0631\u0627\u06CC \u0631\u0648\u0646\u0627\u0644\u062F\u0648"
                    >
                      مارسلو گل‌سازترین بازیکن رئال مادرید برای رونالدو
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404887/\u0648\u0644\u0632-\u0628\u062F\u0648\u0646-\u06AF\u0631\u062A-\u0628\u06CC\u0644-\u0647\u0645-\u0645\u06CC-\u062A\u0648\u0627\u0646\u062F-\u067E\u06CC\u0631\u0648\u0632-\u0634\u0648\u062F"
                      title="\u0648\u0644\u0632 \u0628\u062F\u0648\u0646 \u06AF\u0631\u062A \u0628\u06CC\u0644 \u0647\u0645 \u0645\u06CC \u062A\u0648\u0627\u0646\u062F \u067E\u06CC\u0631\u0648\u0632 \u0634\u0648\u062F"
                    >
                      ولز بدون گرت بیل هم می تواند پیروز شود
                    </a>
                  </li>
                  <li data-filter={4} className="news-video">
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404883/\u0686\u0627\u0644\u0634-\u0627\u0646\u062A\u062E\u0627\u0628-\u0627\u0633\u062A\u06CC\u06A9\u0631-\u0628\u0631\u0627\u06CC-\u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646-\u0628\u0627\u0631\u0633\u0644\u0648\u0646\u0627"
                      title="\u0686\u0627\u0644\u0634 \u0627\u0646\u062A\u062E\u0627\u0628 \u0627\u0633\u062A\u06CC\u06A9\u0631 \u0628\u0631\u0627\u06CC \u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646 \u0628\u0627\u0631\u0633\u0644\u0648\u0646\u0627"
                    >
                      چالش انتخاب استیکر برای بازیکنان بارسلونا
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404885/\u0648\u06CC\u062F\u0626\u0648\u0647\u0627\u06CC-\u06AF\u0648\u0627\u0631\u062F\u06CC\u0648\u0644\u0627-\u0628\u0631\u0627\u06CC-\u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646-\u06A9\u0633\u0644-\u06A9\u0646\u0646\u062F\u0647-\u0627\u0633\u062A"
                      title="\u0648\u06CC\u062F\u0626\u0648\u0647\u0627\u06CC \u06AF\u0648\u0627\u0631\u062F\u06CC\u0648\u0644\u0627 \u0628\u0631\u0627\u06CC \u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646 \u06A9\u0633\u0644 \u06A9\u0646\u0646\u062F\u0647 \u0627\u0633\u062A"
                    >
                      ویدئوهای گواردیولا برای بازیکنان کسل کننده است
                    </a>
                  </li>
                  <li data-filter={2}>
                    <a
                      target="_blank"
                      className="small-news-link"
                      href="http://www.varzesh3.com/news/1404882/\u06CC\u06A9-\u062B\u0627\u0646\u06CC\u0647-\u0647\u0645-\u0628\u0647-\u067E\u06CC\u0634\u0646\u0647\u0627\u062F-\u0628\u0627\u0631\u0633\u0627-\u0641\u06A9\u0631-\u0646\u0645\u06CC-\u06A9\u0646\u0645"
                      title="\u06CC\u06A9 \u062B\u0627\u0646\u06CC\u0647 \u0647\u0645 \u0628\u0647 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u0628\u0627\u0631\u0633\u0627 \u0641\u06A9\u0631 \u0646\u0645\u06CC \u06A9\u0646\u0645"
                    >
                      یک ثانیه هم به پیشنهاد بارسا فکر نمی کنم
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="custom-scroll-area">
              <ul
                id="mostViewedNews"
                className="news-list--listed-news tab-pane"
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
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405025/\u0627\u06CC\u0631\u0627\u0646-1-\u2013-\u0686\u06CC\u0646-0-\u061B-\u0628\u0686\u0647\u200C\u0647\u0627-\u0645\u062A\u0634\u06A9\u0631\u06CC\u0645"
                    title="\u0627\u06CC\u0631\u0627\u0646 1 \u2013 \u0686\u06CC\u0646 0 \u061B \u0628\u0686\u0647\u200C\u0647\u0627 \u0645\u062A\u0634\u06A9\u0631\u06CC\u0645"
                  >
                    ایران 1 – چین 0 ؛ بچه‌ها متشکریم
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404940/\u0686\u06AF\u0648\u0646\u0647-\u0644\u06CC\u067E\u06CC-\u06A9\u06CC-\u0631\u0648\u0634-\u0631\u0627-\u0633\u0631\u0645\u0631\u0628\u06CC-\u0631\u0626\u0627\u0644-\u06A9\u0631\u062F"
                    title="\u0686\u06AF\u0648\u0646\u0647 \u0644\u06CC\u067E\u06CC \u06A9\u06CC \u0631\u0648\u0634 \u0631\u0627 \u0633\u0631\u0645\u0631\u0628\u06CC \u0631\u0626\u0627\u0644 \u06A9\u0631\u062F"
                  >
                    چگونه لیپی کی روش را سرمربی رئال کرد
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405068/\u0644\u06CC\u0648\u0646\u0644-\u0645\u0633\u06CC-4-\u062C\u0644\u0633\u0647-\u0645\u062D\u0631\u0648\u0645-\u0634\u062F"
                    title="\u0644\u06CC\u0648\u0646\u0644 \u0645\u0633\u06CC 4 \u062C\u0644\u0633\u0647 \u0645\u062D\u0631\u0648\u0645 \u0634\u062F"
                  >
                    لیونل مسی 4 جلسه محروم شد
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404944/\u062E\u062F\u0627\u062D\u0627\u0641\u0638\u06CC-\u0645\u0631\u062F-\u0645\u0646\u0641\u0648\u0631-\u067E\u0631\u0633\u067E\u0648\u0644\u06CC\u0633"
                    title="\u062E\u062F\u0627\u062D\u0627\u0641\u0638\u06CC \u0645\u0631\u062F \u0645\u0646\u0641\u0648\u0631 \u067E\u0631\u0633\u067E\u0648\u0644\u06CC\u0633"
                  >
                    خداحافظی مرد منفور پرسپولیس
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404990/\u06AF\u0632\u0627\u0631\u0634-\u06A9\u0627\u0645\u0644-\u0627\u0632-\u062C\u0646\u06AF-\u063A\u0648\u0644\u200C\u0647\u0627\u06CC-\u0622\u0633\u06CC\u0627\u06CC\u06CC-\u0628\u0631\u0627\u06CC-\u062C\u0627\u0645-2018"
                    title="\u06AF\u0632\u0627\u0631\u0634 \u06A9\u0627\u0645\u0644 \u0627\u0632 \u062C\u0646\u06AF \u063A\u0648\u0644\u200C\u0647\u0627\u06CC \u0622\u0633\u06CC\u0627\u06CC\u06CC \u0628\u0631\u0627\u06CC \u062C\u0627\u0645 2018"
                  >
                    گزارش کامل از جنگ غول‌های آسیایی برای جام 2018
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404932/\u0646\u0642\u0634\u0647-\u0644\u06CC\u067E\u06CC-\u0628\u0631\u0627\u06CC-\u0645\u0647\u0627\u0631-100-\u0647\u0632\u0627\u0631-\u0647\u0648\u0627\u062F\u0627\u0631-\u0627\u06CC\u0631\u0627\u0646!"
                    title="\u0646\u0642\u0634\u0647 \u0644\u06CC\u067E\u06CC \u0628\u0631\u0627\u06CC \u0645\u0647\u0627\u0631 100 \u0647\u0632\u0627\u0631 \u0647\u0648\u0627\u062F\u0627\u0631 \u0627\u06CC\u0631\u0627\u0646!"
                  >
                    نقشه لیپی برای مهار 100 هزار هوادار ایران!
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404841/\u0644\u06CC\u067E\u06CC-\u062E\u0628\u0631\u0646\u06AF\u0627\u0631\u0627\u0646-\u0631\u0627-\u0633\u0631\u06A9\u0627\u0631-\u06AF\u0630\u0627\u0634\u062A"
                    title="\u0644\u06CC\u067E\u06CC \u062E\u0628\u0631\u0646\u06AF\u0627\u0631\u0627\u0646 \u0631\u0627 \u0633\u0631\u06A9\u0627\u0631 \u06AF\u0630\u0627\u0634\u062A"
                  >
                    لیپی خبرنگاران را سرکار گذاشت
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405083/\u0634\u0627\u062F\u06CC-\u0645\u0639\u0646\u0627\u062F\u0627\u0631-\u06A9\u06CC\u200C\u0631\u0648\u0634-\u0631\u0648-\u0628\u0647-\u062C\u0627\u06CC\u06AF\u0627\u0647-\u0648\u06CC-\u0622\u06CC-\u067E\u06CC"
                    title="\u0634\u0627\u062F\u06CC \u0645\u0639\u0646\u0627\u062F\u0627\u0631 \u06A9\u06CC\u200C\u0631\u0648\u0634 \u0631\u0648 \u0628\u0647 \u062C\u0627\u06CC\u06AF\u0627\u0647 \u0648\u06CC \u0622\u06CC \u067E\u06CC"
                  >
                    شادی معنادار کی‌روش رو به جایگاه وی آی پی
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404891/\u0644\u06CC\u0648\u0646\u0644-\u0645\u0633\u06CC-\u062E\u0648\u0627\u0633\u062A\u0627\u0631-\u0628\u0627\u0632\u06AF\u0634\u062A-\u0633\u062A\u0627\u0631\u0647-\u0628\u0627\u06CC\u0631\u0646-\u0628\u0647-\u0628\u0627\u0631\u0633\u0627"
                    title="\u0644\u06CC\u0648\u0646\u0644 \u0645\u0633\u06CC \u062E\u0648\u0627\u0633\u062A\u0627\u0631 \u0628\u0627\u0632\u06AF\u0634\u062A \u0633\u062A\u0627\u0631\u0647 \u0628\u0627\u06CC\u0631\u0646 \u0628\u0647 \u0628\u0627\u0631\u0633\u0627"
                  >
                    لیونل مسی خواستار بازگشت ستاره بایرن به بارسا
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405063/\u0646\u0641\u0631-\u0628\u0647-\u0646\u0641\u0631-\u0628\u0627-\u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0645\u0642\u0627\u0628\u0644-\u0686\u06CC\u0646"
                    title="\u0646\u0641\u0631 \u0628\u0647 \u0646\u0641\u0631 \u0628\u0627 \u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646 \u062A\u06CC\u0645 \u0645\u0644\u06CC \u0645\u0642\u0627\u0628\u0644 \u0686\u06CC\u0646"
                  >
                    نفر به نفر با بازیکنان تیم ملی مقابل چین
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405061/\u0644\u06CC\u067E\u06CC-\u0627\u0646\u062A\u0638\u0627\u0631-\u0627\u06CC\u0646-\u062C\u0645\u0639\u06CC\u062A-\u0631\u0627-\u062F\u0627\u0634\u062A\u0645"
                    title="\u0644\u06CC\u067E\u06CC: \u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u06CC\u0646 \u062C\u0645\u0639\u06CC\u062A \u0631\u0627 \u062F\u0627\u0634\u062A\u0645"
                  >
                    لیپی: انتظار این جمعیت را داشتم
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405074/\u06A9\u06CC\u200C\u0631\u0648\u0634-\u062C\u0646\u06AF-\u0628\u0627-\u062E\u0628\u0631\u0646\u06AF\u0627\u0631\u0627\u0646-\u0631\u0627-\u0639\u0644\u0646\u06CC-\u06A9\u0631\u062F"
                    title="\u06A9\u06CC\u200C\u0631\u0648\u0634 \u062C\u0646\u06AF \u0628\u0627 \u062E\u0628\u0631\u0646\u06AF\u0627\u0631\u0627\u0646 \u0631\u0627 \u0639\u0644\u0646\u06CC \u06A9\u0631\u062F"
                  >
                    کی‌روش جنگ با خبرنگاران را علنی کرد
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405088/\u06A9\u06CC\u200C\u0631\u0648\u0634-\u0645\u0686-\u0644\u06CC\u067E\u06CC-\u0631\u0627-\u06AF\u0631\u0641\u062A"
                    title="\u06A9\u06CC\u200C\u0631\u0648\u0634 \u0645\u0686 \u0644\u06CC\u067E\u06CC \u0631\u0627 \u06AF\u0631\u0641\u062A"
                  >
                    کی‌روش مچ لیپی را گرفت
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404971/\u062A\u0631\u06A9\u06CC\u0628-\u0627\u06CC\u0631\u0627\u0646-\u0628\u0631\u0627\u0628\u0631-\u0686\u06CC\u0646-\u0645\u0634\u062E\u0635-\u0634\u062F"
                    title="\u062A\u0631\u06A9\u06CC\u0628 \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631\u0627\u0628\u0631 \u0686\u06CC\u0646 \u0645\u0634\u062E\u0635 \u0634\u062F"
                  >
                    ترکیب ایران برابر چین مشخص شد
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405101/\u0631\u0627\u0645\u06CC\u0646\u061B-\u0627\u06A9\u0646\u0648\u0646-\u0639\u06CC\u062F\u0649-\u0628\u0631\u0627\u0646\u06A9\u0648-\u0628\u0627\u0642\u0649-\u0645\u0627\u0646\u062F\u0647"
                    title="\u0631\u0627\u0645\u06CC\u0646\u061B \u0627\u06A9\u0646\u0648\u0646 \u0639\u06CC\u062F\u0649 \u0628\u0631\u0627\u0646\u06A9\u0648 \u0628\u0627\u0642\u0649 \u0645\u0627\u0646\u062F\u0647"
                  >
                    رامین؛ اکنون عیدى برانکو باقى مانده
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404870/\u0648\u0627\u06A9\u0646\u0634-\u0631\u0633\u0627\u0646\u0647\u200C\u0647\u0627\u06CC-\u0686\u06CC\u0646-\u0628\u0647-\u062D\u0631\u06A9\u062A-\u0644\u06CC\u067E\u06CC(\u0639\u06A9\u0633)"
                    title="\u0648\u0627\u06A9\u0646\u0634 \u0631\u0633\u0627\u0646\u0647\u200C\u0647\u0627\u06CC \u0686\u06CC\u0646 \u0628\u0647 \u062D\u0631\u06A9\u062A \u0644\u06CC\u067E\u06CC(\u0639\u06A9\u0633)"
                  >
                    واکنش رسانه‌های چین به حرکت لیپی(عکس)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405047/\u0635\u0639\u0648\u062F-\u0642\u0631\u06CC\u0628-\u0627\u0644\u0648\u0642\u0648\u0639-\u062F\u0631-\u0633\u0627\u0642\u200C\u0647\u0627\u06CC-\u0641\u0631\u0634\u062A\u0647"
                    title="\u0635\u0639\u0648\u062F \u0642\u0631\u06CC\u0628 \u0627\u0644\u0648\u0642\u0648\u0639 \u062F\u0631 \u0633\u0627\u0642\u200C\u0647\u0627\u06CC \u0641\u0631\u0634\u062A\u0647"
                  >
                    صعود قریب الوقوع در ساق‌های فرشته
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404874/\u062A\u0645\u0627\u0634\u0627\u06CC-\u0627\u06CC\u0631\u0627\u0646-\u0686\u06CC\u0646-\u0631\u0627\u06CC\u06AF\u0627\u0646-\u0634\u062F"
                    title="\u062A\u0645\u0627\u0634\u0627\u06CC \u0627\u06CC\u0631\u0627\u0646 - \u0686\u06CC\u0646 \u0631\u0627\u06CC\u06AF\u0627\u0646 \u0634\u062F"
                  >
                    تماشای ایران - چین رایگان شد
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404868/\u06A9\u062A\u06A9\u200C\u06A9\u0627\u0631\u06CC\u200C\u0647\u0627\u06CC-\u062C\u0630\u0627\u0628-\u062F\u0631-\u062A\u0645\u0631\u06CC\u0646-\u062A\u06CC\u0645-\u0645\u0644\u06CC(\u0639\u06A9\u0633)"
                    title="\u06A9\u062A\u06A9\u200C\u06A9\u0627\u0631\u06CC\u200C\u0647\u0627\u06CC \u062C\u0630\u0627\u0628 \u062F\u0631 \u062A\u0645\u0631\u06CC\u0646 \u062A\u06CC\u0645 \u0645\u0644\u06CC(\u0639\u06A9\u0633)"
                  >
                    کتک‌کاری‌های جذاب در تمرین تیم ملی(عکس)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404882/\u06CC\u06A9-\u062B\u0627\u0646\u06CC\u0647-\u0647\u0645-\u0628\u0647-\u067E\u06CC\u0634\u0646\u0647\u0627\u062F-\u0628\u0627\u0631\u0633\u0627-\u0641\u06A9\u0631-\u0646\u0645\u06CC-\u06A9\u0646\u0645"
                    title="\u06CC\u06A9 \u062B\u0627\u0646\u06CC\u0647 \u0647\u0645 \u0628\u0647 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u0628\u0627\u0631\u0633\u0627 \u0641\u06A9\u0631 \u0646\u0645\u06CC \u06A9\u0646\u0645"
                  >
                    یک ثانیه هم به پیشنهاد بارسا فکر نمی کنم
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404866/\u0632\u0645\u06CC\u0646-\u06A9\u0634\u062A-\u0633\u0628\u0632\u06CC-\u0628\u0631\u0627\u06CC-\u0686\u06CC\u0646(\u0639\u06A9\u0633)"
                    title="\u0632\u0645\u06CC\u0646 \u06A9\u0634\u062A \u0633\u0628\u0632\u06CC \u0628\u0631\u0627\u06CC \u0686\u06CC\u0646(\u0639\u06A9\u0633)"
                  >
                    زمین کشت سبزی برای چین(عکس)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405073/\u0631\u06A9\u0648\u0631\u062F-\u062C\u0647\u0627\u0646\u06CC-\u06A9\u0644\u06CC\u0646-\u0634\u06CC\u062A-\u0628\u0647-\u0646\u0627\u0645-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0627\u06CC\u0631\u0627\u0646"
                    title="\u0631\u06A9\u0648\u0631\u062F \u062C\u0647\u0627\u0646\u06CC \u06A9\u0644\u06CC\u0646 \u0634\u06CC\u062A \u0628\u0647 \u0646\u0627\u0645 \u062A\u06CC\u0645 \u0645\u0644\u06CC \u0627\u06CC\u0631\u0627\u0646\xA0"
                  >
                    رکورد جهانی کلین شیت به نام تیم ملی ایران 
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404843/\u06A9\u06CC\u200E\u0631\u0648\u0634-\u0644\u0627\u0632\u0645-\u0628\u0627\u0634\u062F-80-\u062F\u0642\u06CC\u0642\u0647-\u062F\u0641\u0627\u0639-\u0645\u06CC\u200C\u06A9\u0646\u06CC\u0645"
                    title="\u06A9\u06CC\u200E\u0631\u0648\u0634: \u0644\u0627\u0632\u0645 \u0628\u0627\u0634\u062F 80 \u062F\u0642\u06CC\u0642\u0647 \u062F\u0641\u0627\u0639 \u0645\u06CC\u200C\u06A9\u0646\u06CC\u0645"
                  >
                    کی‎روش: لازم باشد 80 دقیقه دفاع می‌کنیم
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404983/\u062A\u0639\u062C\u0628-\u0686\u06CC\u0646\u06CC-\u0647\u0627-\u0627\u0632-\u0627\u0641\u0632\u0627\u06CC\u0634-\u0642\u06CC\u0645\u062A-\u0633\u0631\u062F\u0627\u0631-\u0622\u0632\u0645\u0648\u0646"
                    title="\u062A\u0639\u062C\u0628 \u0686\u06CC\u0646\u06CC \u0647\u0627 \u0627\u0632 \u0627\u0641\u0632\u0627\u06CC\u0634 \u0642\u06CC\u0645\u062A \u0633\u0631\u062F\u0627\u0631 \u0622\u0632\u0645\u0648\u0646"
                  >
                    تعجب چینی ها از افزایش قیمت سردار آزمون
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405067/\u06A9\u06CC\u200C\u0631\u0648\u0634-\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0633\u062A\u06CC\u0645-\u06AF\u0644\u200C\u0647\u0627\u06CC-\u0628\u06CC\u0634\u062A\u0631\u06CC-\u0628\u0632\u0646\u06CC\u0645"
                    title="\u06A9\u06CC\u200C\u0631\u0648\u0634: \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0633\u062A\u06CC\u0645 \u06AF\u0644\u200C\u0647\u0627\u06CC \u0628\u06CC\u0634\u062A\u0631\u06CC \u0628\u0632\u0646\u06CC\u0645"
                  >
                    کی‌روش: می‌توانستیم گل‌های بیشتری بزنیم
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405089/\u067E\u0627\u06CC-\u06A9\u0627\u0631\u062A-\u0646\u0627\u0631\u062C\u06CC-\u0628\u0647-\u0641\u0648\u062A\u0628\u0627\u0644-\u0628\u0627\u0632-\u0645\u06CC\u200C\u0634\u0648\u062F\u061F-(\u0639\u06A9\u0633)"
                    title="\u067E\u0627\u06CC \u06A9\u0627\u0631\u062A \u0646\u0627\u0631\u062C\u06CC \u0628\u0647 \u0641\u0648\u062A\u0628\u0627\u0644 \u0628\u0627\u0632 \u0645\u06CC\u200C\u0634\u0648\u062F\u061F (\u0639\u06A9\u0633)"
                  >
                    پای کارت نارجی به فوتبال باز می‌شود؟ (عکس)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404848/\u0645\u0639\u062A\u0645\u062F-\u06A9\u06CC\u200C\u0631\u0648\u0634\u060C-\u0646\u0642\u0634-\u0627\u0648\u0644-\u062F\u0641\u0627\u0639-\u062A\u06CC\u0645-\u0645\u0644\u06CC(\u0639\u06A9\u0633)"
                    title="\u0645\u0639\u062A\u0645\u062F \u06A9\u06CC\u200C\u0631\u0648\u0634\u060C \u0646\u0642\u0634 \u0627\u0648\u0644 \u062F\u0641\u0627\u0639 \u062A\u06CC\u0645 \u0645\u0644\u06CC(\u0639\u06A9\u0633)"
                  >
                    معتمد کی‌روش، نقش اول دفاع تیم ملی(عکس)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404880/\u067E\u06CC\u0634\u0646\u0647\u0627\u062F-200-\u0645\u06CC\u0644\u06CC\u0648\u0646-\u06CC\u0648\u0631\u0648\u06CC\u06CC-\u06CC\u0648\u0646\u0627\u06CC\u062A\u062F-\u0628\u0631\u0627\u06CC-\u0646\u06CC\u0645\u0627\u0631"
                    title="\u067E\u06CC\u0634\u0646\u0647\u0627\u062F 200 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u06CC\u0648\u0631\u0648\u06CC\u06CC \u06CC\u0648\u0646\u0627\u06CC\u062A\u062F \u0628\u0631\u0627\u06CC \u0646\u06CC\u0645\u0627\u0631"
                  >
                    پیشنهاد 200 میلیون یورویی یونایتد برای نیمار
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404925/\u06A9\u06CC\u200C\u0631\u0648\u0634-\u0644\u06CC\u067E\u06CC-\u0628\u0627\u0634\u062F-\u06CC\u0627-\u0646\u0628\u0627\u0634\u062F-\u0641\u0631\u0642-\u0646\u0645\u06CC\u200C\u06A9\u0646\u062F"
                    title="\u06A9\u06CC\u200C\u0631\u0648\u0634: \u0644\u06CC\u067E\u06CC \u0628\u0627\u0634\u062F \u06CC\u0627 \u0646\u0628\u0627\u0634\u062F \u0641\u0631\u0642 \u0646\u0645\u06CC\u200C\u06A9\u0646\u062F"
                  >
                    کی‌روش: لیپی باشد یا نباشد فرق نمی‌کند
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405045/\u062A\u0634\u0648\u06CC\u0642-\u0639\u062C\u06CC\u0628-\u0644\u06CC\u067E\u06CC-\u062F\u0631-\u0648\u0631\u0632\u0634\u06AF\u0627\u0647-\u0622\u0632\u0627\u062F\u06CC"
                    title="\u062A\u0634\u0648\u06CC\u0642 \u0639\u062C\u06CC\u0628 \u0644\u06CC\u067E\u06CC \u062F\u0631 \u0648\u0631\u0632\u0634\u06AF\u0627\u0647 \u0622\u0632\u0627\u062F\u06CC"
                  >
                    تشویق عجیب لیپی در ورزشگاه آزادی
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405091/\u0631\u0636\u0627\u06CC\u062A-\u06A9\u0648\u0646\u062A\u0647-\u0628\u0647-\u0641\u0631\u0648\u0634-\u0633\u062A\u0627\u0631\u0647-\u062E\u0648\u062F-\u0628\u0647-\u0645\u0648\u0631\u06CC\u0646\u06CC\u0648"
                    title="\u0631\u0636\u0627\u06CC\u062A \u06A9\u0648\u0646\u062A\u0647 \u0628\u0647 \u0641\u0631\u0648\u0634 \u0633\u062A\u0627\u0631\u0647 \u062E\u0648\u062F \u0628\u0647 \u0645\u0648\u0631\u06CC\u0646\u06CC\u0648"
                  >
                    رضایت کونته به فروش ستاره خود به مورینیو
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404934/\u0646\u0627\u0628\u063A\u0647-\u0627\u06CC\u062A\u0627\u0644\u06CC\u0627\u06CC\u06CC-\u062F\u0631-\u0648\u0631\u0632\u0634\u06AF\u0627\u0647-\u0622\u0632\u0627\u062F\u06CC(\u0639\u06A9\u0633)"
                    title="\u0646\u0627\u0628\u063A\u0647 \u0627\u06CC\u062A\u0627\u0644\u06CC\u0627\u06CC\u06CC \u062F\u0631 \u0648\u0631\u0632\u0634\u06AF\u0627\u0647 \u0622\u0632\u0627\u062F\u06CC(\u0639\u06A9\u0633)"
                  >
                    نابغه ایتالیایی در ورزشگاه آزادی(عکس)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404943/\u0631\u0627\u067E\u0648\u0631\u062A-\u062E\u0628\u0631\u0646\u06AF\u0627\u0631-\u0686\u06CC\u0646\u06CC-\u0627\u0632-\u0632\u0645\u06CC\u0646-\u062A\u0645\u0631\u06CC\u0646-\u0686\u06CC\u0646!-(\u0639\u06A9\u0633)"
                    title="\u0631\u0627\u067E\u0648\u0631\u062A \u062E\u0628\u0631\u0646\u06AF\u0627\u0631 \u0686\u06CC\u0646\u06CC \u0627\u0632 \u0632\u0645\u06CC\u0646 \u062A\u0645\u0631\u06CC\u0646 \u0686\u06CC\u0646! (\u0639\u06A9\u0633)"
                  >
                    راپورت خبرنگار چینی از زمین تمرین چین! (عکس)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405115/\u0627\u06A9\u06CC\u067E-\u0627\u06CC\u0631\u0627\u0646-\u062F\u0631-\u0642\u0644\u0647\u060C-\u06A9\u0631\u0647-\u062C\u0646\u0648\u0628\u06CC-\u062E\u0648\u062F\u0634-\u0631\u0627-\u0646\u06AF\u0647-\u0646\u062F\u0627\u0634\u062A"
                    title="\u0627\u06A9\u06CC\u067E: \u0627\u06CC\u0631\u0627\u0646 \u062F\u0631 \u0642\u0644\u0647\u060C \u06A9\u0631\u0647 \u062C\u0646\u0648\u0628\u06CC \u062E\u0648\u062F\u0634 \u0631\u0627 \u0646\u06AF\u0647 \u0646\u062F\u0627\u0634\u062A"
                  >
                    اکیپ: ایران در قله، کره جنوبی خودش را نگه نداشت
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404904/\u0634\u06CC\u0648\u0647-\u0639\u062C\u06CC\u0628-\u0631\u0626\u0627\u0644-\u0645\u0627\u062F\u0631\u06CC\u062F-\u0628\u0631\u0627\u06CC-\u062E\u0631\u06CC\u062F-\u0698\u0627\u0628\u06CC-\u0622\u0644\u0648\u0646\u0633\u0648"
                    title="\u0634\u06CC\u0648\u0647 \u0639\u062C\u06CC\u0628 \u0631\u0626\u0627\u0644 \u0645\u0627\u062F\u0631\u06CC\u062F \u0628\u0631\u0627\u06CC \u062E\u0631\u06CC\u062F \u0698\u0627\u0628\u06CC \u0622\u0644\u0648\u0646\u0633\u0648"
                  >
                    شیوه عجیب رئال مادرید برای خرید ژابی آلونسو
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405012/\u062C\u0648-\u0622\u0632\u0627\u062F\u06CC-\u0622\u0632\u0645\u0648\u0646-\u0631\u0627-\u0647\u0645-\u06AF\u0631\u0641\u062A"
                    title="\u062C\u0648 \u0622\u0632\u0627\u062F\u06CC \u0622\u0632\u0645\u0648\u0646 \u0631\u0627 \u0647\u0645 \u06AF\u0631\u0641\u062A"
                  >
                    جو آزادی آزمون را هم گرفت
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405003/\u0627\u062A\u0641\u0627\u0642-\u0646\u0627\u062E\u0648\u0634\u0627\u06CC\u0646\u062F\u06CC-\u06A9\u0647-\u0627\u0632-\u0686\u0634\u0645-\u0686\u06CC\u0646\u06CC\u200C\u0647\u0627-\u067E\u0646\u0647\u0627\u0646-\u0646\u0645\u0627\u0646\u062F"
                    title="\u0627\u062A\u0641\u0627\u0642 \u0646\u0627\u062E\u0648\u0634\u0627\u06CC\u0646\u062F\u06CC \u06A9\u0647 \u0627\u0632 \u0686\u0634\u0645 \u0686\u06CC\u0646\u06CC\u200C\u0647\u0627 \u067E\u0646\u0647\u0627\u0646 \u0646\u0645\u0627\u0646\u062F"
                  >
                    اتفاق ناخوشایندی که از چشم چینی‌ها پنهان نماند
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405110/\u06AF\u0632\u0627\u0631\u0634-\u0648\u06CC\u0698\u0647\u061B-\u0622\u0645\u0627\u0631-\u0627\u0633\u0641\u0646\u0627\u06A9-\u0622\u0631\u0698\u0627\u0646\u062A\u06CC\u0646-\u0628\u062F\u0648\u0646-\u0644\u06CC\u0648\u0646\u0644-\u0645\u0633\u06CC"
                    title="\u06AF\u0632\u0627\u0631\u0634 \u0648\u06CC\u0698\u0647\u061B \u0622\u0645\u0627\u0631 \u0627\u0633\u0641\u0646\u0627\u06A9 \u0622\u0631\u0698\u0627\u0646\u062A\u06CC\u0646 \u0628\u062F\u0648\u0646 \u0644\u06CC\u0648\u0646\u0644 \u0645\u0633\u06CC"
                  >
                    گزارش ویژه؛ آمار اسفناک آرژانتین بدون لیونل مسی
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404923/\u062C\u0647\u0646\u0645-\u0622\u0632\u0627\u062F\u06CC\u061B-\u0627\u0698\u062F\u0647\u0627-\u0633\u0648\u0632\u0627\u0646\u062F\u0647-\u0645\u06CC\u200C\u0634\u0648\u062F\u061F"
                    title="\u062C\u0647\u0646\u0645 \u0622\u0632\u0627\u062F\u06CC\u061B \u0627\u0698\u062F\u0647\u0627 \u0633\u0648\u0632\u0627\u0646\u062F\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F\u061F"
                  >
                    جهنم آزادی؛ اژدها سوزانده می‌شود؟
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405092/\u062D\u0630\u0641-\u0686\u0646\u062F-\u0645\u0644\u06CC\u062A\u06CC\u200C\u0647\u0627\u06CC-\u0642\u0637\u0631\u061B-\u062F\u06CC\u062F\u0627\u0631-\u0628\u0647-\u0662\u0660\u0662\u0662!"
                    title="\u062D\u0630\u0641 \u0686\u0646\u062F \u0645\u0644\u06CC\u062A\u06CC\u200C\u0647\u0627\u06CC \u0642\u0637\u0631\u061B \u062F\u06CC\u062F\u0627\u0631 \u0628\u0647 \u0662\u0660\u0662\u0662!"
                  >
                    حذف چند ملیتی‌های قطر؛ دیدار به ٢٠٢٢!
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405064/\u06A9\u06CC\u200C\u0631\u0648\u0634-\u062F\u0631-\u062C\u0634\u0646-\u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646-\u0634\u0631\u06A9\u062A-\u0646\u06A9\u0631\u062F"
                    title="\u06A9\u06CC\u200C\u0631\u0648\u0634 \u062F\u0631 \u062C\u0634\u0646 \u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646 \u0634\u0631\u06A9\u062A \u0646\u06A9\u0631\u062F"
                  >
                    کی‌روش در جشن بازیکنان شرکت نکرد
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404911/\u06AF\u0632\u0627\u0631\u0634-\u06A9\u0627\u0645\u0644-\u0627\u0648\u0644\u06CC\u0646-\u0628\u0631\u0646\u0627\u0645\u0647-\u0646\u0648\u062F-\u06F9\u06F6-\u0628\u0627-\u06A9\u06CC\u200C\u0631\u0648\u0634"
                    title="\u06AF\u0632\u0627\u0631\u0634 \u06A9\u0627\u0645\u0644 \u0627\u0648\u0644\u06CC\u0646 \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u062F \u06F9\u06F6 \u0628\u0627 \u06A9\u06CC\u200C\u0631\u0648\u0634"
                  >
                    گزارش کامل اولین برنامه نود ۹۶ با کی‌روش
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404862/\u0645\u0635\u062F\u0648\u0645\u06CC\u062A-\u062F\u0648-\u0628\u0627\u0632\u06CC\u06A9\u0646-\u067E\u0631\u0633\u067E\u0648\u0644\u06CC\u0633"
                    title="\u0645\u0635\u062F\u0648\u0645\u06CC\u062A \u062F\u0648 \u0628\u0627\u0632\u06CC\u06A9\u0646 \u067E\u0631\u0633\u067E\u0648\u0644\u06CC\u0633"
                  >
                    مصدومیت دو بازیکن پرسپولیس
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404973/\u0647\u062C\u0648\u0645-\u0627\u06CC\u0631\u0627\u0646\u06CC-\u0647\u0627-\u0628\u0647-\u0633\u0641\u0627\u0631\u062A-\u0686\u06CC\u0646-\u0628\u0631\u0627\u06CC-\u062F\u0631\u06CC\u0627\u0641\u062A-\u0628\u0644\u06CC\u062A"
                    title="\u0647\u062C\u0648\u0645 \u0627\u06CC\u0631\u0627\u0646\u06CC \u0647\u0627 \u0628\u0647 \u0633\u0641\u0627\u0631\u062A \u0686\u06CC\u0646 \u0628\u0631\u0627\u06CC \u062F\u0631\u06CC\u0627\u0641\u062A \u0628\u0644\u06CC\u062A"
                  >
                    هجوم ایرانی ها به سفارت چین برای دریافت بلیت
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405013/\u0686\u06CC\u0646\u06CC-\u0647\u0627\u06CC-\u0645\u062A\u0639\u062C\u0628-\u0631\u0648\u06CC-\u0686\u0645\u0646-\u0648\u0631\u0632\u0634\u06AF\u0627\u0647-\u0622\u0632\u0627\u062F\u06CC"
                    title="\u0686\u06CC\u0646\u06CC \u0647\u0627\u06CC \u0645\u062A\u0639\u062C\u0628 \u0631\u0648\u06CC \u0686\u0645\u0646 \u0648\u0631\u0632\u0634\u06AF\u0627\u0647 \u0622\u0632\u0627\u062F\u06CC\xA0"
                  >
                    چینی های متعجب روی چمن ورزشگاه آزادی 
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405140/\u062A\u0631\u0642\u0647\u200C\u0627\u06CC-\u06A9\u0647-\u0631\u0648\u06CC-\u0633\u0631-\u06A9\u0645\u06A9-\u062F\u0627\u0648\u0631-\u062A\u0631\u06A9\u06CC\u062F(\u06AF\u0632\u0627\u0631\u0634-\u062A\u0635\u0648\u06CC\u0631\u06CC)"
                    title="\u062A\u0631\u0642\u0647\u200C\u0627\u06CC \u06A9\u0647 \u0631\u0648\u06CC \u0633\u0631 \u06A9\u0645\u06A9 \u062F\u0627\u0648\u0631 \u062A\u0631\u06A9\u06CC\u062F(\u06AF\u0632\u0627\u0631\u0634 \u062A\u0635\u0648\u06CC\u0631\u06CC)"
                  >
                    ترقه‌ای که روی سر کمک داور ترکید(گزارش تصویری)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404869/\u062F\u0633\u062A\u0648\u0631\u0627\u0644\u0639\u0645\u0644-10-\u0628\u0646\u062F\u06CC-\u0633\u0641\u0627\u0631\u062A-\u0686\u06CC\u0646-\u0628\u0631\u0627\u06CC-\u0637\u0631\u0641\u062F\u0627\u0631\u0627\u0646-\u062F\u0631-\u0627\u06CC\u0631\u0627\u0646"
                    title="\xA0\u062F\u0633\u062A\u0648\u0631\u0627\u0644\u0639\u0645\u0644 10 \u0628\u0646\u062F\u06CC \u0633\u0641\u0627\u0631\u062A \u0686\u06CC\u0646 \u0628\u0631\u0627\u06CC \u0637\u0631\u0641\u062F\u0627\u0631\u0627\u0646 \u062F\u0631 \u0627\u06CC\u0631\u0627\u0646"
                  >
                     دستورالعمل 10 بندی سفارت چین برای طرفداران در ایران
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404840/\u0645\u0648\u0642\u0639\u06CC\u062A-\u062A\u0627\u0633\u0641-\u06AF\u0648\u0686\u06CC-\u0633\u0631\u062F\u0627\u0631\u061B-\u0641\u0642\u0637-\u06CC\u06A9\u06CC!"
                    title="\u0645\u0648\u0642\u0639\u06CC\u062A \u062A\u0627\u0633\u0641: \u06AF\u0648\u0686\u06CC- \u0633\u0631\u062F\u0627\u0631\u061B \u0641\u0642\u0637 \u06CC\u06A9\u06CC!"
                  >
                    موقعیت تاسف: گوچی- سردار؛ فقط یکی!
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404889/\u0631\u0648\u0646\u0627\u0644\u062F\u0648-\u0642\u0631\u0628\u0627\u0646\u06CC-\u0633\u06CC\u0633\u062A\u0645-\u0686\u0631\u062E\u0634\u06CC-\u0632\u06CC\u062F\u0627\u0646"
                    title="\u0631\u0648\u0646\u0627\u0644\u062F\u0648 \u0642\u0631\u0628\u0627\u0646\u06CC \u0633\u06CC\u0633\u062A\u0645 \u0686\u0631\u062E\u0634\u06CC \u0632\u06CC\u062F\u0627\u0646"
                  >
                    رونالدو قربانی سیستم چرخشی زیدان
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404842/\u0631\u0641\u062A\u0627\u0631\u0647\u0627\u06CC-\u063A\u06CC\u0631\u0645\u0639\u0642\u0648\u0644-\u0628\u0627-\u0634\u062C\u0627\u0639-\u062E\u0644\u06CC\u0644\u200C\u0632\u0627\u062F\u0647"
                    title="\u0631\u0641\u062A\u0627\u0631\u0647\u0627\u06CC \u063A\u06CC\u0631\u0645\u0639\u0642\u0648\u0644 \u0628\u0627 \u0634\u062C\u0627\u0639 \u062E\u0644\u06CC\u0644\u200C\u0632\u0627\u062F\u0647"
                  >
                    رفتارهای غیرمعقول با شجاع خلیل‌زاده
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404833/\u0628\u0647\u062A\u0631\u06CC\u0646-\u0628\u0627\u0632\u06CC\u06A9\u0646-\u0642\u0637\u0631-\u0627\u06CC\u0631\u0627\u0646-\u0686\u0647-\u06A9\u0633\u06CC-\u0628\u0648\u062F\u061F"
                    title="\u0628\u0647\u062A\u0631\u06CC\u0646 \u0628\u0627\u0632\u06CC\u06A9\u0646 \u0642\u0637\u0631 - \u0627\u06CC\u0631\u0627\u0646 \u0686\u0647 \u06A9\u0633\u06CC \u0628\u0648\u062F\u061F"
                  >
                    بهترین بازیکن قطر - ایران چه کسی بود؟
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404847/\u0628\u0627\u0644\u0647-\u0645\u062F\u0627\u0641\u0639\u0627\u0646-\u0631\u0627\u0633\u062A-\u0627\u06CC\u0631\u0627\u0646-(\u0639\u06A9\u0633)"
                    title="\u0628\u0627\u0644\u0647 \u0645\u062F\u0627\u0641\u0639\u0627\u0646 \u0631\u0627\u0633\u062A \u0627\u06CC\u0631\u0627\u0646 (\u0639\u06A9\u0633)"
                  >
                    باله مدافعان راست ایران (عکس)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405022/\u06A9\u06CC\u200C\u0631\u0648\u0634-\u0628\u0647-\u0648\u0639\u062F\u0647-\u0627\u0634-\u0639\u0645\u0644-\u06A9\u0631\u062F"
                    title="\u06A9\u06CC\u200C\u0631\u0648\u0634 \u0628\u0647 \u0648\u0639\u062F\u0647 \u0627\u0634 \u0639\u0645\u0644 \u06A9\u0631\u062F"
                  >
                    کی‌روش به وعده اش عمل کرد
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404906/\u0648\u0644\u062E\u0631\u062C\u06CC-\u0686\u0644\u0633\u06CC-\u0628\u0631\u0627\u06CC-\u0631\u062F-\u067E\u06CC\u0634\u0646\u0647\u0627\u062F-\u0631\u0626\u0627\u0644-\u062A\u0648\u0633\u0637-\u0647\u0627\u0632\u0627\u0631\u062F"
                    title="\u0648\u0644\u062E\u0631\u062C\u06CC \u0686\u0644\u0633\u06CC \u0628\u0631\u0627\u06CC \u0631\u062F \u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u0631\u0626\u0627\u0644 \u062A\u0648\u0633\u0637 \u0647\u0627\u0632\u0627\u0631\u062F"
                  >
                    ولخرجی چلسی برای رد پیشنهاد رئال توسط هازارد
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405062/\u0627\u062D\u062A\u0645\u0627\u0644-\u062C\u0627-\u0628\u0647-\u062C\u0627\u06CC\u06CC-\u0633\u062A\u0627\u0631\u06AF\u0627\u0646-\u0631\u0626\u0627\u0644-\u0645\u0627\u062F\u0631\u06CC\u062F-\u0648-\u0686\u0644\u0633\u06CC"
                    title="\u0627\u062D\u062A\u0645\u0627\u0644 \u062C\u0627 \u0628\u0647 \u062C\u0627\u06CC\u06CC \u0633\u062A\u0627\u0631\u06AF\u0627\u0646 \u0631\u0626\u0627\u0644 \u0645\u0627\u062F\u0631\u06CC\u062F \u0648 \u0686\u0644\u0633\u06CC"
                  >
                    احتمال جا به جایی ستارگان رئال مادرید و چلسی
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404895/\u0627\u0644-\u06A9\u0644\u0627\u0633\u06CC\u06A9\u0648-\u0628\u0627-\u062D\u0636\u0648\u0631-\u0631\u0648\u0646\u0627\u0644\u062F\u06CC\u0646\u06CC\u0648-\u062F\u0631-\u0644\u0628\u0646\u0627\u0646-(\u0639\u06A9\u0633)"
                    title="\u0627\u0644 \u06A9\u0644\u0627\u0633\u06CC\u06A9\u0648 \u0628\u0627 \u062D\u0636\u0648\u0631 \u0631\u0648\u0646\u0627\u0644\u062F\u06CC\u0646\u06CC\u0648 \u062F\u0631 \u0644\u0628\u0646\u0627\u0646 (\u0639\u06A9\u0633)"
                  >
                    ال کلاسیکو با حضور رونالدینیو در لبنان (عکس)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404878/\u06A9\u06CC\u200C\u0631\u0648\u0634-\u0686\u0634\u0645-\u0627\u0646\u062A\u0638\u0627\u0631-\u062D\u0645\u0627\u06CC\u062A-\u0647\u0648\u0627\u062F\u0627\u0631\u0627\u0646-(\u0639\u06A9\u0633)"
                    title="\u06A9\u06CC\u200C\u0631\u0648\u0634 \u0686\u0634\u0645 \u0627\u0646\u062A\u0638\u0627\u0631 \u062D\u0645\u0627\u06CC\u062A \u0647\u0648\u0627\u062F\u0627\u0631\u0627\u0646 (\u0639\u06A9\u0633)"
                  >
                    کی‌روش چشم انتظار حمایت هواداران (عکس)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404853/\u06A9\u06CC\u200C\u0631\u0648\u0634-\u0648-\u067E\u0627\u0633\u062E-\u06AF\u0632\u06CC\u0646\u0634\u06CC-\u0628\u0647-\u0633\u0626\u0648\u0627\u0644\u0627\u062A-\u062E\u0628\u0631\u0646\u06AF\u0627\u0631\u0627\u0646"
                    title="\u06A9\u06CC\u200C\u0631\u0648\u0634 \u0648 \u067E\u0627\u0633\u062E \u06AF\u0632\u06CC\u0646\u0634\u06CC \u0628\u0647 \u0633\u0626\u0648\u0627\u0644\u0627\u062A \u062E\u0628\u0631\u0646\u06AF\u0627\u0631\u0627\u0646"
                  >
                    کی‌روش و پاسخ گزینشی به سئوالات خبرنگاران
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405007/\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0628\u0627-\u0627\u062A\u0648\u0628\u0648\u0633-\u0634\u062E\u0635\u06CC-\u062F\u0631-\u0631\u0627\u0647-\u0622\u0632\u0627\u062F\u06CC(\u0639\u06A9\u0633)"
                    title="\u062A\u06CC\u0645 \u0645\u0644\u06CC \u0628\u0627 \u0627\u062A\u0648\u0628\u0648\u0633 \u0634\u062E\u0635\u06CC \u062F\u0631 \u0631\u0627\u0647 \u0622\u0632\u0627\u062F\u06CC(\u0639\u06A9\u0633)"
                  >
                    تیم ملی با اتوبوس شخصی در راه آزادی(عکس)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405085/\u0644\u062D\u0638\u0647-\u0634\u06A9\u0627\u0631-\u0627\u0698\u062F\u0647\u0627-\u062A\u0648\u0633\u0637-\u0637\u0627\u0631\u0645\u0649-(\u06AF\u0632\u0627\u0631\u0634-\u062A\u0635\u0648\u06CC\u0631\u0649)"
                    title="\u0644\u062D\u0638\u0647 \u0634\u06A9\u0627\u0631 \u0627\u0698\u062F\u0647\u0627 \u062A\u0648\u0633\u0637 \u0637\u0627\u0631\u0645\u0649 (\u06AF\u0632\u0627\u0631\u0634 \u062A\u0635\u0648\u06CC\u0631\u0649)"
                  >
                    لحظه شکار اژدها توسط طارمى (گزارش تصویرى)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404893/\u0648\u0627\u0631\u0627\u0646-\u0634\u0627\u06CC\u0639\u0627\u062A-\u067E\u06CC\u0648\u0633\u062A\u0646-\u0628\u0647-\u06CC\u0648\u0646\u0627\u06CC\u062A\u062F-\u0631\u0627-\u062A\u0642\u0648\u06CC\u062A-\u06A9\u0631\u062F"
                    title="\u0648\u0627\u0631\u0627\u0646 \u0634\u0627\u06CC\u0639\u0627\u062A \u067E\u06CC\u0648\u0633\u062A\u0646 \u0628\u0647 \u06CC\u0648\u0646\u0627\u06CC\u062A\u062F \u0631\u0627 \u062A\u0642\u0648\u06CC\u062A \u06A9\u0631\u062F"
                  >
                    واران شایعات پیوستن به یونایتد را تقویت کرد
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404975/\u0637\u0631\u0641\u062F\u0627\u0631\u0627\u0646-\u0627\u06CC\u0631\u0627\u0646\u06CC-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0631\u0627-\u062A\u0646\u0647\u0627-\u0646\u06AF\u0630\u0627\u0634\u062A\u0646\u062F"
                    title="\u0637\u0631\u0641\u062F\u0627\u0631\u0627\u0646 \u0627\u06CC\u0631\u0627\u0646\u06CC \u062A\u06CC\u0645 \u0645\u0644\u06CC \u0631\u0627 \u062A\u0646\u0647\u0627 \u0646\u06AF\u0630\u0627\u0634\u062A\u0646\u062F"
                  >
                    طرفداران ایرانی تیم ملی را تنها نگذاشتند
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404873/\u06A9\u06CC\u200C\u0631\u0648\u0634-\u0628\u0639\u062F-\u0627\u0632-\u0628\u0627\u0632\u06CC-\u0686\u06CC\u0646-\u062D\u0631\u0641-\u0645\u06CC\u200C\u0632\u0646\u062F\u061F"
                    title="\u06A9\u06CC\u200C\u0631\u0648\u0634 \u0628\u0639\u062F \u0627\u0632 \u0628\u0627\u0632\u06CC \u0686\u06CC\u0646 \u062D\u0631\u0641 \u0645\u06CC\u200C\u0632\u0646\u062F\u061F"
                  >
                    کی‌روش بعد از بازی چین حرف می‌زند؟
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404836/\u062A\u0634\u0628\u06CC\u0647-\u0632\u0645\u06CC\u0646-\u062A\u0645\u0631\u06CC\u0646-\u0686\u06CC\u0646-\u0628\u0647-\u0632\u0645\u06CC\u0646-\u06A9\u0634\u0627\u0648\u0631\u0632\u06CC!"
                    title="\u062A\u0634\u0628\u06CC\u0647 \u0632\u0645\u06CC\u0646 \u062A\u0645\u0631\u06CC\u0646 \u0686\u06CC\u0646 \u0628\u0647 \u0632\u0645\u06CC\u0646 \u06A9\u0634\u0627\u0648\u0631\u0632\u06CC!"
                  >
                    تشبیه زمین تمرین چین به زمین کشاورزی!
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405114/\u062A\u0631\u0633-\u0631\u0626\u0627\u0644-\u0645\u0627\u062F\u0631\u06CC\u062F-\u0627\u0632-\u0636\u0631\u0631-\u0628\u0632\u0631\u06AF-\u062F\u0631-\u0645\u0648\u0631\u062F-\u0627\u06CC\u0633\u06A9\u0648"
                    title="\u062A\u0631\u0633 \u0631\u0626\u0627\u0644 \u0645\u0627\u062F\u0631\u06CC\u062F \u0627\u0632 \u0636\u0631\u0631 \u0628\u0632\u0631\u06AF \u062F\u0631 \u0645\u0648\u0631\u062F \u0627\u06CC\u0633\u06A9\u0648"
                  >
                    ترس رئال مادرید از ضرر بزرگ در مورد ایسکو
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404897/\u0645\u0627\u0646\u0686\u06CC\u0646\u06CC-\u06AF\u0648\u0627\u0631\u062F\u06CC\u0648\u0644\u0627-\u062F\u0631-\u0628\u0627\u0631\u0633\u0627-\u062A\u0646\u0647\u0627-\u06CC\u06A9-\u0631\u0642\u06CC\u0628-\u062F\u0627\u0634\u062A"
                    title="\u0645\u0627\u0646\u0686\u06CC\u0646\u06CC: \u06AF\u0648\u0627\u0631\u062F\u06CC\u0648\u0644\u0627 \u062F\u0631 \u0628\u0627\u0631\u0633\u0627 \u062A\u0646\u0647\u0627 \u06CC\u06A9 \u0631\u0642\u06CC\u0628 \u062F\u0627\u0634\u062A"
                  >
                    مانچینی: گواردیولا در بارسا تنها یک رقیب داشت
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404908/\u0645\u0627\u0631\u0686\u0644\u0648-\u0644\u06CC\u067E\u06CC-\u0628\u0639\u062F-\u0627\u0632-\u0645\u0648\u0631\u06CC\u0646\u06CC\u0648-\u062F\u0648\u0645-\u0634\u062F"
                    title="\u0645\u0627\u0631\u0686\u0644\u0648 \u0644\u06CC\u067E\u06CC \u0628\u0639\u062F \u0627\u0632 \u0645\u0648\u0631\u06CC\u0646\u06CC\u0648 \u062F\u0648\u0645 \u0634\u062F"
                  >
                    مارچلو لیپی بعد از مورینیو دوم شد
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404962/\u0631\u06A9\u0648\u0631\u062F-\u06A9\u0644\u06CC\u0646-\u0634\u06CC\u062A-\u0628\u0627-810-\u062F\u0642\u06CC\u0642\u0647-\u0634\u06A9\u0633\u062A!"
                    title="\u0631\u06A9\u0648\u0631\u062F \u06A9\u0644\u06CC\u0646 \u0634\u06CC\u062A \u0628\u0627 810 \u062F\u0642\u06CC\u0642\u0647 \u0634\u06A9\u0633\u062A!"
                  >
                    رکورد کلین شیت با 810 دقیقه شکست!
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404963/\u0628\u06CC\u200C\u062E\u0648\u0627\u0628\u06CC-\u0628\u0631\u0647\u0627\u0646\u06CC-\u0627\u0632-\u0627\u0633\u062A\u0631\u0633-\u062F\u06CC\u062F\u0627\u0631-\u0627\u06CC\u0631\u0627\u0646-\u0648-\u0686\u06CC\u0646!"
                    title="\u0628\u06CC\u200C\u062E\u0648\u0627\u0628\u06CC \u0628\u0631\u0647\u0627\u0646\u06CC \u0627\u0632 \u0627\u0633\u062A\u0631\u0633 \u062F\u06CC\u062F\u0627\u0631 \u0627\u06CC\u0631\u0627\u0646 \u0648 \u0686\u06CC\u0646!"
                  >
                    بی‌خوابی برهانی از استرس دیدار ایران و چین!
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404953/\u0631\u0627\u0626\u0648\u0644-\u062D\u0636\u0648\u0631-\u0645\u0646-\u062F\u0631-\u0628\u0627\u0631\u0633\u0644\u0648\u0646\u0627-\u063A\u06CC\u0631\u0645\u0645\u06A9\u0646-\u0646\u06CC\u0633\u062A"
                    title="\u0631\u0627\u0626\u0648\u0644: \u062D\u0636\u0648\u0631 \u0645\u0646 \u062F\u0631 \u0628\u0627\u0631\u0633\u0644\u0648\u0646\u0627 \u063A\u06CC\u0631\u0645\u0645\u06A9\u0646 \u0646\u06CC\u0633\u062A"
                  >
                    رائول: حضور من در بارسلونا غیرممکن نیست
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405015/\u0686\u06CC\u0646\u06CC-\u0647\u0627-\u0647\u0648\u0627\u062F\u0627\u0631\u0627\u0646-\u0627\u06CC\u0631\u0627\u0646-\u0631\u0627-\u0627\u0632-\u0647\u0645-\u067E\u0627\u0634\u0627\u0646\u062F\u0646\u062F"
                    title="\u0686\u06CC\u0646\u06CC \u0647\u0627 \u0647\u0648\u0627\u062F\u0627\u0631\u0627\u0646 \u0627\u06CC\u0631\u0627\u0646 \u0631\u0627 \u0627\u0632 \u0647\u0645 \u067E\u0627\u0634\u0627\u0646\u062F\u0646\u062F"
                  >
                    چینی ها هواداران ایران را از هم پاشاندند
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404864/\u0647\u0648\u0646\u06AF-\u0628\u0648-\u0641\u0631\u062F\u0627-\u062F\u0698-\u062F\u0641\u0627\u0639\u06CC-\u0627\u06CC\u0631\u0627\u0646-\u0631\u0627-\u0645\u06CC\u200C\u0634\u06A9\u0646\u06CC\u0645"
                    title="\u0647\u0648\u0646\u06AF \u0628\u0648: \u0641\u0631\u062F\u0627 \u062F\u0698 \u062F\u0641\u0627\u0639\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0631\u0627 \u0645\u06CC\u200C\u0634\u06A9\u0646\u06CC\u0645"
                  >
                    هونگ بو: فردا دژ دفاعی ایران را می‌شکنیم
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405030/\u0648\u0631\u0632\u0634\u06AF\u0627\u0647-\u0622\u0632\u0627\u062F\u06CC-\u062F\u0631-\u0645\u0631\u0632-\u062E\u0637\u0631!"
                    title="\u0648\u0631\u0632\u0634\u06AF\u0627\u0647 \u0622\u0632\u0627\u062F\u06CC \u062F\u0631 \u0645\u0631\u0632 \u062E\u0637\u0631!"
                  >
                    ورزشگاه آزادی در مرز خطر!
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405051/\u0644\u06CC\u067E\u06CC-\u062E\u0648\u062F\u0634-\u0631\u0627-\u062E\u0644\u0639-\u0633\u0644\u0627\u062D-\u06A9\u0631\u062F"
                    title="\u0644\u06CC\u067E\u06CC \u062E\u0648\u062F\u0634 \u0631\u0627 \u062E\u0644\u0639 \u0633\u0644\u0627\u062D \u06A9\u0631\u062F"
                  >
                    لیپی خودش را خلع سلاح کرد
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404950/\u067E\u0631\u0633\u067E\u0648\u0644\u06CC\u0633-\u0645\u0646\u062A\u0638\u0631-\u0628\u0627\u0632\u06AF\u0634\u062A-\u0645\u0644\u06CC\u200C\u067E\u0648\u0634\u200C\u0647\u0627(\u0639\u06A9\u0633)"
                    title="\u067E\u0631\u0633\u067E\u0648\u0644\u06CC\u0633 \u0645\u0646\u062A\u0638\u0631 \u0628\u0627\u0632\u06AF\u0634\u062A \u0645\u0644\u06CC\u200C\u067E\u0648\u0634\u200C\u0647\u0627(\u0639\u06A9\u0633)"
                  >
                    پرسپولیس منتظر بازگشت ملی‌پوش‌ها(عکس)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404981/\u0647\u0648\u0648\u0627\u0646\u06AF-\u0628\u0648\u0648\u0646-\u0627\u0646\u06AF\u0627\u0631-\u062F\u0631-\u0627\u0633\u062A\u0627\u062F\u06CC\u0648\u0645-\u0622\u0632\u0627\u062F\u06CC-\u0632\u0644\u0632\u0644\u0647-\u0645\u06CC-\u0622\u06CC\u062F"
                    title="\u0647\u0648\u0648\u0627\u0646\u06AF \u0628\u0648\u0648\u0646: \u0627\u0646\u06AF\u0627\u0631 \u062F\u0631 \u0627\u0633\u062A\u0627\u062F\u06CC\u0648\u0645 \u0622\u0632\u0627\u062F\u06CC \u0632\u0644\u0632\u0644\u0647 \u0645\u06CC \u0622\u06CC\u062F"
                  >
                    هووانگ بوون: انگار در استادیوم آزادی زلزله می آید
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405078/\u062C\u0647\u0627\u0646\u0628\u062E\u0634-\u0628\u0647-\u0627\u06CC\u0631\u0627\u0646\u06CC-\u0628\u0648\u062F\u0646\u0645-\u0627\u0641\u062A\u062E\u0627\u0631-\u0645\u06CC-\u06A9\u0646\u0645"
                    title="\u062C\u0647\u0627\u0646\u0628\u062E\u0634: \u0628\u0647 \u0627\u06CC\u0631\u0627\u0646\u06CC \u0628\u0648\u062F\u0646\u0645 \u0627\u0641\u062A\u062E\u0627\u0631 \u0645\u06CC \u06A9\u0646\u0645"
                  >
                    جهانبخش: به ایرانی بودنم افتخار می کنم
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404856/\u0639\u0644\u06CC-\u06A9\u0631\u06CC\u0645\u06CC-\u0686\u0634\u0645\u200C\u0627\u0646\u062A\u0638\u0627\u0631-\u0628\u0627\u0632\u06CC-\u0628\u0631\u0627\u06CC-\u0627\u06CC\u0631\u0627\u0646"
                    title="\u0639\u0644\u06CC \u06A9\u0631\u06CC\u0645\u06CC \u0686\u0634\u0645\u200C\u0627\u0646\u062A\u0638\u0627\u0631 \u0628\u0627\u0632\u06CC \u0628\u0631\u0627\u06CC \u0627\u06CC\u0631\u0627\u0646"
                  >
                    علی کریمی چشم‌انتظار بازی برای ایران
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405090/\u0631\u0648\u0633\u06CC\u0647\u060C-\u0645\u0627-\u062F\u0627\u0631\u06CC\u0645-\u0645\u06CC\u200C\u0622\u06CC\u06CC\u0645"
                    title="\u0631\u0648\u0633\u06CC\u0647\u060C \u0645\u0627 \u062F\u0627\u0631\u06CC\u0645 \u0645\u06CC\u200C\u0622\u06CC\u06CC\u0645"
                  >
                    روسیه، ما داریم می‌آییم
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404835/\u0627\u0631\u062A\u0634-\u0627\u06CC\u0631\u0627\u0646-\u0622\u0645\u0627\u062F\u0647-\u062D\u0645\u0644\u0647-\u0628\u0647-\u0627\u0698\u062F\u0647\u0627(\u0639\u06A9\u0633)"
                    title="\u0627\u0631\u062A\u0634 \u0627\u06CC\u0631\u0627\u0646 \u0622\u0645\u0627\u062F\u0647 \u062D\u0645\u0644\u0647 \u0628\u0647 \u0627\u0698\u062F\u0647\u0627(\u0639\u06A9\u0633)"
                  >
                    ارتش ایران آماده حمله به اژدها(عکس)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405131/\u0628\u0631\u062A\u0631\u06CC-\u0627\u0633\u067E\u0627\u0646\u06CC\u0627-\u0628\u0631\u0627\u0628\u0631-\u0641\u0631\u0627\u0646\u0633\u0647-\u0628\u0627-\u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC-\u0628\u0627\u0632\u0628\u06CC\u0646\u06CC-\u0635\u062D\u0646\u0647!"
                    title="\u0628\u0631\u062A\u0631\u06CC \u0627\u0633\u067E\u0627\u0646\u06CC\u0627 \u0628\u0631\u0627\u0628\u0631 \u0641\u0631\u0627\u0646\u0633\u0647 \u0628\u0627 \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0628\u0627\u0632\u0628\u06CC\u0646\u06CC \u0635\u062D\u0646\u0647!"
                  >
                    برتری اسپانیا برابر فرانسه با تکنولوژی بازبینی صحنه!
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405069/\u067E\u0627\u062F\u0627\u0634-\u0648\u06CC\u0698\u0647-\u0648\u0632\u06CC\u0631-\u0648\u0631\u0632\u0634-\u0628\u0631\u0627\u06CC-\u0645\u0644\u06CC-\u067E\u0648\u0634\u0627\u0646"
                    title="\u067E\u0627\u062F\u0627\u0634 \u0648\u06CC\u0698\u0647 \u0648\u0632\u06CC\u0631 \u0648\u0631\u0632\u0634 \u0628\u0631\u0627\u06CC \u0645\u0644\u06CC \u067E\u0648\u0634\u0627\u0646"
                  >
                    پاداش ویژه وزیر ورزش برای ملی پوشان
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405108/\u0646\u06AF\u0631\u0627\u0646\u06CC-\u062F\u0631-\u0627\u0631\u062F\u0648\u06CC-\u0627\u0633\u062A\u0642\u0644\u0627\u0644-\u0628\u0627\u0628\u062A-\u0645\u0635\u062F\u0648\u0645\u06CC\u062A-\u063A\u0641\u0648\u0631\u06CC"
                    title="\u0646\u06AF\u0631\u0627\u0646\u06CC \u062F\u0631 \u0627\u0631\u062F\u0648\u06CC \u0627\u0633\u062A\u0642\u0644\u0627\u0644 \u0628\u0627\u0628\u062A \u0645\u0635\u062F\u0648\u0645\u06CC\u062A \u063A\u0641\u0648\u0631\u06CC"
                  >
                    نگرانی در اردوی استقلال بابت مصدومیت غفوری
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405009/\u067E\u0631-\u0634\u062F\u0646-\u0645\u0634\u0631\u0648\u0637-\u0637\u0628\u0642\u0647-\u0627\u0648\u0644-\u0648\u0631\u0632\u0634\u06AF\u0627\u0647-\u0622\u0632\u0627\u062F\u06CC"
                    title="\u067E\u0631 \u0634\u062F\u0646 \u0645\u0634\u0631\u0648\u0637 \u0637\u0628\u0642\u0647 \u0627\u0648\u0644 \u0648\u0631\u0632\u0634\u06AF\u0627\u0647 \u0622\u0632\u0627\u062F\u06CC"
                  >
                    پر شدن مشروط طبقه اول ورزشگاه آزادی
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404896/\u062A\u0648\u0635\u06CC\u0647-\u0628\u06A9\u0627\u0645-\u0628\u0647-\u0647\u0627\u0641\u0628\u06A9-\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC-\u0628\u0631\u0627\u06CC-\u0631\u0641\u062A\u0646-\u0628\u0647-\u0645\u06CC\u0644\u0627\u0646"
                    title="\u062A\u0648\u0635\u06CC\u0647 \u0628\u06A9\u0627\u0645 \u0628\u0647 \u0647\u0627\u0641\u0628\u06A9 \u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC \u0628\u0631\u0627\u06CC \u0631\u0641\u062A\u0646 \u0628\u0647 \u0645\u06CC\u0644\u0627\u0646"
                  >
                    توصیه بکام به هافبک انگلیسی برای رفتن به میلان
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404850/\u0645\u0647\u0627\u062C\u0645-\u0644\u06CC\u06AF-\u0647\u0644\u0646\u062F-\u0628\u0647-\u062F\u0646\u0628\u0627\u0644-\u06AF\u0644-\u0632\u062F\u0646-\u0628\u0647-\u0628\u06CC\u0631\u0627\u0646\u0648\u0646\u062F"
                    title="\xA0\u0645\u0647\u0627\u062C\u0645 \u0644\u06CC\u06AF \u0647\u0644\u0646\u062F \u0628\u0647 \u062F\u0646\u0628\u0627\u0644 \u06AF\u0644 \u0632\u062F\u0646 \u0628\u0647 \u0628\u06CC\u0631\u0627\u0646\u0648\u0646\u062F"
                  >
                     مهاجم لیگ هلند به دنبال گل زدن به بیرانوند
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405079/\u067E\u06CC\u0627\u0645-\u0628\u0627\u0644\u0627\u062A\u0631\u06CC\u0646-\u0645\u0642\u0627\u0645-\u0648\u0631\u0632\u0634-\u0628\u0631\u0627\u0649-\u06CC\u0648\u0632\u067E\u0644\u0646\u06AF-\u0647\u0627\u0649-\u06A9\u0649\u200C\u0631\u0648\u0634"
                    title="\u067E\u06CC\u0627\u0645 \u0628\u0627\u0644\u0627\u062A\u0631\u06CC\u0646 \u0645\u0642\u0627\u0645 \u0648\u0631\u0632\u0634 \u0628\u0631\u0627\u0649 \u06CC\u0648\u0632\u067E\u0644\u0646\u06AF \u0647\u0627\u0649 \u06A9\u0649\u200C\u0631\u0648\u0634"
                  >
                    پیام بالاترین مقام ورزش براى یوزپلنگ هاى کى‌روش
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405024/\u0628\u0627\u0632\u062A\u0627\u0628-\u062D\u0636\u0648\u0631-\u06AF\u0633\u062A\u0631\u062F\u0647-\u0686\u06CC\u0646\u06CC\u200C\u0647\u0627-\u062F\u0631-\u062C\u0647\u0646\u0645-\u0622\u0632\u0627\u062F\u06CC"
                    title="\u0628\u0627\u0632\u062A\u0627\u0628 \u062D\u0636\u0648\u0631 \u06AF\u0633\u062A\u0631\u062F\u0647 \u0686\u06CC\u0646\u06CC\u200C\u0647\u0627 \u062F\u0631 \u062C\u0647\u0646\u0645 \u0622\u0632\u0627\u062F\u06CC"
                  >
                    بازتاب حضور گسترده چینی‌ها در جهنم آزادی
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405134/\u0628\u0648\u0644\u06CC\u0648\u06CC-2-0\u0622\u0631\u0698\u0627\u0646\u062A\u06CC\u0646\u061B-\u0645\u062C\u0627\u0632\u0627\u062A-\u0628\u062F\u0648\u0646-\u0645\u0633\u06CC"
                    title="\u0628\u0648\u0644\u06CC\u0648\u06CC 2-0\u0622\u0631\u0698\u0627\u0646\u062A\u06CC\u0646\u061B \u0645\u062C\u0627\u0632\u0627\u062A \u0628\u062F\u0648\u0646 \u0645\u0633\u06CC"
                  >
                    بولیوی 2-0آرژانتین؛ مجازات بدون مسی
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404857/\u0647\u0648\u0627\u062F\u0627\u0631\u0627\u0646-\u0686\u06CC\u0646-\u0648\u0627\u0631\u062F-\u062A\u0647\u0631\u0627\u0646-\u0634\u062F\u0646\u062F"
                    title="\xA0\u0647\u0648\u0627\u062F\u0627\u0631\u0627\u0646 \u0686\u06CC\u0646 \u0648\u0627\u0631\u062F \u062A\u0647\u0631\u0627\u0646 \u0634\u062F\u0646\u062F"
                  >
                     هواداران چین وارد تهران شدند
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405040/\u0627\u0641\u0633\u0648\u0633-\u062C\u0647\u0627\u0646\u0628\u062E\u0634-\u067E\u0633-\u0627\u0632-\u0645\u0648\u0642\u0639\u06CC\u062A-\u0627\u0631\u0648\u067E\u0627\u06CC\u06CC(\u0639\u06A9\u0633)"
                    title="\u0627\u0641\u0633\u0648\u0633 \u062C\u0647\u0627\u0646\u0628\u062E\u0634 \u067E\u0633 \u0627\u0632 \u0645\u0648\u0642\u0639\u06CC\u062A \u0627\u0631\u0648\u067E\u0627\u06CC\u06CC(\u0639\u06A9\u0633)"
                  >
                    افسوس جهانبخش پس از موقعیت اروپایی(عکس)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404875/\u0644\u06CC\u067E\u06CC-\u0628\u0627\u06CC\u062F-\u0628\u0647-\u0631\u0648\u0646\u062F-\u062E\u0648\u0628-\u0645\u0627\u0646-\u0627\u062F\u0627\u0645\u0647-\u0628\u062F\u0647\u06CC\u0645"
                    title="\u0644\u06CC\u067E\u06CC: \u0628\u0627\u06CC\u062F \u0628\u0647 \u0631\u0648\u0646\u062F \u062E\u0648\u0628 \u0645\u0627\u0646 \u0627\u062F\u0627\u0645\u0647 \u0628\u062F\u0647\u06CC\u0645"
                  >
                    لیپی: باید به روند خوب مان ادامه بدهیم
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404960/\u062D\u0627\u062C-\u0635\u0641\u06CC-\u0627\u0645\u0631\u0648\u0632-\u06CC\u06A9-\u0631\u0642\u0645\u06CC-\u0645\u06CC\u200C\u0634\u0648\u062F"
                    title="\u062D\u0627\u062C \u0635\u0641\u06CC \u0627\u0645\u0631\u0648\u0632 \u06CC\u06A9 \u0631\u0642\u0645\u06CC \u0645\u06CC\u200C\u0634\u0648\u062F\xA0"
                  >
                    حاج صفی امروز یک رقمی می‌شود 
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404865/\u0648\u0627\u06A9\u0646\u0634-\u0633\u06CC\u062F\u062C\u0644\u0627\u0644-\u0628\u0647-\u0631\u06A9\u0648\u0631\u062F-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0628\u0627-\u0645\u0647\u0627\u062C\u0631\u0627\u0646\u06CC"
                    title="\u0648\u0627\u06A9\u0646\u0634 \u0633\u06CC\u062F\u062C\u0644\u0627\u0644 \u0628\u0647 \u0631\u06A9\u0648\u0631\u062F \u062A\u06CC\u0645 \u0645\u0644\u06CC \u0628\u0627 \u0645\u0647\u0627\u062C\u0631\u0627\u0646\u06CC\xA0"
                  >
                    واکنش سیدجلال به رکورد تیم ملی با مهاجرانی 
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404917/\u062A\u0642\u062F\u06CC\u0631-\u0648-\u062A\u0634\u06A9\u0631-\u0627\u0632-\u0647\u0648\u0627\u067E\u06CC\u0645\u0627\u06CC-\u0627\u062E\u062A\u0635\u0627\u0635\u06CC-\u062A\u06CC\u0645-\u0645\u0644\u06CC"
                    title="\u062A\u0642\u062F\u06CC\u0631 \u0648 \u062A\u0634\u06A9\u0631 \u0627\u0632 \u0647\u0648\u0627\u067E\u06CC\u0645\u0627\u06CC \u0627\u062E\u062A\u0635\u0627\u0635\u06CC \u062A\u06CC\u0645 \u0645\u0644\u06CC\xA0"
                  >
                    تقدیر و تشکر از هواپیمای اختصاصی تیم ملی 
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405014/\u0648\u0631\u0632\u0634\u06AF\u0627\u0647-\u0622\u0632\u0627\u062F\u06CC-\u067E\u0631-\u0634\u062F"
                    title="\u0648\u0631\u0632\u0634\u06AF\u0627\u0647 \u0622\u0632\u0627\u062F\u06CC \u067E\u0631 \u0634\u062F"
                  >
                    ورزشگاه آزادی پر شد
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404838/\u0648\u0636\u0639\u06CC\u062A-\u0639\u0627\u062F\u06CC-\u062F\u0631-\u0631\u0648\u0627\u0628\u0637-\u06A9\u06CC\u200C\u0631\u0648\u0634-\u0642\u0627\u0633\u0645\u06CC"
                    title="\u0648\u0636\u0639\u06CC\u062A \u0639\u0627\u062F\u06CC \u062F\u0631 \u0631\u0648\u0627\u0628\u0637 \u06A9\u06CC\u200C\u0631\u0648\u0634 - \u0642\u0627\u0633\u0645\u06CC"
                  >
                    وضعیت عادی در روابط کی‌روش - قاسمی
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405052/\u0634\u0645\u0627\u0631\u0647\u06F1\u06F7-\u0627\u06CC\u0631\u0627\u0646-\u06F7\u06AF\u0644\u0647-\u0634\u062F(\u0639\u06A9\u0633)"
                    title="\u0634\u0645\u0627\u0631\u0647\u06F1\u06F7 \u0627\u06CC\u0631\u0627\u0646 \u06F7\u06AF\u0644\u0647 \u0634\u062F(\u0639\u06A9\u0633)"
                  >
                    شماره۱۷ ایران ۷گله شد(عکس)
                  </a>
                </li>
              </ul>
            </div>
            <div className="custom-scroll-area">
              <ul
                id="mostCommentedNews"
                className="news-list--listed-news tab-pane"
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
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405145/\u0628\u0627\u0626\u0648\u0633\u0627-\u0631\u0641\u062A\u0627\u0631-\u0641\u06CC\u0641\u0627-\u062F\u0631-\u0642\u0628\u0627\u0644-\u0645\u0633\u06CC-\u0639\u062C\u06CC\u0628-\u0628\u0648\u062F"
                    title="\u0628\u0627\u0626\u0648\u0633\u0627: \u0631\u0641\u062A\u0627\u0631 \u0641\u06CC\u0641\u0627 \u062F\u0631 \u0642\u0628\u0627\u0644 \u0645\u0633\u06CC \u0639\u062C\u06CC\u0628 \u0628\u0648\u062F"
                  >
                    بائوسا: رفتار فیفا در قبال مسی عجیب بود
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405144/\u062D\u0627\u0644-\u0648-\u0647\u0648\u0627\u06CC-\u0645\u0633\u06CC-\u062F\u0631-\u0628\u0627\u0632\u06CC-\u0628\u0648\u0644\u06CC\u0648\u06CC-\u0627\u0631\u0698\u0627\u0646\u062A\u06CC\u0646"
                    title="\u062D\u0627\u0644 \u0648 \u0647\u0648\u0627\u06CC \u0645\u0633\u06CC \u062F\u0631 \u0628\u0627\u0632\u06CC \u0628\u0648\u0644\u06CC\u0648\u06CC - \u0627\u0631\u0698\u0627\u0646\u062A\u06CC\u0646"
                  >
                    حال و هوای مسی در بازی بولیوی - ارژانتین
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405141/\u0645\u0631\u06AF-\u062A\u062F\u0631\u06CC\u062C\u06CC-\u0641\u0648\u062A\u0628\u0627\u0644-\u0647\u0644\u0646\u062F-\u0686\u0631\u0627-\u0648-\u0686\u06AF\u0648\u0646\u0647\u061F"
                    title="\u0645\u0631\u06AF \u062A\u062F\u0631\u06CC\u062C\u06CC \u0641\u0648\u062A\u0628\u0627\u0644 \u0647\u0644\u0646\u062F: \u0686\u0631\u0627 \u0648 \u0686\u06AF\u0648\u0646\u0647\u061F"
                  >
                    مرگ تدریجی فوتبال هلند: چرا و چگونه؟
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405140/\u062A\u0631\u0642\u0647\u200C\u0627\u06CC-\u06A9\u0647-\u0631\u0648\u06CC-\u0633\u0631-\u06A9\u0645\u06A9-\u062F\u0627\u0648\u0631-\u062A\u0631\u06A9\u06CC\u062F(\u06AF\u0632\u0627\u0631\u0634-\u062A\u0635\u0648\u06CC\u0631\u06CC)"
                    title="\u062A\u0631\u0642\u0647\u200C\u0627\u06CC \u06A9\u0647 \u0631\u0648\u06CC \u0633\u0631 \u06A9\u0645\u06A9 \u062F\u0627\u0648\u0631 \u062A\u0631\u06A9\u06CC\u062F(\u06AF\u0632\u0627\u0631\u0634 \u062A\u0635\u0648\u06CC\u0631\u06CC)"
                  >
                    ترقه‌ای که روی سر کمک داور ترکید(گزارش تصویری)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405143/\u0627\u0648\u0644\u06CC\u0646-\u0645\u0633\u0627\u0641\u0631\u0627\u0646-\u062C\u0627\u0645-\u062C\u0647\u0627\u0646\u06CC\u061B-\u0628\u0631\u0632\u06CC\u0644-100-\u0627\u06CC\u0631\u0627\u0646-99!"
                    title="\u0627\u0648\u0644\u06CC\u0646 \u0645\u0633\u0627\u0641\u0631\u0627\u0646 \u062C\u0627\u0645 \u062C\u0647\u0627\u0646\u06CC\u061B \u0628\u0631\u0632\u06CC\u0644 100 - \u0627\u06CC\u0631\u0627\u0646 99!"
                  >
                    اولین مسافران جام جهانی؛ برزیل 100 - ایران 99!
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405134/\u0628\u0648\u0644\u06CC\u0648\u06CC-2-0\u0622\u0631\u0698\u0627\u0646\u062A\u06CC\u0646\u061B-\u0645\u062C\u0627\u0632\u0627\u062A-\u0628\u062F\u0648\u0646-\u0645\u0633\u06CC"
                    title="\u0628\u0648\u0644\u06CC\u0648\u06CC 2-0\u0622\u0631\u0698\u0627\u0646\u062A\u06CC\u0646\u061B \u0645\u062C\u0627\u0632\u0627\u062A \u0628\u062F\u0648\u0646 \u0645\u0633\u06CC"
                  >
                    بولیوی 2-0آرژانتین؛ مجازات بدون مسی
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405131/\u0628\u0631\u062A\u0631\u06CC-\u0627\u0633\u067E\u0627\u0646\u06CC\u0627-\u0628\u0631\u0627\u0628\u0631-\u0641\u0631\u0627\u0646\u0633\u0647-\u0628\u0627-\u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC-\u0628\u0627\u0632\u0628\u06CC\u0646\u06CC-\u0635\u062D\u0646\u0647!"
                    title="\u0628\u0631\u062A\u0631\u06CC \u0627\u0633\u067E\u0627\u0646\u06CC\u0627 \u0628\u0631\u0627\u0628\u0631 \u0641\u0631\u0627\u0646\u0633\u0647 \u0628\u0627 \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0628\u0627\u0632\u0628\u06CC\u0646\u06CC \u0635\u062D\u0646\u0647!"
                  >
                    برتری اسپانیا برابر فرانسه با تکنولوژی بازبینی صحنه!
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405128/\u0627\u062F\u0627\u0645\u0647-\u0628\u062D\u0631\u0627\u0646-\u0647\u0644\u0646\u062F-\u0628\u0627-\u0634\u06A9\u0633\u062A-\u0628\u0631\u0627\u0628\u0631-\u0627\u06CC\u062A\u0627\u0644\u06CC\u0627"
                    title="\u0627\u062F\u0627\u0645\u0647 \u0628\u062D\u0631\u0627\u0646 \u0647\u0644\u0646\u062F \u0628\u0627 \u0634\u06A9\u0633\u062A \u0628\u0631\u0627\u0628\u0631 \u0627\u06CC\u062A\u0627\u0644\u06CC\u0627"
                  >
                    ادامه بحران هلند با شکست برابر ایتالیا
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405119/\u0641\u0631\u06AF\u0648\u0633\u0646-\u0645\u0648\u0631\u06CC\u0646\u06CC\u0648-\u062F\u0631-\u06CC\u0648\u0646\u0627\u06CC\u062A\u062F-\u0628\u062F\u0634\u0627\u0646\u0633-\u0628\u0648\u062F\u0647-\u0627\u0633\u062A"
                    title="\u0641\u0631\u06AF\u0648\u0633\u0646: \u0645\u0648\u0631\u06CC\u0646\u06CC\u0648 \u062F\u0631 \u06CC\u0648\u0646\u0627\u06CC\u062A\u062F \u0628\u062F\u0634\u0627\u0646\u0633 \u0628\u0648\u062F\u0647 \u0627\u0633\u062A"
                  >
                    فرگوسن: مورینیو در یونایتد بدشانس بوده است
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404990/\u06AF\u0632\u0627\u0631\u0634-\u06A9\u0627\u0645\u0644-\u0627\u0632-\u062C\u0646\u06AF-\u063A\u0648\u0644\u200C\u0647\u0627\u06CC-\u0622\u0633\u06CC\u0627\u06CC\u06CC-\u0628\u0631\u0627\u06CC-\u062C\u0627\u0645-2018"
                    title="\u06AF\u0632\u0627\u0631\u0634 \u06A9\u0627\u0645\u0644 \u0627\u0632 \u062C\u0646\u06AF \u063A\u0648\u0644\u200C\u0647\u0627\u06CC \u0622\u0633\u06CC\u0627\u06CC\u06CC \u0628\u0631\u0627\u06CC \u062C\u0627\u0645 2018"
                  >
                    گزارش کامل از جنگ غول‌های آسیایی برای جام 2018
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405122/\u062A\u0631\u06A9\u06CC\u0628-\u0627\u0635\u0644\u06CC-\u0628\u0648\u0644\u06CC\u0648\u06CC-\u2013-\u0622\u0631\u0698\u0627\u0646\u062A\u06CC\u0646"
                    title="\u062A\u0631\u06A9\u06CC\u0628 \u0627\u0635\u0644\u06CC \u0628\u0648\u0644\u06CC\u0648\u06CC \u2013 \u0622\u0631\u0698\u0627\u0646\u062A\u06CC\u0646"
                  >
                    ترکیب اصلی بولیوی – آرژانتین
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405118/\u0645\u0627\u0644\u062F\u06CC\u0646\u06CC-\u062F\u0631-\u0645\u06CC\u0644\u0627\u0646-\u0645\u0631\u0627-\u0628\u0647-\u0686\u0634\u0645-\u06CC\u06A9-\u0645\u0634\u06A9\u0644-\u0645\u06CC-\u0628\u06CC\u0646\u0646\u062F"
                    title="\u0645\u0627\u0644\u062F\u06CC\u0646\u06CC: \u062F\u0631 \u0645\u06CC\u0644\u0627\u0646 \u0645\u0631\u0627 \u0628\u0647 \u0686\u0634\u0645 \u06CC\u06A9 \u0645\u0634\u06A9\u0644 \u0645\u06CC \u0628\u06CC\u0646\u0646\u062F"
                  >
                    مالدینی: در میلان مرا به چشم یک مشکل می بینند
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405114/\u062A\u0631\u0633-\u0631\u0626\u0627\u0644-\u0645\u0627\u062F\u0631\u06CC\u062F-\u0627\u0632-\u0636\u0631\u0631-\u0628\u0632\u0631\u06AF-\u062F\u0631-\u0645\u0648\u0631\u062F-\u0627\u06CC\u0633\u06A9\u0648"
                    title="\u062A\u0631\u0633 \u0631\u0626\u0627\u0644 \u0645\u0627\u062F\u0631\u06CC\u062F \u0627\u0632 \u0636\u0631\u0631 \u0628\u0632\u0631\u06AF \u062F\u0631 \u0645\u0648\u0631\u062F \u0627\u06CC\u0633\u06A9\u0648"
                  >
                    ترس رئال مادرید از ضرر بزرگ در مورد ایسکو
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405117/\u062A\u0631\u06A9\u06CC\u0628-\u0627\u0635\u0644\u06CC-\u0641\u0631\u0627\u0646\u0633\u0647-\u2013-\u0627\u0633\u067E\u0627\u0646\u06CC\u0627"
                    title="\u062A\u0631\u06A9\u06CC\u0628 \u0627\u0635\u0644\u06CC \u0641\u0631\u0627\u0646\u0633\u0647 \u2013 \u0627\u0633\u067E\u0627\u0646\u06CC\u0627"
                  >
                    ترکیب اصلی فرانسه – اسپانیا
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405115/\u0627\u06A9\u06CC\u067E-\u0627\u06CC\u0631\u0627\u0646-\u062F\u0631-\u0642\u0644\u0647\u060C-\u06A9\u0631\u0647-\u062C\u0646\u0648\u0628\u06CC-\u062E\u0648\u062F\u0634-\u0631\u0627-\u0646\u06AF\u0647-\u0646\u062F\u0627\u0634\u062A"
                    title="\u0627\u06A9\u06CC\u067E: \u0627\u06CC\u0631\u0627\u0646 \u062F\u0631 \u0642\u0644\u0647\u060C \u06A9\u0631\u0647 \u062C\u0646\u0648\u0628\u06CC \u062E\u0648\u062F\u0634 \u0631\u0627 \u0646\u06AF\u0647 \u0646\u062F\u0627\u0634\u062A"
                  >
                    اکیپ: ایران در قله، کره جنوبی خودش را نگه نداشت
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405113/\u062A\u0631\u06A9\u06CC\u0628-\u0627\u0635\u0644\u06CC-\u0647\u0644\u0646\u062F-\u2013-\u0627\u06CC\u062A\u0627\u0644\u06CC\u0627"
                    title="\u062A\u0631\u06A9\u06CC\u0628 \u0627\u0635\u0644\u06CC \u0647\u0644\u0646\u062F \u2013 \u0627\u06CC\u062A\u0627\u0644\u06CC\u0627"
                  >
                    ترکیب اصلی هلند – ایتالیا
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405111/\u06AF\u0644\u0633\u0627\u067E\u0648\u0634-\u0627\u06CC\u0631\u0627\u0646\u060C-\u0644\u0648\u06A9\u0648\u0645\u0648\u062A\u06CC\u0648-\u0631\u0648\u0633\u06CC\u0647-\u0631\u0627-\u0645\u063A\u0644\u0648\u0628-\u06A9\u0631\u062F"
                    title="\u06AF\u0644\u0633\u0627\u067E\u0648\u0634 \u0627\u06CC\u0631\u0627\u0646\u060C \u0644\u0648\u06A9\u0648\u0645\u0648\u062A\u06CC\u0648 \u0631\u0648\u0633\u06CC\u0647 \u0631\u0627 \u0645\u063A\u0644\u0648\u0628 \u06A9\u0631\u062F"
                  >
                    گلساپوش ایران، لوکوموتیو روسیه را مغلوب کرد
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405106/\u0631\u0627\u0645\u0648\u0633-\u0628\u0647\u062A\u0631-\u0627\u0633\u062A-\u06AF\u0631\u06CC\u0632\u0645\u0627\u0646-\u062F\u0631-\u0644\u0627\u0644\u06CC\u06AF\u0627-\u0628\u0645\u0627\u0646\u062F"
                    title="\u0631\u0627\u0645\u0648\u0633: \u0628\u0647\u062A\u0631 \u0627\u0633\u062A \u06AF\u0631\u06CC\u0632\u0645\u0627\u0646 \u062F\u0631 \u0644\u0627\u0644\u06CC\u06AF\u0627 \u0628\u0645\u0627\u0646\u062F"
                  >
                    راموس: بهتر است گریزمان در لالیگا بماند
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405110/\u06AF\u0632\u0627\u0631\u0634-\u0648\u06CC\u0698\u0647\u061B-\u0622\u0645\u0627\u0631-\u0627\u0633\u0641\u0646\u0627\u06A9-\u0622\u0631\u0698\u0627\u0646\u062A\u06CC\u0646-\u0628\u062F\u0648\u0646-\u0644\u06CC\u0648\u0646\u0644-\u0645\u0633\u06CC"
                    title="\u06AF\u0632\u0627\u0631\u0634 \u0648\u06CC\u0698\u0647\u061B \u0622\u0645\u0627\u0631 \u0627\u0633\u0641\u0646\u0627\u06A9 \u0622\u0631\u0698\u0627\u0646\u062A\u06CC\u0646 \u0628\u062F\u0648\u0646 \u0644\u06CC\u0648\u0646\u0644 \u0645\u0633\u06CC"
                  >
                    گزارش ویژه؛ آمار اسفناک آرژانتین بدون لیونل مسی
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405108/\u0646\u06AF\u0631\u0627\u0646\u06CC-\u062F\u0631-\u0627\u0631\u062F\u0648\u06CC-\u0627\u0633\u062A\u0642\u0644\u0627\u0644-\u0628\u0627\u0628\u062A-\u0645\u0635\u062F\u0648\u0645\u06CC\u062A-\u063A\u0641\u0648\u0631\u06CC"
                    title="\u0646\u06AF\u0631\u0627\u0646\u06CC \u062F\u0631 \u0627\u0631\u062F\u0648\u06CC \u0627\u0633\u062A\u0642\u0644\u0627\u0644 \u0628\u0627\u0628\u062A \u0645\u0635\u062F\u0648\u0645\u06CC\u062A \u063A\u0641\u0648\u0631\u06CC"
                  >
                    نگرانی در اردوی استقلال بابت مصدومیت غفوری
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405105/\u0631\u06A9\u0648\u0631\u062F-\u0648\u06CC\u0698\u0647\u200C\u06CC-\u0628\u06CC\u0631\u0627\u0646\u0648\u0646\u062F\u061B-11-\u0628\u0627\u0632\u06CC-\u0645\u0644\u06CC\u060C-10-\u06A9\u0644\u06CC\u0646-\u0634\u06CC\u062A"
                    title="\u0631\u06A9\u0648\u0631\u062F \u0648\u06CC\u0698\u0647\u200C\u06CC \u0628\u06CC\u0631\u0627\u0646\u0648\u0646\u062F\u061B 11 \u0628\u0627\u0632\u06CC \u0645\u0644\u06CC\u060C 10 \u06A9\u0644\u06CC\u0646 \u0634\u06CC\u062A"
                  >
                    رکورد ویژه‌ی بیرانوند؛ 11 بازی ملی، 10 کلین شیت
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405101/\u0631\u0627\u0645\u06CC\u0646\u061B-\u0627\u06A9\u0646\u0648\u0646-\u0639\u06CC\u062F\u0649-\u0628\u0631\u0627\u0646\u06A9\u0648-\u0628\u0627\u0642\u0649-\u0645\u0627\u0646\u062F\u0647"
                    title="\u0631\u0627\u0645\u06CC\u0646\u061B \u0627\u06A9\u0646\u0648\u0646 \u0639\u06CC\u062F\u0649 \u0628\u0631\u0627\u0646\u06A9\u0648 \u0628\u0627\u0642\u0649 \u0645\u0627\u0646\u062F\u0647"
                  >
                    رامین؛ اکنون عیدى برانکو باقى مانده
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405095/\u062F\u0631\u062E\u0648\u0627\u0633\u062A-\u062A\u062C\u062F\u06CC\u062F-\u0646\u0638\u0631-\u0622\u0631\u0698\u0627\u0646\u062A\u06CC\u0646-\u0628\u0631\u0627\u06CC-\u0644\u06CC\u0648\u0646\u0644-\u0645\u0633\u06CC"
                    title="\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u062A\u062C\u062F\u06CC\u062F \u0646\u0638\u0631 \u0622\u0631\u0698\u0627\u0646\u062A\u06CC\u0646 \u0628\u0631\u0627\u06CC \u0644\u06CC\u0648\u0646\u0644 \u0645\u0633\u06CC"
                  >
                    درخواست تجدید نظر آرژانتین برای لیونل مسی
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405099/\u0628\u0631\u062F-6\u06AF\u0644\u0647-\u0627\u0633\u062A\u0642\u0644\u0627\u0644-\u062E\u0648\u0632\u0633\u062A\u0627\u0646-\u0628\u0631\u0627\u0628\u0631-\u0634\u0627\u0647\u06CC\u0646-\u0648\u06CC\u0633"
                    title="\u0628\u0631\u062F 6\u06AF\u0644\u0647 \u0627\u0633\u062A\u0642\u0644\u0627\u0644 \u062E\u0648\u0632\u0633\u062A\u0627\u0646 \u0628\u0631\u0627\u0628\u0631 \u0634\u0627\u0647\u06CC\u0646 \u0648\u06CC\u0633"
                  >
                    برد 6گله استقلال خوزستان برابر شاهین ویس
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405098/\u062A\u0631\u06A9\u06CC\u0628-\u0639\u0631\u0628\u0633\u062A\u0627\u0646-\u0627\u0639\u0644\u0627\u0645-\u0634\u062F"
                    title="\u062A\u0631\u06A9\u06CC\u0628 \u0639\u0631\u0628\u0633\u062A\u0627\u0646 \u0627\u0639\u0644\u0627\u0645 \u0634\u062F"
                  >
                    ترکیب عربستان اعلام شد
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405097/\u067E\u06CC\u0631\u0648\u0632\u06CC-\u0646\u0645\u0627\u06CC\u0646\u062F\u06AF\u0627\u0646-\u0627\u06CC\u0631\u0627\u0646-\u062F\u0631-\u0631\u0642\u0627\u0628\u062A\u200C\u0647\u0627\u06CC-\u062A\u0646\u06CC\u0633-\u067E\u06CC\u0634-\u0645\u0642\u062F\u0645\u0627\u062A\u06CC-\u062C\u0647\u0627\u0646\u06CC"
                    title="\u067E\u06CC\u0631\u0648\u0632\u06CC \u0646\u0645\u0627\u06CC\u0646\u062F\u06AF\u0627\u0646 \u0627\u06CC\u0631\u0627\u0646 \u062F\u0631 \u0631\u0642\u0627\u0628\u062A\u200C\u0647\u0627\u06CC \u062A\u0646\u06CC\u0633 \u067E\u06CC\u0634 \u0645\u0642\u062F\u0645\u0627\u062A\u06CC \u062C\u0647\u0627\u0646\u06CC"
                  >
                    پیروزی نمایندگان ایران در رقابت‌های تنیس پیش مقدماتی جهانی
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405091/\u0631\u0636\u0627\u06CC\u062A-\u06A9\u0648\u0646\u062A\u0647-\u0628\u0647-\u0641\u0631\u0648\u0634-\u0633\u062A\u0627\u0631\u0647-\u062E\u0648\u062F-\u0628\u0647-\u0645\u0648\u0631\u06CC\u0646\u06CC\u0648"
                    title="\u0631\u0636\u0627\u06CC\u062A \u06A9\u0648\u0646\u062A\u0647 \u0628\u0647 \u0641\u0631\u0648\u0634 \u0633\u062A\u0627\u0631\u0647 \u062E\u0648\u062F \u0628\u0647 \u0645\u0648\u0631\u06CC\u0646\u06CC\u0648"
                  >
                    رضایت کونته به فروش ستاره خود به مورینیو
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405092/\u062D\u0630\u0641-\u0686\u0646\u062F-\u0645\u0644\u06CC\u062A\u06CC\u200C\u0647\u0627\u06CC-\u0642\u0637\u0631\u061B-\u062F\u06CC\u062F\u0627\u0631-\u0628\u0647-\u0662\u0660\u0662\u0662!"
                    title="\u062D\u0630\u0641 \u0686\u0646\u062F \u0645\u0644\u06CC\u062A\u06CC\u200C\u0647\u0627\u06CC \u0642\u0637\u0631\u061B \u062F\u06CC\u062F\u0627\u0631 \u0628\u0647 \u0662\u0660\u0662\u0662!"
                  >
                    حذف چند ملیتی‌های قطر؛ دیدار به ٢٠٢٢!
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405078/\u062C\u0647\u0627\u0646\u0628\u062E\u0634-\u0628\u0647-\u0627\u06CC\u0631\u0627\u0646\u06CC-\u0628\u0648\u062F\u0646\u0645-\u0627\u0641\u062A\u062E\u0627\u0631-\u0645\u06CC-\u06A9\u0646\u0645"
                    title="\u062C\u0647\u0627\u0646\u0628\u062E\u0634: \u0628\u0647 \u0627\u06CC\u0631\u0627\u0646\u06CC \u0628\u0648\u062F\u0646\u0645 \u0627\u0641\u062A\u062E\u0627\u0631 \u0645\u06CC \u06A9\u0646\u0645"
                  >
                    جهانبخش: به ایرانی بودنم افتخار می کنم
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405090/\u0631\u0648\u0633\u06CC\u0647\u060C-\u0645\u0627-\u062F\u0627\u0631\u06CC\u0645-\u0645\u06CC\u200C\u0622\u06CC\u06CC\u0645"
                    title="\u0631\u0648\u0633\u06CC\u0647\u060C \u0645\u0627 \u062F\u0627\u0631\u06CC\u0645 \u0645\u06CC\u200C\u0622\u06CC\u06CC\u0645"
                  >
                    روسیه، ما داریم می‌آییم
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405089/\u067E\u0627\u06CC-\u06A9\u0627\u0631\u062A-\u0646\u0627\u0631\u062C\u06CC-\u0628\u0647-\u0641\u0648\u062A\u0628\u0627\u0644-\u0628\u0627\u0632-\u0645\u06CC\u200C\u0634\u0648\u062F\u061F-(\u0639\u06A9\u0633)"
                    title="\u067E\u0627\u06CC \u06A9\u0627\u0631\u062A \u0646\u0627\u0631\u062C\u06CC \u0628\u0647 \u0641\u0648\u062A\u0628\u0627\u0644 \u0628\u0627\u0632 \u0645\u06CC\u200C\u0634\u0648\u062F\u061F (\u0639\u06A9\u0633)"
                  >
                    پای کارت نارجی به فوتبال باز می‌شود؟ (عکس)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405088/\u06A9\u06CC\u200C\u0631\u0648\u0634-\u0645\u0686-\u0644\u06CC\u067E\u06CC-\u0631\u0627-\u06AF\u0631\u0641\u062A"
                    title="\u06A9\u06CC\u200C\u0631\u0648\u0634 \u0645\u0686 \u0644\u06CC\u067E\u06CC \u0631\u0627 \u06AF\u0631\u0641\u062A"
                  >
                    کی‌روش مچ لیپی را گرفت
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405081/\u0627\u0648\u0632\u06CC\u0644-\u0628\u0631\u0627\u06CC-\u062A\u0635\u0645\u06CC\u0645-\u06AF\u06CC\u0631\u06CC-\u0645\u0646\u062A\u0638\u0631-\u0622\u06CC\u0646\u062F\u0647-\u0648\u0646\u06AF\u0631-\u0627\u0633\u062A"
                    title="\u0627\u0648\u0632\u06CC\u0644 \u0628\u0631\u0627\u06CC \u062A\u0635\u0645\u06CC\u0645 \u06AF\u06CC\u0631\u06CC \u0645\u0646\u062A\u0638\u0631 \u0622\u06CC\u0646\u062F\u0647 \u0648\u0646\u06AF\u0631 \u0627\u0633\u062A"
                  >
                    اوزیل برای تصمیم گیری منتظر آینده ونگر است
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405085/\u0644\u062D\u0638\u0647-\u0634\u06A9\u0627\u0631-\u0627\u0698\u062F\u0647\u0627-\u062A\u0648\u0633\u0637-\u0637\u0627\u0631\u0645\u0649-(\u06AF\u0632\u0627\u0631\u0634-\u062A\u0635\u0648\u06CC\u0631\u0649)"
                    title="\u0644\u062D\u0638\u0647 \u0634\u06A9\u0627\u0631 \u0627\u0698\u062F\u0647\u0627 \u062A\u0648\u0633\u0637 \u0637\u0627\u0631\u0645\u0649 (\u06AF\u0632\u0627\u0631\u0634 \u062A\u0635\u0648\u06CC\u0631\u0649)"
                  >
                    لحظه شکار اژدها توسط طارمى (گزارش تصویرى)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405084/\u0642\u0648\u0686\u0627\u0646-\u0646\u0698\u0627\u062F-\u0631\u06A9\u0648\u0631\u062F\u0647\u0627\u06CC-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0628\u0631\u0627\u06CC-\u0645\u0627-\u0645\u0647\u0645-\u0646\u06CC\u0633\u062A"
                    title="\u0642\u0648\u0686\u0627\u0646 \u0646\u0698\u0627\u062F: \u0631\u06A9\u0648\u0631\u062F\u0647\u0627\u06CC \u062A\u06CC\u0645 \u0645\u0644\u06CC \u0628\u0631\u0627\u06CC \u0645\u0627 \u0645\u0647\u0645 \u0646\u06CC\u0633\u062A"
                  >
                    قوچان نژاد: رکوردهای تیم ملی برای ما مهم نیست
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405083/\u0634\u0627\u062F\u06CC-\u0645\u0639\u0646\u0627\u062F\u0627\u0631-\u06A9\u06CC\u200C\u0631\u0648\u0634-\u0631\u0648-\u0628\u0647-\u062C\u0627\u06CC\u06AF\u0627\u0647-\u0648\u06CC-\u0622\u06CC-\u067E\u06CC"
                    title="\u0634\u0627\u062F\u06CC \u0645\u0639\u0646\u0627\u062F\u0627\u0631 \u06A9\u06CC\u200C\u0631\u0648\u0634 \u0631\u0648 \u0628\u0647 \u062C\u0627\u06CC\u06AF\u0627\u0647 \u0648\u06CC \u0622\u06CC \u067E\u06CC"
                  >
                    شادی معنادار کی‌روش رو به جایگاه وی آی پی
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405082/\u067E\u06CC\u0631\u0648\u0632\u06CC-\u0627\u0642\u062A\u0635\u0627\u062F\u06CC-\u0645\u062F\u0639\u06CC\u0627\u0646-\u062F\u0631-\u06AF\u0631\u0648\u0647-\u0627\u06CC\u0631\u0627\u0646"
                    title="\u067E\u06CC\u0631\u0648\u0632\u06CC \u0627\u0642\u062A\u0635\u0627\u062F\u06CC \u0645\u062F\u0639\u06CC\u0627\u0646 \u062F\u0631 \u06AF\u0631\u0648\u0647 \u0627\u06CC\u0631\u0627\u0646\xA0"
                  >
                    پیروزی اقتصادی مدعیان در گروه ایران 
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405077/\u0627\u0646\u0635\u0627\u0631\u06CC\u0641\u0631\u062F-\u0635\u0639\u0648\u062F-\u0628\u0647-\u0631\u0648\u0633\u06CC\u0647-\u0642\u0637\u0639\u0649-\u0646\u0634\u062F\u0647-\u0627\u0633\u062A"
                    title="\u0627\u0646\u0635\u0627\u0631\u06CC\u0641\u0631\u062F: \u0635\u0639\u0648\u062F \u0628\u0647 \u0631\u0648\u0633\u06CC\u0647 \u0642\u0637\u0639\u0649 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A"
                  >
                    انصاریفرد: صعود به روسیه قطعى نشده است
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405104/\u067E\u06CC\u0631\u0648\u0632\u06CC-\u0646\u0627\u067E\u0644\u0626\u0648\u0646\u06CC-\u0627\u0632\u0628\u06A9-\u0647\u0627-\u0628\u0627-\u06AF\u0644-\u06A9\u0627\u067E\u06CC\u062A\u0627\u0646"
                    title="\u067E\u06CC\u0631\u0648\u0632\u06CC \u0646\u0627\u067E\u0644\u0626\u0648\u0646\u06CC \u0627\u0632\u0628\u06A9 \u0647\u0627 \u0628\u0627 \u06AF\u0644 \u06A9\u0627\u067E\u06CC\u062A\u0627\u0646"
                  >
                    پیروزی ناپلئونی ازبک ها با گل کاپیتان
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405076/\u0627\u0628\u0631\u0627\u0647\u06CC\u0645\u06CC-\u062A\u0635\u0648\u0631-\u0627\u06CC\u0646-\u0647\u0645\u0647-\u062A\u0645\u0627\u0634\u0627\u06AF\u0631-\u0631\u0627-\u0646\u0645\u06CC\u200C\u06A9\u0631\u062F\u0645"
                    title="\u0627\u0628\u0631\u0627\u0647\u06CC\u0645\u06CC: \u062A\u0635\u0648\u0631 \u0627\u06CC\u0646 \u0647\u0645\u0647 \u062A\u0645\u0627\u0634\u0627\u06AF\u0631 \u0631\u0627 \u0646\u0645\u06CC\u200C\u06A9\u0631\u062F\u0645"
                  >
                    ابراهیمی: تصور این همه تماشاگر را نمی‌کردم
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405079/\u067E\u06CC\u0627\u0645-\u0628\u0627\u0644\u0627\u062A\u0631\u06CC\u0646-\u0645\u0642\u0627\u0645-\u0648\u0631\u0632\u0634-\u0628\u0631\u0627\u0649-\u06CC\u0648\u0632\u067E\u0644\u0646\u06AF-\u0647\u0627\u0649-\u06A9\u0649\u200C\u0631\u0648\u0634"
                    title="\u067E\u06CC\u0627\u0645 \u0628\u0627\u0644\u0627\u062A\u0631\u06CC\u0646 \u0645\u0642\u0627\u0645 \u0648\u0631\u0632\u0634 \u0628\u0631\u0627\u0649 \u06CC\u0648\u0632\u067E\u0644\u0646\u06AF \u0647\u0627\u0649 \u06A9\u0649\u200C\u0631\u0648\u0634"
                  >
                    پیام بالاترین مقام ورزش براى یوزپلنگ هاى کى‌روش
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405075/\u0627\u0645\u06CC\u0631\u06CC-\u0631\u0627\u0647-\u0647\u0627\u06CC-\u0646\u0641\u0648\u0630-\u0686\u06CC\u0646-\u0631\u0627-\u0628\u0633\u062A\u0647-\u0628\u0648\u062F\u06CC\u0645"
                    title="\u0627\u0645\u06CC\u0631\u06CC: \u0631\u0627\u0647 \u0647\u0627\u06CC \u0646\u0641\u0648\u0630 \u0686\u06CC\u0646 \u0631\u0627 \u0628\u0633\u062A\u0647 \u0628\u0648\u062F\u06CC\u0645"
                  >
                    امیری: راه های نفوذ چین را بسته بودیم
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405074/\u06A9\u06CC\u200C\u0631\u0648\u0634-\u062C\u0646\u06AF-\u0628\u0627-\u062E\u0628\u0631\u0646\u06AF\u0627\u0631\u0627\u0646-\u0631\u0627-\u0639\u0644\u0646\u06CC-\u06A9\u0631\u062F"
                    title="\u06A9\u06CC\u200C\u0631\u0648\u0634 \u062C\u0646\u06AF \u0628\u0627 \u062E\u0628\u0631\u0646\u06AF\u0627\u0631\u0627\u0646 \u0631\u0627 \u0639\u0644\u0646\u06CC \u06A9\u0631\u062F"
                  >
                    کی‌روش جنگ با خبرنگاران را علنی کرد
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405073/\u0631\u06A9\u0648\u0631\u062F-\u062C\u0647\u0627\u0646\u06CC-\u06A9\u0644\u06CC\u0646-\u0634\u06CC\u062A-\u0628\u0647-\u0646\u0627\u0645-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0627\u06CC\u0631\u0627\u0646"
                    title="\u0631\u06A9\u0648\u0631\u062F \u062C\u0647\u0627\u0646\u06CC \u06A9\u0644\u06CC\u0646 \u0634\u06CC\u062A \u0628\u0647 \u0646\u0627\u0645 \u062A\u06CC\u0645 \u0645\u0644\u06CC \u0627\u06CC\u0631\u0627\u0646\xA0"
                  >
                    رکورد جهانی کلین شیت به نام تیم ملی ایران 
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405070/\u0637\u0627\u0631\u0645\u06CC-\u062F\u0631-\u0646\u0642\u0634-\u06AF\u0648\u0686\u06CC-2014\u061F"
                    title="\u0637\u0627\u0631\u0645\u06CC \u062F\u0631 \u0646\u0642\u0634 \u06AF\u0648\u0686\u06CC 2014\u061F\xA0"
                  >
                    طارمی در نقش گوچی 2014؟ 
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405068/\u0644\u06CC\u0648\u0646\u0644-\u0645\u0633\u06CC-4-\u062C\u0644\u0633\u0647-\u0645\u062D\u0631\u0648\u0645-\u0634\u062F"
                    title="\u0644\u06CC\u0648\u0646\u0644 \u0645\u0633\u06CC 4 \u062C\u0644\u0633\u0647 \u0645\u062D\u0631\u0648\u0645 \u0634\u062F"
                  >
                    لیونل مسی 4 جلسه محروم شد
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405071/\u0631\u06A9\u0648\u0631\u062F-\u0686\u06CC\u0646\u06CC\u061B-100%-\u067E\u06CC\u0631\u0648\u0632\u06CC-\u0628\u0631\u0627\u0628\u0631-\u0627\u0698\u062F\u0647\u0627!"
                    title="\u0631\u06A9\u0648\u0631\u062F \u0686\u06CC\u0646\u06CC\u061B 100% \u067E\u06CC\u0631\u0648\u0632\u06CC \u0628\u0631\u0627\u0628\u0631 \u0627\u0698\u062F\u0647\u0627!"
                  >
                    رکورد چینی؛ 100% پیروزی برابر اژدها!
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405063/\u0646\u0641\u0631-\u0628\u0647-\u0646\u0641\u0631-\u0628\u0627-\u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0645\u0642\u0627\u0628\u0644-\u0686\u06CC\u0646"
                    title="\u0646\u0641\u0631 \u0628\u0647 \u0646\u0641\u0631 \u0628\u0627 \u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646 \u062A\u06CC\u0645 \u0645\u0644\u06CC \u0645\u0642\u0627\u0628\u0644 \u0686\u06CC\u0646"
                  >
                    نفر به نفر با بازیکنان تیم ملی مقابل چین
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405069/\u067E\u0627\u062F\u0627\u0634-\u0648\u06CC\u0698\u0647-\u0648\u0632\u06CC\u0631-\u0648\u0631\u0632\u0634-\u0628\u0631\u0627\u06CC-\u0645\u0644\u06CC-\u067E\u0648\u0634\u0627\u0646"
                    title="\u067E\u0627\u062F\u0627\u0634 \u0648\u06CC\u0698\u0647 \u0648\u0632\u06CC\u0631 \u0648\u0631\u0632\u0634 \u0628\u0631\u0627\u06CC \u0645\u0644\u06CC \u067E\u0648\u0634\u0627\u0646"
                  >
                    پاداش ویژه وزیر ورزش برای ملی پوشان
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405067/\u06A9\u06CC\u200C\u0631\u0648\u0634-\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0633\u062A\u06CC\u0645-\u06AF\u0644\u200C\u0647\u0627\u06CC-\u0628\u06CC\u0634\u062A\u0631\u06CC-\u0628\u0632\u0646\u06CC\u0645"
                    title="\u06A9\u06CC\u200C\u0631\u0648\u0634: \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0633\u062A\u06CC\u0645 \u06AF\u0644\u200C\u0647\u0627\u06CC \u0628\u06CC\u0634\u062A\u0631\u06CC \u0628\u0632\u0646\u06CC\u0645"
                  >
                    کی‌روش: می‌توانستیم گل‌های بیشتری بزنیم
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405066/\u0634\u062C\u0627\u0639\u06CC\u060C-\u0628\u0647\u062A\u0631\u06CC\u0646-\u0628\u0627\u0632\u06CC\u06A9\u0646-\u062F\u06CC\u062F\u0627\u0631-\u0627\u06CC\u0631\u0627\u0646-\u0648-\u0686\u06CC\u0646"
                    title="\u0634\u062C\u0627\u0639\u06CC\u060C \u0628\u0647\u062A\u0631\u06CC\u0646 \u0628\u0627\u0632\u06CC\u06A9\u0646 \u062F\u06CC\u062F\u0627\u0631 \u0627\u06CC\u0631\u0627\u0646 \u0648 \u0686\u06CC\u0646"
                  >
                    شجاعی، بهترین بازیکن دیدار ایران و چین
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405065/\u0645\u062F\u06CC\u0631\u0639\u0627\u0645\u0644-\u0646\u0641\u062A-\u062A\u063A\u06CC\u06CC\u0631-\u06A9\u0631\u062F"
                    title="\u0645\u062F\u06CC\u0631\u0639\u0627\u0645\u0644 \u0646\u0641\u062A \u062A\u063A\u06CC\u06CC\u0631 \u06A9\u0631\u062F\xA0"
                  >
                    مدیرعامل نفت تغییر کرد 
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405062/\u0627\u062D\u062A\u0645\u0627\u0644-\u062C\u0627-\u0628\u0647-\u062C\u0627\u06CC\u06CC-\u0633\u062A\u0627\u0631\u06AF\u0627\u0646-\u0631\u0626\u0627\u0644-\u0645\u0627\u062F\u0631\u06CC\u062F-\u0648-\u0686\u0644\u0633\u06CC"
                    title="\u0627\u062D\u062A\u0645\u0627\u0644 \u062C\u0627 \u0628\u0647 \u062C\u0627\u06CC\u06CC \u0633\u062A\u0627\u0631\u06AF\u0627\u0646 \u0631\u0626\u0627\u0644 \u0645\u0627\u062F\u0631\u06CC\u062F \u0648 \u0686\u0644\u0633\u06CC"
                  >
                    احتمال جا به جایی ستارگان رئال مادرید و چلسی
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405064/\u06A9\u06CC\u200C\u0631\u0648\u0634-\u062F\u0631-\u062C\u0634\u0646-\u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646-\u0634\u0631\u06A9\u062A-\u0646\u06A9\u0631\u062F"
                    title="\u06A9\u06CC\u200C\u0631\u0648\u0634 \u062F\u0631 \u062C\u0634\u0646 \u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646 \u0634\u0631\u06A9\u062A \u0646\u06A9\u0631\u062F"
                  >
                    کی‌روش در جشن بازیکنان شرکت نکرد
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405061/\u0644\u06CC\u067E\u06CC-\u0627\u0646\u062A\u0638\u0627\u0631-\u0627\u06CC\u0646-\u062C\u0645\u0639\u06CC\u062A-\u0631\u0627-\u062F\u0627\u0634\u062A\u0645"
                    title="\u0644\u06CC\u067E\u06CC: \u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u06CC\u0646 \u062C\u0645\u0639\u06CC\u062A \u0631\u0627 \u062F\u0627\u0634\u062A\u0645"
                  >
                    لیپی: انتظار این جمعیت را داشتم
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
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405025/\u0627\u06CC\u0631\u0627\u0646-1-\u2013-\u0686\u06CC\u0646-0-\u061B-\u0628\u0686\u0647\u200C\u0647\u0627-\u0645\u062A\u0634\u06A9\u0631\u06CC\u0645"
                    title="\u0627\u06CC\u0631\u0627\u0646 1 \u2013 \u0686\u06CC\u0646 0 \u061B \u0628\u0686\u0647\u200C\u0647\u0627 \u0645\u062A\u0634\u06A9\u0631\u06CC\u0645"
                  >
                    ایران 1 – چین 0 ؛ بچه‌ها متشکریم
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405057/\u06A9\u0644\u06CC\u0646-\u0634\u06CC\u062A-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0627\u0632-\u06F9\u06F0\u06F0-\u062F\u0642\u06CC\u0642\u0647-\u06AF\u0630\u0634\u062A"
                    title="\u06A9\u0644\u06CC\u0646 \u0634\u06CC\u062A \u062A\u06CC\u0645 \u0645\u0644\u06CC \u0627\u0632 \u06F9\u06F0\u06F0 \u062F\u0642\u06CC\u0642\u0647 \u06AF\u0630\u0634\u062A"
                  >
                    کلین شیت تیم ملی از ۹۰۰ دقیقه گذشت
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405053/\u06AF\u0648\u0686\u06CC-\u062F\u0631-\u062D\u0633\u0631\u062A-\u06AF\u0644\u0632\u0646\u06CC-\u0628\u0647-\u0686\u06CC\u0646(\u0639\u06A9\u0633)"
                    title="\u06AF\u0648\u0686\u06CC \u062F\u0631 \u062D\u0633\u0631\u062A \u06AF\u0644\u0632\u0646\u06CC \u0628\u0647 \u0686\u06CC\u0646(\u0639\u06A9\u0633)"
                  >
                    گوچی در حسرت گلزنی به چین(عکس)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405052/\u0634\u0645\u0627\u0631\u0647\u06F1\u06F7-\u0627\u06CC\u0631\u0627\u0646-\u06F7\u06AF\u0644\u0647-\u0634\u062F(\u0639\u06A9\u0633)"
                    title="\u0634\u0645\u0627\u0631\u0647\u06F1\u06F7 \u0627\u06CC\u0631\u0627\u0646 \u06F7\u06AF\u0644\u0647 \u0634\u062F(\u0639\u06A9\u0633)"
                  >
                    شماره۱۷ ایران ۷گله شد(عکس)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405051/\u0644\u06CC\u067E\u06CC-\u062E\u0648\u062F\u0634-\u0631\u0627-\u062E\u0644\u0639-\u0633\u0644\u0627\u062D-\u06A9\u0631\u062F"
                    title="\u0644\u06CC\u067E\u06CC \u062E\u0648\u062F\u0634 \u0631\u0627 \u062E\u0644\u0639 \u0633\u0644\u0627\u062D \u06A9\u0631\u062F"
                  >
                    لیپی خودش را خلع سلاح کرد
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405047/\u0635\u0639\u0648\u062F-\u0642\u0631\u06CC\u0628-\u0627\u0644\u0648\u0642\u0648\u0639-\u062F\u0631-\u0633\u0627\u0642\u200C\u0647\u0627\u06CC-\u0641\u0631\u0634\u062A\u0647"
                    title="\u0635\u0639\u0648\u062F \u0642\u0631\u06CC\u0628 \u0627\u0644\u0648\u0642\u0648\u0639 \u062F\u0631 \u0633\u0627\u0642\u200C\u0647\u0627\u06CC \u0641\u0631\u0634\u062A\u0647"
                  >
                    صعود قریب الوقوع در ساق‌های فرشته
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405103/\u067E\u06CC\u0631\u0648\u0632\u06CC-\u0645\u06CC\u0644\u06CC-\u0645\u062A\u0631\u06CC-\u06A9\u0631\u0647-\u062F\u0631-\u062E\u0627\u0646\u0647-\u0628\u0631\u0627\u0628\u0631-\u0633\u0648\u0631\u06CC\u0647"
                    title="\u067E\u06CC\u0631\u0648\u0632\u06CC \u0645\u06CC\u0644\u06CC \u0645\u062A\u0631\u06CC \u06A9\u0631\u0647 \u062F\u0631 \u062E\u0627\u0646\u0647 \u0628\u0631\u0627\u0628\u0631 \u0633\u0648\u0631\u06CC\u0647"
                  >
                    پیروزی میلی متری کره در خانه برابر سوریه
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405046/\u0633\u0631\u0645\u0631\u0628\u06CC-\u062A\u06CC\u0645-\u0645\u0644\u06CC-\u0627\u0645\u0627\u0631\u0627\u062A-\u0627\u0633\u062A\u0639\u0641\u0627-\u062F\u0627\u062F"
                    title="\u0633\u0631\u0645\u0631\u0628\u06CC \u062A\u06CC\u0645 \u0645\u0644\u06CC \u0627\u0645\u0627\u0631\u0627\u062A \u0627\u0633\u062A\u0639\u0641\u0627 \u062F\u0627\u062F"
                  >
                    سرمربی تیم ملی امارات استعفا داد
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405045/\u062A\u0634\u0648\u06CC\u0642-\u0639\u062C\u06CC\u0628-\u0644\u06CC\u067E\u06CC-\u062F\u0631-\u0648\u0631\u0632\u0634\u06AF\u0627\u0647-\u0622\u0632\u0627\u062F\u06CC"
                    title="\u062A\u0634\u0648\u06CC\u0642 \u0639\u062C\u06CC\u0628 \u0644\u06CC\u067E\u06CC \u062F\u0631 \u0648\u0631\u0632\u0634\u06AF\u0627\u0647 \u0622\u0632\u0627\u062F\u06CC"
                  >
                    تشویق عجیب لیپی در ورزشگاه آزادی
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405042/\u062F\u0627\u0648\u0631\u060C-\u0645\u0627\u0646\u0639-\u0627\u062A\u0644\u0627\u0641-\u0648\u0642\u062A-\u062F\u0631\u0648\u0627\u0632\u0647\u200C\u0628\u0627\u0646-\u0686\u06CC\u0646"
                    title="\u062F\u0627\u0648\u0631\u060C \u0645\u0627\u0646\u0639 \u0627\u062A\u0644\u0627\u0641 \u0648\u0642\u062A \u062F\u0631\u0648\u0627\u0632\u0647\u200C\u0628\u0627\u0646 \u0686\u06CC\u0646"
                  >
                    داور، مانع اتلاف وقت دروازه‌بان چین
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405102/\u0698\u0627\u067E\u0646-\u0628\u0627-4-\u06AF\u0644-\u062A\u0627\u06CC\u0644\u0646\u062F-\u0631\u0627-\u062F\u0631-\u0647\u0645-\u06A9\u0648\u0628\u06CC\u062F"
                    title="\u0698\u0627\u067E\u0646 \u0628\u0627 4 \u06AF\u0644 \u062A\u0627\u06CC\u0644\u0646\u062F \u0631\u0627 \u062F\u0631 \u0647\u0645 \u06A9\u0648\u0628\u06CC\u062F"
                  >
                    ژاپن با 4 گل تایلند را در هم کوبید
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405041/\u062A\u0630\u06A9\u0631-\u06A9\u06CC-\u0631\u0648\u0634-\u0628\u0647-\u0639\u0632\u062A-\u0627\u0644\u0644\u0647\u06CC-\u0648-\u062C\u0647\u0627\u0646\u0628\u062E\u0634"
                    title="\u062A\u0630\u06A9\u0631 \u06A9\u06CC \u0631\u0648\u0634 \u0628\u0647 \u0639\u0632\u062A \u0627\u0644\u0644\u0647\u06CC \u0648 \u062C\u0647\u0627\u0646\u0628\u062E\u0634"
                  >
                    تذکر کی روش به عزت اللهی و جهانبخش
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405040/\u0627\u0641\u0633\u0648\u0633-\u062C\u0647\u0627\u0646\u0628\u062E\u0634-\u067E\u0633-\u0627\u0632-\u0645\u0648\u0642\u0639\u06CC\u062A-\u0627\u0631\u0648\u067E\u0627\u06CC\u06CC(\u0639\u06A9\u0633)"
                    title="\u0627\u0641\u0633\u0648\u0633 \u062C\u0647\u0627\u0646\u0628\u062E\u0634 \u067E\u0633 \u0627\u0632 \u0645\u0648\u0642\u0639\u06CC\u062A \u0627\u0631\u0648\u067E\u0627\u06CC\u06CC(\u0639\u06A9\u0633)"
                  >
                    افسوس جهانبخش پس از موقعیت اروپایی(عکس)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405039/\u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646-\u0627\u06CC\u0631\u0627\u0646-\u0627\u0632-5-\u0644\u06CC\u06AF-\u0645\u062A\u0646\u0648\u0639-\u0628\u0631\u0627\u0628\u0631-\u0686\u06CC\u0646"
                    title="\u0628\u0627\u0632\u06CC\u06A9\u0646\u0627\u0646 \u0627\u06CC\u0631\u0627\u0646 \u0627\u0632 5 \u0644\u06CC\u06AF \u0645\u062A\u0646\u0648\u0639 \u0628\u0631\u0627\u0628\u0631 \u0686\u06CC\u0646"
                  >
                    بازیکنان ایران از 5 لیگ متنوع برابر چین
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405037/\u062D\u0631\u06A9\u062A-\u0632\u06CC\u0628\u0627\u06CC-\u0639\u0632\u062A\u200C\u0627\u0644\u0644\u0647\u06CC-\u0628\u06CC-\u062B\u0645\u0631-\u0645\u0627\u0646\u062F(\u0639\u06A9\u0633)"
                    title="\u062D\u0631\u06A9\u062A \u0632\u06CC\u0628\u0627\u06CC \u0639\u0632\u062A\u200C\u0627\u0644\u0644\u0647\u06CC \u0628\u06CC \u062B\u0645\u0631 \u0645\u0627\u0646\u062F(\u0639\u06A9\u0633)"
                  >
                    حرکت زیبای عزت‌اللهی بی ثمر ماند(عکس)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405036/\u0627\u06CC\u0646\u062C\u0627-\u0622\u0632\u0627\u062F\u06CC\u061B-11-\u0628\u0647-\u0639\u0644\u0627\u0648\u0647-\u06CC\u06A9\u0635\u062F\u0647\u0632\u0627\u0631-\u0646\u0641\u0631-(\u0639\u06A9\u0633)"
                    title="\u0627\u06CC\u0646\u062C\u0627 \u0622\u0632\u0627\u062F\u06CC\u061B 11 \u0628\u0647 \u0639\u0644\u0627\u0648\u0647 \u06CC\u06A9\u0635\u062F\u0647\u0632\u0627\u0631 \u0646\u0641\u0631 (\u0639\u06A9\u0633)"
                  >
                    اینجا آزادی؛ 11 به علاوه یکصدهزار نفر (عکس)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405035/\u0637\u0627\u0631\u0645\u06CC-\u0648-\u0622\u0632\u0627\u0631-\u062D\u0637-\u062F\u0641\u0627\u0639-\u0686\u06CC\u0646(\u0639\u06A9\u0633)"
                    title="\u0637\u0627\u0631\u0645\u06CC \u0648 \u0622\u0632\u0627\u0631 \u062D\u0637 \u062F\u0641\u0627\u0639 \u0686\u06CC\u0646(\u0639\u06A9\u0633)"
                  >
                    طارمی و آزار حط دفاع چین(عکس)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405034/\u0627\u0648\u0644\u06CC\u0646-\u062F\u0633\u062A\u0648\u0631\u0627\u062A-\u062A\u0627\u06A9\u062A\u06CC\u06A9\u06CC-\u0641\u0627\u062A\u062D-\u062C\u0627\u0645-\u062C\u0647\u0627\u0646\u06CC-\u062F\u0631-\u0622\u0632\u0627\u062F\u06CC"
                    title="\u0627\u0648\u0644\u06CC\u0646 \u062F\u0633\u062A\u0648\u0631\u0627\u062A \u062A\u0627\u06A9\u062A\u06CC\u06A9\u06CC \u0641\u0627\u062A\u062D \u062C\u0627\u0645 \u062C\u0647\u0627\u0646\u06CC \u062F\u0631 \u0622\u0632\u0627\u062F\u06CC"
                  >
                    اولین دستورات تاکتیکی فاتح جام جهانی در آزادی
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405033/\u0686\u0634\u0645-\u0647\u0627-\u0628\u0647-\u0633\u0627\u0642-\u062A\u06A9\u0646\u06CC\u06A9\u06CC-\u0645\u0633\u0639\u0648\u062F-(\u0639\u06A9\u0633)"
                    title="\u0686\u0634\u0645 \u0647\u0627 \u0628\u0647 \u0633\u0627\u0642 \u062A\u06A9\u0646\u06CC\u06A9\u06CC \u0645\u0633\u0639\u0648\u062F (\u0639\u06A9\u0633)"
                  >
                    چشم ها به ساق تکنیکی مسعود (عکس)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405032/\u0628\u0627\u0646\u0648\u0627\u0646-\u0686\u06CC\u0646\u06CC-\u0648-\u0645\u062C\u0648\u0632-\u062D\u0636\u0648\u0631-\u062F\u0631-\u0622\u0632\u0627\u062F\u06CC"
                    title="\u0628\u0627\u0646\u0648\u0627\u0646 \u0686\u06CC\u0646\u06CC \u0648 \u0645\u062C\u0648\u0632 \u062D\u0636\u0648\u0631 \u062F\u0631 \u0622\u0632\u0627\u062F\u06CC"
                  >
                    بانوان چینی و مجوز حضور در آزادی
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405031/\u0633\u0631\u0645\u0631\u0628\u06CC-\u0627\u0645\u0627\u0631\u0627\u062A-\u0627\u0633\u062A\u0639\u0641\u0627-\u06A9\u0631\u062F"
                    title="\u0633\u0631\u0645\u0631\u0628\u06CC \u0627\u0645\u0627\u0631\u0627\u062A \u0627\u0633\u062A\u0639\u0641\u0627 \u06A9\u0631\u062F"
                  >
                    سرمربی امارات استعفا کرد
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405030/\u0648\u0631\u0632\u0634\u06AF\u0627\u0647-\u0622\u0632\u0627\u062F\u06CC-\u062F\u0631-\u0645\u0631\u0632-\u062E\u0637\u0631!"
                    title="\u0648\u0631\u0632\u0634\u06AF\u0627\u0647 \u0622\u0632\u0627\u062F\u06CC \u062F\u0631 \u0645\u0631\u0632 \u062E\u0637\u0631!"
                  >
                    ورزشگاه آزادی در مرز خطر!
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405029/\u0648\u0631\u0627\u062A\u06CC-\u0634\u06A9\u0627\u06CC\u062A-\u062E\u0648\u062F-\u0627\u0632-\u0646\u0634\u0631\u06CC\u0647-\u0627\u06A9\u06CC\u067E-\u0631\u0627-\u067E\u0633-\u06AF\u0631\u0641\u062A"
                    title="\u0648\u0631\u0627\u062A\u06CC \u0634\u06A9\u0627\u06CC\u062A \u062E\u0648\u062F \u0627\u0632 \u0646\u0634\u0631\u06CC\u0647 \u0627\u06A9\u06CC\u067E \u0631\u0627 \u067E\u0633 \u06AF\u0631\u0641\u062A"
                  >
                    وراتی شکایت خود از نشریه اکیپ را پس گرفت
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405028/\u062D\u0636\u0648\u0631-\u0648\u0632\u06CC\u0631-\u0648\u0631\u0632\u0634-\u062F\u0631-\u0648\u0631\u0632\u0634\u06AF\u0627\u0647-\u0622\u0632\u0627\u062F\u06CC(\u0639\u06A9\u0633)"
                    title="\u062D\u0636\u0648\u0631 \u0648\u0632\u06CC\u0631 \u0648\u0631\u0632\u0634 \u062F\u0631 \u0648\u0631\u0632\u0634\u06AF\u0627\u0647 \u0622\u0632\u0627\u062F\u06CC(\u0639\u06A9\u0633)"
                  >
                    حضور وزیر ورزش در ورزشگاه آزادی(عکس)
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405027/\u0648\u0627\u0631\u0627\u0646-\u062F\u0631-\u0627\u0628\u062A\u062F\u0627-\u0628\u0627-\u0632\u06CC\u062F\u0627\u0646-\u0627\u062E\u062A\u0644\u0627\u0641-\u062F\u0627\u0634\u062A\u0645"
                    title="\u0648\u0627\u0631\u0627\u0646: \u062F\u0631 \u0627\u0628\u062A\u062F\u0627 \u0628\u0627 \u0632\u06CC\u062F\u0627\u0646 \u0627\u062E\u062A\u0644\u0627\u0641 \u062F\u0627\u0634\u062A\u0645"
                  >
                    واران: در ابتدا با زیدان اختلاف داشتم
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405026/\u062F\u0648\u0645\u06CC\u0646-\u062D\u0636\u0648\u0631-\u0641\u06CC\u06A9\u0633-\u0627\u0628\u0631\u0627\u0647\u06CC\u0645\u06CC-\u062F\u0631-\u062A\u0631\u06A9\u06CC\u0628-\u062A\u06CC\u0645-\u0645\u0644\u06CC"
                    title="\u062F\u0648\u0645\u06CC\u0646 \u062D\u0636\u0648\u0631 \u0641\u06CC\u06A9\u0633 \u0627\u0628\u0631\u0627\u0647\u06CC\u0645\u06CC \u062F\u0631 \u062A\u0631\u06A9\u06CC\u0628 \u062A\u06CC\u0645 \u0645\u0644\u06CC"
                  >
                    دومین حضور فیکس ابراهیمی در ترکیب تیم ملی
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405100/\u067E\u06CC\u0631\u0648\u0632\u06CC-\u0627\u0633\u062A\u0631\u0627\u0644\u06CC\u0627-\u0628\u0631\u0627\u0628\u0631-\u0627\u0645\u0627\u0631\u0627\u062A-\u0628\u0627-2-\u06A9\u0631\u0646\u0631"
                    title="\u067E\u06CC\u0631\u0648\u0632\u06CC \u0627\u0633\u062A\u0631\u0627\u0644\u06CC\u0627 \u0628\u0631\u0627\u0628\u0631 \u0627\u0645\u0627\u0631\u0627\u062A \u0628\u0627 2 \u06A9\u0631\u0646\u0631"
                  >
                    پیروزی استرالیا برابر امارات با 2 کرنر
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405017/\u0627\u06AF\u0631-\u0645\u0633\u06CC-\u062A\u062E\u0644\u0641-\u06A9\u0631\u062F\u0647-\u0628\u0627\u06CC\u062F-\u0645\u062D\u0631\u0648\u0645-\u0634\u0648\u062F"
                    title="\u0627\u06AF\u0631 \u0645\u0633\u06CC \u062A\u062E\u0644\u0641 \u06A9\u0631\u062F\u0647 \u0628\u0627\u06CC\u062F \u0645\u062D\u0631\u0648\u0645 \u0634\u0648\u062F"
                  >
                    اگر مسی تخلف کرده باید محروم شود
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405024/\u0628\u0627\u0632\u062A\u0627\u0628-\u062D\u0636\u0648\u0631-\u06AF\u0633\u062A\u0631\u062F\u0647-\u0686\u06CC\u0646\u06CC\u200C\u0647\u0627-\u062F\u0631-\u062C\u0647\u0646\u0645-\u0622\u0632\u0627\u062F\u06CC"
                    title="\u0628\u0627\u0632\u062A\u0627\u0628 \u062D\u0636\u0648\u0631 \u06AF\u0633\u062A\u0631\u062F\u0647 \u0686\u06CC\u0646\u06CC\u200C\u0647\u0627 \u062F\u0631 \u062C\u0647\u0646\u0645 \u0622\u0632\u0627\u062F\u06CC"
                  >
                    بازتاب حضور گسترده چینی‌ها در جهنم آزادی
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405023/\u0645\u0644\u06CC-\u067E\u0648\u0634\u0627\u0646-\u0627\u06CC\u0631\u0627\u0646-\u0622\u0632\u0627\u062F\u06CC-\u0631\u0627-\u062A\u0631\u06A9\u0627\u0646\u062F\u0646\u062F!"
                    title="\u0645\u0644\u06CC \u067E\u0648\u0634\u0627\u0646 \u0627\u06CC\u0631\u0627\u0646 \u0622\u0632\u0627\u062F\u06CC \u0631\u0627 \u062A\u0631\u06A9\u0627\u0646\u062F\u0646\u062F!"
                  >
                    ملی پوشان ایران آزادی را ترکاندند!
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405022/\u06A9\u06CC\u200C\u0631\u0648\u0634-\u0628\u0647-\u0648\u0639\u062F\u0647-\u0627\u0634-\u0639\u0645\u0644-\u06A9\u0631\u062F"
                    title="\u06A9\u06CC\u200C\u0631\u0648\u0634 \u0628\u0647 \u0648\u0639\u062F\u0647 \u0627\u0634 \u0639\u0645\u0644 \u06A9\u0631\u062F"
                  >
                    کی‌روش به وعده اش عمل کرد
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405021/\u0631\u0627\u0645\u06CC\u0646-\u0631\u0636\u0627\u06CC\u06CC\u0627\u0646-\u0628\u0627\u0631-\u062F\u06CC\u06AF\u0631-\u0631\u0648\u06CC-\u0646\u06CC\u0645\u06A9\u062A"
                    title="\u0631\u0627\u0645\u06CC\u0646 \u0631\u0636\u0627\u06CC\u06CC\u0627\u0646 \u0628\u0627\u0631 \u062F\u06CC\u06AF\u0631 \u0631\u0648\u06CC \u0646\u06CC\u0645\u06A9\u062A"
                  >
                    رامین رضاییان بار دیگر روی نیمکت
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405019/\u0633\u0627\u0632\u0646\u062F\u0647-\u06AF\u0644-\u067E\u06CC\u0631\u0648\u0632\u06CC-\u062F\u0631-\u062F\u0648\u062D\u0647-\u0631\u0648\u06CC-\u0646\u06CC\u0645\u06A9\u062A"
                    title="\u0633\u0627\u0632\u0646\u062F\u0647 \u06AF\u0644 \u067E\u06CC\u0631\u0648\u0632\u06CC \u062F\u0631 \u062F\u0648\u062D\u0647 \u0631\u0648\u06CC \u0646\u06CC\u0645\u06A9\u062A"
                  >
                    سازنده گل پیروزی در دوحه روی نیمکت
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405020/\u06AF\u0648\u0686\u06CC-\u062F\u0631-\u0627\u0646\u062F\u06CC\u0634\u0647-\u06AF\u0644-\u0635\u0639\u0648\u062F-\u0628\u0647-\u062C\u0627\u0645-\u062C\u0647\u0627\u0646\u06CC"
                    title="\u06AF\u0648\u0686\u06CC \u062F\u0631 \u0627\u0646\u062F\u06CC\u0634\u0647 \u06AF\u0644 \u0635\u0639\u0648\u062F \u0628\u0647 \u062C\u0627\u0645 \u062C\u0647\u0627\u0646\u06CC\xA0"
                  >
                    گوچی در اندیشه گل صعود به جام جهانی 
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405016/\u0634\u062C\u0627\u0639\u06CC-\u06A9\u0627\u067E\u06CC\u062A\u0627\u0646-\u0627\u06CC\u0631\u0627\u0646-\u0628\u0631\u0627\u0628\u0631-\u0686\u06CC\u0646-\u0634\u062F"
                    title="\u0634\u062C\u0627\u0639\u06CC \u06A9\u0627\u067E\u06CC\u062A\u0627\u0646 \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631\u0627\u0628\u0631 \u0686\u06CC\u0646 \u0634\u062F"
                  >
                    شجاعی کاپیتان ایران برابر چین شد
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405015/\u0686\u06CC\u0646\u06CC-\u0647\u0627-\u0647\u0648\u0627\u062F\u0627\u0631\u0627\u0646-\u0627\u06CC\u0631\u0627\u0646-\u0631\u0627-\u0627\u0632-\u0647\u0645-\u067E\u0627\u0634\u0627\u0646\u062F\u0646\u062F"
                    title="\u0686\u06CC\u0646\u06CC \u0647\u0627 \u0647\u0648\u0627\u062F\u0627\u0631\u0627\u0646 \u0627\u06CC\u0631\u0627\u0646 \u0631\u0627 \u0627\u0632 \u0647\u0645 \u067E\u0627\u0634\u0627\u0646\u062F\u0646\u062F"
                  >
                    چینی ها هواداران ایران را از هم پاشاندند
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405014/\u0648\u0631\u0632\u0634\u06AF\u0627\u0647-\u0622\u0632\u0627\u062F\u06CC-\u067E\u0631-\u0634\u062F"
                    title="\u0648\u0631\u0632\u0634\u06AF\u0627\u0647 \u0622\u0632\u0627\u062F\u06CC \u067E\u0631 \u0634\u062F"
                  >
                    ورزشگاه آزادی پر شد
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1404971/\u062A\u0631\u06A9\u06CC\u0628-\u0627\u06CC\u0631\u0627\u0646-\u0628\u0631\u0627\u0628\u0631-\u0686\u06CC\u0646-\u0645\u0634\u062E\u0635-\u0634\u062F"
                    title="\u062A\u0631\u06A9\u06CC\u0628 \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631\u0627\u0628\u0631 \u0686\u06CC\u0646 \u0645\u0634\u062E\u0635 \u0634\u062F"
                  >
                    ترکیب ایران برابر چین مشخص شد
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405005/\u0646\u06CC\u0645\u0627\u0631-\u0639\u0644\u0627\u0642\u0647-\u0627\u06CC-\u0628\u0647-\u0645\u0642\u0627\u06CC\u0633\u0647-\u0634\u062F\u0646-\u0628\u0627-\u0645\u0633\u06CC-\u0648-\u0633\u0648\u0627\u0631\u0632-\u0646\u062F\u0627\u0631\u0645"
                    title="\u0646\u06CC\u0645\u0627\u0631: \u0639\u0644\u0627\u0642\u0647 \u0627\u06CC \u0628\u0647 \u0645\u0642\u0627\u06CC\u0633\u0647 \u0634\u062F\u0646 \u0628\u0627 \u0645\u0633\u06CC \u0648 \u0633\u0648\u0627\u0631\u0632 \u0646\u062F\u0627\u0631\u0645"
                  >
                    نیمار: علاقه ای به مقایسه شدن با مسی و سوارز ندارم
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405013/\u0686\u06CC\u0646\u06CC-\u0647\u0627\u06CC-\u0645\u062A\u0639\u062C\u0628-\u0631\u0648\u06CC-\u0686\u0645\u0646-\u0648\u0631\u0632\u0634\u06AF\u0627\u0647-\u0622\u0632\u0627\u062F\u06CC"
                    title="\u0686\u06CC\u0646\u06CC \u0647\u0627\u06CC \u0645\u062A\u0639\u062C\u0628 \u0631\u0648\u06CC \u0686\u0645\u0646 \u0648\u0631\u0632\u0634\u06AF\u0627\u0647 \u0622\u0632\u0627\u062F\u06CC\xA0"
                  >
                    چینی های متعجب روی چمن ورزشگاه آزادی 
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405012/\u062C\u0648-\u0622\u0632\u0627\u062F\u06CC-\u0622\u0632\u0645\u0648\u0646-\u0631\u0627-\u0647\u0645-\u06AF\u0631\u0641\u062A"
                    title="\u062C\u0648 \u0622\u0632\u0627\u062F\u06CC \u0622\u0632\u0645\u0648\u0646 \u0631\u0627 \u0647\u0645 \u06AF\u0631\u0641\u062A"
                  >
                    جو آزادی آزمون را هم گرفت
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="small-news-link"
                    href="http://www.varzesh3.com/news/1405011/\u0646\u0648\u0634\u0627\u062F-\u0639\u0627\u0644\u0645\u06CC\u0627\u0646-\u062F\u0631-\u0631\u062F\u0647-42-\u062C\u0647\u0627\u0646-\u0642\u0631\u0627\u0631-\u06AF\u0631\u0641\u062A"
                    title="\u0646\u0648\u0634\u0627\u062F \u0639\u0627\u0644\u0645\u06CC\u0627\u0646 \u062F\u0631 \u0631\u062F\u0647 42 \u062C\u0647\u0627\u0646 \u0642\u0631\u0627\u0631 \u06AF\u0631\u0641\u062A"
                  >
                    نوشاد عالمیان در رده 42 جهان قرار گرفت
                  </a>
                </li>
              </ul>
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
