<template>
    <div class="container">
        <nav class="header">
            <Header />
        </nav>
        <div class="main">
            <div class="post-item" v-for="post in posts" v-bind:key="post.id">
                <div class="post-time">
                    <span>{{
                        new Date(post.created * 1000).toLocaleDateString()
                    }}</span>
                </div>
                <div class="post-title">
                    <nuxt-link :to="`/posts/${post.slug}`">{{ post.title }}</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "~/components/ui/Header.vue";
import axios from "~/plugins/axios";
export default {
    async asyncData() {
        let { data } = await axios.get("/");
        return {
            posts: data.data.rows,
        };
    },
    components: {
        Header,
    },
};
</script>

<style scoped>
.container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    text-align: center;
    min-height: -webkit-fill-available;
}
.header {
    height: 6rem;
    width: 100%;
}
.post-item {
    text-align: left;
    display: flex;
    align-items: center;
}
.post-time {
    text-align: right;
    margin-right: 3rem;
}
.post-title {
    text-align: left;
}
</style>
