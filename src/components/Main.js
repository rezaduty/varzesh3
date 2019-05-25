import React from "react";

class Main extends React.Component {
  render() {
    return (
      <main id="page-content">
        <div className="center-container">
          <div className="page-content-column-right">
           
            {this.props.right}
           
            
            <div className="row">
              {this.props.top_news}
              
              <div className="no-margin">
                <div className="col-right">
                 {this.props.right_ads}
                 {this.props.iran_league}
                  
                 {this.props.iran_league_table}
                  
                 {this.props.uefa}
                  
                 {this.props.other_news}
                  
                 {this.props.vollyball}
                 
                 {this.props.tv_program}
                </div>
               
               {this.props.video}
             
               {this.props.right_ads2}
                
               {this.props.newsletter}
                
               {this.props.football_goal_scorers}
               
               {this.props.football_assistant}  
              
               {this.props.uefa_progrm}
               
               {this.props.asia_cup}
              
               {this.props.asia_champions}

              </div>
            </div>
          </div>
          {this.props.left}
        </div>
      </main>
    );
  }
}

export default Main;
