import mongoose from "mongoose";

const questionlists = mongoose.Schema({
  question: String,
  options: String,
  answer: String,
  score: Number,
});

const postQuestionschema = mongoose.Schema({
  title: String,
  companyName: String,
  Website: String,
  questions_list: [questionlists],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const postQuestions = mongoose.model("postQuestions", postQuestionschema);

export default postQuestions;
