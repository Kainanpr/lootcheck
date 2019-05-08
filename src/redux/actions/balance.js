import * as constants from './constants';

export const setBalance = balance => ({
  type: constants.SET_BALANCE,
  balance,
});

export const makeDeposit = deposit => ({
  type: constants.MAKE_DEPOSIT,
  deposit,
});

export const makeWithdraw = withdraw => ({
  type: constants.MAKE_WITHDRAW,
  withdraw,
});

export default {
  setBalance,
  makeDeposit,
  makeWithdraw,
};
