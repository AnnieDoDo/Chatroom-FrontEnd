import{ ManagerConstants } from '../constants/Manager.constants.jsx';

export function Manager(state = {},action){
    switch(action.type){
        case ManagerConstants.CREATE_REQUEST:
            return {
                ...state,
                texting: true
            }
        
        case ManagerConstants.CREATE_SUCCESS:
            return {
                ...state,
                text: action.text
            }

        case ManagerConstants.CREATE_FAILURE:
            return {
                ...state,
                error: action.error
            }
        
        case ManagerConstants.CREATE_ACCOUNT_EXIST:
            return {...state};


        case ManagerConstants.READ_REQUEST:
            return {
                ...state,
                texting: true
            }
        
        case ManagerConstants.READ_SUCCESS:
            return {
                ...state,
                rdata: action.rdata
            }

        case ManagerConstants.READ_FAILURE:
            return {
                ...state,
                error: action.error
            }
        
        case ManagerConstants.READ_PERMISSION_DENY:
            return {...state};

            
        default:
            return state
    }
}