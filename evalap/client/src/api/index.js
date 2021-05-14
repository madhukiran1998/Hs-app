import axios from "axios";

const url = "https://localhost:5000/list";

export const fetchquestions = () => axios.get(url);
