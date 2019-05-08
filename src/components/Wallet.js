/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Wallet extends Component {
  static propTypes = {
    balance: PropTypes.number,
  };

  static defaultProps = {
    balance: 0,
  };

  render() {
    const { balance } = this.props;

    return (
      <div>
        <h3 className="balance">Wallet balance: {balance}</h3>
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
