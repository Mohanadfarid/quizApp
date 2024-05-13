<script setup>
  const { answer, questionId } = defineProps(["answer", "questionId"]);
</script>

<template>
    <v-row>
      <v-col cols="11">
        <v-text-field
          prepend-icon="mdi-circle-outline"
          v-model="questionTitle"
          hide-details="auto"
          label="image answer"
        ></v-text-field>
      </v-col cols="2">
      <v-col>
        <label for="aaa"><v-icon>mdi-image-plus</v-icon></label>
        <input id="aaa" class="file-input" type="file">
      </v-col>
    </v-row>
</template>



<style lang="scss" scoped></style>
