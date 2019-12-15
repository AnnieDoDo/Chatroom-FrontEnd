import{LogRegConstants} from '../constants/LogReg.constants.jsx';

let user = localStorage.getItem('user');
const initialState = user ? { loggedIn: true, user } : {};

export function LogReg(state = {},action){
    switch(action.type){
        case LogRegConstants.REGISTER_REQUEST:
            return {
                ...state,
                registering: true
            };
        case LogRegConstants.REGISTER_SUCCESS:
            return {...state};
            
        case LogRegConstants.REGISTER_FAILURE:
            return {...state};

        case LogRegConstants.LOGIN_REQUEST:
            return {
                ...state,
                user: action.user
            };
            
        case LogRegConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                user: action.user
            };
        case LogRegConstants.LOGIN_INVALIDPASSWORD:
            return {...state};

        case LogRegConstants.LOGIN_UNAUTHORIZED:
            return {...state};

        case LogRegConstants.LOGOUT:
            return { 
                ...state,
                loggedIn: false
            };

        case LogRegConstants.LOGIN_TO_LOGIN_PAGE:
            return {...state};

        case LogRegConstants.LOGIN_TO_MANAGER_PAGE:
            return {...state};
        
        case LogRegConstants.REGISTER_ACCOUNT_EXIST:
            return {...state};

        default:
            return state
    }
}