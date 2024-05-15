<script setup>
  import { useQuizStore } from "@/stores/quiz";
  import QuestionAnswersContainer from "./QuestionAnswersContainer.vue";
  const { questionId } = defineProps(["questionId"]);

  const quizStore = useQuizStore();
</script>

<template>
  <v-row class="d-flex">
    <!-- question header -->
    <v-col>
      <v-text-field
        variant="underlined"
        v-model="quizStore.questions[questionId].text"
        hide-details="auto"
      ></v-text-field>
    </v-col>
    <!-- img input -->
    <v-col cols="1">
      <v-file-input
        v-model="quizStore.questions[questionId].image"
        accept="image/*"
        label="AddImage"
      ></v-file-input>
    </v-col>
  </v-row>
  <QuestionAnswersContainer :questionId="questionId" />
</template>

<style lang="scss" scoped></style>
