import 'antd/dist/antd.css';
import { Button, Carousel, Col, Row, Space } from 'antd';
import React from 'react';
import ContentCardsMain from './ContentCardsMain';
import MainFooter from './MainFooter';

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

       <ContentCardsMain/>
        
       {/* Main blocks */}
        <div></div>
       {/* Slider and news */}
            <Row justify="center">
                <Col md={4} style={feedbackSliderButton}>
                        <Button type="primary"  shape="circle">
                            Left
                        </Button>
                </Col>
                <Col md={16} xs={24} sm={24}>
                    Text
                </Col>
                <Col md={4} style={feedbackSliderButton}>
                        <Button type="primary" shape="circle">
                            Right
                        </Button>
                    
                    
                </Col>
            </Row>

       <MainFooter/>
    </>);
}

export default Main;