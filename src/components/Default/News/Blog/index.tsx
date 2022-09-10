import './../styles/blogStyles.css';
import { useContext, useEffect, useState } from 'react';
import { AppBlockingRounded } from '@mui/icons-material';
import { Footer } from 'antd/lib/layout/layout';
import { Pagination } from 'antd';
import axiosService from '../../../../axios/axiosService';
import { IUserMainInfo } from '../../../Profile/types/IProfileTypes';
import PostContainer from '../Components/PostContainer';
import { LoaderIs } from '../../../../App';


const Blog: React.FC = () => {

    const [count, setCount] = useState<number>(0);
    const [data, setData] = useState<Array<IUserMainInfo>>([]);

    const setPostsOnPage =async (page: number) => {
        setLoad(true);
        let data = (await axiosService.getPopularPostsWithPage(page)).data;
        
        setData(data);
        setLoad(false);
    }

    const setCountItems = async () => {
        setLoad(true);
        let count = (await axiosService.getPostCount()).data;
        setCount(count);
        setLoad(false);
    }

    const [current, setCurrent ] = useState<number>(1);

    useEffect(() => {
        setPostsOnPage(0);
        setCurrent(1);
        setCountItems();
    },[]);

    const onChangeValue = (page: number) => {
        setPostsOnPage((page-1));

        setCurrent(page);
    }


    const {load, setLoad} = useContext(LoaderIs);
    return (<>

        <div className="post-filter container">
            <Pagination current={current} pageSize={6} total={count} showSizeChanger={false} onChange={onChangeValue} />

        </div>

        <section className="post coutainer">

            {data && data.map((element, index) => {
                return (<PostContainer key={"postContainerPage" + index} image={element.images[0]} groupImage={element.groupImage} 
                    title={element.title} groupName={element.groupName} date= {element.dateCreated}
                    description={element.description} likes={element.countLikes}
                />);
            })}
           
            {/* 
            <div className="post-box">
                <img src="images/Tech.jpg" alt="" className='post-img'></img>
                <h2 className="category">Tech</h2>
                <a href="post-page.html" className="post-title">
                    How To Create Best UX Design With Adobe XD
                </a>
                <span className="post-date">12 Feb 2022</span>
                <p className="post-decription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, velit optio quod, minima beatae dolorem corporis cupiditate, ducimus similique veritatis maiores nihil rerum. Voluptates eligendi architecto nam ad enim quasi?</p>
                <div className="profile">
                    <img src="images/design-header4.jpg" alt="" className ="profile-img"></img>
                    <span className="profile-name">User name</span>
                </div>
            </div>

            <div className="post-box">
                <img src="images/design-header2.jpg" alt="" className='post-img'></img>
                <h2 className="category">Design</h2>
                <a href="post-page.html" className="post-title">
                    How To Create Best UX Design With Adobe XD
                </a>
                <span className="post-date">12 Feb 2022</span>
                <p className="post-decription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, velit optio quod, minima beatae dolorem corporis cupiditate, ducimus similique veritatis maiores nihil rerum. Voluptates eligendi architecto nam ad enim quasi?</p>
                <div className="profile">
                    <img src="images/design-header4.jpg" alt="" className ="profile-img"></img>
                    <span className="profile-name">User name</span>
                </div>
            </div>

            <div className="post-box">
                <img src="images/design-header2.jpg" alt="" className='post-img'></img>
                <h2 className="category">Design</h2>
                <a href="post-page.html" className="post-title">
                    How To Create Best UX Design With Adobe XD
                </a>
                <span className="post-date">12 Feb 2022</span>
                <p className="post-decription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, velit optio quod, minima beatae dolorem corporis cupiditate, ducimus similique veritatis maiores nihil rerum. Voluptates eligendi architecto nam ad enim quasi?</p>
                <div className="profile">
                    <img src="images/design-header4.jpg" alt="" className ="profile-img"></img>
                    <span className="profile-name">User name</span>
                </div>
            </div>

            <div className="post-box">
                <img src="images/design-header2.jpg" alt="" className='post-img'></img>
                <h2 className="category">Design</h2>
                <a href="post-page.html" className="post-title">
                    How To Create Best UX Design With Adobe XD
                </a>
                <span className="post-date">12 Feb 2022</span>
                <p className="post-decription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, velit optio quod, minima beatae dolorem corporis cupiditate, ducimus similique veritatis maiores nihil rerum. Voluptates eligendi architecto nam ad enim quasi?</p>
                <div className="profile">
                    <img src="images/design-header4.jpg" alt="" className ="profile-img"></img>
                    <span className="profile-name">User name</span>
                </div>
            </div>

            <div className="post-box">
                <img src="images/design-header2.jpg" alt="" className='post-img'></img>
                <h2 className="category">Design</h2>
                <a href="post-page.html" className="post-title">
                    How To Create Best UX Design With Adobe XD
                </a>
                <span className="post-date">12 Feb 2022</span>
                <p className="post-decription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, velit optio quod, minima beatae dolorem corporis cupiditate, ducimus similique veritatis maiores nihil rerum. Voluptates eligendi architecto nam ad enim quasi?</p>
                <div className="profile">
                    <img src="images/design-header4.jpg" alt="" className ="profile-img"></img>
                    <span className="profile-name">User name</span>
                </div>
            </div>

            <div className="post-box">
                <img src="images/design-header2.jpg" alt="" className='post-img'></img>
                <h2 className="category">Design</h2>
                <a href="post-page.html" className="post-title">
                    How To Create Best UX Design With Adobe XD
                </a>
                <span className="post-date">12 Feb 2022</span>
                <p className="post-decription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, velit optio quod, minima beatae dolorem corporis cupiditate, ducimus similique veritatis maiores nihil rerum. Voluptates eligendi architecto nam ad enim quasi?</p>
                <div className="profile">
                    <img src="images/design-header4.jpg" alt="" className ="profile-img"></img>
                    <span className="profile-name">User name</span>
                </div>
            </div>

            <div className="post-box">
                <img src="images/design-header2.jpg" alt="" className='post-img'></img>
                <h2 className="category">Design</h2>
                <a href="post-page.html" className="post-title">
                    How To Create Best UX Design With Adobe XD
                </a>
                <span className="post-date">12 Feb 2022</span>
                <p className="post-decription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, velit optio quod, minima beatae dolorem corporis cupiditate, ducimus similique veritatis maiores nihil rerum. Voluptates eligendi architecto nam ad enim quasi?</p>
                <div className="profile">
                    <img src="images/design-header4.jpg" alt="" className ="profile-img"></img>
                    <span className="profile-name">User name</span>
                </div>
            </div> */}
        </section>
    </>)
}

export default Blog;