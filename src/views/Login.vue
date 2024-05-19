<script setup>
  import { ref } from "vue";
  import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

  const router = useRouter();
  const authStore = useAuthStore();
  const email = ref("yyy@gmail.com");
  const password = ref("01224888722");

  const handleSubmit = () => {
    try {
      authStore
        .authenticate(
          {
            email: email.value,
            password: password.value,
          },
          "https://front.astra-tech.net/quiz/public/api/teacher/login"
        )
        .then(() => {
          router.replace({ path: "/" });
        });
    } catch (error) {
      alert("something went wrong");
    }
  };
</script>

<template>
  <v-row
    class="d-flex justify-center align-center"
    style="min-height: 100vh"
  >
    <v-col
      cols="11"
      md="7"
      lg="6"
    >
      <v-card
        elevation="5"
        class="pa-5"
      >
        <form>
          <v-text-field
            class="my-5"
            label="email"
            v-model="email"
          ></v-text-field>
          <v-text-field
            class="my-5"
            type="password"
            label="password"
            v-model="password"
          ></v-text-field>
          <v-btn
            @click.prevent="handleSubmit"
            color="success"
            >submit</v-btn
          >
        </form>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped></style>
