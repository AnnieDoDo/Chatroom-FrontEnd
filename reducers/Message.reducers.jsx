import{ MessageConstants } from '../constants/Message.constants';

export function Message(state = {},action){
    switch(action.type){
        case MessageConstants.MESSAGE_REQUEST:
            return {
                ...state,
                texting: true
            }
        
        case MessageConstants.MESSAGE_SUCCESS:
            return {
                ...state,
                text: action.text
            }

        case MessageConstants.MESSAGE_FAILURE:
            return {
                ...state,
                error: action.error
            }
            
        default:
            return state
    }
}