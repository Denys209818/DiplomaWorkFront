import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import axiosService from "../../axios/axiosService";
import MainFooter from "../../components/Default/Main/MainFooter";
import { typedSelector } from "../../redux/services/useTypedSelector";
import Navbar from "./Navbar";
import './styles/index.css';


const DefaultLayout: React.FC = () => 
{
    // const images = typedSelector(images => images.images);

    // useEffect(() => {
    //     images && images.length > 0 && images.forEach(async (val) => {
    //         (await axiosService.delPostImage({
    //             image: val
    //         }))
    //     });
    // }, []);

    return (
        <>
            <Navbar/>
            <Outlet/>
            
            <MainFooter/>
        </>
    );
}

export default DefaultLayout;