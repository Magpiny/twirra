import React, { useEffect, useState } from 'react';
import '../styles/feed.css';
import Post from './Post';
import TweetBox from './TweetBox';
import FlipMove from 'react-flip-move';

import db from './firebase';



function Feed() {
    //hooks::useState() hook & useEffect() hook in action
    const [posts, setPosts] = useState([]);

    useEffect(() => (
        db.collection("posts").onSnapshot((snapshot) => (
            setPosts(snapshot.docs.map((doc) => doc.data()))
        ))

    ), []);
    console.log(db.collection("posts"));

    let time = new Date().getTime();

    return (
        <div className="feed">

            { /* Header */  }
            <div className="header">
                <h2>Home <span> &#10024; &#xfe0e;</span> </h2>

            </div>

            { /* TweetBox */  }
            <TweetBox />


            { /* Posts */  }

            <FlipMove>
                {
                    posts.map((post)=> (
                        <Post 
                        key = { post.text }
                        avatar      = { post.avatar }
                        displayName = { post.displayName } 
                        verified    = { post.verified }
                        username    = { post.username }
                        text        = { post.text }
                        image       = { post.image } 
                        timestamp   = { time }
                        />

                    ))
                }
            </FlipMove>

           {/*

               My test data ::static -> hardcoded test data  
            <Post displayName="Magpiny" image={ profile1 } verified timestamp={ new Date().getMinutes() } username="samuelwanjare" text />
            <Post displayName="Magpiny" image={ profile1 } verified timestamp={ new Date().getMinutes() } username="samuelwanjare" text />
            <Post displayName="Magpiny" image={ profile1 } verified timestamp={ new Date().getMinutes() } username="samuelwanjare" text />
            <Post displayName="Magpiny" image={ profile1 } verified timestamp={ new Date().getMinutes() } username="samuelwanjare" text />
                                timestamp   = { post.timestamp } 

           */}
        </div>
    )
}

export default Feed;


