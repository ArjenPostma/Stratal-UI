<template>
    <div
        v-for="variant in Object.values(StVariant)"
        :key="variant"
        style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 8px"
    >
        <div style="display: flex; flex-direction: row; gap: 8px">
            <div
                v-for="style in Object.values(StCheckboxStyle)"
                :key="style"
                style="display: flex; flex-direction: row"
            >
                <StCheckbox
                    v-for="size in Object.values(StCheckboxSize)"
                    :key="size"
                    :size="size"
                    :variant="variant"
                    :type="style"
                    style="margin-left: 4px; margin-right: 4px"
                >
                    Button
                </StCheckbox>
            </div>
        </div>
        <div style="display: flex; flex-direction: row; gap: 8px">
            <div
                v-for="style in Object.values(StCheckboxStyle)"
                :key="style"
                style="display: flex; flex-direction: row"
            >
                <StCheckbox
                    v-for="size in Object.values(StCheckboxSize)"
                    :key="size"
                    :size="size"
                    :variant="variant"
                    :type="style"
                    style="margin-left: 4px; margin-right: 4px"
                    disabled
                >
                    Button
                </StCheckbox>
            </div>
        </div>
        <div style="display: flex; flex-direction: row; gap: 8px">
            <div
                v-for="style in Object.values(StCheckboxStyle)"
                :key="style"
                style="display: flex; flex-direction: row"
            >
                <StCheckbox
                    v-for="size in Object.values(StCheckboxSize)"
                    :key="size"
                    :size="size"
                    :variant="variant"
                    :type="style"
                    style="margin-left: 4px; margin-right: 4px"
                    v-model="checked"
                >
                    Button
                </StCheckbox>
            </div>
        </div>
        <div style="display: flex; flex-direction: row; gap: 8px">
            <div
                v-for="style in Object.values(StCheckboxStyle)"
                :key="style"
                style="display: flex; flex-direction: row"
            >
                <StCheckbox
                    v-for="size in Object.values(StCheckboxSize)"
                    :key="size"
                    :size="size"
                    :variant="variant"
                    :type="style"
                    style="margin-left: 4px; margin-right: 4px"
                    v-model="checked"
                    disabled
                >
                    Button
                </StCheckbox>
            </div>
        </div>
        <div style="display: flex; flex-direction: row; gap: 8px">
            <div
                v-for="style in Object.values(StCheckboxStyle)"
                :key="style"
                style="display: flex; flex-direction: row"
            >
                <StCheckbox
                    v-for="size in Object.values(StCheckboxSize)"
                    :key="size"
                    :size="size"
                    :variant="variant"
                    :type="style"
                    style="margin-left: 4px; margin-right: 4px"
                    indeterminate
                >
                    Button
                </StCheckbox>
            </div>
        </div>
        <div style="display: flex; flex-direction: row; gap: 8px">
            <div
                v-for="style in Object.values(StCheckboxStyle)"
                :key="style"
                style="display: flex; flex-direction: row"
            >
                <StCheckbox
                    v-for="size in Object.values(StCheckboxSize)"
                    :key="size"
                    :size="size"
                    :variant="variant"
                    :type="style"
                    style="margin-left: 4px; margin-right: 4px"
                    indeterminate
                    disabled
                >
                    Button
                </StCheckbox>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { StCheckbox, StCheckboxSize, StVariant, StCheckboxStyle } from 'stratal-ui';
import { ref } from 'vue';

const checked = ref(true);
</script>
