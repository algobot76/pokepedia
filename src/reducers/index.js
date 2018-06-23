import { combineReducers } from 'redux';
import { RECEIVE_COUNT, REQUEST_COUNT } from '../constants';

const count = (
  state = {
    isFetchingCount: false,
    count: 0
  },
  action
) => {
  switch (action.type) {
    case REQUEST_COUNT:
      return {
        ...state,
        isFetchingCount: true
      };
    case RECEIVE_COUNT:
      return {
        ...state,
        isFetchingCount: false,
        count: action.count
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  count
});

export default rootReducer;
