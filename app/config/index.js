const configs = {
  development: {
    API_URL: process.env.API_URL || 'https://localhost:5500/api',
  },

  production: {
    API_URL: process.env.API_URL || 'https://api.sitetechnologies.io/api',
  },
};
console.log(process.env.NODE_ENV);
const config = configs[process.env.NODE_ENV || 'development'];

export default config;
