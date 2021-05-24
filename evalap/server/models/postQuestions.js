import mongoose from "mongoose";

const questionlists = mongoose.Schema({
  questions: String,
  options: String,
  answers: String,
  score: Number,
});

const postQuestionschema = mongoose.Schema({
  title: String,
  companyName: String,
  Website: String,
  questionsList: [questionlists],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const postQuestions = mongoose.model("postQuestions", postQuestionschema);

export default postQuestions;
