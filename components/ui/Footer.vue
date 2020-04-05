<template>
    <div class="footer-content">
        <p>
            <strong>NodeBlog &nbsp;</strong>Powered&nbsp;By
            <a href="https://tanknee.cn">TankNee</a>. <br />
            <a href="http://beian.miit.gov.cn">浙ICP备19040955-2号</a>
        </p>
    </div>
</template>

<script>
import bus from "./Bus";

export default {
    name: "Footer",
    data() {
        return {
            options: {},
        };
    },
    created() {
        bus.$on("init", (options) => {
            this.options = options;
            this.indexBackground = `background-image: url("${options.indexBackground}"); background-repeat: no-repeat;`;
        });
    },
};
</script>

<style scoped>
.footer-content {
    padding: 15px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(250, 250, 250);
    text-align: center;
    line-height: 1.4rem;
}
</style>
