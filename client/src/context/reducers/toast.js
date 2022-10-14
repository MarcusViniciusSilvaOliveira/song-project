import { TOAST_SUCCESS, TOAST_ERROR, TOAST_INFO } from '../../helpers/constants'
import actions from '../actions/toast'

export const toastReducer = (state, action) => {
    switch (action.type) {
        case actions.SHOW_ERROR_MESSAGE:
            return {
                type: TOAST_ERROR,
                message: action.payload
            };
        case actions.SHOW_SUCCESS_MESSAGE:
            return {
                type: TOAST_SUCCESS,
                message: action.payload
            };    
        case actions.SHOW_INFO_MESSAGE:
            return {
                type: TOAST_INFO,
                message: action.payload
            };
        default:
            return {
                type: '',
                message: ''
            };
    }
};