import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Loot } from './Loot';

configure({ adapter: new Adapter() });

describe('Loot', () => {
  const mockFetchBitcoin = jest.fn();
  const props = { balance: 10, bitcoin: {}, fetchBitcoin: mockFetchBitcoin };
  const wrapper = mount(<Loot {...props} />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('when mounted', () => {
    it('dispatches the `fetchBitcoin()` method it receives from props', () => {
      expect(mockFetchBitcoin).toHaveBeenCalled();
    });
  });
});
