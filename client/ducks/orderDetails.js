import { generateTypes, makeAction } from "../util";

const TYPES = generateTypes("GET_ORDER_DETAILS", "SET_ORDER_DETAILS");

export const Actions = Object.freeze({
  getOrderDetails: () => makeAction(TYPES.GET_ORDER_DETAILS),
  setOrderDetails: (orderDetails) =>
    makeAction(TYPES.SET_ORDER_DETAILS, orderDetails),
});

const fetchUrl = (url) => {
  return fetch(url).then((response) => response.json());
};

export const OrderDetailsActionCreators = Object.freeze({
  fetchOrderDetails: (orderId) => (dispatch) => {
    dispatch(Actions.getOrderDetails());
    fetchUrl(
      `http://localhost:3000/order/${orderId}/tasks`
    ).then((orderDetails) =>
      dispatch(Actions.setOrderDetails({ orderDetails, orderId }))
    );
  },
});

const initialState = Object.freeze({
  loading: false,
  orderDetails: [],
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_ORDER_DETAILS: {
      return {
        ...state,
        loading: true,
      };
    }
    case TYPES.SET_ORDER_DETAILS: {
      const { orderDetails, orderId } = action.payload;
      return {
        ...state,
        currentOrderId: orderId,
        orderDetails,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
