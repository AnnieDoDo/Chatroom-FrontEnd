import { combineReducers } from 'redux';
import { Manager } from './Manager.reducers.jsx';
import { LogReg } from './LogReg.reducers.jsx'
import { Message } from './Message.reducers.jsx'
import { connectRouter } from 'connected-react-router'

const rootReducer = (history) => combineReducers({
    Manager,
    LogReg,
    Message,
    router: connectRouter(history)
});
export default rootReducer;