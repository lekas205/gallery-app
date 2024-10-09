<template>
    <div class="content_gallery"> 
        <gallery-image-card v-for="img in  images" :data="img" @openModal="showContent(img)"></gallery-image-card>
        <Teleport to="body">
            <gallery-modal v-model="showModal" :content="itemToView" @close="showModal=false" />
        </Teleport>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import  GalleryImageCard  from "../molecules/GalleryImageCard.vue";
import GalleryModal from "../molecules/GalleryModal.vue";

defineProps<{
    images: any[]
}>()

const itemToView = ref<any>({});
const showModal = ref(false);

const showContent = (data: any) => {
    itemToView.value = data;
    showModal.value = true
}

</script>

<style lang="scss" scoped>
.content_gallery {
   line-height: 1.5; 
  -webkit-column-count: 3;
  -webkit-column-gap: 10px;
  -moz-column-count: 3;
  -moz-column-gap: 10px;
  column-count: 3;
  column-gap: 24px;


@media (max-width: 1200px) {
    column-count: 3;
}

@media (max-width: 980px) {
    column-count: 2;
  }

@media (max-width: 600px) {
    column-count: 2;
    column-gap: 15px;
    line-height: 1.2; 
  }
}
</style>