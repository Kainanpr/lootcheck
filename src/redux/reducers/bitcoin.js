import { FETCH_BITCOIN } from '../actions/constants';

const INITIAL_STATE = {};

export const bitcoin = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_BITCOIN:
      return action.bitcoin;
    default:
      return state;
  }
};

export default bitcoin;
