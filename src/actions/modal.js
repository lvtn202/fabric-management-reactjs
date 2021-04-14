import { Modal } from "../constants/action_types";

export const showModal = () => ({
  type: Modal.SHOW_MODAL,
});
export const hideModal = () => ({
  type: Modal.HIDE_MODAL,
});
export const changeModalTitle = (title) => ({
  type: Modal.CHANGE_MODAL_TITLE,
  payload: { title },
});
export const changeModalContent = (component) => ({
  type: Modal.CHANGE_MODAL_CONTENT,
  payload: { component },
});
