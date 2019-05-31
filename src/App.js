import React, { Component } from 'react';

import './App.css';




import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import Left_Ads from './components/Left_Ads'
import News_Slider from './components/News_Slider'
import Right from './components/Right'
import Center from './components/Center'
import Content_Column_Left from './components/Content_Column_Left'




class App extends Component {
  render() {
    return (
      <div className="App">

		<Header />


        <Main news_slider={<News_Slider />} center={<Center />} right={<Right />} content_left={<Content_Column_Left />} left_ads={ <Left_Ads /> }

        /> } 

		<Footer />



        
      </div>
        	
    );
  }
}

export default App;