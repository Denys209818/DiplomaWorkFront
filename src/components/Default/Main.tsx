import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import React from 'react';
import ContentCardsMain from './ContentCardsMain';

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
    </>);
}

export default Main;