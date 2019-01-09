export const REGISTER_NEW_USER = 'REGISTER_NEW_USER';
export const registerNewUser = values => ({
  type: REGISTER_NEW_USER,
  values
});

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const authenticateUser = values => ({
  type: AUTHENTICATE_USER,
  values
});

export const START_AUTH_REQUEST = 'START_AUTH_REQUEST';
export const startAuthRequest = () => ({
  type: START_AUTH_REQUEST
});
