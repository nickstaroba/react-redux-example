import "./RetryConfirmation.scss";

import PropTypes from "prop-types";
import React from "react";

export const COMPONENT_NAME = "RetryConfirmation";

export const RetryConfirmation = ({ loading, orderDetails }) => {
  let content;
  if (loading) {
    content = <span className={`${COMPONENT_NAME}__prompt`}>Loading...</span>;
  } else {
    content = (
      <span className={COMPONENT_NAME}>
        <span className={`${COMPONENT_NAME}__prompt`}>
          Retry {orderDetails.map((task) => task.name).join(", ")}?
        </span>
        <span className={`${COMPONENT_NAME}__button`}>Yes</span>
        <span className={`${COMPONENT_NAME}__button`}>No</span>
      </span>
    );
  }

  return <span className={COMPONENT_NAME}>{content}</span>;
};

RetryConfirmation.propTypes = {
  loading: PropTypes.bool.isRequired,
  orderDetails: PropTypes.arrayOf(PropTypes.object.isRequired),
};
