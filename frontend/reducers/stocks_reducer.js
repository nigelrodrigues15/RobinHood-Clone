import merge from "lodash/merge";
import { combineReducers } from "redux";
import {
  RECEIVE_CHART,
  RECEIVE_COMPANY_DETAILS,
  RECEIVE_STATS,
  RECEIVE_LOGO,
  RECEIVE_NEWS,
  RECEIVE_DASHBOARD_NEWS,
  RECEIVE_PEERS,
  RECEIVE_CHANGE,
  RECEIVE_PRICE
} from "../actions/stock_actions";

const stocksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CHART:
      return Object.assign(newState, { chart: action.chart });

    case RECEIVE_COMPANY_DETAILS:
      return Object.assign(newState, { details: action.details });

    case RECEIVE_STATS:
      return Object.assign(newState, { stats: action.stats });

    case RECEIVE_LOGO:
      return Object.assign(logo, { price: action.logo });

    case RECEIVE_NEWS:
      return Object.assign(newState, { news: action.news });

    case RECEIVE_DASHBOARD_NEWS:
      return Object.assign(newState, { dashboardNews: action.dashboardNews });

    case RECEIVE_PEERS:
      return Object.assign(newState, { peers: action.peers });

    case RECEIVE_PRICE:
      return Object.assign(newState, { price: action.price });

    case RECEIVE_CHANGE:
      return Object.assign(newState, { change: action.change });

    default:
      return state;
  }
};

export default stocksReducer;
