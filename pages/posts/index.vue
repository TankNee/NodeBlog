<template>
    <div class="container">
        <nav class="header">
            <Header />
        </nav>
        <h1>
            Post
        </h1>
        <section class="main list">
            <ul style="padding-right: 4rem;">
                <li v-for="post in posts" v-bind:key="post.id">
                    <span class="post-time">{{
                        new Date(post.created * 1000).toLocaleDateString()
                    }}</span>
                    <nuxt-link class="post-title" :to="`/posts/${post.slug}`">{{
                        post.title
                    }}</nuxt-link>
                </li>
            </ul>
        </section>
        <div>
            <el-pagination
                layout="prev, pager, next"
                :total="totalCount"
                :page-size="pageSize"
                prev-text="ᴘʀᴇᴠ"
                next-text="ɴᴇxᴛ"
                :background="true"
                @current-change="paginationChange"
            >
            </el-pagination>
        </div>
        <div class="footer">
            <Footer />
        </div>
    </div>
</template>

<script>
import Header from "~/components/ui/Header.vue";
import Footer from "~/components/ui/Footer.vue";
import axios from "~/plugins/axios";
export default {
    async asyncData() {
        let { rows, count } = await axios.request({
            url: "/article",
            method: "get",
            baseUrl: process.env.baseUrl,
            params: {
                pageNum: 1,
                pageSize: 10,
            },
        });
        return {
            posts: rows,
            totalCount: count,
        };
    },
    data() {
        return {
            pageSize: 10,
        };
    },
    methods: {
        async paginationChange(page) {
            let { rows, count } = await axios.request({
                url: "/article",
                method: "get",
                baseUrl: process.env.baseUrl,
                params: {
                    pageNum: page,
                    pageSize: this.pageSize,
                },
            });
            this.posts = rows;
            this.totalCount = count;
        },
    },
    components: {
        Header,
        Footer,
    },
};
</script>

<style scoped>
.container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    min-height: -webkit-fill-available;
    max-width: 90rem;
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

.list ul li {
    list-style: none;
    font-size: 1.3rem;
    line-height: 2.2rem;
}
.list ul li .post-time {
    display: inline-block;
    width: 17rem;
    text-align: right;
    margin-right: 3rem;
}
.list ul li .post-title {
    color: #212121;
    font-family: Lato, Helvetica, sans-serif;
    font-weight: 550;
}
.main {
    text-align: left;
    max-width: 70%;
    margin-bottom: 3rem;
}
</style>
