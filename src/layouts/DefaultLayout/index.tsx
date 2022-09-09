
import { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Outlet, useNavigate } from "react-router-dom";
import { useActions } from "../../actions/auth/UseActions";
import { LoaderIs } from "../../App";
import axiosService from "../../axios/axiosService";
import Loader from "../../components/Custom/Loader";

import MainFooter from "../../components/Default/Main/MainFooter";
import Navbar from "./Navbar";
import './styles/index.css';



const DefaultLayout: React.FC = () => 
{

    const { AuthUserWithToken } = useActions();
    var navigate = useNavigate();

    const [cookies, setCookie] = useCookies(['token']);
    const [state, setState] = useState<boolean>(false);

    const authUser = async (token: string) => {
        await AuthUserWithToken(token);
        setState(true);
    }

    const {load, setLoad} = useContext(LoaderIs);


    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            authUser(token);
            return;
        }else {
            setState(true);
        }

        if (cookies.token) {
            try {
                localStorage.setItem("token", cookies.token);
                authUser(cookies.token);
            } catch (ex) {
                console.log(ex);
            }
        }

        
    }, []);

    return (<>
        {state ? <>
        {load && <Loader/>}
            <Navbar/>
            <Outlet/>
            
            <MainFooter/>
        </> : <></>}

     </>   
    );
}

export default DefaultLayout;