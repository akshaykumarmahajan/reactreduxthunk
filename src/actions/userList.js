import { userListStarted, userListSuccess, userListFailure } from './index';
import axios from 'axios';

function userListActionCall() {
    return(dispatch) => {
        dispatch(userListStarted());
        // const API_URL = process.env.REACT_APP_API_ENDPOINT;
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res =>{
            dispatch(userListSuccess(res.data));
        })
        .catch(err =>{
            dispatch(userListFailure(err));
        })

    }
}

export default userListActionCall;