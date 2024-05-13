<script setup>

  import CheckBoxAnswer from "./questionAnswers/CheckBoxAnswer.vue";
  import ImageAnswer from "./questionAnswers/ImageAnswer.vue";
  import RadioAnswer from "./questionAnswers/RadioAnswer.vue";
  import TrueFalseAnswer from "./questionAnswers/TrueFalseAnswer.vue";
  import { useQuizStore } from "@/stores/quiz";

  const quizStore = useQuizStore();
  const { answer, questionId } = defineProps(["answer", "questionId"]);

  const answerTypeResolver = () => {
    const { type } = quizStore.questions[questionId];
    switch (type) {
      case "Choose":
        return RadioAnswer;
      case "Multiple Answers":
        return CheckBoxAnswer;
      case "True  Or False":
        return TrueFalseAnswer;
      default:
        return ImageAnswer;
    }
  };
</script>

<template>
<component :answer="answer" :questionId="questionId" :is="answerTypeResolver()"></component>
</template>

<style>
  .file-input {
    display: none;
  }
</style>
