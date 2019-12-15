import React, { useState, useEffect } from 'react'
import {MessageAction} from '../../actions/Message.actions.jsx'
import InputGroup from 'react-bootstrap/InputGroup'
import {Button} from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'
import { connect } from 'react-redux';

class Message extends React.Component {
    constructor(props){
        super(props);
        const getuser = localStorage.getItem('user');
        var gu = 'user'
        if(getuser!==null){
            console.log(getuser+"getuserhere")
            gu = getuser.toString()
        }
        this.state = {
            acc: gu,
            message: '',
            send:[],
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
        const acc = this.state.acc;
        const send = this.state.send;
        let newMessages = this.state.send.concat({
            user: acc,
            text: message,
        });
        this.setState({send: newMessages})

        socket.emit('getMessage', newMessages)
        this.props.storeMessage(message)
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

const actionCreators = {
    storeMessage: MessageAction.storeMessage,
};

const connectedMessage = connect(null, actionCreators)(Message);
export { connectedMessage as Message };