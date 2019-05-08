import * as constants from '../actions/constants';

const INITIAL_STATE = {
  balance: 0,
};

export const balance = (state = INITIAL_STATE.balance, action) => {
  switch (action.type) {
    case constants.SET_BALANCE:
      return action.balance;
    default:
      return state;
  }
};

export default balance;
