import React from "react";

import OrdersContainer from "../../components/Orders/OrdersContainer";

export const COMPONENT_NAME = "OrdersPage";

export const OrdersPage = () => (
  <div className={COMPONENT_NAME}>
    <OrdersContainer />
  </div>
);

OrdersPage.displayName = COMPONENT_NAME;
