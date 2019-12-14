import React from 'react'

import Style from './mainpage.css'
import { Form, Button } from "react-bootstrap"
import Message  from '../message/message.jsx'
import Bubble from '../bubble/bubble.jsx'

const socket = require('socket.io-client')('http://localhost:4500');

class MainPage extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            socket:socket,
            pushBubble:Bubble,
            list:[]
        }
        this.ready()
    };





    ready() {
        const socket = this.state.socket;
        // 客户端监控登陆
        socket.on('getMessage', message => {
            console.log(message)
        })
   
    }

    render() {
        const {socket}=this.state
    
        return (
            <div className="background">
                <Message socket={socket} />
                <Bubble socket={socket} />
            </div>

        );
    }
}

export default MainPage;


