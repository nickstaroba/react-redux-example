import { combineReducers } from "redux";

import orderDetails from "./ducks/orderDetails";
import orders from "./ducks/orders";
import users from "./ducks/users";

export default combineReducers({
  orderDetails,
  orders,
  users,
});
