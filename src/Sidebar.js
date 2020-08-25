import React from 'react';
import "./Sidebar.css";
import {Avatar, IconButton} from "@material-ui/core"
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar />
                <div className="sidebear_headerRight">
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
            <div className="sidebar_search">

            </div>
            <div className="sidebar_chats">

            </div>

        </div>
    )
}

export default Sidebar
