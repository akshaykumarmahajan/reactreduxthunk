export const USER_LIST_STARTED = 'USER_LIST_STARTED';
export const USER_LIST_SUCCESS = 'USER_LIST_SUCCESS';
export const USER_LIST_FAILURE = 'USER_LIST_FAILURE';



export function userListStarted(){
    return{
        type : USER_LIST_STARTED
    }

}

export function userListSuccess(response){
    return{
        type : USER_LIST_SUCCESS,
        items : response
    }
}

export function userListFailure(response){
    return{
        type : USER_LIST_FAILURE,
        payload :{
            error : response
        }
    }
}