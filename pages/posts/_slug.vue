<template>
    <div>
        <article>
            <!-- <h2>{{ article.title }}</h2>
            <p>{{ article.content }}</p> -->
            {{ async }}
            <!-- <footer>{{ footer }}</footer> -->
        </article>
    </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "~/plugins/axios";
export default {
    async asyncData() {
        let { data } = await axios.get("/");
        return {
            async: data,
        };
    },
    fetch({ store, params }) {
        
    },
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
