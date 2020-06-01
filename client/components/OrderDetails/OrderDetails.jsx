import "./OrderDetails.scss";

import PropTypes from "prop-types";
import React from "react";

export const COMPONENT_NAME = "OrderDetails";

export const OrderDetails = ({ loading, orderDetails }) => {
  let content;
  if (loading) {
    content = <span className={`${COMPONENT_NAME}__task`}>Loading...</span>;
  } else {
    content = orderDetails.map((task) => (
      <span className={`${COMPONENT_NAME}__task`} key={task.name}>
        {task.name}
      </span>
    ));
  }

  return <span className={COMPONENT_NAME}>{content}</span>;
};

OrderDetails.propTypes = {
  loading: PropTypes.bool.isRequired,
  orderDetails: PropTypes.arrayOf(PropTypes.object.isRequired),
};
