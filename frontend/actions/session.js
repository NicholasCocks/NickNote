import { postSession, postUser, deleteSession } from '../util/session';

//action types
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

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

const receiveSessionErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors: errors,
})

//thunk action creators
export const signupAction = (formUser) => dispatch => {
    return postUser(formUser).then(user => dispatch(receiveCurrentUser(user)));
}

export const loginAction = formUser => dispatch => {
    return postSession(formUser).then(user => dispatch(receiveCurrentUser(user)));
}

export const logoutAction = () => dispatch => {
    return deleteSession().then(() => dispatch(logoutCurrentUser()));
}