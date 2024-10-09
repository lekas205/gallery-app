<template>
    <div class="go-doggy-loader mb-8">
        <!-- <div class=" "> -->
        <div class="card is-loading" v-for="(item, index ) in loderHeight" :key="index">
            <div class="image" :style="{ height: item }"></div>
        </div>
        <!-- </div> -->
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const loderHeight = ref(['350px', '450px', '300px', '500px', '150px',])
</script>

<style lang="scss" scoped>
.go-doggy-loader .card {
    margin-bottom: 15px;
    background: #fff;
    border-radius: 5px;
}

.go-doggy-loader {
    -webkit-column-count: 3;
    -webkit-column-gap: 10px;
    -moz-column-count: 3;
    -moz-column-gap: 10px;
    column-count: 3;
    column-gap: 24px;

    .card.is-loading {
        .image {
            background: #eee;
            background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
            border-radius: 8px;
            background-size: 200% 100%;
            animation: 1.5s shine linear infinite;
        }
    }

    @media (max-width: 1200px) {
        column-count: 3;
    }

    @media (max-width: 980px) {
        column-count: 2;
    }

    @media (max-width: 640px) {
        column-count: 2;
        column-gap: 15px;
    }
}

@keyframes shine {
    to {
        background-position-x: -200%;
    }
}
</style>