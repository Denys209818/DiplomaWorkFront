import { Col, Row, Avatar } from "antd";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import CardGroup from '../../Components/CardGroup';
import { UserOutlined } from '@ant-design/icons';
import "./componentStyles/rightColumn.css";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import classNames from "classnames";
import { IPublication } from "../../../../redux/reducers/types/groupsTypes";
import { defaultImage } from "../../../../constants/defaultConsts";
import { IGroup } from "../types/groupTypes";
import { typedSelector } from "../../../../redux/services/useTypedSelector";


interface IRightColumn {
    onClickRight: (id?: number) => void,
    handleAvatarClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    group: IGroup | null,
}

const RightColumn: React.FC<IRightColumn> = ({ onClickRight, handleAvatarClick, group }) => {
    const posts = typedSelector(x => x.posts)as Array<IPublication>;

    return (<>
        <div className="navbar-of-group">
            {group != null &&
                <Row>
                    <Col md={0} lg={0} xs={{ span: 2 }}>
                        <div className="icon-div">
                            <KeyboardDoubleArrowLeftIcon onClick={() => onClickRight()} />
                        </div>
                    </Col>
                    <Col md={4} xs={4} xl={2}>
                        <b onClick={handleAvatarClick}>
                            {group.image && group.image.length > 0 ? <Avatar size="large"

                                  src={group ?
                                    group.image.length > 30 ? group.image : defaultImage + "Group/" + group.image
                                : defaultImage + "Group/default.jpg"}/> :

                                  <Avatar size="large"
                                  icon={<UserOutlined/>}/>}
                            
                        </b>
                    </Col>
                    <Col md={20} xs={18} xl={22}>
                        <div className="title-group">
                            <span>
                                <p>
                                    <span className='title-of-group'>
                                        {group.title}</span><br />
                                        
                                    <span className='subscribers'>{group.description}</span></p>

                            </span>
                        </div>
                    </Col>
                </Row>
            }
            {group == null && <Row>
                <Col span={24}>
                    <div className="title-group">
                        <span>
                            <p style={{
                                marginLeft:'2em',
                                marginTop:'15px',
                                fontSize: '18px'
                            }}>
                               

                              <b>Оберіть групу...</b>  
                                
                              </p>

                        </span>
                    </div>
                </Col>
            </Row>}
        </div>
        <div className="content-group-body">
            {posts != null &&
                <Row>
                    {posts.map((element, index) => {
                        return (<Col key={"publicationItem" + index.toString()}
                            lg={{ span: 12, offset: 6 }} xs={{ span: 18, offset: 3 }}>

                            <CardGroup
                            title={element.title} id={element.id}
                            isLikedObj={element.isLiked}
                                description={element.description}
                                images={element.images.map((element) => {
                                    return element;


                                })} />
                        </Col>);
                    })}

                    {/* <Col lg={{ span: 12, offset: 6 }} xs={{ span: 18, offset: 3 }}>
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
                    </Col> */}
                </Row>
            }
        </div>
    </>);
}

export default RightColumn;