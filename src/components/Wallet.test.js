import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Wallet } from './Wallet';

configure({ adapter: new Adapter() });

describe('Wallet', () => {
  const props = { balance: 20 };
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
});
