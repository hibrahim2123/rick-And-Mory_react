import { ADD_ITEM, REMOVE_ITEM } from "./Constants";

const initalState = [];

export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case REMOVE_ITEM:
      let newItems = [...state];
      newItems = newItems.filter((newItem) => newItem.id !== action.payload.id);
      return newItems;
    default:
      return state;
  }
};
