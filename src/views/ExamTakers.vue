<script setup>
  import { onMounted, ref } from "vue";
import { useAuthStore } from "../stores/auth";
  import { useRoute } from "vue-router";
  const route = useRoute();
  const { token } = useAuthStore();
  const id = parseInt(route.params.id);
  const studentsData = ref([]);
  onMounted(async () => {
    try {
      const res = await fetch(
        `https://front.astra-tech.net/quiz/public/api/form/${id}/student`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = await res.json();
      studentsData.value = data;
    } catch (error) {
      console.log(error);
    }
  });
</script>

<template>
  <v-table class="mx-5">
    <thead >
      <tr>
        <th scope="col">#</th>
        <th scope="col">name</th>
        <th scope="col">user_email</th>
        <th scope="col">degree</th>
        <th scope="col">start_time</th>
        <th scope="col">end_time</th>
        <th scope="col">finish_in_time</th>
        <th scope="col">questions_count</th>
        <th scope="col">right_answers_count</th>
        <th scope="col">wrong_answers_count</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(student, index) in studentsData"
        :key="index"
      >
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ student.name }}</td>
        <td>{{ student.user_email }}</td>
        <td>{{ student.degree }}</td>
        <td>{{ student.start_time }}</td>
        <td>{{ student.end_time }}</td>
        <td>{{ student.finish_in_time }}</td>
        <td>{{ student.questions_count }}</td>
        <td>{{ student.right_answers_count }}</td>
        <td>{{ student.wrong_answers_count }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<style lang="scss" scoped></style>
