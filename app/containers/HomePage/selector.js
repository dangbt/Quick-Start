import { createSelector } from 'reselect';

const Route = state => state.get('route');

const getRoute = () => createSelector(Route, route => route.get('location'));

export { getRoute };
