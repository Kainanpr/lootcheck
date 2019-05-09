import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../redux/actions/bitcoin';

export class Loot extends Component {
  static propTypes = {
    fetchBitcoin: PropTypes.func,
    balance: PropTypes.number,
    bitcoin: PropTypes.objectOf(PropTypes.any),
  };

  static defaultProps = {
    fetchBitcoin: () => {},
    balance: undefined,
    bitcoin: {},
  };

  componentDidMount() {
    const { fetchBitcoin } = this.props;

    fetchBitcoin();
  }

  computeBitcoin = () => {
    const { bitcoin, balance } = this.props;

    if (Object.keys(bitcoin).length === 0) return '';

    return balance / Number(bitcoin.bpi.USD.rate.replace(',', ''));
  }

  render() {
    return (
      <h3>Bitcoin balance: {this.computeBitcoin()}</h3>
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
