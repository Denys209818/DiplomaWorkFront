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
import { DoorBack } from "@mui/icons-material";

const iconRight = faChevronCircleRight as IconProp;
const iconLeft = faChevronCircleLeft as IconProp;


const feedbackSliderButton: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',

};


const FeedbackSlider: React.FC = () => {

    const translateX = 0;
    var divTranslate = 0;
    const count = 9;
    var currentItem = 0;

    const onLeftClick = () => {
        let htmlel = document.getElementsByClassName("swiper-button-prev")[0] as HTMLElement;
        htmlel.click();
    }

    const onRightClick = () => {
        let htmlel = document.getElementsByClassName("swiper-button-next")[0] as HTMLElement;
        htmlel.click();
    }

    return (<>
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
                    scrollbar={true}
                    navigation={true} 
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className="sliderEl">
                        <img src="https://cdn.magloft.com/github/swiper/images/page-001.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className="sliderEl">
                        <img src="https://cdn.magloft.com/github/swiper/images/page-002.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className="sliderEl">
                        <img src="https://cdn.magloft.com/github/swiper/images/page-003.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className="sliderEl">
                        <img src="https://cdn.magloft.com/github/swiper/images/page-004.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className="sliderEl">
                        <img src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className="sliderEl">
                        <img src="https://cdn.magloft.com/github/swiper/images/page-006.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className="sliderEl">
                        <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className="sliderEl">
                        <img src="https://cdn.magloft.com/github/swiper/images/page-008.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className="sliderEl">
                        <img src="https://cdn.magloft.com/github/swiper/images/page-009.jpg" />
                    </SwiperSlide>
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