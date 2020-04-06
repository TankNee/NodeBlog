<template>
    <div class="container">
        <nav class="header">
            <Header />
        </nav>
        <article class="article-content">
            <markdown-it-vue
                class="md-body"
                id="nice"
                :content="post.content ? post.content : ''"
                :options="options"
                ref="md"
            />
        </article>
        <div class="footer">
            <Footer />
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "~/plugins/axios";
import Header from "~/components/ui/Header.vue";
import Footer from "~/components/ui/Footer.vue";

export default {
    async asyncData({ params }) {
        let article = await axios.request({
            url: "/article",
            method: "get",
            baseUrl: process.env.baseUrl,
            params: {
                slug: params.slug,
            },
        });
        return {
            post: article,
        };
    },
    fetch({ store, params }) {},
    data() {
        return {
            slug: this.$route.params.slug,
            options: {
                markdownIt: {
                    html: true,
                    linkify: true,
                },
                linkAttributes: {
                    attrs: {
                        target: "_blank",
                        rel: "noopener",
                    },
                },
            },
        };
    },
    components: {
        Header,
        Footer,
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

<style>
.container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    min-height: -webkit-fill-available;
}
.header {
    height: 6rem;
    width: 100%;
}
.article-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 64%;
    min-width: 64%;
}
.md-body {
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
    max-width: 64%;
    min-width: 64%;
}
</style>
