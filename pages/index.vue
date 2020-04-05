<template>
    <div class="container">
        <nav class="header">
            <Header />
        </nav>
        <div class="main">
            <IndexAvatar />
        </div>
        <div class="footer">
            <Footer />
        </div>
    </div>
</template>

<script>
import Header from "~/components/ui/Header.vue";
import Footer from "~/components/ui/Footer.vue";
import IndexAvatar from "~/components/ui/IndexAvatar.vue";
export default {
    components: {
        Header,
        IndexAvatar,
        Footer,
    },
};
</script>

<style scoped>
.container {
    /* margin: 0 auto; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    min-height: -webkit-fill-available;
    padding: 0rem 2rem;
}
.header {
    height: 6rem;
    width: 100%;
}
</style>
