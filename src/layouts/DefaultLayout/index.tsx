import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import './styles/index.css';


const DefaultLayout: React.FC = () => 
{
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
}

export default DefaultLayout;