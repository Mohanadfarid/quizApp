<script setup>
  import QuestionAnswer from "./QuestionAnswer.vue";
</script>

<template>
  <v-row>
    <QuestionAnswer />
    <QuestionAnswer />
    <v-col>
      <v-btn variant="tonal">Add Option</v-btn>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped></style>
