const initState = {}

const authReducer = (state = initState, action) => { 
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state, authError:'Wrong username and/or password'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError:null
            }
               
        case 'SIGNOUT_SUCCESS':
            console.log('signed out');
            return state;
        
        case 'SIGNUP_SUCCESS':
            console.log('signed up successfully');
            return {
                ...state,
                authError:null
            }
        
            case 'SIGNUP_ERROR':
            console.log('sign up error');
            return {
                ...state,
                authError: action.err.message
            }
        
        default:
            return state;
    }
   
}

export default authReducer