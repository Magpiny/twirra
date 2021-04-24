import React from 'react';
import '../styles/widget.css';

import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import { SearchOutlined } from '@material-ui/icons';

function Widget() {
    return (
        <div className="widget">
            <div className="widget__input">
                <SearchOutlined className="widget__searchIcon" />
                <input type="text" placeholder="Search twitter" />
            </div>

            <div className="widgetContainer">
                <h2> What's happening </h2>
                <TwitterTweetEmbed tweetId={ "1384232630996979712" } />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="SamuelWanjare"
                    options = { { height: 400 }}
                 />

                <TwitterShareButton
                    url={'https://facebook.com/samuelwanjare'}
                    options={{ text: '#reactjs is awesome', via: 'SamuelWanjare' }}
                />

                
            </div>
        </div>
    )
}

export default Widget;
