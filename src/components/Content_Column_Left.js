import React from "react";

class Content_Column_Left extends React.Component {
  render() {
    return (
      <div className="content-column-left">
        {this.props.ads}
       
        {this.props.football_news}
        
        {this.props.europe_league}
        
        {this.props.europe_league_table}
       
        {this.props.basketball}
        
      </div>
    );
  }
}

export default Content_Column_Left;
