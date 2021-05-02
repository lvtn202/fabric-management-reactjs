import { Recall } from "./../constants/action_types";

const defaultState = {
  listRecall: [],
  detailRecall: {},
  listFabricRecall: [],
  listFabricOfDyeplant: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case Recall.FETCH_LIST_RECALL:
    case Recall.FETCH_LIST_RECALL_FAILED:
      return {
        ...state,
        listRecall: [],
      };
    case Recall.FETCH_LIST_RECALL_SUCCESS:
      return {
        ...state,
        listRecall: action.payload.data.result,
      };
    case Recall.FETCH_DETAIL_RECALL:
    case Recall.FETCH_DETAIL_RECALL_FAILED:
      return {
        ...state,
        detailRecall: {},
      };
    case Recall.FETCH_DETAIL_RECALL_SUCCESS:
      return {
        ...state,
        detailRecall: action.payload.data.result,
      };
    case Recall.FETCH_LIST_FABRIC_RECALL:
    case Recall.FETCH_LIST_FABRIC_RECALL_FAILED:
      return {
        ...state,
        listFabricRecall: [],
      };
    case Recall.FETCH_LIST_FABRIC_RECALL_SUCCESS:
      return {
        ...state,
        listFabricRecall: action.payload.data.result,
      };
    case Recall.FETCH_LIST_FABRIC_OF_DYEPLANT:
    case Recall.FETCH_LIST_FABRIC_OF_DYEPLANT_FAILED:
      return {
        ...state,
        listFabricOfDyeplant: [],
      };
    case Recall.FETCH_LIST_FABRIC_OF_DYEPLANT_SUCCESS:
      return {
        ...state,
        listFabricOfDyeplant: action.payload.data.result,
      };
    default:
      return state;
  }
};
