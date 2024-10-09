<template>
    <div class="home_page">
        <gallery-skeleton v-if="loading" ></gallery-skeleton>
        <empty-state v-else-if="!loading && images.length == 0 "></empty-state>

        <section v-else>
            <contents-gallery :images="images"></contents-gallery>
        </section>
       
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useStore } from 'vuex';
import { key } from '../../store';
import { AppText, AppButton } from "../../components/atoms";
import EmptyState from "@/components/organisms/EmptyState.vue";
import GallerySkeleton from "@/components/molecules/GallerySkeleton.vue";
import ContentsGallery from "@/components/organisms/ContentsGallery.vue";

const $store = useStore(key)
const cactiveCtegory = ref('')

const images = computed(() => {
    return $store.state.images
})


const loading = computed(() => {
    return $store.state.contentLoading
})


const fetchRandomImages = async function () {
    try {
        $store.dispatch('toggleLoadingStatus', true)
        await $store.dispatch('fetchImages')
        $store.dispatch('toggleLoadingStatus', false)

    } catch (err) {
        console.log(err);
        $store.dispatch('toggleLoadingStatus', false)
    }
}

onMounted(() => {
    if (!images.value.length) {
        fetchRandomImages()
    }
})
</script>

<style lang="scss" setup>
.home_page {
    h2 {
        font-size: 32px;
        margin-bottom: 20px;
        color: var(--theme-primary);

        @media screen and (max-width: 600px) {
            font-size: 25px;
        }
    }

    .filter_content {
        margin-bottom: 20px;

        button {
            margin-bottom: 15px;

            &:not(:last-child) {
                margin-right: 12px;
            }
        }

    }
}
</style>