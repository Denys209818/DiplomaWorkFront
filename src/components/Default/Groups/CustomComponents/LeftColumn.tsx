import { Col, Row } from 'antd';
import Search from 'antd/lib/input/Search';
import { useEffect, useState } from 'react';
import axiosService from '../../../../axios/axiosService';
import { defaultImage } from '../../../../constants/defaultConsts';
import { typedSelector } from '../../../../redux/services/useTypedSelector';
import GroupLeftColumn from '../../Components/GroupLeftColumn';
import { IGroup } from '../types/groupTypes';
import "./componentStyles/leftColumn.css";

interface ILeftColumn {
    onClickLeft: (id: number) => void,
    groups: Array<IGroup>,

}

const LeftColumn : React.FC<ILeftColumn> = ({onClickLeft, groups}) => {

    const onSearch = (value: string) => {
        console.log(value);
    } 
    
    

    return (<div className="left-row">
    <div className="search">
        <Search placeholder="Пошук групи" onSearch={onSearch} enterButton />
    </div>


    <div className="groups-wrapper">
        <Row>
            {groups && groups.map((element, index) => {
                return (<Col key={"groupsitem" + index} id={element.id.toString()} span={24} onClick={() => {
                    onClickLeft(element.id);
                }}>
                    <GroupLeftColumn  title={element.title} description={element.description}
                        image={defaultImage + "Group/" + element.image} group_image={defaultImage +"Group/" + element.image} />
                </Col>);
            })}
            
        </Row>
    </div>


</div>);
}

export default LeftColumn;