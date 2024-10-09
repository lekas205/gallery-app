<template>
    <transition name="wagers-kit-modal-fade">
        <div v-show="modelValue" class="wagers-kit-modal wagers-kit-modal--backdrop">
            <div class="wagers-kit-modal__dialog w-full" role="dialog"  aria-labelledby="modalTitle" aria-describedby="modalDescription">
                    <div class="wagers-kit-modal__dialog__header--close" aria-label="Close modal" @click="close">
                        <app-icon icon="close" fill="#ffffff" />
                    </div>
                <section id="modalDescription" class="wagers-kit-modal__dialog__body">
                    <app-image :src="content?.urls?.full" />

                    <div class="context">
                        <app-text size="semi-large"> {{ content?.user?.name }} </app-text>
                        <app-text> {{ content?.alt_description }} </app-text>
                    </div>
                </section>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { AppImage, AppIcon, AppText } from "../atoms";

import { watch } from 'vue'
const props = defineProps<{
    modelValue: boolean,
    content: any
}>() ;

const emit = defineEmits<{
    (e: 'close'): void
}>();

const close = () => {
    emit('close')
}

watch(() => props.modelValue, () => {
    if(props.modelValue === true){
        document.body.style.overflow = 'hidden'
    }else{
        document.body.style.overflow = 'auto'
    }
})

</script>

<style lang="scss">
.wagers-kit-modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    width: 100vw;
    right: 0;
    display: flex;
    justify-content: center;
    padding: 20px;
    align-items: center;
    transition: opacity 0.3s ease;
}

.wagers-kit-modal--backdrop {
    backdrop-filter: blur(5px);
    background: rgba(26, 26, 26, 0.44) !important;
    z-index: 999;
}

.wagers-kit-modal__dialog {
    border-radius: 8px;
    max-height: calc(100vh - 20px);
    background: #ffffff;
    min-width: 300px;
    width: 60vw;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    -ms-overflow-style: none;
    scrollbar-width: none;

    @media screen and (max-width: 600px) {
        width: 100%;
    }
}

.wagers-kit-modal__dialog__header {
    justify-content: space-between;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    z-index: 10
}

.wagers-kit-modal__dialog__header--close {
    top: 30px;
    right: 200px;
    height: 30px;
    width: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    z-index: 110;
    border: 1px solid #ffffff;
    @media screen and (max-width: 600px) {
        top: 30px;
        left: 50%;
        transform: translateX(-50%)
    }
}

.wagers-kit-modal__dialog__body {
    position: relative;
    padding-bottom: 50px;
    min-height: 350px;
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;

        @media screen and (max-width: 600px) {
            height: 100%;
        }
    }

    .context{
        padding: 0 60px;
        h2{
            opacity: 0.8;
            margin-bottom: 10px;
        }
        p{
            opacity: 0.5;
            font-weight: 600;
        }

        @media screen and (max-width: 600px) {
            padding: 0 20px;
        }
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
}

.wagers-kit-modal-fade-enter-from,
.wagers-kit-modal-fade-leave-to {
    opacity: 0
}

.wagers-kit-modal-fade-enter-from .wagers-kit-modal__dialog,
.wagers-kit-modal-fade-leave-to .wagers-kit-modal__dialog {
    transform: scale(1.1);
}
</style>