import React from 'react'
import Style from '../navbar/navbar.css'
import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrow, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { LogRegAction } from '../../actions/LogReg.actions.jsx'
import { connect } from 'react-redux';
import { LogReg } from '../../reducers/LogReg.reducers.jsx'
import { Manager } from '../../reducers/Manager.reducers.jsx'

class NavBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            submitted: false,
        };

        this.handleLogout = this.handleLogout.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleManager = this.handleManager.bind(this);
    };


    handleLogout(){
        this.setState({ submitted: true });
        this.props.logout();
    }

    handleLogin(){
        this.setState({ submitted: true });
        this.props.turnToLoginPage();
    }

    handleManager(){
        this.setState({ submitted: true });
        this.props.turnToManagerPage();
    }

    render() {
        const { submitted } = this.state;
        const { loggedIn } = this.props
        return (
            <Navbar variant="dark" className="navbar" >
                <Navbar.Brand>Fcard</Navbar.Brand>
                <Nav className="ml-auto">
                    { <FontAwesomeIcon icon={faCrow} onClick = {this.handleManager} className="iconstyle" /> }
                    { loggedIn && <FontAwesomeIcon icon={faSignOutAlt} onClick={this.handleLogout} className="iconstyle" /> }
                    { !loggedIn && <FontAwesomeIcon icon={faSignInAlt} onClick={this.handleLogin} className="iconstyle" /> }
                </Nav>
            </Navbar>
        );
    }
}

function mapState(state) {
    const { loggedIn } = state.LogReg;
    return { loggedIn };
}

const actionCreators = {
    logout: LogRegAction.logout,
    turnToLoginPage: LogRegAction.turnToLoginPage,
    turnToManagerPage: LogRegAction.turnToManagerPage
};

const connectedNavBar = connect(mapState, actionCreators)(NavBar);
export { connectedNavBar as NavBar };
