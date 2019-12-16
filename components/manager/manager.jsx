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
import { NavBar } from '../navbar/navbar.jsx';
import { ManagerAction } from '../../actions/Manager.actions.jsx';
import { connect } from 'react-redux';

class Manager extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            upusername:'',
            dusername: '',
            password: '',
            upassword:'',
            submitted: false,
            submittedupdate: false,
            submitteddelete: false,
            setmanager:false,
        };

        this.props.Read();
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeUpdateu = this.handleChangeUpdateu.bind(this);
        this.handleChangeUpdatep = this.handleChangeUpdatep.bind(this);
        this.handleChangeUpdates = this.handleChangeUpdates.bind(this);
        this.handleChangeDelete = this.handleChangeDelete.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    };


    handleChange(e){
        const { name, value } = e.target;
        this.setState({[name]: value});
    }

    handleChangeUpdateu(e){

        this.setState({upusername: e.target.value});
    }

    handleChangeUpdatep(e){

        this.setState({upassword: e.target.value});
    }

    handleChangeUpdates(e){

        this.setState({setmanager: e.target.value});
    }

    handleChangeDelete(e){
        this.setState({dusername: e.target.value});
    }

    handleCreate(){
        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.Create(username, password);
        }
    }

    handleUpdate(){
        this.setState({ submittedupdate: true });
        const { upusername, upassword, setmanager } = this.state;
        if (upusername && upassword && setmanager) {
            this.props.Update(upusername,upassword,setmanager)
        }
    }

    handleDelete(){
        this.setState({ submitteddelete: true });
        const { dusername } = this.state;
        console.log(dusername)
        if (dusername) {
            this.props.Delete(dusername)
        }
    }


    render() {
        const { username,upusername, dusername, upassword,password, submitted, submittedupdate, submitteddelete, setmanager } = this.state;
        const { rdata } = this.props;
        let memberPane = [];
        var i = 0;
        if (rdata) {
          rdata.forEach(function(m) {
            memberPane.push(<div key={m.key}> 
                <ListGroup horizontal>
                <ListGroup.Item>{rdata[i].accountdata}</ListGroup.Item>
                <ListGroup.Item>{rdata[i].admin}</ListGroup.Item>
                </ListGroup>

                </div>);
                i = i+1;
          });
        }


        return (
            <div className="background">
                <NavBar />
                <InputGroup className="mb-3">
                <Button variant="secondary" onClick={this.handleCreate}>
                    Add Account
                </Button>
                <InputGroup.Prepend>
                    <InputGroup.Text>Account</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl name="username" value={username||''} onChange={this.handleChange}/>
                    {submitted && !username &&
                        <div className="help-block" className="wordstyle">Account is required</div>
                    }
                <InputGroup.Prepend>
                    <InputGroup.Text>Password</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl name="password" value={password||''} onChange={this.handleChange}/>
                    {submitted && !password &&
                        <div className="help-block" className="wordstyle">Password is required</div>
                    }
                </InputGroup>

                <InputGroup className="mb-3">
                <Button variant="secondary" onClick={this.handleUpdate}>
                    Update Account
                </Button>
                <InputGroup.Prepend>
                    <InputGroup.Text>Account</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl onChange={this.handleChangeUpdateu}/>
                    {submittedupdate && !upusername &&
                        <div className="help-block" className="wordstyle">Account is required</div>
                    }
                <InputGroup.Prepend>
                    <InputGroup.Text>Password</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl onChange={this.handleChangeUpdatep}/>
                    {submittedupdate && !upassword &&
                        <div className="help-block" className="wordstyle">Password is required</div>
                    }

                <InputGroup.Prepend>
                    <InputGroup.Text>Be a Manager</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl onChange={this.handleChangeUpdates}/>
                    {submittedupdate &&
                        <div className="help-block" className="wordstyle">0 or 1 is required</div>
                    }
                </InputGroup>

                <InputGroup className="mb-3">
                <Button variant="secondary" onClick={this.handleDelete}>
                    Delete Account
                </Button>
                <InputGroup.Prepend>
                    <InputGroup.Text>Account</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl delvalue={dusername||''} onChange={this.handleChangeDelete}/>
                    {submitteddelete && !dusername &&
                        <div className="help-block" className="wordstyle">Account is required</div>
                    }
                </InputGroup>


                <InputGroup size = 'lg'className="mb-3" className="Style">
                <InputGroup.Prepend>
                    <InputGroup.Text>Account</InputGroup.Text>
                </InputGroup.Prepend>

                <InputGroup.Prepend>
                    <InputGroup.Text>Manager or not</InputGroup.Text>
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


const actionCreators = {
    Create: ManagerAction.Create,
    Read: ManagerAction.Read,
    Delete: ManagerAction.Delete,
    Update: ManagerAction.Update
};

const connectedManager = connect(mapState, actionCreators)(Manager);
export { connectedManager as Manager };

