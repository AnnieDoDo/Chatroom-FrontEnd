import React from 'react'
import Toast from 'react-bootstrap/Toast'


class Bubble extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            message: '',
            submitted: false,
            socket: this.props.socket
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleMessage = this.handleMessage.bind(this)
        this.handleMessage()
    };

    handleChange(e){
        this.setState({message: e.target.value})
    }

    handleMessage() {
        const socket = this.state.socket;
        // 客户端监控登陆
        socket.on('getMessage', mes => {
            this.setState({message: mes})
        })
   
    }

    render(){
        const { message } = this.state;

        return(
            <div>
                <Toast>
                <Toast.Header closeButton={false}>
                    <strong className="mr-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body onChange={this.handleChange}>
                    <h5>{message}</h5>
                </Toast.Body>
                </Toast>
            </div>
        );
    }
}

export default Bubble;