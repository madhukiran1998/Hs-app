export default (question = [], action) => {
  switch (action.type) {
    case "FECTH_ALL":
      return question;
    case "CREATE":
      return question;
    default:
      return question;
  }
};
