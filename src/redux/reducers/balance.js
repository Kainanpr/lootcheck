import { read_cookie, bake_cookie } from 'sfcookies';
import * as constants from '../actions/constants';

const BALANCE_COOKIE = 'BALANCE_COOKIE';

const INITIAL_STATE = {
  balance: 0,
};

export const balance = (state = INITIAL_STATE.balance, action) => {
  let newBalance;

  switch (action.type) {
    case constants.SET_BALANCE:
      newBalance = action.balance;
      break;
    case constants.MAKE_DEPOSIT:
      newBalance = state + action.deposit;
      break;
    case constants.MAKE_WITHDRAW:
      newBalance = state - action.withdraw;
      break;
    default:
      newBalance = Number(read_cookie(BALANCE_COOKIE)) || state;
  }

  bake_cookie(BALANCE_COOKIE, newBalance);

  return newBalance;
};

export default balance;
