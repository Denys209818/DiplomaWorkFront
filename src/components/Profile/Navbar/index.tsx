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
import { Link } from "react-router-dom";



const Navbar: React.FC = () => {

    const [isOpen, setOpen] = useState(false);

    const onSearchClick = () => 
    {
        if(!isOpen) 
        {
           setOpen(true);
        }
    }

    const onSearchMenuClick = () => 
    {
        setOpen(!isOpen);
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
                <li onClick={onSearchClick}>
                <SearchOutlinedIcon className="bx-search"/>
                    <input type="text" placeholder="Пошук..."/>
                        <span className="tooltip">Пошук</span>
                </li>

                <li>
                    <Link to="#">
                        <HomeOutlinedIcon/>
                        <span className="links_name">Головна сторінка</span>
                    </Link>
                    <span className="tooltip">Головна сторінка</span>
                </li>
                <li>
                    <Link to="#">
                       <ContactsOutlinedIcon/>
                        <span className="links_name">Публікації</span>
                    </Link>
                    <span className="tooltip">Публікації</span>
                </li>
                <li>
                    <Link to="#">
                        <GroupsOutlinedIcon/>
                        <span className="links_name">Групи</span>
                    </Link>
                    <span className="tooltip">Групи</span>
                </li>
                <li>
                    <Link to="#">
                        <AppRegistrationOutlinedIcon/>
                        <span className="links_name">Редагувати профіль</span>
                    </Link>
                    <span className="tooltip">Редагувати профіль</span>
                </li>
                <li>
                    <Link to="#">
                        <LogoutOutlinedIcon/>
                        <span className="links_name">Вийти</span>
                    </Link>
                    <span className="tooltip">Вийти</span>
                </li>
            </ul>
        </div>
    </>);
}

export default Navbar;