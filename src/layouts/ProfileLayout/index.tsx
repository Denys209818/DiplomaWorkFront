import { Link, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../components/Profile/Navbar";
import 'antd/dist/antd.css';
import './styles/LayoutStyle.css';
import { useCookies } from "react-cookie";
import { useActions } from "../../actions/auth/UseActions";
import { useContext, useEffect, useState } from "react";
import { typedSelector } from "../../redux/services/useTypedSelector";
import axiosService from "../../axios/axiosService";
import { LoaderIs } from "../../App";
import Loader from "../../components/Custom/Loader";

const ProfileLayout: React.FC = () => {
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
        
        if(token){
            authUser(token);
            return;
        }else {
            let item = document.getElementById("toAuth") as HTMLAnchorElement;
            item.click();
        }

        if(cookies.token) {
            try {
                localStorage.setItem("token", cookies.token);
                authUser(cookies.token);
            }catch(ex) {
                console.log(ex);
            }
        }
    }, []);
    return (<>
            {load && <Loader/>}

        <Navbar/>
        <section className="home-section">
            {state ? <Outlet/> : <></>}
        </section>

        
    </>);
}

export default ProfileLayout;