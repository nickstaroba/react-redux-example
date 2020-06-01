import "./RetryConfirmation.scss";

import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { OrderDetailsActionCreators } from "../../ducks/orderDetails";
import { RetryConfirmation } from "./RetryConfirmation";

export const COMPONENT_NAME = "RetryConfirmation";

class RetryConfirmationContainer extends Component {
  componentDidMount() {
    const { orderDetails, orderDetailsActions, orderId } = this.props;
    if (orderDetails.currentOrderId !== orderId) {
      orderDetailsActions.fetchOrderDetails(orderId);
    }
  }

  render() {
    const { orderDetails } = this.props;

    return (
      <RetryConfirmation
        loading={orderDetails.loading}
        orderDetails={orderDetails.orderDetails}
      />
    );
  }
}

RetryConfirmationContainer.propTypes = {
  orderDetailsActions: PropTypes.shape({
    fetchOrderDetails: PropTypes.func.isRequired,
  }).isRequired,
  orderDetails: PropTypes.object,
  orderId: PropTypes.number,
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  orderDetailsActions: bindActionCreators(OrderDetailsActionCreators, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RetryConfirmationContainer);
