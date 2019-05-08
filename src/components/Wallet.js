import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeDeposit } from '../redux/actions/balance';

export class Wallet extends Component {
  state = {
    inputValue: undefined,
  }

  static propTypes = {
    balance: PropTypes.number,
    makeDeposit: PropTypes.func,
  };

  static defaultProps = {
    balance: undefined,
    makeDeposit: () => {},
  };

  changeInputValue = (event) => {
    this.setState({ inputValue: Number(event.target.value) });
  }

  makeDeposit = () => {
    const { inputValue } = this.state;
    const { makeDeposit } = this.props;

    makeDeposit(inputValue);
  }

  render() {
    const { balance } = this.props;
    const { inputValue } = this.state;

    return (
      <div>
        <h3 className="balance">Wallet balance: {balance}</h3>
        <br />
        <input
          className="input-wallet"
          onChange={this.changeInputValue}
          value={inputValue}
        />
        <button
          type="button"
          className="btn-deposit"
          onClick={this.makeDeposit}
        >
          Deposit
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    balance: state,
  }
);

const mapDispatchToProps = {
  makeDeposit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
