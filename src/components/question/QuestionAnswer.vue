<script setup></script>

<template>
  <!-- mdi-checkbox-blank-outline -->
  <!-- mdi-circle-outline -->
  <v-col cols="12">
    <v-row>
      <v-col cols="11">
        <v-text-field
          prepend-icon="mdi-circle-outline"
          v-model="questionTitle"
          hide-details="auto"
          label="test"
        ></v-text-field>
      </v-col cols="2">
      <v-col>
        <label for="aaa"><v-icon>mdi-image-plus</v-icon></label>
        <input id="aaa" class="file-input" type="file">
      </v-col>
    </v-row>
  </v-col>
</template>

<style >
  .file-input{
    display:none ;
  } 
</style>
