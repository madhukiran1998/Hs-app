import axios from "axios";

const url = "/list";

export const fetchquestions = () => axios.get(url);
export const createPost = (newquestions) => axios.post(url, newquestions);
