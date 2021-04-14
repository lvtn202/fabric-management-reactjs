import { Modal } from "../constants/action_types";

const defaultState = {
    showModal: false,
    title: '',
    component: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case Modal.SHOW_MODAL:
      return {
          ...state,
          showModal: true,
      }
    case Modal.HIDE_MODAL:
        return {
            ...state,
            showModal: false,
        }
    case Modal.CHANGE_MODAL_TITLE:
      return {
          ...state,
          title: action.payload.title,
      }
    case Modal.CHANGE_MODAL_CONTENT:
      return {
          ...state,
          component: action.payload.component,
      }
    default:
      return state;
  }
};
