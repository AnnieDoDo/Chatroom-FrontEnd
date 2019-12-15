import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './helpers/store.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ConnectedRouter } from 'connected-react-router'
import { history } from './helpers/history.jsx'
import Message  from './components/message/message.jsx'
import Bubble from './components/bubble/bubble.jsx'
import {MainPage} from './components/mainpage/mainpage.jsx'
import {Manager} from './components/manager/manager.jsx'
import {Login} from './components/login/login.jsx'

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history} >
            <Switch>
                <Route path={"/chatroom"} component={MainPage} />
                <Route path={"/"} component={Login} />
            </Switch>
        </ConnectedRouter>
    </Provider>

, document.getElementById('root'));