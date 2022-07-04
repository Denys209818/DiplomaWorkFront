import { Outlet } from "react-router-dom";
import MainFooter from "../../components/Default/Main/MainFooter";
import Navbar from "./Navbar";
import './styles/index.css';


const DefaultLayout: React.FC = () => 
{
    return (
        <>
            <Navbar/>
            <Outlet/>
            
            <MainFooter/>
        </>
    );
}

export default DefaultLayout;