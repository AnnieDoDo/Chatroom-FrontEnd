import React from 'react'
import Toast from 'react-bootstrap/Toast'


class Bubble extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            message: [],
            submitted: false,
            socket: this.props.socket,
            id: 1
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
        const message = this.state.message;
        const id = this.state.id;
        this.setState((state) => ({
            id: state.id + state.id
          }));
        // 客户端监控登陆
        socket.on('getMessage', mes => {
            let newMessages = this.state.message.concat({
                key: id,
                text: mes
            });
            this.setState({message: newMessages})
        })
   
    }

    render(){
        const { message } = this.state;

            let messagePane = [];
       
            if (message) {
              message.forEach(function(msg) {
                messagePane.push(<div key={msg.key}> 
                 <Toast>
                    <Toast.Header closeButton={false}>
                        <strong className="mr-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>
                        {msg.text}
                    </Toast.Body>
                    </Toast></div>);
              });
            }
        
        return(
            <div>
                <Toast>
                <Toast.Header closeButton={false}>
                    <strong className="mr-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body onChange={this.handleChange}>

                </Toast.Body>
                </Toast>
                {messagePane}
            </div>


        );
    }
}

export default Bubble;