import React from 'react'
import Toast from 'react-bootstrap/Toast'


class Bubble extends React.Component {
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
            message: [],
            submitted: false,
            socket: this.props.socket,
            id: 1,
            date: new Date()
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
        const acc = this.state.acc;
        const time = this.state.date.toLocaleTimeString();
        const date = this.state.date.toLocaleDateString();
        const id = this.state.id;
        this.setState((state) => ({
            id: state.id + state.id
          }));

        socket.on('getMessage', mes => {
            console.log(mes+"message~")
            let newMessages = this.state.message.concat({
                user: mes[0].user,
                key: id,
                text: mes[0].text,
                time: time,
                date: date
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
                        <strong className="mr-auto">{msg.user}</strong>
                        <small>{msg.time}{msg.date}</small>
                    </Toast.Header>
                    <Toast.Body>
                        {msg.text}
                    </Toast.Body>
                    </Toast></div>);
              });
            }
        
        return(
            <div>
                {messagePane}
            </div>


        );
    }
}

export default Bubble;