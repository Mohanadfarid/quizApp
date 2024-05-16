<template>
  <v-sheet
    class="pa-6 mx-2 rounded position-relative"
    elevation="3"
  >
    <v-row class="px-3">
      <v-col><h2 class="text-center">SETTINGS</h2></v-col>
    </v-row>
    <v-row class="d-flex justify-space-between align-center my-4 pa-0">
      <v-col
        ><v-text-field
          v-model="quizStore.setting.title"
          hide-details="auto"
          variant="outlined"
        ></v-text-field
      ></v-col>
    </v-row>
    <v-textarea
      variant="outlined"
      auto-grow
      rows="2"
      v-model="quizStore.setting.description"
    ></v-textarea>

    <!-- switches section -->
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-switch
          v-model="quizStore.setting.requireEmail"
          label="require Email"
          hide-details
          inset
          color="success"
        ></v-switch
      ></v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-switch
          v-model="quizStore.setting.requirePassword"
          label="require password"
          hide-details
          inset
          color="success"
        ></v-switch>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-switch
          v-model="quizStore.setting.isNumberOfQuestionsLimited"
          label="limit the number of questions per quiz"
          hide-details
          inset
          color="success"
        ></v-switch
      ></v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-switch
          v-model="quizStore.setting.isOnce"
          label="take the exam only once"
          hide-details
          inset
          color="success"
        ></v-switch
      ></v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-switch
          v-model="quizStore.setting.isAtSpecificTime"
          label="take exam at specific time"
          hide-details
          inset
          color="success"
        ></v-switch
      ></v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-switch
          v-model="quizStore.setting.hasDuration"
          label="has duration"
          hide-details
          inset
          color="success"
        ></v-switch
      ></v-col>
    </v-row>

    <v-divider class="my-5"></v-divider>

    <!-- conditionals text fields -->
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-if="quizStore.setting.requirePassword"
          v-model="quizStore.setting.password"
          hide-details="auto"
          variant="outlined"
          label="password"
        ></v-text-field
      ></v-col>
      <v-col cols="12">
        <v-text-field
          v-if="quizStore.setting.isNumberOfQuestionsLimited"
          v-model="quizStore.setting.numberOfQuestionsLimit"
          hide-details="auto"
          variant="outlined"
          type="number"
          label="number of questions per exam"
        ></v-text-field
      ></v-col>
      <v-col cols="12">
        <v-text-field
          v-if="quizStore.setting.hasDuration"
          v-model="quizStore.setting.duration"
          hide-details="auto"
          variant="outlined"
          type="number"
          label="duration"
          hint="(in minutes)"
        ></v-text-field
      ></v-col>
    </v-row>

    <v-row v-if="quizStore.setting.isAtSpecificTime">
      <v-col
        cols="12"
        md="4"
        ><v-text-field
          v-model="quizStore.setting.quizTimeDetails.date"
          hide-details="auto"
          variant="outlined"
          type="number"
          label="date"
        ></v-text-field
      ></v-col>
      <v-col
        cols="12"
        md="4"
        ><v-text-field
          v-model="quizStore.setting.quizTimeDetails.date"
          hide-details="auto"
          variant="outlined"
          type="number"
          label="from"
        ></v-text-field
      ></v-col>
      <v-col
        cols="12"
        md="4"
        ><v-text-field
          v-model="quizStore.setting.quizTimeDetails.date"
          hide-details="auto"
          variant="outlined"
          type="number"
          label="to"
        ></v-text-field
      ></v-col>
    </v-row>
    <!-- close btn -->
    <div class="mt-5 d-flex justify-end">
      <v-btn
        class="bg-success"
        @click="emit('closeModal')"
        >confirm</v-btn
      >
    </div>
  </v-sheet>
</template>

<script setup>
  import { useQuizStore } from "@/stores/quiz";

  const quizStore = useQuizStore();
  const emit = defineEmits(["closeModal"]);
</script>

<style lang="scss" scoped></style>
