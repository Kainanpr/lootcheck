import * as constants from './constants';

export const setBalance = balance => ({
  type: constants.SET_BALANCE,
  balance,
});

export const makeDeposit = deposit => ({
  type: constants.MAKE_DEPOSIT,
  deposit,
});

export default {
  setBalance,
  makeDeposit,
};
