<script setup>
import { ref } from 'vue';

  const questionTitle = ref("Chose the correct Option ?");
  const questionImage = ref(null);
</script>
<template>
  <v-row>
    <v-col cols="8">
      <v-text-field
        v-model="questionTitle"
        hide-details="auto"
      ></v-text-field>
    </v-col>
    <!-- img input -->
    <v-col >
      <v-file-input
        v-model="questionImage"
        accept="image/*"
        label="AddImage"
      ></v-file-input>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped></style>
