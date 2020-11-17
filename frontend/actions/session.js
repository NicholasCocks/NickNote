import { postSession, postUser, deleteSession } from '../util/session';

//action types
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

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

const receiveSessionErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors: errors,
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS,
    }
}

//thunk action creators
export const signupAction = (formUser) => dispatch => {
    return postUser(formUser).then(user => { dispatch(receiveCurrentUser(user)) }, errors => { dispatch(receiveSessionErrors(errors)) });
}

export const loginAction = formUser => dispatch => {
    return postSession(formUser).then(user => { dispatch(receiveCurrentUser(user)) }, errors => { dispatch(receiveSessionErrors(errors)) });
}

export const logoutAction = () => dispatch => {
    return deleteSession().then(() => { dispatch(logoutCurrentUser()) }, errors => { dispatch(receiveSessionErrors(errors)) });
}