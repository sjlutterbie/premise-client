export const normalizeResponseErrors = res => {
  
  if(!res.ok) {
    if (
      res.headers.has('content-type') &&
      res.headers.get('content-type').startswith('application/json')
    ) {
      // It's a standard JSON error
      return res.json().then(err => Promise.reject(err));
    }
      // It's a less informative error, returned by express
      return Promise.reject({
        code: res.status,
        message: res.statusText
      });
  }
  
  // No error, continue with promise chain
  return res;
  
};