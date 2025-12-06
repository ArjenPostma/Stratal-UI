<template>
    <div
        v-for="variant in Object.values(StVariant)"
        :key="variant"
        style="display: flex; flex-direction: column; gap: 8px"
    >
        <div
            v-for="style in Object.values(StButtonStyle)"
            :key="style"
            style="display: flex; flex-direction: row"
        >
            <div style="width: 100%">
                <StButton
                    v-for="size in Object.values(StSize)"
                    :key="size"
                    :size="size"
                    :variant="variant"
                    :type="style"
                    style="margin-left: 4px; margin-right: 4px"
                >
                    Button
                </StButton>
            </div>
            <div style="width: 100%">
                <StButton
                    v-for="size in Object.values(StSize)"
                    :key="size"
                    :size="size"
                    :variant="variant"
                    :type="style"
                    style="margin-left: 4px; margin-right: 4px"
                    disabled
                >
                    Button
                </StButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { StButton, StSize, StVariant, StButtonStyle } from 'stratal-ui';
</script>
