import { Col, Row } from 'antd';
import './../styles/aboutContent.css';
import AboutButton from './aboutButton';

const AboutContentBlock = () => 
{
    return (<div className="about-container">
        <Row>
            <Col lg={12} md={12} xs={24} sm={24}>
                <h1>Про платформу</h1>
                <p>Платформа призначена для координації руху волонтерів. Кожен користувач може долучатися до різних акцій та сприяти якнайшвидшій перемозі.
                    <br /> Наше завдання: <br />
                    1. Організувати якнайбільше людей<br />
                    2. Сприяти виникненню волонтерських челенджів<br />
                    3. Сприяти знайомству з новими людьми</p>
            </Col>
            <Col lg={12} md={12} xs={24} sm={24}>
                <div className="container-for-button">
                    <div className="container-for-button-inner">
                    <h2>Приєднуйся!</h2>
                    <AboutButton/>
                    </div>
                    
                </div>
            </Col>

        </Row>
        
    </div>);
}

export default AboutContentBlock;