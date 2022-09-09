import "./../styles/navbar.css";
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import classNames from "classnames";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logout } from "../../../actions/auth/LogoutAction";
import { useCookies } from "react-cookie";
import ChatIcon from '@mui/icons-material/Chat';



const Navbar: React.FC = () => {

    const [isOpen, setOpen] = useState(false);

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const onLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
        let target = e.target;
        e.preventDefault();
        e.stopPropagation();

        
        
        Logout(removeCookie, cookies.token != null);
        let link = document.getElementById("onLogoutLink") as HTMLAnchorElement;
        link.click();
    }

    // const onSearchClick = () => 
    // {
    //     if(!isOpen) 
    //     {
    //        setOpen(true);
    //     }
    // }

    const onSearchMenuClick = () => 
    {
        setOpen(!isOpen);
    }

    const onCloseNavbar = () => {
        if(isOpen) {
            setOpen(false);
        }
    }

    return (<>
        <div className={classNames("sidebar", {"open": isOpen})}>
            <div className="logo-details">
                <div className={classNames({"d-none": !isOpen})}>
                    <HandshakeOutlinedIcon />
                </div>
                <div className="logo_name">Volonter.io</div>
                <DragHandleOutlinedIcon onClick={onSearchMenuClick}  id="btn"/>
            </div>
            <ul className="nav-list">
                

                <li onClick={onCloseNavbar}>
                    <Link to="/profile">
                        <HomeOutlinedIcon/>
                        <span className="links_name">Профіль</span>
                    </Link>
                    <span className="tooltip">Профіль</span>
                </li>
                <li onClick={onCloseNavbar}>
                    <Link to="/chat" target="_top">
                        <ChatIcon/>
                        <span className="links_name">Чат</span>
                    </Link>
                    <span className="tooltip">Чат</span>
                </li>
                <li onClick={onCloseNavbar}>
                    <Link to="/news" target="_top">
                       <ContactsOutlinedIcon/>
                        <span className="links_name">Публікації</span>
                    </Link>
                    <span className="tooltip">Публікації</span>
                </li>
                <li onClick={onCloseNavbar}>
                    <Link to="/groups" target="_top">
                        <GroupsOutlinedIcon/>
                        <span className="links_name">Групи</span>
                    </Link>
                    <span className="tooltip">Групи</span>
                </li>
                <li onClick={onCloseNavbar}>
                    <Link to="/profile/edit">
                        <AppRegistrationOutlinedIcon/>
                        <span className="links_name">Редагувати профіль</span>
                    </Link>
                    <span className="tooltip">Редагувати профіль</span>
                </li>
                <li onClick={onCloseNavbar}>
                    <Link to="/logout" onClick={onLogout}>
                        <LogoutOutlinedIcon/>
                        <span className="links_name">Вийти</span>
                    </Link>
                    <span className="tooltip">Вийти</span>
                </li>
            </ul>
        </div>

        <Link to="/" id="onLogoutLink" target="_top"/>
    </>);
}

export default Navbar;