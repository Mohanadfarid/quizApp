<template>
  <div v-for="(question, index) in quizStore.quizData.questions" :key="index">
    <QuizQuestionCard :questionId="question.id" />

  </div>
  <button @click="console.log(quizStore.quizData.questions)">click to print the quiz data in the console</button>
</template>

<script setup>
  import { useQuizStore } from "@/stores/quiz";
  import QuizQuestionCard from "../components/question/QuizQuestionCard.vue";
  const quizStore = useQuizStore();

</script>

<style lang="scss" scoped></style>
