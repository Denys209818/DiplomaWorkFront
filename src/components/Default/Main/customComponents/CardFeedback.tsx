import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosService from '../../../../axios/axiosService';
import { typedSelector } from '../../../../redux/services/useTypedSelector';
import './../styles/cardFeedback.css';

interface ICardData {
    title: String,
    subscribers: String,
    description: String,
    image: string,
    id: number,
    isSubscribed: boolean
};

const CardFeedback: React.FC<ICardData> = ({title, subscribers, description, image, id, isSubscribed}:ICardData) => 
{
    const user = typedSelector(user => user.user);
    const onSubscribeGroup = async (e: any) => {
        let token = localStorage.getItem("token");
        if(token) {

            let btn = e.target as HTMLButtonElement;
            btn.classList.remove("card-button");
            btn.classList.add("card-button-disabled");
            btn.disabled = true;
            
            let res = await axiosService.subscribeOnGroup(id, user.id);
        }else {
            let link = document.getElementById("toAuth") as HTMLAnchorElement;
            link.click();

        }
    }

    return (<div className="Card">
        <div className="upper-container">
            <div className="image-container">
                <img className='card-image' src={image} alt="" height="100px" width="100px" />
            </div>
        </div>
        <div className="lower-container">
            <h3> {title}</h3>
            <h4> {subscribers}</h4>
            <p style={{
                textAlign: 'center'
            }}> {description}</p>
            <button className={classNames({"card-button": !isSubscribed},
             {'card-button-disabled':isSubscribed})} onClick={onSubscribeGroup} 
             disabled={isSubscribed}>Підписатися</button>
        </div>
        <Link id="toAuth" style={{
            display:'none'
        }} to="/auth/login" target="_top"/>
    </div>);
}

export default CardFeedback;