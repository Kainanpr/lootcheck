import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Wallet } from './Wallet';

configure({ adapter: new Adapter() });

describe('Wallet', () => {
  const mockMakeDeposit = jest.fn();
  const props = { balance: 20, makeDeposit: mockMakeDeposit };
  const wrapper = shallow(<Wallet {...props} />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('displays the balance from props', () => {
    expect(wrapper.find('.balance').text()).toEqual('Wallet balance: 20');
  });

  it('creates an input to deposit into or withdraw from the balance', () => {
    expect(wrapper.find('.input-wallet').exists()).toBe(true);
  });

  describe('when the user types into the wallet input', () => {
    const userBalance = '25';

    beforeEach(() => {
      wrapper.find('.input-wallet')
        .simulate('change', { target: { value: userBalance } });
    });

    it('updates the local wallet balance in `state` and converts it to a number', () => {
      expect(wrapper.state().inputValue).toEqual(Number(userBalance));
    });

    describe('and the user wants to make a deposit', () => {
      beforeEach(() => {
        wrapper.find('.btn-deposit').simulate('click');
      });

      it('dispatches the `makeDeposit()` it receives from props with local balance', () => {
        expect(mockMakeDeposit).toHaveBeenCalledWith(Number(userBalance));
      });
    });
  });
});
