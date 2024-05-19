<script setup>
  import { computed } from "vue";
  const { quizData } = defineProps(["quizData"]);

  const imgSrc = computed(() => {
    if (quizData.image === null) {
      return "https://placehold.jp/150x150.png";
    } else {
      return quizData.image;
    }
  });
</script>

<template>
  <v-card
    elevation="5"
    class="mx-auto mt-10"
  >
    <div class="d-flex justify-space-between">
      <v-card-title>{{ quizData.name }}</v-card-title>
      <v-card-subtitle class="pt-4">
        {{ quizData.degree }} points</v-card-subtitle
      >
    </div>

    <v-card-text class="text-center">
      <div>{{ quizData.desc }}</div>
    </v-card-text>

    <v-card-actions class="d-flex justify-center">
      <router-link :to="{ path: `/${quizData.id}/examTakers` }">
        <v-btn
          color="success"
          text="view Exam takers"
        ></v-btn
      ></router-link>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss" scoped></style>
