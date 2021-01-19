import { Avatar } from '@material-ui/core';
import React from 'react';
import InputOption from '../InputOption/InputOption';
import "./Post.scss";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

const Post=React.forwardRef(({avatar, name,description,message},ref)=>{
    return (
        <div className="post" ref={ref}>
            <div className="post_header">
                <Avatar src={avatar}/>
                <div className="post_info">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post_body">
                <p>{message}</p>
            </div>
            <div className="post_buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"/>
                <InputOption Icon={ChatBubbleOutlineIcon} title="Comment" color="gray"/>
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray"/>
                <InputOption Icon={SendOutlinedIcon} title="Send" color="gray"/>
            </div>
        </div>
    );
});

export default Post;