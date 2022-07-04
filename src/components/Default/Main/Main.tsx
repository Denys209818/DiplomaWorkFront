import 'antd/dist/antd.css';
import { Button, Carousel, Col, Row, Space } from 'antd';
import React from 'react';
import ContentCardsMain from './ContentCardsMain';
import MainFooter from './MainFooter';
import FeedbackSlider from './FeedbackSlider';
import CardFeedback from './customComponents/CardFeedback';
import NewsContainer from './NewsContainer';
import AboutContentBlock from './customComponents/AboutContentBlock';
import MainContentBlock from './MainContentBlock';
import FooterContentBlock from './FooterContentBlock';
import Register from '../../Auth/Register/Register';
import Blog from '../News/Blog';


const contentStyle: React.CSSProperties = {
    height: '400px',
    color: '#fff',
    lineHeight: '300px',
    textAlign: 'center',
    background: 'white',
    width: '100%',
  };

  const feedbackSliderButton : React.CSSProperties = {
    display:'flex',
    justifyContent:'center',
    justifyItems:'center',
    
  };

  

const Main: React.FC = () => 
{
  return (<>
    <Carousel effect="fade" autoplay>
        <div>
            <img src="/images/slider1.jpg" style={contentStyle} alt="" />
        </div>
        <div>
            <img src="/images/slider2.jpg" style={contentStyle} alt="" />
        </div>
        <div>
            <img src="/images/slider3.jpg" style={contentStyle} alt="" />
        </div>
        <div>
            <img src="/images/slider4.jpg" style={contentStyle} alt="" />
        </div>
    </Carousel>

    <AboutContentBlock/>

   <ContentCardsMain/>
    
   {/* Main blocks */}
    <MainContentBlock/>
   {/* Slider and news */}
    <FeedbackSlider/>

    <FooterContentBlock/>
    
    <NewsContainer/>
    
</>);
}

export default Main;