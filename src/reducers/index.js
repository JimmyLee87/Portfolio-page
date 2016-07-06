import { combineReducers } from 'redux';
import PortfolioReducer from './portfolio_reducer';

const rootReducer = combineReducers({
  portfolio: PortfolioReducer
});

export default rootReducer;
