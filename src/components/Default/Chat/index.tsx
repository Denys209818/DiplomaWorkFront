import React, {} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './../Chat/chatStyles.css';
import 'font-awesome/less/font-awesome.less';
import 'font-awesome/css/font-awesome.min.css';

const Chat : React.FC = () => {

    return (<div className='mainContainer'>
        <div className='coutainer-fluid h-100 retreat'>
            <div className='row justify-content-center h-100'>
                <div className='col-md-4 col-xl-3 chat'><div className='card mb-sm-3 mb-md-0 contacts_card'>
                    <div className='card-header'>
                        <div className='input-group'>
                            <input type="text" placeholder='Search...' name='' className='form-control search'/>
                            <div className='input-group-prepend'>
                                <span className='input-group-text search_btn'><i className="fa fa-search" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className='card-body contacts_body'>
                        <ul className='contacts'>
                            <li className='active'>
                                <div className='d-flex bd-highlight'>
                                    <div className='img_cont'>
                                        <img src="https://p2.piqsels.com/preview/896/113/162/man-guy-male-denim.jpg" className='rounded-circle user_img' />
                                        <span className='online_icon'></span>
                                    </div>
                                    <div className='user_info'>
                                        <span>Khalid Charif</span>
                                        <p>Online</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='d-flex bd-highlight'>
                                    <div className='img_cont'>
                                        <img src="https://p2.piqsels.com/preview/972/732/854/adult-attractive-beautiful-beauty.jpg" className='rounded-circle user_img' />
                                        <span className='online_icon offline'></span>
                                    </div>
                                    <div className='user_info'>
                                        <span>Chaymae Naim</span>
                                        <p>Left 7 mins ago</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='d-flex bd-highlight'>
                                    <div className='img_cont'>
                                        <img src="https://p2.piqsels.com/preview/888/406/372/adult-attractive-beard-casual.jpg" className='rounded-circle user_img' />
                                        <span className='online_icon'></span>
                                    </div>
                                    <div className='user_info'>
                                        <span>Sami Rafi</span>
                                        <p>Online</p>
                                    </div>
                                </div>                                
                            </li>
                            <li>
                                <div className='d-flex bd-highlight'>
                                    <div className='img_cont'>
                                        <img src="https://p2.piqsels.com/preview/247/49/181/adult-attractive-blue-casual.jpg" className='rounded-circle user_img' />
                                        <span className='online_icon offline'></span>
                                    </div>
                                    <div className='user_info'>
                                        <span>Hassan Agmir</span>
                                        <p>Left 30 min ago</p>
                                    </div>
                                </div>                                
                            </li>
                            <li>
                                <div className='d-flex bd-highlight'>
                                    <div className='img_cont'>
                                        <img src="https://p2.piqsels.com/preview/157/690/440/blue-eyes-casual-eyes-face.jpg" className='rounded-circle user_img' />
                                        <span className='online_icon offline'></span>
                                    </div>
                                    <div className='user_info'>
                                        <span>Abdou Chatabi</span>
                                        <p>Left 50 min ago</p>
                                    </div>
                                </div>                                
                            </li>
                        </ul>
                    </div>
                    <div className='card-footer'></div>
                </div></div>
                <div className='col-md-8 col-xl-6 chat'>
                    <div className='card'>
                        <div className='card-header msg_head'>
                            <div className='d-flex bd-highlight'>
                                <div className='img_cont'>
                                        <img src="https://p2.piqsels.com/preview/896/113/162/man-guy-male-denim.jpg" className='rounded-circle user_img' />
                                        <span className='online_icon'></span>
                                </div>
                                <div className='user_info'>
                                    <span>Khalid Charif</span>
                                    <p>1767 Messages</p>
                                </div>
                                <div className='video_cam'>
                                    <span><i className="fa fa-video-camera" aria-hidden="true"></i></span>
                                    <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                                </div>
                            </div>
                            <span id="action_menu_btn"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></span>
                            <div className='action_menu'>
                                <ul>
                                    <li><i className="fa fa-user-circle-o" aria-hidden="true"></i> View profile</li>
                                    <li><i className="fa fa-users" aria-hidden="true"></i> Add to close friengs</li>
                                    <li><i className="fa fa-plus" aria-hidden="true"></i>Add to group</li>
                                    <li><i className="fa fa-ban" aria-hidden="true"></i> Block</li>
                                </ul>
                            </div>
                        </div>
                        <div className='card-body msg_card_body'>
                            <div className='d-flex justify-content-start mb-4'>
                                <div className='img_cont_msg'>
                                    <img src="https://p2.piqsels.com/preview/896/113/162/man-guy-male-denim.jpg" className='rounded-circle user_img_msg' />
                                </div>
                                <div className='msg_cotainer'>
                                    Hi,how are tou samim?
                                    <span className='msg_time'>8:40 AM, Today</span>
                                </div>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                                <div className='msg_cotainer_send'>
                                    Hi Khalid i am good tnx how about you?
                                    <span className='msg_time_send'>8:55 AM, Today</span>
                                </div>
                                <div className='img_cont_msg'>
                                    <img src="https://p2.piqsels.com/preview/247/49/181/adult-attractive-blue-casual.jpg" className='rounded-circle user_img_msg' />
                                </div>
                            </div>

                            <div className='d-flex justify-content-start mb-4'>
                                <div className='img_cont_msg'>
                                    <img src="https://p2.piqsels.com/preview/896/113/162/man-guy-male-denim.jpg" className='rounded-circle user_img_msg' />
                                </div>
                                <div className='msg_cotainer'>
                                    I am good too, thank you for your chat template
                                    <span className='msg_time'>9:00 AM, Today</span>
                                </div>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                                <div className='msg_cotainer_send'>
                                    You are welcome
                                    <span className='msg_time_send'>9:05 AM, Today</span>
                                </div>
                                <div className='img_cont_msg'>
                                    <img src="https://p2.piqsels.com/preview/247/49/181/adult-attractive-blue-casual.jpg" className='rounded-circle user_img_msg' />
                                </div>
                            </div>

                            <div className='d-flex justify-content-start mb-4'>
                                <div className='img_cont_msg'>
                                    <img src="https://p2.piqsels.com/preview/896/113/162/man-guy-male-denim.jpg" className='rounded-circle user_img_msg' />
                                </div>
                                <div className='msg_cotainer'>
                                    I am looking for your next temlates
                                    <span className='msg_time'>9:07 AM, Today</span>
                                </div>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                                <div className='msg_cotainer_send'>
                                    Ok, thank you have a good day
                                    <span className='msg_time_send'>9:10 AM, Today</span>
                                </div>
                                <div className='img_cont_msg'>
                                    <img src="https://p2.piqsels.com/preview/247/49/181/adult-attractive-blue-casual.jpg" className='rounded-circle user_img_msg' />
                                </div>
                            </div>

                            <div className='d-flex justify-content-start mb-4'>
                                <div className='img_cont_msg'>
                                    <img src="https://p2.piqsels.com/preview/896/113/162/man-guy-male-denim.jpg" className='rounded-circle user_img_msg' />
                                </div>
                                <div className='msg_cotainer'>
                                    Bye, see you
                                    <span className='msg_time'>9:12 AM, Today</span>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <div className='input-group'>
                                <div className='input-group-append'>
                                    <span className='input-group-text attach_btn'><i className="fa fa-paperclip" aria-hidden="true"></i></span>
                                </div>
                                <textarea name="" className='form-control type_msg' placeholder='Type your message...'></textarea>
                                <div className='input-group-append'>
                                    <span className='input-group-text send_btn'><i className="fa fa-location-arrow" aria-hidden="true"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Chat;