import { Col, Row, Avatar } from "antd";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import CardGroup from '../../Components/CardGroup';
import { UserOutlined } from '@ant-design/icons';
import "./componentStyles/rightColumn.css";


interface IRightColumn {
    onClickRight: () => void
}

const RightColumn: React.FC<IRightColumn> = ({onClickRight}) => {
    return (<>
        <div className="navbar-of-group">
            <Row>
                <Col md={0} lg={0} xs={{ span: 2 }}>
                    <div className="icon-div">
                        <KeyboardDoubleArrowLeftIcon onClick={onClickRight} />
                    </div>
                </Col>
                <Col md={4} xs={4} xl={2}>

                    <Avatar size="large" icon={<UserOutlined />} />
                </Col>
                <Col md={20} xs={18} xl={22}>
                    <div className="title-group">
                        <span>
                            <p>
                                <span className='title-of-group'>
                                    Група номер 1</span><br />
                                <span className='subscribers'>500 Підписників</span></p>

                        </span>
                    </div>
                </Col>
            </Row>
        </div>

        <div className="content-group-body">
            <Row>
                <Col lg={{ span: 12, offset: 6 }} xs={{ span: 18, offset: 3 }}>
                    <CardGroup title='Пост 1'
                        description='Lizards are a widespread group of squamate reptiles, with over 6,000 species, 
                                ranging across all continents except Antarctica'
                        images={[
                            'https://mui.com/static/images/cards/contemplative-reptile.jpg',
                            'https://learnenglish.britishcouncil.org/sites/podcasts/files/online-level-test.jpeg',
                            'https://learnenglish.britishcouncil.org/sites/podcasts/files/2021-09/GettyImages-1072206958_2.jpg',
                            'https://www.testim.io/wp-content/uploads/2019/11/What-Is-Test-Automation.jpg',
                            'https://iq-global-test.com/upload/media/default/0011/01/5934817f827d37cbc08df9a4535eeb16a8419f1f.jpeg'
                        ]} />
                </Col>
                {/* <Col offset={6} span={12}>
                                <CardGroup/>
                            </Col>
                            <Col offset={6} span={12}>
                                <CardGroup/>
                            </Col> */}
                <Col lg={{ span: 12, offset: 6 }} xs={{ span: 18, offset: 3 }}>
                    <CardGroup title='Пост 2'
                        description='Lizards are a widespread group of squamate reptiles, with over 6,000 species, 
                                ranging across all continents except Antarctica'
                        images={[
                            'https://images.pexels.com/photos/11291271/pexels-photo-11291271.jpeg',
                            'https://images.pexels.com/photos/6143369/pexels-photo-6143369.jpeg',
                            'https://images.pexels.com/photos/11291117/pexels-photo-11291117.jpeg',
                            'https://images.pexels.com/photos/338023/pexels-photo-338023.jpeg',
                            'https://images.pexels.com/photos/11291157/pexels-photo-11291157.jpeg'
                        ]} />
                </Col>
            </Row>
        </div>
    </>);
}

export default RightColumn;