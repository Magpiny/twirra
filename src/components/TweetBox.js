import React from 'react';
import '../styles/tweetbox.css';
import { Avatar, Button } from '@material-ui/core';
import profile from '../Images/magpiny.jpg';

import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';
import GifIcon from '@material-ui/icons/Gif';
import PollIcon from '@material-ui/icons/Poll';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form >
                <div className="tweetboxInput">
                    <Avatar src={ profile } />
                    <input placeholder="What's happening?" type="text" /> 
                    <br />

                </div>
                {/* <input className="inputImage" placeholder="Optional::Post an image..." type="file" /> */}

            </form>

            <footer>
                <PermMediaOutlinedIcon fontSize="small" />
                <GifIcon fontSize="small" />
                <PollIcon fontSize="small" />
                <EmojiEmotionsOutlinedIcon fontSize="small" />
                <EventOutlinedIcon fontSize="small" />
                
                <Button>Tweet</Button>

            </footer>
            
        </div>
    )
}

export default TweetBox;
