import * as constants from '../actions/constants';

const INITIAL_STATE = {
  balance: 0,
};

export const balance = (state = INITIAL_STATE.balance, action) => {
  switch (action.type) {
    case constants.SET_BALANCE:
      return action.balance;
    case constants.MAKE_DEPOSIT:
      return state + action.deposit;
    case constants.MAKE_WITHDRAW:
      return state - action.withdraw;
    default:
      return state;
  }
};

export default balance;
