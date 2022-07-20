import { Col, Row ,Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "./styles/style.css";

interface IGroupLeftColumn {
    group_image: string,
    title: string,
    image: string,
    description: string

}

// "https://joeschmoe.io/api/v1/random"

const GroupLeftColumn: React.FC<IGroupLeftColumn> = ({group_image, title, image, description}) => {
    return (<div className="group-content-div">
        <Row>
            <Col span={6}>
                <div className="image-group">
                    <Avatar size={56} icon={<UserOutlined />} />
                </div>
            </Col>
            <Col span={18}>
                <div className="content-group">
                    <h4>{title}</h4>
                    <div className="content_under">
                        <img src={image}/>
                        <span>{description}</span>
                    </div>
                </div>
            </Col>
        </Row>
    </div>);
}

export default GroupLeftColumn;