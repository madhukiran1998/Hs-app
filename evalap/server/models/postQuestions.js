import mongoose from "mongoose";

const postQuestionschema = mongoose.Schema({
  Test_id: Number,
  title: String,
  description: String,
  question_list: [
    {
      id: Number,
      question: String,
      options: [String],
      answer: String,
      score: Number,
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const postQuestions = mongoose.model("postQuestions", postQuestionschema);

export default postQuestions;
