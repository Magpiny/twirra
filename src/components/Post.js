import React from 'react';
import '../styles/post.css';
import { Avatar } from '@material-ui/core';
import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, RepeatOneOutlined, ShareOutlined, VerifiedUserRounded } from '@material-ui/icons';
import profile from '../Images/magpiny.jpg';
import profile1 from '../Images/Logopit.png';

const Post = ({ image, displayName, username, verified, timestamp, text }) => {
    text ="I really enjoyed working on this app, Goodmorning folks I really enjoyed working on this app, Goodmorning folks"
    return (
        <div className="post">
            {/*
            A twitter post has the following features:
            Display picture,
            Display name/Nickname,
            Username stating with '@' symbol,
            Verified (mark)
            Timestamp
            Message = picture or text or GIF

            Reply button
            Like button
            Retweet button
            Share button

            More ...

            */}

            <div className="postBody">

                <div className="postHeader">
                    <div className="postHeaderText">
                        
                        <h3>
                            <Avatar src={ profile } alt="" className="postAvatar" />
                            { displayName }
                             { "  " }
                            <span className="verifiedUser">
                                <VerifiedUserRounded className="postBadge" />
                                { username }
                            </span>
                            { timestamp }
                        </h3>
                    </div>

                    <div className="postDescription">
                        <p>{ text }</p>

                    </div>
                    
                </div>
                <img src={ profile1 } alt="profile does not exist" />

                <div className="postFooter">
                    <ChatBubbleOutline fontSize="small" />
                    <RepeatOneOutlined fontSize="small" />
                    <FavoriteBorder fontSize="small" />
                  
                    <PublishOutlined fontSize="small" />
                    <ShareOutlined fontSize="small" />
                    

                </div>

                

            </div>
            
        </div>
    )
}

export default Post;
