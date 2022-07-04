import './../styles/blogStyles.css';
import { useState } from 'react';
import { AppBlockingRounded } from '@mui/icons-material';
import { Footer } from 'antd/lib/layout/layout';


const Blog: React.FC = () => {
    return (<>

        <div className="post-filter container">
            <span className="filter-item active-filter" data-filter='all'>All</span>
            <span className="filter-item" data-filter='design'>Design</span>
            <span className="filter-item" data-filter='tech'>Tech</span>
            <span className="filter-item" data-filter='mobile'>Mobile</span>
        </div>

        <section className="post coutainer">
            <div className="post-box">
                <img src="images/mobile1.jpg" alt="" className='post-img'></img>
                <h2 className="category">Mobile</h2>
                <a href="post-page.html" className="post-title">
                    How To Create Best UX Design With Adobe XD
                </a>
                <span className="post-date">12 Feb 2022</span>
                <p className="post-decription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, velit optio quod, minima beatae dolorem corporis cupiditate, ducimus similique veritatis maiores nihil rerum. Voluptates eligendi architecto nam ad enim quasi?</p>
                <div className="profile">
                    <img src="images/design.jpg" alt="" className ="profile-img"></img>
                    <span className="profile-name">User name</span>
                </div>
            </div>

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
            </div>
        </section>
    </>)
}

export default Blog;