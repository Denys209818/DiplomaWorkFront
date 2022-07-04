import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import React from "react";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { IFriendDataArray } from './types/friendsCardInterfaces';
import { Link } from 'react-router-dom';

const FriendsCard: React.FC<IFriendDataArray> = ({ friends }) => {

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));

    return (<>
        <div className="friends-chats">
            <h3 className="friends-chats-title">Друзі</h3>
            <List className="friends-list" sx={{ bgcolor: 'background.paper', borderRadius: '10px' }}>

                {friends.map((element, index) => {
                    return (<div key={"listItem " + index.toString()} >
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                {element.isOnline ? <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant="dot"
                                >

                                    <Avatar alt="Remy Sharp" src={element.image} />
                                </StyledBadge> : <Avatar alt="Remy Sharp" src={element.image} />
                                }
                                

                                    
                                
                            </ListItemAvatar>
                            <ListItemText
                                primary={ element.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                           
                                        </Typography>
                                        {element.description}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </div>);
                })}
                <ListItem>
                        <Link className='link-in-block' to="/searchFriend">Пошук друзів</Link>
                </ListItem>
            </List>
        </div>
    </>);
}

export default FriendsCard;