<script setup>
  import Question from "./Question.vue";
  import { useQuizStore } from "@/stores/quiz";
  const { questionId } = defineProps(["questionId"]);
  const quizStore = useQuizStore();
</script>
<template>
  <v-card
    elevation="8"
    class="mt-10 pa-8"
  >
    <!-- select question type -->
    <v-row>
      <v-col
        cols="12"
        sm="6"
        lg="4"
        ><v-select
          class="width-25"
          v-model="quizStore.questions[questionId].type"
          :items="['Choose', 'Multiple Answers', 'True  Or False', 'images']"
          variant="solo-filled"
        ></v-select
      ></v-col>
      <v-col
        ><v-select
          class="width-25"
          :items="quizStore.GetAnswersId(questionId)"
          v-model="quizStore.questions[questionId].answerKeyId"
          variant="solo-filled"
        >
        </v-select>
      </v-col>
      <v-col>
        <v-text-field
          label="mark"
          type="number"
          v-model="quizStore.questions[questionId].mark"
        >
        </v-text-field>
      </v-col>
    </v-row>

    <!-- the question iteself -->
    <Question :questionId="questionId" />
  </v-card>
</template>

<style lang="scss" scoped></style>
