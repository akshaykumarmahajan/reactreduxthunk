import { USER_LIST_STARTED, USER_LIST_SUCCESS, USER_LIST_FAILURE } from '../actions/index'; 
import INITIAL_STATE from '../store';

const userlist = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case USER_LIST_STARTED:
            return Object.assign({}, state, {
                userlist :{ 
                    items: [],
                    isLoaded: true
                }
            });
        case USER_LIST_SUCCESS:
            return Object.assign({}, state, {
                userlist :{ 
                    action : 'USER_LIST_SUCCESS',
                    items: action.items,
                    isLoaded: false,
                    success: {
                        status: true,
                        message: 'Data Retrived successfully'
                    }
                }
            });
        case USER_LIST_FAILURE:
            return Object.assign({}, state, {
                userlist :{ 
                    action : 'USER_LIST_FAILURE',
                    error: action.payload.error,
                    isLoaded: false
                }
        });
        default:
            return state
    }
}

export default userlist