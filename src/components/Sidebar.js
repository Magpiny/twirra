import React from 'react';
import '../styles/sidebar.css';
import SidebarOption from './SidebarOption';

// My icons from material-ui
// import TwitterIcon from '@material-ui/icons/Twitter';  ::replaced with custom png image icon
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import { Button } from '@material-ui/core';
import TwirraIcon from '../Images/twirra-min.png';

function Sidebar() {
    return (

        <div className="sidebar">


             {/* <TwitterIcon className="twirraIcon"  /> works */}
             {/* <TwirraIcon className="twirraIcon"  /> does not work */}
         <img src={ TwirraIcon } alt="twirra-icon" className="twirraIcon" />
             
            
            
            <SidebarOption active Icon = { HomeIcon } text = "Home" />
            <SidebarOption Icon = { ExploreIcon } text = "Explore" />
            <SidebarOption Icon = { NotificationsIcon } text = "Notifications" />
            <SidebarOption Icon = { MailOutlineIcon } text = "Messages" />
            <SidebarOption Icon = { BookmarkBorderIcon } text = "Bookmarks" />
            <SidebarOption Icon = { ListAltRoundedIcon } text = "Lists" />
            <SidebarOption Icon = { PersonOutlineRoundedIcon } text = "Profile" />
            <SidebarOption Icon = { MoreHorizRoundedIcon } text = "More" />

            <Button variant="outlined" className="tweetButton">Tweet</Button>
    
        </div>
    )
}

export default Sidebar;
