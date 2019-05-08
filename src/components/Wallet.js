import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Wallet extends Component {
  state = {
    inputValue: undefined,
  }

  static propTypes = {
    balance: PropTypes.number,
  };

  static defaultProps = {
    balance: undefined,
  };

  changeInputValue = (event) => {
    this.setState({ inputValue: Number(event.target.value) });
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
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    balance: state,
  }
);

export default connect(mapStateToProps, null)(Wallet);
