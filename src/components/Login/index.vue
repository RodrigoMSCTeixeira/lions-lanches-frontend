<template>
  <div class="form-login col-md-12">
    <div class="card card-container">
      <Form @submit="handleLogin" :validation-schema="schema">
        <div class="form-group">
          <label for="email">Email</label>
          <Field name="email" type="text" class="form-control" />
          <ErrorMessage name="email" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="password">Senha</label>
          <Field name="password" type="password" class="form-control" />
          <ErrorMessage name="password" class="error-feedback" />
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Entrar</span>
          </button>
        </div>

        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { mapGetters } from "vuex";

interface AuthUser {
  email: string;
  password: string;
}

export default defineComponent({
  name: "LoginComponent",
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  data: () => {
    const schema = yup.object().shape({
      email: yup.string().required("Email é obrigatório!"),
      password: yup.string().required("Senha é obrigatória!"),
    });

    return {
      loading: false,
      message: "",
      schema,
    };
  },

  computed: mapGetters("authUser", ["status"]),

  created() {
    if (this.status) {
      this.$router.push("/about");
    }
  },

  methods: {
    handleLogin(user: AuthUser) {
      this.loading = true;
      this.$store.dispatch("authUser/login", user).then(
        () => {
          this.$router.push("/about");
        },
        (error: any) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
});
</script>

<style lang="scss" scoped>
.form-login {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .card {
    padding: 25px;
  }
}
</style>
