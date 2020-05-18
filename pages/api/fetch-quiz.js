import questions from "../../data/questions";

// this will be replaced with database query
function getQuestion(questions, id) {
  let qs = { ...questions.filter(q => q.id === id)[0] };
  delete qs.correctAnswer;
  delete qs.answerComment;
  return qs;
}

export default (req, res) => {
  const qIds = req.body.questionIds;
  const qs = qIds.map(id => getQuestion(questions, id));
  res.status(200).json(qs);
}