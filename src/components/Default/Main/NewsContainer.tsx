import { Col, Row } from 'antd';
import {useContext, useEffect, useState} from 'react';
import { useTransition, animated, useSpring } from 'react-spring';
import { LoaderIs } from '../../../App';
import axiosService from '../../../axios/axiosService';
import { IUserMainInfo } from '../../Profile/types/IProfileTypes';
import NewsCard, { ICardInfo } from './customComponents/NewsCard';
import './styles/newsContainer.css';


export interface ICardInfoFull 
{
    image: string,
    title:string,
    description: string,
    delay:number,
    x: number,
    y:number,
    postTitle: string,
    groupImage:string,
    likes: number
}


const NewsContainer: React.FC = () => {

    const [data, setData] = useState<Array<ICardInfoFull>>([]);
    const {load, setLoad} = useContext(LoaderIs);

    const setDataCards = async (items: number) => {
        setLoad(true);
        let data:Array<IUserMainInfo> = (await axiosService.getPopularPosts(items)).data;
        // console.log(data);
        let itemsCard : Array<ICardInfoFull> = [];
        for(let i = 0; i < data.length; i++) {
            let item:ICardInfoFull = {
                x: 0,
                y: 0,
                delay: 200 * (i+1),
                title: data[i].groupName,
                description: data[i].description,
                image: data[i].images[0],
                postTitle: data[i].title,
                groupImage: data[i].groupImage,
                likes: data[i].countLikes
                
            }

            itemsCard.push(item);
        }

        setLoad(false);
        setData(itemsCard);
    }

    useEffect(() => {
        setDataCards(3);
    },[]);

    const [isVisible, setVisible] = useState(false);

    const transition = useTransition(isVisible, {
        from:  {opacity: 0, x: -600, y: 300},
        enter: {opacity: 1, x: 0, y: 0},
        leave: {opacity: 0, x: -600, y: 300}
    });
   

    window.addEventListener('scroll', function() {
        var element = document.getElementsByClassName("news-container")[0];
        var position = element.getBoundingClientRect();
    
        if(position.top < window.innerHeight-200) {
            setVisible(true);
        }
        else 
        {
            setVisible(false);
        }
    });

  

  return (<div className='news-container-out'>
    <div className='news-container'>
        
        <div className="news-container-body">

              
              <Row justify="space-around">
                {data && data.length > 0 && data.map((itemMain, index) => {
                    return <Col key={"col" + index} lg={8} md={12} xs={24} sm={12}>
                    {transition((style, item) => {
                        return item ? <animated.div style={style} >
                            <NewsCard
                                image={itemMain.image}
                                title={itemMain.title}
                                description={itemMain.description}
                                postTitle={itemMain.postTitle}
                                groupImage={itemMain.groupImage}
                                likes={itemMain.likes}
                            />
                        </animated.div> : "";
                    })}
                  </Col>
                })}
                  
              </Row>
            
        </div>
        

    </div>
    
        
        
    </div>
  );
}


export default NewsContainer;