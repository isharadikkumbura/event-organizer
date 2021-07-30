import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './types';
import { LOGIN_QUERY, LOAD_USER_QUERY } from '../graphql/query';
import { REGISTER_USER } from '../graphql/mutation';
import { GraphQLClient } from 'graphql-request';

import { useClient, BASE_URL } from '../graphql/client';

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await useClient().request(LOAD_USER_QUERY);
    dispatch({
      type: USER_LOADED,
      payload: res,
    });
  } catch (err) {
    const errors = err.response.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.message, 'light')));
    }
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = (formData) => async (dispatch) => {
  const client = new GraphQLClient(BASE_URL);
  const variables = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    password: formData.password,
    phone: formData.phone,
  };

  try {
    const res = await client.request(REGISTER_USER, variables);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.message, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const variables = { email: email, password: password };

  try {
    const res = await useClient().request(LOGIN_QUERY, variables);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.login,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.message, 'danger')));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });
