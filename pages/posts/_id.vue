<template>
  <section>
    <h1>{{post.title}}</h1>
    <p>{{post.body}}</p>
    <hr>
    <div v-for="comment of comments" :key="comment.id">
      <h3>{{comment.name}} - {{comment.email}}</h3>
      <br>
      <p>{{comment.body}}</p>
    </div>
  </section>
</template>

<script>
  export default {
    validate({ params }) {
      return /^\d+$/.test(params.id);
    },
    async asyncData({ $axios, params }) {
      const post = await $axios.$get(
        "https://jsonplaceholder.typicode.com/posts/" + params.id
      );
      const comments = await $axios.$get(
        `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
      )
      return {post, comments}
    },
    middleware: ['auth']
  };
</script>

<style scoped></style>
