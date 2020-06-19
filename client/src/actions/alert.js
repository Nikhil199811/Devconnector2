import uuid from 'uuid';

import { SET_ALERT,SET_REMOVE } from './types';

export const setAlert = (msg,alertType,timeout=5000) => dispatch => {
  const id = uuid.v4();
  setTimeout(() => 
    dispatch({
      type:SET_ALERT,
      payload: {msg,alertType,id}
  }), timeout);
  
}