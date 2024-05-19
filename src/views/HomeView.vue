<script setup>
  import { onMounted, computed, ref } from "vue";
  import { useAuthStore } from "../stores/auth";
  import QuizCard from "../components/QuizCard.vue";
  const { token } = useAuthStore();
  const formsArray = ref([]);

  onMounted(async () => {
    try {
      const res = await fetch(
        "https://front.astra-tech.net/quiz/public/api/teacher/form",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      formsArray.value = await res.json();
    } catch (error) {
      console.log(error);
    }
  });
</script>

<template>
  <v-row class="mx-5 d-flex justify-center">
    <template
      v-for="quizData in formsArray.data"
      :key="quizData.id"
    >
      <v-col
        cols="11"
        sm="6"
        md="4"
        lg="3"
        ><QuizCard :quizData="quizData"
      /></v-col> </template
  ></v-row>
</template>
