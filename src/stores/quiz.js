import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useQuizStore = defineStore("quiz", () => {
  const quizData = ref({
    quizTitle: "",
  });

  const questions = ref([
    {
      id: 0,
      type: "Choose",
      image: null,
      text: "question text placeholder?",
      mark: 1,
      answerKeyId: null,
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

  const addQuestion = () => {};

  const addAnswer = () => {};

  return { quizData,questions, addQuestion, addAnswer };
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
