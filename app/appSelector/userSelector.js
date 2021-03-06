import { createSelector } from 'reselect';

const User = state => state.get('user');

const getUser = () => createSelector(User, user => user.get('isLoading'));
const isLoading = () => createSelector(User, user => user.get('isLoading'));

export { getUser, isLoading };
