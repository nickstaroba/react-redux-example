import "./Orders.scss";

import PropTypes from "prop-types";
import React, { useState } from "react";

import OrderDetailsContainer from "../OrderDetails/OrderDetailsContainer";
import RetryConfirmationContainer from "../RetryConfirmation/RetryConfirmationContainer";

export const COMPONENT_NAME = "Orders";

export const Orders = ({ orders }) => {
  const [showOrderDetails, setShowOrderDetails] = useState(undefined);
  const [retry, setRetry] = useState(false);

  const handleExpand = (id) => {
    setShowOrderDetails(id);
    setRetry(retry === id ? id : undefined);
  };

  const handleRetry = (id) => {
    setShowOrderDetails(showOrderDetails === id ? id : undefined);
    setRetry(id);
  };

  return (
    <div className={COMPONENT_NAME}>
      <h1>Orders</h1>
      <ul>
        {orders.map(({ id, name, status }) => {
          return (
            <li className={`${COMPONENT_NAME}__order`} key={name}>
              <span
                className={`${COMPONENT_NAME}__expand-button`}
                onClick={() => {
                  handleExpand(id);
                }}
              >
                +
              </span>
              <span className={`${COMPONENT_NAME}__name`}>{name}</span>
              {showOrderDetails === id && (
                <OrderDetailsContainer orderId={id} />
              )}
              {status === "failed" && retry !== id && (
                <span
                  className={`${COMPONENT_NAME}__retry-button`}
                  onClick={() => {
                    handleRetry(id);
                  }}
                >
                  retry
                </span>
              )}
              {retry === id && (
                <RetryConfirmationContainer
                  className={`${COMPONENT_NAME}__retry-button`}
                  orderId={id}
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Orders.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
