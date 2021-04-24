import React from 'react';
import '../styles/feed.css';
import Post from './Post';
import TweetBox from './TweetBox';



function Feed() {
    return (
        <div className="feed">

            { /* Header */  }
            <div className="header">
                <h2>Home</h2>
                <span> &#10024; </span>

            </div>

            { /* TweetBox */  }
            <TweetBox />

            { /* Posts */  }
            <Post displayName="Magpiny" timestamp={ new Date().getMinutes() } username="@samuelwanjare" text />
            
        </div>
    )
}

export default Feed
