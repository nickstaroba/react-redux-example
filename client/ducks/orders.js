import { generateTypes, makeAction } from "../util";

const TYPES = generateTypes("GET_ORDERS", "SET_ORDERS");

export const Actions = Object.freeze({
  getOrders: () => makeAction(TYPES.GET_ORDERS),
  setOrders: (users) => makeAction(TYPES.SET_ORDERS, users),
});

const fetchUrl = (url) => {
  return fetch(url).then((response) => response.json());
};

export const OrdersActionCreators = Object.freeze({
  fetchOrders: () => (dispatch) => {
    dispatch(Actions.getOrders());
    fetchUrl("http://localhost:3000/orders/").then((orders) =>
      dispatch(Actions.setOrders(orders))
    );
  },
});

const initialState = Object.freeze({
  loading: false,
  orders: [],
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_ORDERS: {
      return {
        ...state,
        loading: true,
      };
    }
    case TYPES.SET_ORDERS: {
      const orders = action.payload;
      return {
        ...state,
        orders,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
