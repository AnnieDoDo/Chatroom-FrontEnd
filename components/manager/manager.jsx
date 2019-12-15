import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Style from './manager.css'
import { Form, Button } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import { ManagerAction } from '../../actions/Manager.actions.jsx';
import { connect } from 'react-redux';

class Manager extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);

    };


    handleChange(e){
        const { name, value } = e.target;
        this.setState({[name]: value});
    }


    handleCreate(){
        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.Create(username, password);
        }
    }

    componentDidMount() {
        this.props.Read();
    }


    render() {
        const { username, password, submitted } = this.state;
        const { rdata } = this.props;

        const content = rdata.map((post) =>
        <div key={post.id}>
          <h3>{post[0].accountdata}</h3>
          <p>{post[0].admin}</p>
        </div>
      );

        return (
            <div className="background">
                <InputGroup className="mb-3">
                <Button variant="secondary" onClick={this.handleCreate}>
                    Add Account
                </Button>
                <InputGroup.Prepend>
                    <InputGroup.Text>Account</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl name="username" value={username||''} onChange={this.handleChange}/>
                    {submitted && !username &&
                        <div className="help-block" className="wordstyle">Email is required</div>
                    }
                <InputGroup.Prepend>
                    <InputGroup.Text>Password</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl name="password" value={password||''} onChange={this.handleChange}/>
                    {submitted && !password &&
                        <div className="help-block" className="wordstyle">Password is required</div>
                    }
                </InputGroup>

                <InputGroup size = 'lg'className="mb-3" className="Style">
                <InputGroup.Prepend>
                    <InputGroup.Text>Account</InputGroup.Text>
                </InputGroup.Prepend>

                <InputGroup.Prepend>
                    <InputGroup.Text>Password</InputGroup.Text>
                </InputGroup.Prepend>

                <InputGroup.Prepend>
                    <InputGroup.Text>Manager or not</InputGroup.Text>
                </InputGroup.Prepend>

                <InputGroup.Prepend>
                    <InputGroup.Text>Edit</InputGroup.Text>
                </InputGroup.Prepend>

                <InputGroup.Prepend>
                    <InputGroup.Text>Delete</InputGroup.Text>
                </InputGroup.Prepend>
                
                </InputGroup>

                {content}
            </div>
        );
    }
}


function mapState(state) {
    const { rdata } = state.Manager;

    return {rdata};
}

export default Manager;
const actionCreators = {
    Create: ManagerAction.Create,
    Read: ManagerAction.Read,
};

const connectedManager = connect(mapState, actionCreators)(Manager);
export { connectedManager as Manager };

