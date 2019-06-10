import React from "react";


const API = 'https://sample.api.com/api/';
const DEFAULT_QUERY = 'redux';

class Left_Ads extends React.Component {

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
         <div className="ad-container row-fluid" data-adposition="6">
        {hits.map(hit =>
            <div data-extension="jpg" className="ad undefined">

            <a href="{hit.link}" target="_blank">
                <img width="130"  height="400" alt="" src="{hit.image}" />
            </a>
           </div>
        )}
      </div>

        
       
    );
  }
}

export default Left_Ads;


