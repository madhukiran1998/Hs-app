import postQuestions from "../models/postQuestions.js";

export const getTestlist = async (req, res) => {
  try {
    const postQuestion = await postQuestions.find();
    res.status(200).json(postQuestion);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createQuestions = async (req, res) => {
  console.log(req.body);
  const question_list = req.body;
  const newQuestion_list = postQuestions(question_list);

  try {
    await newQuestion_list.save();
    res.status(201).json(newQuestion_list);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
