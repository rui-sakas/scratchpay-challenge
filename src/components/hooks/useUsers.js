import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    clearToastMessage,
    createUserRequest,
    deleteUserRequest,
    editUserRequest,
    fetchUsersRequest
} from '../../actions/users';

const useUsers = () => {
    const dispatch = useDispatch();

    const usersState = useSelector((state) => state.users);

    const onChangePage = (event, page) => {
        dispatch(fetchUsersRequest(page));
    };

    const onDeleteUser = (userId) => {
        dispatch(deleteUserRequest(userId));
    };

    const onSubmitNewUser = (userId) => {
        dispatch(createUserRequest(userId));
    };

    const onEditUser = (values, userId) => {
        dispatch(editUserRequest(values, userId));
    };

    const onClearToastMessage = () => {
        dispatch(clearToastMessage());
    };
    useEffect(() => {
        dispatch(fetchUsersRequest(1));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        users: usersState.users,
        isFetching: usersState.fetching,
        page: usersState.page,
        onChangePage,
        totalUsers: usersState.totalUsers,
        onDeleteUser,
        onSubmitNewUser,
        toastMessage: usersState.toastMessage,
        onClearToastMessage,
        onEditUser
    };
};

export default useUsers;
