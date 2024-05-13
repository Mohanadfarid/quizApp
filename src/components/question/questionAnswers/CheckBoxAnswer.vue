<script setup>
  const { answer, questionId } = defineProps(["answer", "questionId"]);
</script>


<template>
        <v-row class="d-flex align-center">
      <v-col cols="11">
        <v-text-field
          prepend-icon="mdi-circle-outline"
          v-model="questionTitle"
          hide-details="auto"
          label="radio answer"
        ></v-text-field>
      </v-col >
      <v-col class="" cols="1">
        <label for="aaa"><v-icon>mdi-image-plus</v-icon></label>
        <input id="aaa" class="file-input" type="file">
      </v-col>
    </v-row>
</template>



<style lang="scss" scoped></style>
