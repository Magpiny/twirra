import React from 'react';
import '../styles/tweetbox.css';
import { Avatar, Button } from '@material-ui/core';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form >
                <div className="tweetboxInput">
                    <Avatar src=" " />
                    <input placeholder="What's happening?" type="text" /> 
                    <br />

                </div>
                <input className="inputImage" placeholder="Optional::Post an image..." type="file" />

            </form>

            <Button>Tweet</Button>
            
        </div>
    )
}

export default TweetBox;
