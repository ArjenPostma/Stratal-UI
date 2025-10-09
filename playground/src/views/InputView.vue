<template>
    <div style="display: flex; flex-direction: column; gap: 8px">
        <div v-for="size in Object.values(StSize)" :key="size">
            <div style="display: flex; flex-direction: row; gap: 8px">
                <StInput :size="size" v-model="inputValue" />
                <StInput :size="size" v-model="inputValue" disabled />
                <StInput :size="size" v-model="inputValue" invalid />
                <StInput :size="size" v-model="inputValue" disabled invalid />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { StSize, StInput } from 'stratal-ui';
import { ref } from 'vue';

const inputValue = ref('');
</script>
