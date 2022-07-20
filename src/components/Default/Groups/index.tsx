import { Col, Row } from 'antd';
import React, { startTransition, useEffect, useState } from 'react';
import './../Groups/groupsStyles.css';
import { animated, useTransition } from 'react-spring';
import RightColumn from './CustomComponents/RightColumn';
import LeftColumn from './CustomComponents/LeftColumn';


const Groups: React.FC = () => {

   
    const [isPhone, setPhone] = useState(false);
    const [visibleRight, setVisibleRight] = useState(false);
    const [visibleLeft, setVisibleLeft] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);


    useEffect(() => {
        window.addEventListener("resize", () => {
            startTransition(() => {
                setWidth(window.innerWidth);
            });
        });
    }, []);


    const transitionRight = useTransition(visibleRight, {
        from: {
            x: width,
        },
        enter: {
            x: 0,
        },
        leave: {
            x: width,
        }
    });

    const transitionLeft = useTransition(visibleLeft, {
        from: {
            x:-(width),
        },
        enter: {
            x:0,
        },
        leave: {
            x: -(width),
        }
    });

    const openLeftRightComponent = () => {
        startTransition(() => {
            
                setVisibleLeft(!visibleLeft);
                setPhone(!isPhone);
                setVisibleRight(!visibleRight);
       });
    }

    
    
    return (<>
        <div className="rows">

            <Row id='row-with-group-names'>
                <Col lg={12} xl={6} md={12} xs={!isPhone ? 24 : 0} >
                    {width <= 768 ? transitionLeft((style, item) => {
                        return (item ? <animated.div style={style}>

                            <LeftColumn onClickLeft={openLeftRightComponent} />

                         </animated.div> : ""); 
                     }) : <LeftColumn onClickLeft={openLeftRightComponent} />} 
                </Col>
                <Col lg={12} xl={18} md={12} xs={isPhone ? 24 : 0} className="right-column">

                    {width <= 768 ? transitionRight((style, item) => {
                        return (item ?
                            <animated.div style={style}>
                                <RightColumn onClickRight={openLeftRightComponent}/>

                                
                            </animated.div> : "")
                    }) : <RightColumn onClickRight={openLeftRightComponent}/>}
                </Col>
            </Row>
        </div>
    </>);
}

export default Groups;
