<template>
    <div class="search_feild" v-if="!searched">
        <app-icon fill="#00071A" icon="search" class="search_icon"></app-icon>
        <app-input placeholder="Search for photo" @keyup="search($event)" v-model="form.search"
            :value="form.search"></app-input>
        <app-button variant="transparent" v-if="form.search.length > 0" @click="form.search = ''" @keyup="search($event)">
            <app-icon fill="#00071A" icon="close"></app-icon>
        </app-button>
    </div>
        <!-- Search key word -->
    <div class="search_word" v-else>
        <app-text   tag="h1" size="large"> Search result for <span> "{{ form.search }}"</span></app-text>
        <p @click="fetchRandomImages">Clear Search</p>
    </div>
   
</template>
<script lang="ts" setup>
import { useStore } from 'vuex';
import { key } from "../../store";
import { ref, reactive, computed } from "vue";
import { AppInput, AppIcon, AppText, AppButton } from "../atoms";
const $store = useStore(key)
const contents = ref([]);

const searched = ref(false);
const form = ref({
    search: '',
})

const search = async function (event: KeyboardEvent) {
    if(form.value.search.length < 1 ) return 

    let key = event.keyCode || event.charCode
    if (key === 13) return searchRandomImages(form.value.search)
}

const searchRandomImages = async function (query:string) {
    try {
        $store.dispatch('toggleLoadingStatus', true)
        await $store.dispatch('searchRandomImages', {query})
        $store.dispatch('toggleLoadingStatus', false)
        searched.value = true
    } catch (err) {
        console.log(err);
        $store.dispatch('toggleLoadingStatus', false)
    }
}

const fetchRandomImages = async function () {
    try {
        $store.dispatch('toggleLoadingStatus', true)
        form.value.search = "";
        searched.value = false;
        await $store.dispatch('fetchImages')
        $store.dispatch('toggleLoadingStatus', false)

    } catch (err) {
        console.log(err);
        $store.dispatch('toggleLoadingStatus', false)
    }
}

</script> 

<style lang="scss" scoped>
.search_feild {
    position: relative;
    .search_icon {
        left: 25px;
    }

    button {
        right: 12px;
    }

    .search_icon,
    button {
        top: 50%;
        position: absolute;
        transform: translateY(-50%);
    }
}

.search_word{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    p{
        color: rgb(156, 1, 1);
        cursor: pointer;
    }
   h1{
        color: rgb(0, 0, 61);
        font-size: 46px;
        span{
            opacity: 0.4;
        }

        @media screen and (max-width: 600px) {
            width: 100%;
            font-size: 25px;
            width: 250px;
        }
   }
}
</style>