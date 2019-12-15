import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Style from './manager.css'
import { Form, Button } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

import { ManagerAction } from '../../actions/Manager.actions.jsx';
import { connect } from 'react-redux';

class Manager extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false,
            setmanager: false,
        };

        this.props.Read();
        this.handleChange = this.handleChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleDelete = this.handleDelete.bind(this)
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

    handleDelete(){
        this.props.Delete(username)
    }


    render() {
        const { username, password, submitted, setmanager } = this.state;
        const { rdata } = this.props;
        let memberPane = [];
        var i = 0;
        if (rdata) {
          rdata.forEach(function(m) {
            memberPane.push(<div key={m.key}> 
                <ListGroup horizontal>
                <ListGroup.Item>{rdata[i].accountdata}</ListGroup.Item>
                <ListGroup.Item>{rdata[i].admin}</ListGroup.Item>
                
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>Password</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl />
                </InputGroup>

                <ButtonGroup>
                    <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                    <Dropdown.Item>0</Dropdown.Item>
                    <Dropdown.Item>1</Dropdown.Item>
                    </DropdownButton>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                </ButtonGroup>
                </ListGroup>

                </div>);
                i = i+1;
                console.log(i)
          });
        }


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
                    <InputGroup.Text>Manager or not</InputGroup.Text>
                </InputGroup.Prepend>

                <InputGroup.Prepend>
                    <InputGroup.Text>Edit Password</InputGroup.Text>
                </InputGroup.Prepend>

                <InputGroup.Prepend>
                    <InputGroup.Text>Edit Manager or not</InputGroup.Text>
                </InputGroup.Prepend>
                
                </InputGroup>

                {memberPane}
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
    Delete: ManagerAction.Delete,
};

const connectedManager = connect(mapState, actionCreators)(Manager);
export { connectedManager as Manager };

