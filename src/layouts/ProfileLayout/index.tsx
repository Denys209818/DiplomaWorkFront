import { Outlet } from "react-router-dom";
import Navbar from "../../components/Profile/Navbar";
import 'antd/dist/antd.css';

const ProfileLayout: React.FC = () => 
{
    return (<>
        <Navbar/>
        <section className="home-section">
            <Outlet/>
        </section>
    </>);
}

export default ProfileLayout;