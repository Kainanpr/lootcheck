/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../redux/actions/bitcoin';

export class Loot extends Component {
  static propTypes = {
    fetchBitcoin: PropTypes.func,
  };

  static defaultProps = {
    fetchBitcoin: () => {},
  };

  componentDidMount() {
    const { fetchBitcoin } = this.props;

    fetchBitcoin();
  }

  render() {
    return (
      <h3>Bitcoin balance:</h3>
    );
  }
}

const mapStateToProps = state => ({
  balance: state.balance,
  bitcoin: state.bitcoin,
});

const mapDispatchToProps = {
  fetchBitcoin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Loot);
