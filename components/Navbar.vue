<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Nuxt SPA</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <nuxt-link
            exact
            no-prefetch
            active-class="active"
            class="nav-link"
            to="/"
          >
            Home
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link active-class="active" class="nav-link" to="/about">
            About
          </nuxt-link>
        </li>

        <li class="nav-item">
          <nuxt-link active-class="active" class="nav-link" to="/users">
            Users
          </nuxt-link>
        </li>

        <li class="nav-item">
          <nuxt-link active-class="active" class="nav-link" to="/posts">
            Posts
          </nuxt-link>
        </li>

        <li class="nav-item" v-if="!hasToken">
          <nuxt-link active-class="active" class="nav-link" to="/login">
            Login
          </nuxt-link>
        </li>

        <li class="nav-item" v-else>
          <a
            @click.prevent="logout()"
            active-class="active"
            class="nav-link"
            to="/login"
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    }
  },
  computed: {
    hasToken() {
      return this.$store.getters.hasToken;
    }
  }
};
</script>

<style scoped></style>
