import questions from "../../data/questions";

function getQuestion(questions, id) {
  return questions.filter(q => q.id === parseInt(id))[0];
}

export default (req, res) => {
  const questionIds = req.body.questionIds;
  const userAnswers = req.body.userAnswers;

  let results = questionIds.map(id => {
    let question = getQuestion(questions, id);
    let userAnswer = userAnswers[id];

    // parse userAnswer
    if (question.type === "number") {
      userAnswer = parseFloat(userAnswer);
    } else if (question.type === "one_correct") {
      userAnswer = parseInt(userAnswer)
    } else if (question.type === "multi_correct") {
      userAnswer = userAnswer.map(ans => parseInt(ans));
    }

    // check answers
    let correct = true;
    if (question.type === "text") {
      // no automatic checking
    } else if (question.type === "number" || question.type === "one_correct") {
      correct = (userAnswer === question.correctAnswer);
    } else if (question.type === "multi_correct") {
      correct = (userAnswer.sort().join("-") === question.correctAnswer.sort().join("-"))
    }

    question.userAnswer = userAnswer;
    question.correct = correct;
    return question;
  });

  res.status(200).json(results);
}