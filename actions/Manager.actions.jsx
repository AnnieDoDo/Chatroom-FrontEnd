import {ManagerConstants} from '../constants/Manager.constants.jsx'
import {ManagerService} from '../service/Manager.service.jsx';
import {history} from '../helpers/history.jsx'

export const ManagerAction = {
    Create,
    Read,
    Delete,
    Update,
};

function Create(email, password){
    return dispatch => {

        dispatch(request({email}));

        ManagerService.Create(email,password)
        .then(resString => {
            //console.log(typeof(resString))
            console.log(resString)
            
            if(resString=='You have registered before'||resString=='You dont have this permission')
            {
                dispatch(accountExist(resString));
            }else if(resString=='createFail')
            {
                dispatch(failure(resString));
            }else if(resString=='createOK'){
                dispatch(success(resString));
                console.log("create success")

            }
        })
    };
    function request(user) {return { type : ManagerConstants.CREATE_REQUEST,user}}
    function success(user) {return { type : ManagerConstants.CREATE_SUCCESS,user}}
    function failure(user) {return { type : ManagerConstants.CREATE_FAILURE,user}}
    function accountExist(accountexist){ return { type : ManagerConstants.CREATE_ACCOUNT_EXIST,accountExist}}
}


function Update(email, password, admin){
    return dispatch => {

        dispatch(request({email}));

        ManagerService.Update(email,password,admin)
        .then(resString => {
            //console.log(typeof(resString))
            console.log(resString)
            
            if(resString=='You have registered before'||resString=='You dont have this permission')
            {
                dispatch((resString));
            }else if(resString=='updateFail')
            {
                dispatch(failure(resString));
            }else if(resString=='updateOK'){
                dispatch(success(resString));
                console.log("update success")

            }
        })
    };
    function request(user) {return { type : ManagerConstants.UPDATE_REQUEST,user}}
    function success(user) {return { type : ManagerConstants.UPDATE_SUCCESS,user}}
    function failure(user) {return { type : ManagerConstants.UPDATE_FAILURE,user}}
    function permissiondny(user){ return { type : ManagerConstants.UPDATE_FAILURE,user}}
}


function Read(){
    return dispatch => {

        dispatch(request({}));

        ManagerService.Read()
        .then(resString => {
            console.log(typeof(resString))
            console.log(JSON.parse(resString))

            var resStrings = JSON.parse(resString)
            console.log(resStrings[0].accountdata)
            
            if(resString=='You have to login first.'||resString=='You dont have this permission')
            {
                dispatch(permissiondeny(resString));
            }else if(resString=='readFail')
            {
                dispatch(failure(resString));
            }else if(resStrings){
                dispatch(success(resStrings));
                console.log("read success")

            }
        })
    };
    function request(user) {return { type : ManagerConstants.READ_REQUEST,user}}
    function success(rdata) {return { type : ManagerConstants.READ_SUCCESS,rdata}}
    function failure(user) {return { type : ManagerConstants.READ_FAILURE,user}}
    function permissiondeny(user){ return { type : ManagerConstants.READ_PERMISSION_DENY,user}}
}

function Delete(user){
    return dispatch => {

        dispatch(request({user}));

        ManagerService.Delete(user)
        .then(resString => {
            if(resString=='You have to login first.'||resString=='You dont have this permission')
            {
                dispatch(permissiondeny(resString));
            }else if(resString=='deleteFail')
            {
                dispatch(failure(resString));
            }else if(resString=='deleteOK'){
                dispatch(success(resString));
                console.log("delete success")

            }
        })
    };
    function request(user) {return { type : ManagerConstants.DELETE_REQUEST,user}}
    function success(user) {return { type : ManagerConstants.DELETE_SUCCESS,user}}
    function failure(user) {return { type : ManagerConstants.DELETE_FAILURE,user}}
    function permissiondeny(user){ return { type : ManagerConstants.DELETE_PERMISSION_DENY,user}}
}