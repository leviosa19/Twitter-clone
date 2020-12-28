import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import db from './firebase'
import './TweetBox.css'
import firebase from 'firebase'

import { useStateValue } from './StateProvider';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")
    
    const [{user}, dispatch] = useStateValue()
    
    const previousEmail = user?.email
    const newEmail = previousEmail.replace('@gmail.com', '')

    const sendTweet = (e) => {
        e.preventDefault();
    
        db.collection("allPosts").add({
            displayName: user?.displayName,
            userName: newEmail,
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: user?.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    
        setTweetMessage("");
        setTweetImage("");
      };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={user?.photoURL} />
                    <input 
                        placeholder="What's happening?"
                        type="text"
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}/>
                </div>
                <input
                    className="tweetBox__imageInput" 
                    placeholder="Enter image URL"
                    type="text"
                    onChange={e => setTweetImage(e.target.value)}
                    value={tweetImage}/>
                <Button 
                    onClick={sendTweet} 
                    type="submit" 
                    className="tweetBox__tweetButton"
                >
                    Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox
