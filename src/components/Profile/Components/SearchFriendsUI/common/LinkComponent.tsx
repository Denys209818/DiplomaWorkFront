import { Link } from "react-router-dom";
import { useFriendPageActions } from "../../../../../actions/friends/useFriendPageActions";
import axiosService from "../../../../../axios/axiosService";
import { typedSelector } from "../../../../../redux/services/useTypedSelector";
import { DataType } from "../../../SearchFriends/types";



const LinkComponent: React.FC<DataType> = (record: DataType) => {
    const { SetFriendsOnPage, ClearFriendsOnPage, AddFriendOnRequest } = useFriendPageActions();
    const data = typedSelector(x => x.friends);


    const onClickAddUser = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        let anchor = e.target as HTMLAnchorElement;
        let email = anchor.getAttribute("id");

        let res = (await axiosService.addFriendToUser(email!)).data;

        let newData = data.filter(x => x.email != email);

        let item = data.filter(x => x.email == email)[0];

        item.isFriend = true;
        await ClearFriendsOnPage();
        await SetFriendsOnPage(newData);


        await AddFriendOnRequest(item);

    }

    return (<Link to="/profile"
        onClick={onClickAddUser}
        id={record.email} style={{
            margin: 'auto'

        }}>Додати друга</Link>);
}

export default LinkComponent;


export const LinkComponentClaim: React.FC<DataType> = (record: DataType) => {
    const { SetFriendsOnRequest, ClearFriendsOnRequest, AddFriendOnPage } = useFriendPageActions();
    const data = typedSelector(x => x.friendRequests);


    const onClickAddUser = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        let anchor = e.target as HTMLAnchorElement;
        let email = anchor.getAttribute("id");
        let res = (await axiosService.claimUserFriend(email!)).data;

        let newData = data.filter(x => x.email != email);
        let item = data.filter(x => x.email == email)[0];

        let newItem: DataType = {
            ...item,
            isFriend: true,
        };
        await ClearFriendsOnRequest();
        await SetFriendsOnRequest(newData);

        let input = document.getElementsByClassName("ant-input-lg")[0] as HTMLInputElement;
        if (!input.value || input.value.length == 0) {
            await AddFriendOnPage(newItem);
        }
    }

    return (<Link to="/profile"
        onClick={onClickAddUser}
        id={record.email} style={{
            margin: 'auto'

        }}>Підтвердити запит</Link>);
}


export const LinkComponentDelete: React.FC<DataType> = (record: DataType) => {
    const { SetFriendsOnRequest, ClearFriendsOnRequest, AddFriendOnPage, ClearFriendsOnPage, SetFriendsOnPage } = useFriendPageActions();
    const friendsRequest = typedSelector(x => x.friendRequests);
    const friends = typedSelector(x => x.friends);


    const onClickAddUser = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        let anchor = e.target as HTMLAnchorElement;
        let email = anchor.getAttribute("id");

        let res = (await axiosService.deleteUserFriend(email!)).data;


        let friend = friends.filter(x => x.email == email)[0];
    
        if(friend != undefined) {
            let newFriends = friends.filter(x => x.email != email);
            ClearFriendsOnPage();
            SetFriendsOnPage(newFriends);
        }else {
            let newFriends = friendsRequest.filter(x => x.email != email);
            ClearFriendsOnRequest();
            SetFriendsOnRequest(newFriends);
        }
    }

    return (<Link to="/profile"
        onClick={onClickAddUser}
        id={record.email} style={{
            margin: 'auto'

        }}>Видалити друга</Link>);
}
