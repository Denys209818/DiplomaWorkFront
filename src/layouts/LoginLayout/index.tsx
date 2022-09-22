import { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useActions } from "../../actions/auth/UseActions";
import { LoaderIs } from "../../App";
import axiosService from "../../axios/axiosService";
import Loader from "../../components/Custom/Loader";
import { typedSelector } from "../../redux/services/useTypedSelector";


const LoginLayout: React.FC = () => {
    const { AuthUserWithToken } = useActions();

    const [cookies, setCookie] = useCookies(['token']);
    const [state, setState] = useState<boolean>(false);

    const authUser = async (token: string) => {
        await AuthUserWithToken(token);
        setState(true);
        let link = document.getElementById("toProfile") as HTMLAnchorElement;
        link.click();
    }

    const {load, setLoad} = useContext(LoaderIs);


    const setLocalStorage = async () => {
        await localStorage.setItem("token", cookies.token);
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
                setLocalStorage();
                authUser(cookies.token);
            } catch (ex) {
                console.log(ex);
            }
        }

        
    }, []);
    return (<>
        {state ? <>
            {load && <Loader/>}
        
        <Outlet /> </>: <></>}


        <Link to={"/profile"} style={
            {
                display: 'none'
            }
        } target="_top" id="toProfile"/>
    </>);
}

export default LoginLayout;