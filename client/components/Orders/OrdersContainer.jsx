import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { OrdersActionCreators } from "../../ducks/orders";
import { Orders } from "./Orders";

class OrdersContainer extends Component {
  componentDidMount() {
    const { ordersActions } = this.props;
    ordersActions.fetchOrders();
  }

  render() {
    const { orders } = this.props;
    return <Orders orders={orders} />;
  }
}

OrdersContainer.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.object),
  ordersActions: PropTypes.shape({
    fetchOrders: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ orders }) => orders;

const mapDispatchToProps = (dispatch) => ({
  ordersActions: bindActionCreators(OrdersActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer);
