import { useState } from "react";
import { Col, Input, Row } from "antd";
import SearchFriendsUI from "../Components/SearchFriendsUI";
import "./styles/style.css";
import { getSuggestedQuery } from "@testing-library/react";
import { DataType } from "./types";
import axiosService from "../../../axios/axiosService";
import { useFriendPageActions } from "../../../actions/friends/useFriendPageActions";
import { typedSelector } from "../../../redux/services/useTypedSelector";

const { Search } = Input;

const SearchFriends: React.FC = () => {
    const [tableName, setTableName] = useState<String>("Ваші друзі");


    const { SetFriendsOnPage } = useFriendPageActions();

    return (<>
        <div className="main-for-searchFriends">

            <Row id='createFriendsRow'>
                <Col span={24}>
                    <SearchFriendsUI />
                </Col>

            </Row>
        </div>
    </>);
}

export default SearchFriends;