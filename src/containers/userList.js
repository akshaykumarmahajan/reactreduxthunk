import {connect} from 'react-redux';
import UserList from '../views/userlist/UserList'
import userListActionCall from '../actions/userList';

const mapStateToProps = state => ({
    error: state.UserList.userlist.error,
    success: state.UserList.userlist.success,
    isLoaded: state.UserList.userlist.isLoaded,
    items: state.UserList.userlist.items,
    action: state.UserList.userlist.action,
});

const mapDispatchToProps = dispatch =>{
    return{
        fetchitems :() =>{
            dispatch(userListActionCall())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserList)