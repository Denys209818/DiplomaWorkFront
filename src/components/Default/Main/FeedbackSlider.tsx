import { Button, Col, Row, Space } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import './styles/feedbackSlider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import CardFeedback from "./customComponents/CardFeedback";
import { useEffect, useState } from "react";
import axiosService from "../../../axios/axiosService";
import { IGroupDataMain } from "../Groups/types/groupTypes";
import { defaultImage } from "../../../constants/defaultConsts";

const iconRight = faChevronCircleRight as IconProp;
const iconLeft = faChevronCircleLeft as IconProp;


const feedbackSliderButton: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',

};


const FeedbackSlider: React.FC = () => {

    const onLeftClick = () => {
        let htmlel = document.getElementsByClassName("swiper-button-prev")[0] as HTMLElement;
        htmlel.click();
    }

    const onRightClick = () => {
        let htmlel = document.getElementsByClassName("swiper-button-next")[0] as HTMLElement;
        htmlel.click();
    }

    const[data, setData] = useState<Array<IGroupDataMain>>([]);

    const getGroup = async () => {
        let data: Array<IGroupDataMain> = (await axiosService.getPopularGroups(5)).data;
        setData(data);
    }

    useEffect(() => {
        getGroup();
    },[]);

    return (<>
       <h1 className="nameOfSliderBlock">Популярні групи</h1>
        <Row justify="center" className="feedBackSliderMain">
        
            <Col md={4} className="arrow" style={feedbackSliderButton}>
                <Space align="center">
                    <Button type="primary" size="large" onClick={onLeftClick} shape="circle">
                        <FontAwesomeIcon icon={iconLeft} />
                    </Button>
                </Space>
            </Col>
            <Col md={16} xs={24} sm={24}>
                <Swiper
                    slidesPerView={1}
                    centeredSlides={false}
                    slidesPerGroupSkip={1}
                    grabCursor={true}
                    keyboard={{
                        enabled: true,
                    }}
                    breakpoints={{
                        769: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                    }}
                    navigation={true} 
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                    className="mySwiper"
                >

                    {data && data.map((item,index) => {
                        return (<SwiperSlide key={"swiperSlider" + index} className="sliderEl">

                            <CardFeedback title={item.title} subscribers={item.subscribersCount.toString()}
                                image={defaultImage + "Group/" +item.image}
                                description={item.description} id={item.id} 
                                isSubscribed={item.isSubscribed}/>
                        </SwiperSlide>);
                    })}
                    
                    {/* <SwiperSlide className="sliderEl">
                    <CardFeedback title="Albert Einstein" subscribers="107" 
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/250px-Elon_Musk_2015.jpg"
                            description="Lorem Ipsum is simply dummy 
        text of the printing and typesetting 
        industry. Lorem Ipsum has been the 
        industry's standard dummy text ever 
        since the 1500s, when an unknown 
        printer took a galley of type and 
        scrambled it to make a type specimen 
        book."/>
                    </SwiperSlide>
                    <SwiperSlide className="sliderEl">
                    <CardFeedback title="Albert Einstein" subscribers="107" 
                    image="https://chp-aws-media.s3-accelerate.amazonaws.com/2019/07/Boris-Johnson.jpg"
                            description="Lorem Ipsum is simply dummy 
        text of the printing and typesetting 
        industry. Lorem Ipsum has been the 
        industry's standard dummy text ever 
        since the 1500s, when an unknown 
        printer took a galley of type and 
        scrambled it to make a type specimen 
        book."/>
                    </SwiperSlide>
                    <SwiperSlide className="sliderEl">
                    <CardFeedback title="Albert Einstein" subscribers="107" 
                    image="https://cdn.footballua.tv/i/original/uploads/football-www/novosti/5c4d97e599d40_andrey_shevchenko.jpeg"
                            description="Lorem Ipsum is simply dummy 
        text of the printing and typesetting 
        industry. Lorem Ipsum has been the 
        industry's standard dummy text ever 
        since the 1500s, when an unknown 
        printer took a galley of type and 
        scrambled it to make a type specimen 
        book."/>
                    </SwiperSlide>
                    <SwiperSlide className="sliderEl">
                    <CardFeedback title="Albert Einstein" subscribers="107" 
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Volodymyr_Zelensky_Official_portrait.jpg/220px-Volodymyr_Zelensky_Official_portrait.jpg"
                            description="Lorem Ipsum is simply dummy 
        text of the printing and typesetting 
        industry. Lorem Ipsum has been the 
        industry's standard dummy text ever 
        since the 1500s, when an unknown 
        printer took a galley of type and 
        scrambled it to make a type specimen 
        book."/>
                    </SwiperSlide> */}
                </Swiper>
            </Col>
            <Col md={4} className="arrow" style={feedbackSliderButton}>
                
                <Space align="center">
                    <Button type="primary" onClick={onRightClick} size="large" shape="circle">
                        <FontAwesomeIcon icon={iconRight} />
                    </Button>
                </Space>

            </Col>
        </Row>
    </>);
}

export default FeedbackSlider;