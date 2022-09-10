import { useState } from "react";
import { Col, Input, Row } from "antd";
import SearchFriendsUI from "../Components/SearchFriendsUI";
import "./styles/style.css";
import { getSuggestedQuery } from "@testing-library/react";

const { Search } = Input;

const SearchFriends: React.FC = () => {
    const [tableName, setTableName] = useState<String>("Ваші друзі");
    const onSearch = (value: string) => {
        value.length > 0 ? setTableName("Знайдені друзі") : setTableName("Ваші друзі");
        let searchParam = (document.getElementById("search") as HTMLInputElement).name;

        setTableName(searchParam);
    }
    return (<>
        <div className="main-for-searchFriends">

            <Row id='createFriendsRow'>
                <Col span={24}>
                    
                    <Search
                        placeholder="Ведіть ім'я користувача"
                        allowClear
                        enterButton="Пошук"
                        size="large"
                        className="searchUser"
                        onSearch={onSearch}
                    />
                    <h1 className='friendsText'>{tableName}</h1>
                    <SearchFriendsUI />
                </Col>

            </Row>
        </div>
    </>);
}

export default SearchFriends;