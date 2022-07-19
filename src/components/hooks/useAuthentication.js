import { useDispatch, useSelector } from 'react-redux';
import { authenticateUserRequest } from '../../actions/authentication';

const useAuthentication = () => {
    const dispatch = useDispatch();

    const authenticationState = useSelector((state) => state.authentication);
    const validCredentials = authenticationState.validCredentials;

    const authenticateUser = (username, password) => {
        dispatch(authenticateUserRequest({ username, password }));
    };
    return {
        authenticateUser,
        validCredentials,
        isAuthenticating: authenticationState.authenticating
    };
};

export default useAuthentication;
