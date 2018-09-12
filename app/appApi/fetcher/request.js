import 'whatwg-fetch';

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  // parse response
  return response.json().then(json =>
    // eslint-disable-line arrow-body-style
    ({
      json,
      throwError: true,
    }),
  );
}

// this checks if response had an error and in this case it throws it
function checkException(response) {
  if (response.throwError === true) {
    const error = new Error(response.errmsg);
    error.error = response.json;
    throw error;
  }

  return response;
}

export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(checkException)
    .then(parseJSON);
}
