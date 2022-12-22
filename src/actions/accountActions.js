import authService from 'src/services/authService';

export const LOGIN_REQUEST = '@account/login-request';
export const LOGIN_SUCCESS = '@account/login-success';
export const LOGIN_FAILURE = '@account/login-failure';
export const SILENT_LOGIN = '@account/silent-login';
export const LOGOUT = '@account/logout';

export function login(email, password) {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });

      const user = await authService.login(email, password);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          user
        }
      });
    } catch (e) {
      dispatch({
        type: LOGIN_FAILURE
      });
      throw e;
    }
  };
}

export function logout() {
  return async (dispatch) => {
    authService.logout();

    dispatch({ type: LOGOUT });
  };
}

export function updateUserData(user) {
  return async (dispatch) => {
    dispatch({
      type: SILENT_LOGIN,
      payload: {
        user
      }
    });
  };
}
