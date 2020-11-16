import { postSession, postUser, deleteSession } from '../util/session';

//action types
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

//action creators
const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user,
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    }
}

//thunk action creators
export const createNewUser = (formUser) => dispatch => {
    return postUser(formUser).then(user => dispatch(receiveCurrentUser(user)));
}

export const login = formUser => dispatch => {
    return postSession(formUser).then(user => dispatch(receiveCurrentUser(user)));
}

export const logout = () => dispatch => {
    return deleteSession().then(() => dispatch(logoutCurrentUser()));
}