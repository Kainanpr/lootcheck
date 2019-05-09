import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Loot } from './Loot';

configure({ adapter: new Adapter() });

describe('Loot', () => {
  const mockFetchBitcoin = jest.fn();
  let props = { balance: 10, bitcoin: {}, fetchBitcoin: mockFetchBitcoin };
  let wrapper = mount(<Loot {...props} />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('when mounted', () => {
    it('dispatches the `fetchBitcoin()` method it receives from props', () => {
      expect(mockFetchBitcoin).toHaveBeenCalled();
    });
  });

  describe('when there are valid bitcoin props', () => {
    beforeEach(() => {
      props = { balance: 10, bitcoin: { bpi: { USD: { rate: '1,000' } } }, fetchBitcoin: mockFetchBitcoin };
      wrapper = shallow(<Loot {...props} />);
    });

    it('displays the correct bitcoin value', () => {
      expect(wrapper.find('h3').text()).toEqual('Bitcoin balance: 0.01');
    });
  });
});
