import { REQUEST_PEDDING, REQUEST_FINISHED } from '../../helpers/constants'
import actions from '../actions/api'

export const apiReducer = (state, action) => {
  switch (action.type) {
    case actions.PEDDING:
      return REQUEST_PEDDING
    case actions.COMPLETED:
      return REQUEST_FINISHED
    default:
      return state;
  }
};