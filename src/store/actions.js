import { SET_CURRENT_USER } from './Constants';

export const setCurrentUser = (payload) => ({
    type: SET_CURRENT_USER,
    payload,
});
