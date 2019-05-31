import React from "react";

class Main extends React.Component {
  render() {
    return (
      <main className="page-content" id="page-content">
        
          {this.props.header}

          


<div className="center-container">
    
    





<div className="page-content-column pull-right">


<div className="row">


<div className="col-xs-12 col-sm-8 pull-right home-column main-first-column">

{this.props.news_slider}


<div className="row no-margin-side">

{this.props.right}
{this.props.center}

</div>

</div>

<div className="col-xs-12 col-sm-4 pull-right home-column third-column">

{this.props.content_left}

</div>




</div>




<div className="col-xs-12 col-sm-4 pull-right home-column third-column">



</div>






</div>








    <div className="page-content-ads">
        
        {this.props.left_ads}
    

    </div>
</div>
                





          {this.props.footer}
        
      </main>
    );
  }
}

export default Main;
