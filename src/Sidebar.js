import React from 'react'
import "./Sidebar.css"
import SidebarOption from "./SidebarOption"

import TwitterIcon from '@material-ui/icons/Twitter';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, Button } from '@material-ui/core';

import { useStateValue } from './StateProvider';

function Sidebar() {

    const [{user}, dispatch] = useStateValue()

    const previousEmail = user?.email
    const username = previousEmail.replace('@gmail.com', '')

    return (
        <div className="sidebar">
            {/* Twitter  icon */}
            <TwitterIcon className="sidebar__twitterIcon"/>

            {/* Multiple Sidebar Options */}
            <SidebarOption active text="Home" Icon={HomeOutlinedIcon} />
            <SidebarOption text="Explore" Icon={SearchIcon} />
            <SidebarOption text="Notifications" Icon={NotificationsNoneOutlinedIcon} />
            <SidebarOption text="Message" Icon={MailOutlinedIcon} />
            <SidebarOption text="Bookmark" Icon={BookmarkBorderOutlinedIcon} />
            <SidebarOption text="List" Icon={ListAltOutlinedIcon} />
            <SidebarOption text="Profile" Icon={PermIdentityOutlinedIcon} />
            <SidebarOption text="More" Icon={MoreHorizIcon} />

            {/* Button */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>

            <div className="sidebar__bottomDetail">
                <Avatar src={user?.photoURL}/>
                <div className="sidebar__bottomDetail__names">
                    <h2>{user?.displayName}</h2>
                    <p>@{username}</p>
                </div>
                <ExpandMoreIcon className="expandMore"/>
            </div>

        </div>
    )
}

export default Sidebar
