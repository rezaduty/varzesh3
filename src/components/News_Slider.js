import React from "react";


const API = 'https://sample.api.com/api/';
const DEFAULT_QUERY = 'redux';

class News_Slider extends React.Component {

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
    return (
      
    <div className="row-fluid home-column wide-content-wrapper">
        
    <div className="news-slider widget">
    <div className="news-slider--badge"> </div>
   


   <div className="news-slider--carousel widget-slider owl-carousel owl-rtl owl-loaded owl-drag">
                
    

        <div className="owl-stage-outer"><div className="owl-stage" ><div className="owl-item cloned" style={{width: "521px"}}><div className="news-slider-item item">
                       
                
{hits.map(hit =>
          <div className="col-sm-6 col-xs-12">
                        <div className="news-slider--text-container">
                            <div className="news-slider--rutitle">{hit.title}</div>
                            <h1 className="news-slider--title">
                                <a rel="bookmark" href="{hit.url}" target="_blank" title="{hit.title}">{hit.title}</a>
                            </h1>
                            <p className="news-slider--subtitle">{hit.subtitle}</p>
                        </div>
                    </div> 
        )}

                        
                       
        </div> 
</div>
</div>

</div>

    );
  }
}

export default News_Slider;


