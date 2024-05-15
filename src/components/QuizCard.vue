<template>
  <v-row class="d-flex justify-center"
    ><v-col
      cols="11"
      md="8"
      xl="6"
    >
      <v-card elevation="3" class="d-flex flex-column align-center bg-grey-lighten-5 mt-5 pa-4">
        <div
          v-for="(question, index) in quizStore.questions"
          :key="question.id"
        >
          <QuestionCard :questionId="question.id" />
        </div>
        <v-btn class="my-2" @click="quizStore.addQuestion()"><v-icon>mdi-plus</v-icon></v-btn>

        <v-btn @click="console.log(quizStore.questions)">
          click to print the quiz data in the console
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
  import { useQuizStore } from "@/stores/quiz";
  import QuestionCard from "../components/question/QuestionCard.vue";
  const quizStore = useQuizStore();
</script>

<style lang="scss" scoped></style>
