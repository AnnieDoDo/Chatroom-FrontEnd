import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ConnectedRouter } from 'connected-react-router'
import { history } from './helpers/history.jsx'
import  Message  from './components/message/message.jsx'


ReactDOM.render(
    <Message />

, document.getElementById('root'));