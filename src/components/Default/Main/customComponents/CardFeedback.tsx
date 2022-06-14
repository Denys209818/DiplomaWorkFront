import { useState } from 'react';
import './../styles/cardFeedback.css';

interface ICardData {
    name: String,
    year: String,
    description: String,
    image: string
};

const CardFeedback: React.FC<ICardData> = ({name, year, description, image}:ICardData) => 
{
    return (<div className="Card">
        <div className="upper-container">
            <div className="image-container">
                <img className='card-image' src={image} alt="" height="100px" width="100px" />
            </div>
        </div>
        <div className="lower-container">
            <h3> {name}</h3>
            <h4> {year}</h4>
            <p> {description}</p>
            <button className='card-button'>Профіль</button>
        </div>
    </div>);
}

export default CardFeedback;