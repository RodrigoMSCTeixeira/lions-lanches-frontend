<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
export default defineComponent({
  components: {
    Header,
    Footer,
  },
  // computed: {
  //   currentUser() {
  //     return this.$store.getters.[''];
  //   },
  // },

  methods: {
    logOut() {
      this.$store.dispatch("authUser/logout");
      this.$router.push("/login");
    },
  },
});
</script>
