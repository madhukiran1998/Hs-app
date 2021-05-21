import { ActionTypes } from "../constants/action-type";
const initialstate = [
  {
    title: "",
    companyName: "",
    Website: "",
    questionsList: [
      {
        question: "",
        options: "",
        Answers: "",
        score: 1,
      },
    ],
  },
];

export const questionreducer = (state = initialstate, { type, payload }) => {
  // console.log("this is payload", payload);

  // const addedstate = () => {
  //   state.finalAnswer.push(payload.answers);
  //   state.finalOptions.push(payload.options);
  //   state.finalQuestions.push(payload.questions);
  //   state.finalScore.push(payload.score);
  //   return state;
  // };
  switch (type) {
    case ActionTypes.SET_QUESTION:
      return state;

    default:
      return state;
  }
};
