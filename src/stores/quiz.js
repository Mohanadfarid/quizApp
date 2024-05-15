import { ref, computed } from "vue";
import { defineStore } from "pinia";

const initialQuestion = {
  id: 0,
  type: "Choose",
  image: null,
  text: "question text placeholder?",
  mark: 1,
  answerKeyId: null,
  answerKeyIds: null,
  answers: [
    {
      id: 0,
      text: "answer 1 placeholder",
      image: null,
    },
    {
      id: 1,
      text: "answer 2 placeholder",
      image: null,
    },
  ],
};

export const useQuizStore = defineStore("quiz", () => {
  const questions = ref([
    {
      id: 0,
      type: "Choose",
      image: null,
      text: "question text placeholder?",
      mark: 1,
      answerKeyId: 1,
      answerKeyIds: null,
      answers: [
        {
          id: 0,
          text: "answer 1 placeholder",
          image: null,
        },
        {
          id: 1,
          text: "answer 2 placeholder",
          image: null,
        },
      ],
    },
  ]);

  const setting = ref({
    mark: 1,
    title: "quiz title placeholder",
    description: "this is exam description example placeholder",
    image: null,
    requireEmail:true,
    requirePassword:false,
    password:"",
    numberOfQuestions:0,
    isOnce:false,
    isAtSpecificTime:false,
    duration:30,
    quizTimeDetails:{
      date:"",
      from:"",
      to:"",
      hasDuration:false
    }
  });
 F
  const addQuestion = () => {
    const newQuestionObj = JSON.parse(JSON.stringify(initialQuestion));
    newQuestionObj.id = questions.value.length;
    questions.value.push(newQuestionObj);
  };

  const addAnswer = (questionId) => {
    const newAnswerObj = JSON.parse(JSON.stringify(initialQuestion.answers[0]));
    newAnswerObj.id = questions.value[questionId].answers.length;
    questions.value[questionId].answers.push(newAnswerObj);
  };

  return { questions, setting, addQuestion, addAnswer, initialQuestion };
});

// {
//   "formData": [
//       {
//           "questionType": "Choose",
//           "questionValue": "Chose the correct Option ?",
//           "questionImg": null,
//           "questionMark": 1,
//           "answers": [
//               {
//                   "value": "Option 1",
//                   "isCorrect": true,
//                   "img": null
//               },
//               {
//                   "value": "Option 2",
//                   "isCorrect": false,
//                   "img": null
//               }
//           ]
//       }
//   ],
//   "formSettingData": {
//       "questionsMark": "1",
//       "sectionTitle": "Quiz 1",
//       "sectionDescription": null,
//       "formImg": null,
//       "email": true,
//       "password": false,
//       "passwordValue": "",
//       "userQuestionCount": 0,
//       "isOnce": false,
//       "anyTime": true,
//       "duration": 30,
//       "specificTime": false,
//       "examTime": {
//           "date": "",
//           "from": "",
//           "to": "",
//           "duration": 0,
//           "durationSwitch": false
//       }
//   }
// }
