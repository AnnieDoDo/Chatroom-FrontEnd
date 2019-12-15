import React, { useState, useEffect } from 'react'

import InputGroup from 'react-bootstrap/InputGroup'
import {Button} from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'

class Message extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            message: '',
            submitted: false,
            socket: this.props.socket
        };


        this.handleChange = this.handleChange.bind(this)
        this.sendMessage = this.sendMessage.bind(this)

    };

    handleChange(e){
        this.setState({message: e.target.value})
    }

    sendMessage(e) {
        const socket = this.state.socket;
        const message = this.state.message;
        socket.emit('getMessage', message)
        this.setState({message:''})
    }

    render(){
        const { message } = this.state;

        return(
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <Button variant="outline-secondary" onClick={this.sendMessage}>Button</Button>
                    </InputGroup.Prepend>
                        <FormControl aria-describedby="basic-addon1" value={message||''} onChange={this.handleChange}/>
                        {!message &&
                        <div className="help-block" className="wordstyle"></div>
                        }
                </InputGroup>
            </div>
        );
    }
}

export default Message;