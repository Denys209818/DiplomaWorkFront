
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Outlet, useNavigate } from "react-router-dom";
import { useActions } from "../../actions/auth/UseActions";
import axiosService from "../../axios/axiosService";
import MainFooter from "../../components/Default/Main/MainFooter";
import { typedSelector } from "../../redux/services/useTypedSelector";
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
            <Navbar/>
            <Outlet/>
            
            <MainFooter/>
        </> : <></>}
     </>   
    );
}

export default DefaultLayout;