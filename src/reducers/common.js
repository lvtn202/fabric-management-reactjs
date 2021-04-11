import { SHOW_LOADING, HIDE_LOADING } from "./../constants/action_types";

const defaultState = {
  token: null,
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      state.loading = true;
      return { ...state };
    case HIDE_LOADING:
      state.loading = false;
      return { ...state };
    default:
      return state;
  }
};
