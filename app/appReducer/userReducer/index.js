import { fromJS } from 'immutable';
import { FECTH_ALL_USER, GET_USER_REQUEST } from './constants';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  isLoading: false,
  data: null,
});

/**
 * Merge route into the global application state
 */
export default function userReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case FECTH_ALL_USER:
      return state.set('isLoading', true);
    case GET_USER_REQUEST:
      return state.set('isLoading', true);
    default:
      return state;
  }
}
