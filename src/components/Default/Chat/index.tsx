       
import React, { RefObject, useContext, useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './../Chat/chatStyles.css';
import 'font-awesome/less/font-awesome.less';
import 'font-awesome/css/font-awesome.min.css';
import ContactCard from './CustomComponents/ContactCard';
import { typedSelector } from '../../../redux/services/useTypedSelector';
import { IGroup } from '../Groups/types/groupTypes';
import { defaultImage } from '../../../constants/defaultConsts';
import { IChatHeader } from './types/chatTypes';
import ChatMessage from './CustomComponents/ChatMessage';
import { useChatActions } from '../../../actions/chat/useChatActions';
import { ICreateMessage, ICreateUserMessage, IFriendMessageRedux, IMessageRedux, IUserFriend } from '../../../redux/reducers/types/messageTypes';
import {HubConnection, HubConnectionBuilder, LogLevel} from "@microsoft/signalr"
import { useBeforeunload } from 'react-beforeunload';
import axiosService from '../../../axios/axiosService';
import { Alert } from '@mui/material';
import ContactUserCard from './CustomComponents/ContactUserCard';
import { LoaderIs } from '../../../App';


const Chat : React.FC = () => {


    const groups = typedSelector(groups=> groups.groups) as Array<IGroup>;
    const user = typedSelector(user => user.user);
    const messages = typedSelector(messages => messages.messages)as Array<IMessageRedux>;


    const {AddMessage,SetMessages,SetMessagesWithoutRequest, CreateMessageFriend} = useChatActions();
    const [header, setHeader] = useState<IChatHeader>();
    const [activeGroup, setActiveGroup] = useState<IGroup>();

    const [userFriends, setUserFriends]= useState<Array<IUserFriend>>([]);
    const setFriends = async () => {
        setLoad(true);
        let data = (await axiosService.getFriends()).data;

        setUserFriends(data);
        setLoad(false);
    }


    const closeConnection =  async () => {
        setLoad(true);

        try {
            if (connection) {

                await connection.stop();
            }
        } catch (e) {
            console.log(e);
        }
        setLoad(false);

    }


    useEffect(() => {
        setFriends();

        return () => {
            closeConnection();
        };
    },[]);

    useBeforeunload((event) => {
        closeConnection();
    });

    useEffect(() => {
        if(messageRef && messageRef.current) {
            const {scrollHeight, clientHeight} = messageRef.current;
            (messageRef.current as HTMLDivElement).scrollTo({
                left:0, top: scrollHeight - clientHeight,
                behavior: 'smooth'
            });
        }
    }, [messages]);
    const messageRef = useRef() as RefObject<HTMLDivElement>;

    //Chat Group
    const [connection,setConnection] = useState<HubConnection>();

    const sendMessageRedux =async (messageAdd: ICreateMessage, image: string) => {
        setLoad(true);

        await AddMessage(messageAdd, image);
        setLoad(false);

    }

    const sendMessageFriendRedux = async (message: IFriendMessageRedux) => {
        setLoad(true);

        await CreateMessageFriend(message);
        setLoad(false);

    }
    
    const joinRoom =async (user: string,
         room: string) => {
        setLoad(true);

            if(connection){
                connection.stop();
            }

            try {
                
                const connection = new HubConnectionBuilder()
                .withUrl("https://localhost:7231/chat")
                .configureLogging(LogLevel.Information)
                
                .build();

                connection.on("ReceiveMessage", (user, message) => {
                    console.log("message received: " , message);
                });

                connection.on("ReadyMessage", (message: IMessageRedux, groupId: Number) => {
                    let messageAdd: ICreateMessage = {
                        groupId: groupId,
                        message: message.text,
                        dateCreated: new Date(message.date)
                    };
                    sendMessageRedux(messageAdd, message.image);
                        
                });

                connection.on("ReceiveUserMessage", (message: IFriendMessageRedux) => {
                    
                    sendMessageFriendRedux(message);
                });

                connection.onclose(e => {
                    let un = undefined;
                    setConnection(un);
                });

                await connection.start();
                await connection.invoke("JoinRoom", {user, room});
                setConnection(connection);
            }catch(e) {
                console.log(e);
            }
        setLoad(false);

    }

    const [errorAlert, setErrorAlert] = useState<boolean>(false);

    const sendMessage = async (message: IMessageRedux) => {
        setLoad(true);

        if(connection && activeGroup) {
            const res = (await axiosService.addMessage({
                groupId: activeGroup.id,
                message: message.text,
                dateCreated: message.date
            })).data;

            
            
            if(res.isSended) {

                let titleGroup = activeGroup.title;
                await connection.invoke("SendMessage", {...message, 
                    groupId: titleGroup,
                    id: activeGroup.id
                });
            }else {
                if (!errorAlert) {

                    setErrorAlert(true);
                    setTimeout(() => {
                        setErrorAlert(false);
                    }, 3000);
                }
            }
        }
        setLoad(false);

    }

    const onClickChatGroup = async (groupId: Number) => {
    
       
        let group: IGroup = groups.filter(x=> x.id == groupId)[0];
        setLoad(true);

        await setActiveGroup(group);
        await setHeader({
            title: group.title,
            image: defaultImage + "Group/" + group.image
        });

        await SetMessages(group.id);
        await joinRoom(user.firstName + " " + 
            user.secondName, group.title);
        setLoad(false);

    }


    const onSendMessage = async () => {
        let area = document.getElementById("txtMessage") as HTMLTextAreaElement;
        let content = area.value;
        area.value = '';
        setLoad(true);

        if(activeGroup) {
                await sendMessage({
                    text: content,
                    date: new Date(Date.now()),
                    image: user.image
                });
        }else {
            if(chatId){

                onSendMessageToUser(chatId, content);
            }
        }
        setLoad(false);

    }


    const {load, setLoad} = useContext(LoaderIs);
    //Chat User
    const [chatId, setChatId] = useState<string>();

    const onClickUser = async (chatId: string) => {
        setLoad(true);

        setActiveGroup(undefined);
        setChatId(chatId);
        let friendUser = chatId.substring(10);
        
        // UserChatId

        let res = (await axiosService.getFriendsMessages(Number.parseInt(friendUser))).data;

       

        let user = userFriends.filter(x => x.chatId == chatId)[0];

        setHeader({
            title: user.firstName + " " + user.secondName,
            image: defaultImage + user.image
        });

        let messagesArr: Array<IMessageRedux> = [];

        res.forEach((item) => {
            let message: IMessageRedux = {
                date: new Date(item.date),
                image: item.image,
                text: item.message,
                userId: item.userId,
                fullName: item.fullName
            }

            messagesArr.push(message);
        });

        
        await SetMessagesWithoutRequest(messagesArr);

        
            await joinRoom(user.firstName + " " + user.secondName, chatId);
               // onSendMessageToUser(chatId);
        setLoad(false);

    }

    const onSendMessageToUser = async (chatId: string, content: string) => {
        let userFriend = userFriends.filter(x => x.chatId == chatId)[0];

        let send: ICreateUserMessage = {
            dateCreated: new Date(Date.now()),
            message: content,
            chatId: chatId,
            fullName: user.firstName + " " + user.secondName,
            image: user.image,
            userId: user.id
        }
        setLoad(true);
        await axiosService.addFriendMessage({
            message: send.message,
            date: send.dateCreated,
            chatId: Number.parseInt(send.chatId.substring(10)),
            fullName: send.fullName,
            image: send.image
        });

        if(connection){
            await connection.invoke("SendMessageToUser", send);
        }
        setLoad(false);
    }

    /////////////////////

    //Search
    const [searchParam, setSearchParam] = useState<string>("");
    const onSearch = () => {
        let searchParam = (document.getElementById("search") as HTMLInputElement).value;

        setSearchParam(searchParam);
    }
        
    return (<>
        <div className='mainContainer'>
        <div className='coutainer-fluid h-100 retreat'>
            <div className='row justify-content-center h-100'>
                <div className='col-md-4 col-xl-3 chat'><div className='card mb-sm-3 mb-md-0 contacts_card'>
                    <div className='card-header'>
                        <div className='input-group'>
                            <input type="text" placeholder='Пошук...' id='search' name='' className='form-control search'/>
                            <div className='input-group-prepend' onClick={onSearch}>
                                <span className='input-group-text search_btn'><i className="fa fa-search" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className='card-body contacts_body'>
                        <ul className='contacts'>
                        <li className="divider">
                                    <h5 className='text-center
                                    text-light'>Групи</h5>
                                </li>
                                {groups && groups.filter(x => x.title.toLowerCase().includes(searchParam.toLowerCase()) ||
                                x.tags.toLowerCase().includes(searchParam.toLowerCase())).map((element, index) => {
                                    return (<li key={"groupChat" + index}>
                                        <ContactCard image={defaultImage + "Group/" + element.image}
                                            name={element.title} id={element.id} onClickChatGroup={onClickChatGroup} />
                                    </li>);
                                })}
                                <li className="divider">
                                    <h5 className='text-center
                                    text-light'>Друзі</h5>
                                </li>
                                {userFriends && userFriends.filter(x => (x.firstName + " " + x.secondName).toLowerCase()
                                .includes(searchParam.toLowerCase()) || x.email.toLowerCase()
                                .includes(searchParam.toLowerCase())).map((element, index) => {
                                    return (<li key={"userChat" + index.toString()}>
                                        <ContactUserCard
                                            title={element.firstName + " " +
                                                element.secondName}
                                            image={defaultImage + element.image}
                                            chatId={element.chatId}
                                            onClickUser={onClickUser}
                                        />
                                    </li>);
                                })}
                        
                        </ul>
                    </div>
                    <div className='card-footer'></div>
                </div></div>
                <div className='col-md-8 col-xl-6 chat'>
                   {errorAlert &&  <Alert
                    style={{
                        position: 'absolute',
                        zIndex:'1000',
                        left: '52vw'
                    }}
                    severity="error">Ліміт повідомлень вичерпано! (3 на добу)</Alert>}
                    <div className='card'>
                        {header && <>
                        <div className='card-header msg_head'>
                            <div className='d-flex bd-highlight'>
                                <div className='img_cont'>
                                        <img src={header.image} className='rounded-circle user_img' />
                                        
                                </div>
                                <div className='user_info'>
                                    <span>{header.title}</span>
                                </div>
                               
                            </div>
                        </div>
                       
                        <div className='card-body msg_card_body' ref={messageRef}>
                                    
                                {messages && messages.map((element, index) => {
                                    let date: Date = element.date;
                                    return (<ChatMessage
                                        key={"groupMessage" + index}
                                        text={element.text}
                                        date={`${date.getFullYear()}.${date.getMonth()}.${date.getDay()}  
                                        ${date.getHours()}:${date.getMinutes()}`}
                                        image={defaultImage + element.image}
                                        isLeft={element.userId ? element.userId != user.id : false}
                                    />);
                                })}

                        </div>
                        <div className='card-footer'>
                            <div className='input-group'>
                                <textarea name="" id='txtMessage' className='form-control type_msg' placeholder='Введіть своє повідомлення...'></textarea>
                                <div className='input-group-append'
                                onClick={onSendMessage}
                                >
                                    <span className='input-group-text send_btn'><i className="fa fa-location-arrow" aria-hidden="true"></i></span>
                                </div>
                            </div>
                        </div>
                       </> }
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>);
}

export default Chat;
