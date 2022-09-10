import { useReducer } from "react";
import uuid from "react-native-uuid";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.item];
    case "CHECK":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, check: !item.check };
        } else {
          return item;
        }
      });
    case "REMOVE":
      return state.filter((item) => {
        return item.id !== action.id;
      });
    default:
      return state;
  }
};

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = async (title) => {
    if (title === "") {
      return;
    }
    const hasId = await uuid.v4(title);

    dispatch({
      type: "ADD",
      item: {
        id: hasId,
        title: title,
        check: false,
      },
    });
  };
  const checkItem = (id) => {
    dispatch({
      type: "CHECK",
      id: id,
    });
  };
  const removeItem = (id) => {
    dispatch({
      type: "REMOVE",
      id: id,
    });
  };
  return [state, addItem, checkItem, removeItem];
};
