import { Input, Tabs } from 'antd';
import { Table } from 'antd';
import React, { useState, useEffect } from 'react';
import { DataType } from '../../SearchFriends/types';
import './styles/style.css';
import { columns, columnsRequest } from './common/ColumsTable';
import axiosService from '../../../../axios/axiosService';
import { typedSelector } from '../../../../redux/services/useTypedSelector';
import { useFriendPageActions } from '../../../../actions/friends/useFriendPageActions';
import { IUserFriend } from '../../../../redux/reducers/types/messageTypes';
const { Search } = Input;


const SearchFriendsUI: React.FC = () => {

    const data = typedSelector(x => x.friends);

    const friendRequest = typedSelector(x => x.friendRequests);

    const { SetFriendsOnPage, SetFriendsOnRequest, ClearFriendsOnPage, ClearFriendsOnRequest } = useFriendPageActions();

    const initializeFriend = async (page: number) => {
            let data = (await axiosService.getFriends((page - 1).toString())).data;
            await ClearFriendsOnPage();
            await SetFriendsOnPage(data.map((element, index) => {
                return {
                    key: element.email + index,
                    fullName: element.firstName + " " + element.secondName,
                    email: element.email,
                    image: element.image,
                    isFriend: true,
                }
            }));

            let count = (await axiosService.getFriendsCount()).data;
            setTotal(count);
        
    }

    const initializeFriendRequest = async (page: number) => {
            
            let requests = (await axiosService.getFriendsRequest((page).toString())).data;
            await ClearFriendsOnRequest();
            await SetFriendsOnRequest(requests.map((element, index) => {
                return {
                    email: element.email,
                    fullName: element.firstName + " " + element.secondName,
                    image: element.image,
                    isFriend: element.isFriend ? element.isFriend : false,
                    key: element.email + index,

                };
            }));

            let countRequest = (await axiosService.getFriendsRequestCount()).data;
            
            setTotalRequest(countRequest);
        
    }

    const setDataUsers = async () => {
        await initializeFriend(1);
        await initializeFriendRequest(0);
    }
    const [value, setValue] = useState<string>("");
    const [totalCount, setTotal] = useState<number>(0);
    const [totalCountRequest, setTotalRequest] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const [pageRequest, setPageRequest] = useState<number>(1);
    const [pageSearch, setPageSearch] = useState<number>(1);

    useEffect(() => {
        setDataUsers();
    }, []);

    const onChangePage = async (page: number) => {
        setPage(page);
        if(value && value.length > 0){
            setPageSearch(page);
            initializeSearch((page-1).toString());
            
            return;}
        await initializeFriend(page);
    }

    const onChangeRequest = async (page: number) => {
        setPageRequest(page);
        await initializeFriendRequest(page-1);
    }

    const initializeSearch =async (page: string) => {
        let friends = (await axiosService.getSearchFriends(value, page)).data;
            await SetFriendsOnPage(friends.map((element, index) => {
                return {
                    email: element.email,
                    key: element.email + index,
                    fullName: element.fullName,
                    image: element.image,
                    isFriend: element.isFriend
                }
            }));
    }

    const onSearch = async (value: string) => {
        try {
        setValue(value);
        if (value && value.length > 0) {

            let friendsCount = (await axiosService.getSearchFriendsCount(value)).data;
               setTotal(friendsCount);
            
            let friends = (await axiosService.getSearchFriends(value, "0")).data;
            
            await SetFriendsOnPage(friends.map((element, index) => {
                return {
                    email: element.email,
                    key: element.email + index,
                    fullName: element.fullName,
                    image: element.image,
                    isFriend: element.isFriend
                }
            }));
            
            await setPage(1);

        } else {
            await initializeFriend(1);
            await setPage(1);
        }
        
    }catch{}
    }

    const [activeData, setActiveData] = useState<number>(-1);
    const [activeDataRequest, setActiveDataRequest] = useState<number>(-1);


    const setChangeData = async () => {
        if (value && value.length > 0) {
            let friendsCount = (await axiosService.getSearchFriendsCount(value)).data;
            setTotal(friendsCount);

            if(page != 1 && page > friendsCount) {
                setPage(friendsCount);
            }
            initializeSearch((page-1).toString());
        } 
        else {
            let count = (await axiosService.getFriendsCount()).data;
            await setTotal(count);
            if (page != 1 && page > count) {
                await setPage(count);
            }

            await initializeFriend(page);
        }
    }

    const setChangeDataRequest = async () => {
        let countRequest = (await axiosService.getFriendsRequestCount()).data;

        await setTotalRequest(countRequest);
        let req = pageRequest;
        if (pageRequest != 1 && pageRequest > countRequest) {
            
            setPageRequest(pageRequest-1);
        }

        if(req-1 == countRequest) {

            afterSetInitializeRequest(req-2);
        }else {
            afterSetInitializeRequest(req-1);
        }
    }

    const afterSetInitializeRequest = async (page: number) => {
        await initializeFriendRequest(page);
    }

    useEffect(() => {
        if(tabPage == 1) {

            if(activeData == -1) {
                setActiveData(data.length);
                return;
            }
            
            if(activeData != data.length) {
                setChangeData();
                setActiveData(-1);
            }
        }
        
    },[data]);

    useEffect(() => {
        if (tabPage == 2) {

            if (activeDataRequest == -1) {
                setActiveDataRequest(friendRequest.length);
                return;
            }

            if (activeDataRequest != friendRequest.length) {
                setChangeDataRequest();
                setActiveDataRequest(-1);
            }
        }
    },[friendRequest])


    const [tabPage, setTabPage] = useState<number>(1);
    return (<>

        <Search
            placeholder="Ведіть ім'я користувача"
            allowClear
            enterButton="Пошук"
            size="large"
            className="searchUser"
            onSearch={onSearch}
        />
        <div className="container-tab">
  
            <Tabs defaultActiveKey="1" centered onChange={async (item: string) => {
                let page: number = parseInt(item);
                let inputClose = document.getElementsByClassName("anticon-close-circle")[0] as HTMLSpanElement;
                inputClose.click();
                
                setPage(1);
                await onChangeRequest(1);
                setTabPage(page);

            }}>
                <Tabs.TabPane tab="Пошук друзів" key="1">
                    <Table
                        columns={columns}
                        dataSource={data}
                        bordered
                        pagination={{
                            pageSize: 6, showSizeChanger: false,
                            total: totalCount, onChange: onChangePage,
                            current: page
                        }}
                        locale={{ emptyText: 'Немає результатів!' }}
                    />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Надіслані запити" key="2">
                    <Table
                        columns={columnsRequest}
                        dataSource={friendRequest}
                        bordered
                        pagination={{
                            pageSize: 6, showSizeChanger: false,
                            total: totalCountRequest, onChange: onChangeRequest,
                            current: pageRequest
                        }}
                        locale={{ emptyText: 'Немає результатів!' }}
                    />
                </Tabs.TabPane>
            </Tabs>
        </div>

    </>);
}

export default SearchFriendsUI;