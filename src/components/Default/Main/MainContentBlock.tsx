import { Button } from '@mui/material';
import { Col, Row } from 'antd';
import './styles/mainContentBlock.css';


const MainContentBlock: React.FC = () => {
    return (<div className='main-content-block'>
        
        <Row>
            <Col lg={{offset: 4, span: 16}}
            md={{offset: 4, span: 16}}
            sm={24}
            xs={24}>
                <h1>Чати</h1>
                <div className="main-content-block-inner">
                    <div className="textBlock">
                        <p>Приєднуйся до чатів та комунікуй з лідерами груп, до яких ти долучений. Кожен користувач має можливість лише на 4 повідомлення, якщо це не адмін. Це зроблено для того, щоб запобігти флуду. Адмін може додати Вас до списку людей, які мають більше повідомлень. 
                            Адмін може видати бан для користувача на певний час або на завжди, тому обов'язково звертайте увагу на правила спільноти.  </p>
                              <Button variant="outlined" className='btnChat'>Перейти до чатів</Button>
                    </div>
                    <img className='chat-image' src="/images/chatsBlock.jpg"  alt="" />
                </div>
            </Col>
        </Row>
    </div>);
}

export default MainContentBlock;