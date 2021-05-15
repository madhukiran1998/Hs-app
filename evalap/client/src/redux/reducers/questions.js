import { ActionTypes } from "../constants/action-type";
const initialstate = {
  finalQuestions: [],
  finalOptions: [],
  finalAnswer: [],
  finalScore: [],
};

export const questionreducer = (state = initialstate, { type, payload }) => {
  console.log("this is payload", payload);

  const addedstate = () => {
    state.finalAnswer.push(payload.answers);
    state.finalOptions.push(payload.options);
    state.finalQuestions.push(payload.questions);
    state.finalScore.push(payload.score);
    return state;
  };
  switch (type) {
    case ActionTypes.SET_QUESTION:
      return addedstate;

    default:
      return state;
  }
};
