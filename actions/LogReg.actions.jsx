import {LogRegConstants} from '../constants/LogReg.constants.jsx';
import {LoginRegService} from '../service/LogReg.service.jsx';
import {history} from '../helpers/history.jsx'

export const LogRegAction = {
    login,
    logout,
    register,
    turnToLoginPage,
    turnToManagerPage
};

function login(email, password){
    return dispatch => {

        dispatch(request({email}));

        LoginRegService.login(email,password)
        .then(resString => {
            //console.log(typeof(resString))
            console.log(resString)
            
            if(resString=='Invalid password')
            {
                dispatch(invalidPassword(resString));
            }else if(resString=='Unauthorized!')
            {
                dispatch(unauthorized(resString));
            }else if(resString=='logSubOK'){
                dispatch(success(resString));
                console.log("Login success")
                history.push('/chatroom');
            }
        })
    };
    function request(user) {return { type : LogRegConstants.LOGIN_REQUEST,user}}
    function success(user) {return { type : LogRegConstants.LOGIN_SUCCESS,user}}
    function invalidPassword(error) {return { type : LogRegConstants.LOGIN_INVALIDPASSWORD,error}}
    function unauthorized(error) {return { type : LogRegConstants.LOGIN_UNAUTHORIZED,error}}
}

function logout() {
    LoginRegService.logout();
    return { type: LogRegConstants.LOGOUT };
}

function register(email, password){
    return dispatch => {

        dispatch(request({email}));
        LoginRegService.register(email,password)
        .then(resString => {
            if(resString=='regSubOK')
            {
                dispatch(success(resString));
            }else if(resString=='registerFail')
            {
                dispatch(failure(resString));
            }if(resString=='You have registered before.'){
                dispatch(accountExist(resString))
            }
        })

    };
    function request(user) {return { type : LogRegConstants.REGISTER_REQUEST,user}}
    function success(user) {return { type : LogRegConstants.REGISTER_SUCCESS,user}}
    function failure(user) {return { type : LogRegConstants.REGISTER_FAILURE,user}}
    function accountExist(accountexist){ return { type : LogRegConstants.REGISTER_ACCOUNT_EXIST,accountExist}}
}

function turnToLoginPage(){
    return dispatch => {
        dispatch(request());
        history.push('/');
    };

    function request() {return { type : LogRegConstants.LOGIN_TO_LOGIN_PAGE}}
}

function turnToManagerPage(){
    return dispatch => {
        dispatch(request());
        history.push('/manager');
    };

    function request() {return { type : LogRegConstants.LOGIN_TO_MANAGER_PAGE}}
}