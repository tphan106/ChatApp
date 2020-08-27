import React,{useState, useEffect} from 'react';
import "./Chat.css"
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, []);

    const sendMessage = (e) =>{
        e.preventDefault();
        console.log('You typed >>>', input);
        setInput("");
    };

    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat_headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen .....</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />    
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                <p className={`chat_message ${true &&
                'chat_receiver'}`}>
                    <span className="chat_name">Aaron</span>
                    Hello      
                    <span className="timestamp">3:52pm</span>          
                </p>
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} 
                        onChange={e=> setInput(e.target.value)}
                        type="text" placeholder="Type a message"/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat;
