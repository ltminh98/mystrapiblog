<template lang="">
    <div class="page-title">
        <h1>{{ page_title }}</h1>


    </div>
</template>
<script setup>
import { defineComponent } from 'vue';

const MyProps = defineProps({
    page_title: {
        type: String,
        default: "Type here",
        required: false}
})

</script>
<style lang="scss">
    .page-title {
        h1 {
            font-size: 3.222em;
            
        }
    }
</style>