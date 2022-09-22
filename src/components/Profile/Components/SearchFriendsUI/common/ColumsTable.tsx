import { MessageOutlined } from "@mui/icons-material";
import { Avatar, Col, Row } from "antd";
import { ColumnsType } from "antd/lib/table";
import { Link } from "react-router-dom";
import { useFriendPageActions } from "../../../../../actions/friends/useFriendPageActions";
import axiosService from "../../../../../axios/axiosService";
import { defaultImage } from "../../../../../constants/defaultConsts";
import { typedSelector } from "../../../../../redux/services/useTypedSelector";
import { DataType } from "../../../SearchFriends/types";
import LinkComponent, { LinkComponentClaim, LinkComponentDelete } from "./LinkComponent";

export const columns: ColumnsType<DataType> = [
    {
        title: 'Користувач',
        dataIndex: 'info',
        key: 'info',
        width: '50%',
        render: ((value, record: DataType, index) => {

            return (
                <div className="column-for-user">

                
                <Row>
                    <Col md={3} xs={4} sm={4}>
                        <Avatar src={defaultImage + record.image} size="large" />
                    </Col>
                    <Col md={15} xs={14} sm={8}>
                        <span>{record.fullName}</span> <br/>
                        <span>{record.email}</span>
                    </Col>
                    <Col md={6} xs={6} sm={12}>
                    
                            {!record.isFriend &&
                                <LinkComponent {...record}/>
                            }
                            {record.isFriend && 
                                <LinkComponentDelete {...record}/>
                            }
                            <br />
                            <Link to={`/profile?user=${record.email}`} style={{
                                margin: 'auto'
                            }}>Переглянути профіль</Link>
                    </Col>
                </Row>
                </div>
                );
        }),
    },
];


export const columnsRequest: ColumnsType<DataType> = [
    {
        title: 'Користувач',
        dataIndex: 'info',
        key: 'info',
        width: '50%',
        render: ((value, record: DataType, index) => {

            return (
                <div className="column-for-user">

                
                <Row>
                    <Col md={3} xs={4} sm={4}>
                        <Avatar src={defaultImage + record.image} size="large" />
                    </Col>
                    <Col md={15} xs={14} sm={8}>
                        <span>{record.fullName}</span> <br/>
                        <span>{record.email}</span>
                    </Col>
                    <Col md={6} xs={6} sm={12}>
                    
                            {!record.isFriend &&
                                <LinkComponentClaim {...record}/>
                            }
                            {record.isFriend && 
                                <LinkComponentDelete {...record}/>
                            }
                            <br />
                            <Link to={`/profile?user=${record.email}`} style={{
                                margin: 'auto'
                            }}>Переглянути профіль</Link>
                    </Col>
                </Row>
                </div>
                );
        }),
    },
];