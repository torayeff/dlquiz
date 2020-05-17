import questions from "../../data/questions";

function getQuestion(questions, id) {
  return questions.filter(q => q.id === id)[0];
}

export default (req, res) => {
  const userAnswers = req.body.userAnswers;
  const qs = qIds.map(id => getQuestion(questions, id));
  res.status(200).json(qs);
}