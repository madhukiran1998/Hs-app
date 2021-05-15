import { ActionTypes } from "../constants/action-type";

export const setQuestion = (postQuestion) => {
  console.log(postQuestion);
  return {
    type: ActionTypes.SET_QUESTION,
    payload: { postQuestion },
  };
};

export const rmvQuestion = (questions) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_QUESTIONS,
    payload: {},
  };
};
