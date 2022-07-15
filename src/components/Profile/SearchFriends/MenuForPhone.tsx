import { Menu, MenuItem } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface MenuPhone {
  anchorEl: null | HTMLElement,
  handleClose: () => void,
  linkToProfile: string,
  onDeleteFriendRemote: (key: string) => void
}

const MenuForPhone: React.FC<MenuPhone> = ({ anchorEl, handleClose, linkToProfile, onDeleteFriendRemote }) => {
    const navigate = useNavigate();

  const onProfile = () => {
    navigate(linkToProfile);
  }

  const onDeleteFriend = () => {
    // let el = document.querySelector('tr[data-row-key="1"]');
    // console.log(el);
    let el = anchorEl?.closest("tr[data-row-key]");
    onDeleteFriendRemote(el?.getAttribute("data-row-key")!);
  }

  const open = Boolean(anchorEl);
  return (<>
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem onClick={onProfile}>
        Профіль друга
      </MenuItem>
      <MenuItem onClick={onDeleteFriend}>
        Видалити друга 
      </MenuItem>
    </Menu>
  </>);
}

export default MenuForPhone;