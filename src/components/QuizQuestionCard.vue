<script setup>
  import { ref } from "vue";
import Question from "./Question.vue"
  const questionType = ref("Choose");
</script>
<template>
  <v-card class="pa-8 mt-8">
    <!-- select question type -->
    <v-row>
      <v-col cols="3"
        ><v-select
          class="width-25"
          v-model="questionType"
          :items="['Choose', 'Multiple Answers', 'True  Or False','images']"
          variant="solo-filled"
        ></v-select
      ></v-col>
    </v-row>

    <!-- the question iteself -->
    <Question/>
    
  </v-card>

</template>

<style lang="scss" scoped></style>
