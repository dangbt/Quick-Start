import FetcherFactory from './fetcherFactory';
import { API_URL } from '../../constants';

const { localStorage = {} } = global.window;

const getHeaders = () => {
  const { token } = localStorage;
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const vredFetcher = FetcherFactory.createApi({
  urlModifier: (url, fullPath) => (fullPath ? url : `${API_URL}/${url}`),
  getHeaders: () => getHeaders(),
});
