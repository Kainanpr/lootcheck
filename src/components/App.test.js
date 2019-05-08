import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('App', () => {
  const wrapper = shallow(<App />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
