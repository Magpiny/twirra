import React, { useState } from 'react';
import '../styles/tweetbox.css';
import { Avatar, Button } from '@material-ui/core';
import profile from '../Images/magpiny.jpg';
import db from '../components/firebase';

import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';
import GifIcon from '@material-ui/icons/Gif';
import PollIcon from '@material-ui/icons/Poll';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';

function TweetBox() {

    const [tweetMssg, setTweetMssg] = useState("");
    const [tweetImg, setTweetImg] = useState("");
     
    //Handle tweet input field change
    const onTweet = (e) => setTweetMssg(e.target.value);
    const onTweetImg = (e) => setTweetImg(e.target.value);

    let time = new Date().getTime();

    const sendTweet = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            avatar      : "https://robohash.org/973782599356ec178f2814619a0b7a70?set=set4&bgset=&size=400x400",
            displayName : "MagpinyBO" ,
            verified    : true,
            username    : "samuelwanjare",
            text        : tweetMssg,
            image       : tweetImg ,
            timestamp : time 
        });

        setTweetMssg("");
        setTweetImg("");
    };
    


    return (
        <div className="tweetBox">

            <form >
                <div className="tweetboxInput">
                    <Avatar src={ profile } />
                    <input onChange={ onTweet } value={ tweetMssg } placeholder="What's happening?" type="text" /> 

                </div>

                <input onChange={ onTweetImg } value={ tweetImg } className="inputImage" placeholder="Optional::Post an image..." type="text" />


                <div class="footer">
                <PermMediaOutlinedIcon fontSize="small" />
                <GifIcon fontSize="small" />
                <PollIcon fontSize="small" />
                <EmojiEmotionsOutlinedIcon fontSize="small" />
                <EventOutlinedIcon fontSize="small" />

                
               </div>
             &nbsp; <Button onClick={ sendTweet } type="submit">Tweet</Button>

                

            </form>

            
            
        </div>
    )
}

export default TweetBox;
