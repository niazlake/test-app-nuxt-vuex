<template>
  <section>
    <h1>{{ pageTitle }}</h1>
    <ul>
      <li v-for="post of posts" :key="post.id">
        <a href="#" @click.prevent="openUser(post)">
          <h2>{{ post.title }}</h2>
          <p>{{ post.body }}</p>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  async fetch({ store }) {
    if (store.getters["posts/posts"].length === 0) {
      await store.dispatch("posts/fetch");
    }
  },
  data: () => ({
    pageTitle: "Страница списка постов"
  }),
  computed: {
    posts() {
      return this.$store.getters["posts/posts"];
    }
  },
  methods: {
    openUser(user) {
      this.$router.push("/posts/" + user.id);
    }
  },
  middleware: ['auth']
};
</script>

<style scoped></style>
