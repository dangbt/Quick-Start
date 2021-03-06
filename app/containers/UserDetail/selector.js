import { createSelector } from 'reselect';

const UserDetail = state => state.get('user');

const isLoading = () =>
  createSelector(UserDetail, userDetail => userDetail.get('isLoading'));

export { isLoading };
