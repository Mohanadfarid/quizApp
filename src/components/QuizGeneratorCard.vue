<template>
  <v-row class="d-flex justify-center">
    <v-col
      cols="11"
      md="8"
      xl="6"
    >
      <v-card
        elevation="3"
        class="d-flex flex-column align-center bg-grey-lighten-5 mt-5 pa-4"
      >
        <!-- quiz header -->

        <v-card-title
          class="d-flex justify-space-between align-center my-5"
          style="width: 100%"
          ><h2>
            <v-btn
              class="bg-success mr-4"
              icon="mdi-cog"
              @click="isSettingOpen = true"
            ></v-btn
            >{{ quizStore.setting.title }}
          </h2>
          <v-btn color="success"
            >total : {{ quizStore.GetTotalMarks }}
          </v-btn></v-card-title
        >

        <!-- settings component  -->
        <v-dialog
          max-width="600"
          v-model="isSettingOpen"
          width="auto"
        >
          <SettingsCard @closeModal="isSettingOpen = false" />
        </v-dialog>

        <v-col
          v-for="(question, index) in quizStore.questions"
          :key="question.id"
        >
          <QuestionCard :questionId="question.id" />
        </v-col>
        <v-btn
          class="my-2"
          @click="quizStore.addQuestion()"
          ><v-icon>mdi-plus</v-icon></v-btn
        >

        <v-btn
          @click="
            console.log({
              questions: quizStore.questions,
              ...quizStore.setting,
            })
          "
        >
          click to print the quiz data in the console
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
  import { useQuizStore } from "@/stores/quiz";
  import QuestionCard from "../components/question/QuestionCard.vue";
  import SettingsCard from "./SettingsCard.vue";
  import { ref } from "vue";
  const quizStore = useQuizStore();

  const isSettingOpen = ref(false);
</script>

<style lang="scss" scoped></style>
