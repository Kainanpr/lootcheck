import * as constants from './constants';
import * as actions from './balance';

it('creates an action to set the balance', () => {
  const balance = 0;

  const expectedAction = { type: constants.SET_BALANCE, balance };

  expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it('creates an action to deposit into the balance', () => {
  const deposit = 10;

  const expectedAction = { type: constants.MAKE_DEPOSIT, deposit };

  expect(actions.makeDeposit(deposit)).toEqual(expectedAction);
});

it('creates an action to withdraw from the balance', () => {
  const withdraw = 10;

  const expectedAction = { type: constants.MAKE_WITHDRAW, withdraw };

  expect(actions.makeWithdraw(withdraw)).toEqual(expectedAction);
});
