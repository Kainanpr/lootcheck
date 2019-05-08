/* eslint-disable import/no-duplicates */
import * as constants from '../actions/constants';
import balanceReducer from './balance';
import balanceReducer2 from './balance';

describe('balanceReducer', () => {
  describe('when initializing', () => {
    const balance = 10;

    it('sets a balance', () => {
      expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance }))
        .toEqual(balance);
    });

    describe('then re-initializing', () => {
      it('reads the balance from cookies', () => {
        expect(balanceReducer2(undefined, {}))
          .toEqual(balance);
      });
    });
  });

  it('deposits into the balance', () => {
    const deposit = 10;
    const initialState = 5;

    expect(balanceReducer(initialState, { type: constants.MAKE_DEPOSIT, deposit }))
      .toEqual(initialState + deposit);
  });

  it('withdraws from the balance', () => {
    const withdraw = 10;
    const initialState = 20;

    expect(balanceReducer(initialState, { type: constants.MAKE_WITHDRAW, withdraw }))
      .toEqual(initialState - withdraw);
  });
});
