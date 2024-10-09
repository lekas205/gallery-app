<template>
    <div class="image_card" @click="emit('openModal')">
        <app-image :url="
            data.urls.regular"></app-image>
        <!-- overlay -->
        <div class="image_overlay">
            <app-text>{{ creatorName }} </app-text>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { AppImage, AppIcon, AppText } from "../atoms";
const props = defineProps<{
    data: any
}>()

const emit = defineEmits<{
    (e: 'openModal'):void
}>()

const creatorName = computed(()=> props.data.user.name)

const close = async () => {
    
}
</script>

<style lang="scss" scoped>
.image_card {
    position: relative;
    cursor: pointer;
    height: 100%;
    display: block;

    .image_overlay {
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        height: calc(100% - 30px);
        width: 100%;
        z-index: 3;
        padding: 18px 20px 30px;
        border-radius: 8px;
        position: absolute;
        background: rgba(0, 0, 0, 0.3);
        transition: opacity .25s ease-in;

        p {
            font-size: 16px;
            text-transform: capitalize;
            color: var(--theme-white);
        }
    }
}
</style>