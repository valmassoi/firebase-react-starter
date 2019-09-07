import { createSelector } from 'reselect';

const initialState = {
  isAuthenticated: false,
};

export function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export const getAuthState = createSelector(
  state => state?.auth,
  auth => auth,
);

export const getIsAuthenticated = createSelector(
  getAuthState,
  auth => auth?.isAuthenticated,
);
