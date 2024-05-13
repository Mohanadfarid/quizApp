<script setup>
  import { useQuizStore } from "@/stores/quiz";

  const { answer, questionId } = defineProps(["answer", "questionId"]);
  const quizStore = useQuizStore();
</script>

<template>
  <v-row class="d-flex align-center">
    <v-col cols="11">
      <v-text-field
        prepend-icon="mdi-circle-outline"
        v-model="quizStore.questions[questionId].answers[answer.id].text"
        hide-details="auto"
        label="radio answer"
      ></v-text-field>
    </v-col>
    <v-col
      class=""
      cols="1"
    >
      <v-file-input
        v-model="quizStore.questions[questionId].answers[answer.id].image"
        accept="image/*"
        label="AddImage"
      ></v-file-input>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped></style>
