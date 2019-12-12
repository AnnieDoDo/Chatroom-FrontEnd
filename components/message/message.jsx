import React, { useState, useEffect } from 'react'

import InputGroup from 'react-bootstrap/InputGroup'
import {Button} from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'

const socket = require('socket.io-client')('http://localhost:4500');

class Message extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            message: '',
            submitted: false
        };

        this.sendMessage = this.sendMessage.bind(this)
        this.handleChange = this.handleChange.bind(this)

    };

    
    componentDidMount() {
        socket.on('getMessage', (data) => {
            console.log(data)
        })
        
    };

    sendMessage () {
        const { message } = this.state;
        socket.emit('getMessage', message)
    };

    handleChange(e){
        const { name, value } = e.target;
        this.setState({[name]: value});
    }

    render(){
        const { message, submitted } = this.state;
        return(
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <Button variant="outline-secondary" onClick={this.sendMessage}>Button</Button>
                    </InputGroup.Prepend>
                        <FormControl aria-describedby="basic-addon1" name="message" value={message||''} onChange={this.handleChange}/>
                        {!message &&
                        <div className="help-block" className="wordstyle">text here</div>
                        }
                </InputGroup>
            </div>
        );
    }
}

export default Message;