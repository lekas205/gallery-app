<template>
    <div class="app_header">
        <div class="container">
            <gallery-search class="header_search_feild"></gallery-search>
        </div>
    </div>

     <transition  name="header-slide-down">
        <div class="fixed-header" v-show="scrollPosition > 250">
            <div class="container">
                <gallery-search class="header_search_feild"></gallery-search>
            </div>
        </div>
     </transition>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from "vue";
import GallerySearch from "../molecules/GallerySearch.vue";


const scrollPosition = ref(0);
const updateScroll =() => {
    scrollPosition.value = window.scrollY
}
onMounted(() => {
    window.addEventListener('scroll', updateScroll);
})
</script>

<style lang="scss" scoped>
.app_header , .fixed-header{
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

.fixed-header{
    top: 0;
    position: fixed;
    height: 100px;
    width: 100%;
    z-index: 10;
    background: rgb(233, 233, 233);
    box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
}
.header-slide-down-enter-active {
  animation: bounce-in 0.3s;
}
.header-slide-down-leave-active {
  animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
  0% {
    top: -300px
  }

  100% {
    top: 0;
  }
}
</style>