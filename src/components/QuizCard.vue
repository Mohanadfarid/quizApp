<template>
  <div v-for="(question, index) in quizStore.questions" :key="index">
    <QuestionCard :questionId="question.id" />

  </div>
  <button @click="console.log(quizStore.questions)">click to print the quiz data in the console</button>
</template>

<script setup>
  import { useQuizStore } from "@/stores/quiz";
  import QuestionCard from "../components/question/QuestionCard.vue";
  const quizStore = useQuizStore();

</script>

<style lang="scss" scoped></style>
