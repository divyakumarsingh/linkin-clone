import React, { useEffect, useState } from 'react';
import "./Feed.scss";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputOption from '../InputOption/InputOption';
import Post from '../Post/Post';
import { db } from '../../firebase/firebase';
import firebase from "firebase";
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';
import FlipMove from "react-flip-move";

function Feed(props) {
    const [message,setMessage]=useState('');
    const [posts,setPosts]=useState([]);
    const user=useSelector(selectUser);

    const sendPost=(e)=>{
        e.preventDefault();
        if(message!==''){
            db.collection('posts')
            .add({
                name:user?.displayName,
                description:user?.email,
                photoURL: user?.photoURL||"",
                message,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            }); 
            setMessage("");
        }
    }

    useEffect(()=>{
        db.collection('posts')
        .orderBy('timestamp','desc')
        .onSnapshot((snapshot)=>{
            setPosts(snapshot.docs.map(doc=>(
                {
                    id:doc.id,
                    data:doc.data(),
                }
            )))
        })
    },[])   

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon/>
                    <form>
                        <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                        <button  onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#7885F9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C8C8CD"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
                </div>
            </div>
            <FlipMove>
                {
                    posts.map(({id,data:{name,description,message,photoURL}})=>
                        <Post
                            avatar={photoURL}
                            key={id}
                            name={name}
                            description={description}
                            message={message}
                        />     
                    )
                }
            </FlipMove>
        </div>
    );
}

export default Feed;