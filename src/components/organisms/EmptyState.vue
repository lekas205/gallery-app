<template>
    <div class="empty_state">
        <app-text size="large"> So Empty :) </app-text>
        <app-text>Content could not be found <br> for this search </app-text>
    </div>
</template>

<script setup lang="ts">
import { AppText } from "../atoms";

</script>

<style lang="scss" scoped>
.empty_state {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 75vh;

    h2,
    p {
        margin-bottom: 10px;
        text-align: center;
        color: var(--primary);
    }

    button {
        margin-top: 15px;
    }
}
</style>
