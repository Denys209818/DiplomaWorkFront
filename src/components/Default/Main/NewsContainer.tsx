import { Col, Row } from 'antd';
import {useState} from 'react';
import { useTransition, animated, useSpring } from 'react-spring';
import NewsCard, { ICardInfo } from './customComponents/NewsCard';
import './styles/newsContainer.css';


export interface ICardInfoFull 
{
    image: string,
    title:string,
    description: string,
    delay:number,
    x: number,
    y:number
}


const NewsContainer: React.FC = () => {

    const data : Array<ICardInfoFull> = [
        {
            image: "https://mui.com/static/images/cards/paella.jpg",
            title: "Shrimp and Chorizo Paella",
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
            delay: 200,
            x:0,
            y:0
        },
        {
            image: "https://mui.com/static/images/cards/contemplative-reptile.jpg" ,
            title: "Lizard",
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
            delay: 400,
            x:0,
            y:0  
        },
        {
            image: "https://mui.com/static/images/cards/paella.jpg" ,
            title: "Shrimp and Chorizo Paella",
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like." ,  
            delay: 600,
            x:0,
            y:0
        }
    ];

    const [isVisible, setVisible] = useState(false);

    const transition = useTransition(isVisible, {
        from:  {opacity: 0, x: -600, y: 300},
        enter: {opacity: 1, x: 0, y: 0},
        leave: {opacity: 0, x: -600, y: 300}
    });
   

    window.addEventListener('scroll', function() {
        var element = document.getElementsByClassName("news-container")[0];
        var position = element.getBoundingClientRect();
    
        if(position.top < window.innerHeight-200 && position.bottom >= 0) {
            setVisible(true);
        }
        else 
        {
            setVisible(false);
        }
    });
  return (<div className='news-container-out'>
  <h1 className='news-container-header'>Популярне</h1>
    <div className='news-container'>
        
        <div className="news-container-body">

              
              <Row justify="space-around">
                {data.map((itemMain, index) => {
                    return <Col key={"col" + index} lg={8} md={12} xs={24} sm={12}>
                    {transition((style, item) => {
                        return item ? <animated.div style={style} >
                            <NewsCard
                                image={itemMain.image}
                                title={itemMain.title}
                                description={itemMain.description}
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