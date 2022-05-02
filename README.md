# Deep Learning Quiz

This is my attempt to collect deep learning related questions from popular video lectures such as CS230, CS231n, etc. The work is still in progress. For now I only include entry-level question. In the future, I plan to add more questions and categorize according to subject and difficulty levels. You can also contribute to this repository by adding quiz questions. I hope this will be helpful for all those who are grasping the deep learning concepts.

# How to add new questions?
New questions can be added simply by editing questions.json file in data folder. Currently, only three types of questions are supported: **one_correct**, **multi_correct**, **text**, **number**. **one_correct** questions are self explanatory, while in **multi_correct** questions there cane multiple correct answers. In **text** questions, there is no an explicit answer choice, and the answer is only hidden before revealing the correct answer. All questions support LaTeX and HTML formatting. The important point is to keep questions ids unique. Below is an example for the **multi_correct** question type:
```
{
    "id": 56,
    "text": "Which of the following propositions are true about a CONV layer? (Check all that apply.)",
    "type": "multi_correct",
    "answers": [
      "The number of weights depends on the depth of the input volume.",
      "The number of biases is equal to the number of filters.",
      "The total number of parameters depends on the stride.",
      "The total number of parameters depends on the padding."
    ],
    "correctAnswer": [
      0,
      1
    ],
    "answerComment": "",
    "source": "CS230: Deep Learning. Winter Quarter 2019. Stanford University."
  },
```

I plan to add question adding form soon, or feel free to contribute.

# Deployment and Demo
I used [React.js](https://reactjs.org/) framework with [Next.js](https://nextjs.org/) as backend since the latter allows easy server side rendering and free hosting. This particular deep learning quiz is hosted [here](https://dlquiz.vercel.app/)

# Can I use it for other types of quizzes?
Yes, it is super easy to modify this according to your needs. All you need is to modify questions.json file.
