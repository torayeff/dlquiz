import questions from "../../data/questions";
import shuffle from "../../modules/shuffle";

// this will be replaced with database query
function getQuestion(questions, id) {
  let qs = { ...questions.filter(q => q.id === id)[0] };
  delete qs.correctAnswer;
  delete qs.answerComment;
  return qs;
}

export default (req, res) => {
  let qIds;
  if (req.body.questionsCount) {
    // return random questions
    qIds = shuffle(questions.map(q => q.id)).slice(0, parseInt(req.body.questionsCount));
  } else {
    qIds = req.body.questionsIds;
  }
  const qs = qIds.map(id => getQuestion(questions, id));
  res.status(200).json(qs);
}