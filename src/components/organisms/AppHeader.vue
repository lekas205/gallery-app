<template>
    <div class="app_header">
        <div class="container">
            <gallery-search class="header_search_feild"></gallery-search>
        </div>
    </div>
</template>

<script lang="ts" setup>
import GallerySearch from "../molecules/GallerySearch.vue";
</script>

<style lang="scss" scoped>
.app_header {
    top: 0;
    padding: 20px 0;
    height: 250px;
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(233, 233, 233);
    box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1250px;
        padding: 0 50px;
        margin: 0 auto;

        .header_search_feild {
            width: 80vw;
            @media screen and (max-width: 600px) {
                width: 100%;
            }
        }

        @media screen and (max-width: 600px) {
            padding: 0 17px;
        }
    }
}
</style>