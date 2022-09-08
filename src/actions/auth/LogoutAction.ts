import { useCookies } from "react-cookie";




export const Logout = (removeCookie: (name: "token", options?:any) => void, isCookie: boolean) => {


    if(localStorage.getItem("token") != null) {
        localStorage.removeItem("token");
    }

    if(isCookie) {
        removeCookie("token");
    }
}