import { ADD_ITEM, REMOVE_ITEM } from "./Constants";

export const addItem = (object) => {
  return {
    type: ADD_ITEM,
    payload: object,
  };
};
export const removeItem = (object) => {
  return {
    type: REMOVE_ITEM,
    payload: object,
  };
};
