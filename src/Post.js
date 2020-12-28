import { Avatar, IconButton } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Post.css'

import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const Post = forwardRef(({
    displayName,
    userName,
    verified,
    text,
    image,
    avatar
}, ref) => {
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>

            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>{displayName}</h3>
                        <span className="post__headerSpecial">
                            {verified && <img src="https://img.icons8.com/color/20/000000/verified-badge.png"/>}
                            @{userName}
                        </span>
                        
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                {image && <div className="post__image">
                    <img className="post__imageURL" src={image} alt=""/>
                </div>}
                
                
                <div className="post__footer">
                    <IconButton>
                        <ChatBubbleOutlineIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <RepeatIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <FavoriteBorderIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <PublishIcon fontSize="small" />
                    </IconButton>
                </div>
            </div>
        </div>
    )
})

export default Post
