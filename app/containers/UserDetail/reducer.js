import { fromJS } from 'immutable';
import { FETCH_DETAIL_USER } from './constants';

const routeInitialState = fromJS({
  isLoading: false,
  data: null,
});

/**
 * Merge route into the global application state
 */
export default function userDetailReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case FETCH_DETAIL_USER:
      return state.set('isLoading', true);
    default:
      return state;
  }
}
