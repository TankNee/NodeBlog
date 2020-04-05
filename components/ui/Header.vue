<template>
    <div class="header-content animated fadeIn">
        <Logo />
        <div class="header-sites">
            <div>
                <nuxt-link style="margin-right: 10px;" to="/posts"
                    >ʙʟᴏɢ</nuxt-link
                >
                <nuxt-link to="/about">ᴀʙᴏᴜᴛ</nuxt-link>
            </div>
        </div>
    </div>
</template>
<script>
import bus from "./Bus";
import Logo from "./Logo";
export default {
    name: "Header",
    components: {
        Logo,
    },
};
</script>

<style scoped>
.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 16%;
}

.header-sites {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 19px;
    margin-right: 4rem;
}

</style>
