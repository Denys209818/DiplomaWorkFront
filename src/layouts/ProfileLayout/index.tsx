import { Outlet } from "react-router-dom";
import Navbar from "../../components/Profile/Navbar";
import 'antd/dist/antd.css';

const ProfileLayout: React.FC = () => 
{
    return (<>
        <Navbar/>
        <Outlet/>
    </>);
}

export default ProfileLayout;