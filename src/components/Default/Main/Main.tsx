import 'antd/dist/antd.css';
import { Button, Carousel, Col, Row, Space } from 'antd';
import React from 'react';
import ContentCardsMain from './ContentCardsMain';
import MainFooter from './MainFooter';
import FeedbackSlider from './FeedbackSlider';

const contentStyle: React.CSSProperties = {
    height: '400px',
    color: '#fff',
    lineHeight: '300px',
    textAlign: 'center',
    background: 'white',
    width: '100%',
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

       <ContentCardsMain/>
        
       {/* Main blocks */}
        <div></div>
       {/* Slider and news */}
        <FeedbackSlider/>

       <MainFooter/>
    </>);
}

export default Main;