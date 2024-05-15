<script setup>
  import { useQuizStore } from "@/stores/quiz";
  import QuestionAnswer from "./QuestionAnswer.vue";
  const { questionId } = defineProps(["questionId"]);
  const quizStore = useQuizStore();

  const handleAddOption = () => {
    quizStore.addAnswer(questionId)
  };
</script>

<template>
  <v-row>
    <v-col
      cols="12"
      v-for="answer in quizStore.questions[questionId].answers"
      :key="answer.id"
    >
      <QuestionAnswer
        :questionId="questionId"
        :answer="answer"
      />
    </v-col>
    <v-col cols="12">
      <v-btn
        variant="tonal"
        @click="handleAddOption"
        >Add Option</v-btn
      >
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped></style>
