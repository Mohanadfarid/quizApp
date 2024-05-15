<script setup>
  import { useQuizStore } from "@/stores/quiz";
  import { computed } from "vue";
  const { answer, questionId } = defineProps(["answer", "questionId"]);
  const quizStore = useQuizStore();

  const IsAnswerKey = computed(() => {
    return quizStore.questions[questionId].answerKeyId === answer.id
      ? true
      : false;
  });

  const classes = {
    "bg-green-lighten-5": IsAnswerKey.value,
    "text-h4": IsAnswerKey.value,
    "rounded-lg": IsAnswerKey.value,
  };
</script>

<template>
  <v-row
    class="d-flex align-center"
    :class="classes"
  >
    <v-col cols="11">
      <v-text-field
        variant="solo-filled"
        append-inner-icon="mdi-circle-outline"
        v-model="quizStore.questions[questionId].answers[answer.id].text"
        hide-details="auto"
      ></v-text-field>
    </v-col>
    <v-col
      class=""
      cols="1"
    >
      <v-file-input
        class="d-flex"
        v-model="quizStore.questions[questionId].answers[answer.id].image"
        accept="image/*"
        label="AddImage"
      ></v-file-input>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped></style>
