<template>
  <div>
    <article>
      <h2>{{ article.title }}</h2>
      <p>{{ article.content }}</p>
    </article>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  computed: {
    ...mapState({
      article(state) {
        return state.modules.articles.articles.find(
          (article) => article.slug === this.slug
        );
      },
    }),
  },
};
</script>

<style></style>
