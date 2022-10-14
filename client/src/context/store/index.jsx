import React ,{ useReducer, createContext } from 'react';

import { apiReducer } from '../reducers/api';
import { toastReducer } from '../reducers/toast';

const initialState = {
  requestState: '',
  toastAlert: {
    message: '',
    type: ''
  }
};

export const Context = createContext(initialState);
function combineReducers(reducers) {  
  return (state = {}, action) => {
    const newState = {};
    for (let key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }
    return newState;
  }
}

export const Store = ({children}) => {
  const rootReducer = combineReducers({requestState: apiReducer, toastAlert: toastReducer})
  const [state, dispatch] = useReducer(rootReducer, initialState);


  return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  );
}