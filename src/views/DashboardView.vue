<template>
  <section>
    <div class="col-md-12">
      <div class="card-container">Dashboard</div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DashboardPage",
  created() {
    this.$store.dispatch("listOrders/setOrders");
  },
});
</script>
