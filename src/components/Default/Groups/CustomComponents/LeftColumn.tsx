import { Col, Row } from 'antd';
import Search from 'antd/lib/input/Search';
import GroupLeftColumn from '../../Components/GroupLeftColumn';
import "./componentStyles/leftColumn.css";

interface ILeftColumn {
    onClickLeft: () => void
}

const LeftColumn : React.FC<ILeftColumn> = ({onClickLeft}) => {

    const onSearch = (value: string) => {
        console.log(value);
    }

    return (<div className="left-row">
    <div className="search">
        <Search placeholder="Пошук групи" onSearch={onSearch} enterButton />
    </div>


    <div className="groups-wrapper">
        <Row>
            <Col span={24} onClick={onClickLeft}>
                <GroupLeftColumn title="Група номер 1" description='It is a long established fact that a reader'
                    image="https://joeschmoe.io/api/v1/random" group_image='' />
            </Col>
            <Col span={24} onClick={onClickLeft}>
                <GroupLeftColumn title="Група номер 2" description='It is a long established fact that a reader'
                    image="https://joeschmoe.io/api/v1/random" group_image='' />
            </Col>
            <Col span={24} onClick={onClickLeft}>
                <GroupLeftColumn title="Група номер 3" description='It is a long established fact that a reader'
                    image="https://joeschmoe.io/api/v1/random" group_image='' />
            </Col>
            <Col span={24} onClick={onClickLeft}>
                <GroupLeftColumn title="Група номер 3" description='It is a long established fact that a reader'
                    image="https://joeschmoe.io/api/v1/random" group_image='' />
            </Col>
            <Col span={24} onClick={onClickLeft}>
                <GroupLeftColumn title="Група номер 3" description='It is a long established fact that a reader'
                    image="https://joeschmoe.io/api/v1/random" group_image='' />
            </Col>
            <Col span={24} onClick={onClickLeft}>
                <GroupLeftColumn title="Група номер 3" description='It is a long established fact that a reader'
                    image="https://joeschmoe.io/api/v1/random" group_image='' />
            </Col>
            <Col span={24} onClick={onClickLeft}>
                <GroupLeftColumn title="Група номер 3" description='It is a long established fact that a reader'
                    image="https://joeschmoe.io/api/v1/random" group_image='' />
            </Col>
            <Col span={24} onClick={onClickLeft}>
                <GroupLeftColumn title="Група номер 3" description='It is a long established fact that a reader'
                    image="https://joeschmoe.io/api/v1/random" group_image='' />
            </Col>
            <Col span={24} onClick={onClickLeft}>
                <GroupLeftColumn title="Група номер 3" description='It is a long established fact that a reader'
                    image="https://joeschmoe.io/api/v1/random" group_image='' />
            </Col>
            <Col span={24} onClick={onClickLeft}>
                <GroupLeftColumn title="Група номер 3" description='It is a long established fact that a reader'
                    image="https://joeschmoe.io/api/v1/random" group_image='' />
            </Col>
        </Row>
    </div>


</div>);
}

export default LeftColumn;