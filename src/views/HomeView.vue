<template>
  <section class="homePage">
    <Login />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Login from "@/components/Login/index.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Login,
  },
});
</script>
