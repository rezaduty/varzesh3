import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Page_Content_Column_Left from './components/Page_Content_Column_Left';
import Content_Column_Left from './components/Content_Column_Left';
import Left_Ads from './components/Left_Ads';
import Football_News_Left from './components/Football_News_Left';
import Europe_League_Left from './components/Europe_League_Left';
import Europe_League_Table_Left from './components/Europe_League_Table_Left';
import Basketball_Left from './components/Basketball_Left';
import Top_News_Right from './components/Top_News_Right';
import Right_Ads from './components/Right_Ads';
import Iran_League_Right from './components/Iran_League_Right';
import Iran_League_Table_Right from './components/Iran_League_Table_Right';
import UEFA_Right from './components/UEFA_Right';
import Other_News_Right from './components/Other_News_Right';
import Vollyball_Right from './components/Vollyball_Right';
import Tv_Program_Right from './components/Tv_Program_Right';
import Video_Right from './components/Video_Right';
import Right_Ads2 from './components/Right_Ads2';
import NewsLetter_Right from './components/NewsLetter_Right';
import Football_Goal_Scorers from './components/Football_Goal_Scorers';
import Football_Assistant_Right from './components/Football_Assistant_Right';
import UEFA_Program_Right from './components/UEFA_Program_Right';
import Asia_Cup_Right from './components/Asia_Cup_Right';
import Asia_Champions_Right from './components/Asia_Champions_Right';



import Footer from './components/Footer';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Main left={ <Page_Content_Column_Left /> } right={ 

        	<Content_Column_Left ads={ <Left_Ads /> } 

        	football_news={ <Football_News_Left /> } 

        	europe_league={ <Europe_League_Left /> }

        	europe_league_table={ <Europe_League_Table_Left /> }

        	basketball={ <Basketball_Left /> }

        /> } 

			top_news={ <Top_News_Right /> }
			right_ads={ <Right_Ads /> }
			iran_league={ <Iran_League_Right /> }
			iran_league_table={ <Iran_League_Table_Right /> }
			uefa={ <UEFA_Right /> }
			other_news={ <Other_News_Right /> }
			vollyball={ <Vollyball_Right /> }
			tv_program={ <Tv_Program_Right /> }
			video={ <Video_Right /> }
			right_ads2={ <Right_Ads2 /> }
			newsletter={ <NewsLetter_Right /> }
			football_goal_scorers={ <Football_Goal_Scorers /> }
			football_assistant={ <Football_Assistant_Right /> }
			uefa_progrm={ <UEFA_Program_Right /> }
			asia_cup={ <Asia_Cup_Right /> }
			asia_champions={ <Asia_Champions_Right /> }

        />

        <Footer />



        
      </div>
    );
  }
}

export default App;