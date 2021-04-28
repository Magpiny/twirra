import React, { forwardRef } from 'react';
import '../styles/post.css';
import { Avatar } from '@material-ui/core';
import TimeAgo from 'javascript-time-ago';
import ReactTimeAgo from 'react-time-ago';
import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, RepeatOneOutlined, ShareOutlined, Twitter, VerifiedUserRounded } from '@material-ui/icons';

import en from 'javascript-time-ago/locale/en';
import be from 'javascript-time-ago/locale/en-BE';
TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(be)


const Post = forwardRef(({ avatar, image, displayName, username, verified,timestamp, text }, ref) => {
    
    return (
        <div className="post" ref={ ref }>
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

            <div className="postAvatar">
                <Avatar src={ avatar } alt="" />
            </div>

            <div className="postBody">

                <div className="postHeader">
                    <div className="postHeaderText">
                        
                        <h3>
                            { displayName }
                             { "  " }
                            <span className="verifiedUser">
                                { verified && <VerifiedUserRounded className="postBadge" /> }
                                @{ username }
                            </span>
                            { "  " }
                            <ReactTimeAgo date={ timestamp } locale="en-BE" timeStyle="twitter" />
                        </h3>
                    </div>

                    <div className="postDescription">
                        <p>{ text }</p>

                    </div>
                    
                </div>

                <img src={ image } alt="profile does not exist" />

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
});

export default Post;
