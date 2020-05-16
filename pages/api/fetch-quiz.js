import questions from "../../data/questions";
import shuffle from "../../modules/shuffle";

export default (req, res) => {


  let qs = shuffle(questions).slice(0, 10);

  qs = qs.map(q => {
    delete q.correctAnswer;
    delete q.answerComment;
    return q;
  });

  res.status(200).json(qs);
}