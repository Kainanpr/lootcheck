import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Wallet from './Wallet';
import Loot from './Loot';
import App from './App';

configure({ adapter: new Adapter() });

describe('App', () => {
  const wrapper = shallow(<App />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('contains a connected Wallet component', () => {
    expect(wrapper.contains(<Wallet />)).toBe(true);
  });

  it('contains a connected Loot component', () => {
    expect(wrapper.contains(<Loot />)).toBe(true);
  });

  it('contains a link to the coindesk price page', () => {
    expect(wrapper.find('a').props().href).toBe('https://www.coindesk.com/price');
  });
});
