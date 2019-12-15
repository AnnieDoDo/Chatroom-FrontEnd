import{ MessageConstants } from '../constants/Message.constants.jsx';

export function Message(state = {},action){
    switch(action.type){
        case MessageConstants.MESSAGE_REQUEST:
            return {
                ...state,
            }
        
        case MessageConstants.MESSAGE_SUCCESS:
            return {
                ...state,
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