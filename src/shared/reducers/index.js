import { combineReducers } from 'redux';
import device from './deviceReducer';
// Components Reducers
import coins from '../../reducers/coinsReducer';

const rootReducer = combineReducers({
  coins,
  device
});

export default rootReducer;
