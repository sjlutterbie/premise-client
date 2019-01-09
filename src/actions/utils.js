// Boilerplate for handling errors, making sure they're nicely formatted.

export const normalizeResponseErrors = res => {
  if(!res.ok) {
    if(
     res.headers.has('content-type') &&
     res.headers.get('content-type').startsWith('application/json')
    ) {
      // It's a nice JSON error, so decode it
      return res.json().then(err => Promise.reject(err));
    }
    // It's a less informative error, returned by express
    return Promise.reject({
      code: res.status,
      message: res.statusText
    });
  }
  // No error, so proceed with promise chain
  return res;
};