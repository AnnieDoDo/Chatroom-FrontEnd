import {MessageConstants} from '../constants/Message.constants.jsx'
import {MessageService} from '../service/Message.service.jsx';
import {history} from '../helpers/history.jsx'

export const MessageAction = {
    storeMessage,
};

function storeMessage(text){
    return dispatch => {
        const acc = localStorage.getItem('user');
        const user = ''
        if(acc===null){
            console.log(acc+'here')
            dispatch(request(user));

            MessageService.storeMessage(user,text)
            .then(resString => {
                if(resString=='messageOK')
                {
                    dispatch(success(resString));
                }else if(resString=='messageFail')
                {
                    dispatch(failure(resString));
                }
            })
        }else{
            console.log(typeof(acc))
            console.log(acc)
            dispatch(request(acc));

        MessageService.storeMessage(acc,text)
        .then(resString => {
            if(resString=='messageOK')
            {
                dispatch(success(resString));
            }else if(resString=='messageFail')
            {
                dispatch(failure(resString));
            }
        })
        }



    };
    function request(user) {return { type : MessageConstants.MESSAGE_REQUEST,user}}
    function success(user) {return { type : MessageConstants.MESSAGE_SUCCESS,user}}
    function failure(user) {return { type : MessageConstants.MESSAGE_FAILURE,user}}

}