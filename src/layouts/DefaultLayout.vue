<template>
  <v-layout>
    <v-app-bar>
      <v-app-bar-title>quizzy</v-app-bar-title>
      <v-list class="d-flex">
        <v-list-item><router-link to="/">Home</router-link></v-list-item>
        <v-list-item><router-link to="/login">Login</router-link></v-list-item>
        <v-list-item
          ><router-link to="/generateExam"
            >GenerateExam</router-link
          ></v-list-item
        >
      </v-list>
    </v-app-bar>

    <v-main><router-view></router-view></v-main>
  </v-layout>
</template>

<script setup></script>

<style lang="scss" scoped></style>
