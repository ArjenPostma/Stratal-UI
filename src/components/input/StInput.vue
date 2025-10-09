<template>
    <input
        type="text"
        class="st-input"
        :class="{
            'st-input--xxs': size === StSize.XXS,
            'st-input--xs': size === StSize.XS,
            'st-input--sm': size === StSize.SM,
            'st-input--md': size === StSize.MD,
            'st-input--lg': size === StSize.LG,
            'st-input--xl': size === StSize.XL,
            'st-input--xxl': size === StSize.XXL,

            'st-input--invalid': invalid,
        }"
        :disabled="disabled"
        :value="modelValue"
        @input="onInput"
        :aria-invalid="invalid ? 'true' : 'false'"
        :aria-disabled="disabled ? 'true' : 'false'"
        :aria-required="required ? 'true' : 'false'"
    />
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { StSize } from '../../enums';

defineProps({
    modelValue: {
        type: String,
        default: '',
    },
    size: {
        type: String as PropType<StSize>,
        default: StSize.MD,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    invalid: {
        type: Boolean,
        default: false,
    },
    required: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();

function onInput(event: Event) {
    const target = event.target as HTMLInputElement | null;
    if (!target) return; // safeguard against null
    emit('update:modelValue', target.value);
}
</script>

<style>
.st-input {
    display: flex;
    flex-direction: row;
    align-items: center;

    border-radius: var(--radius-sm);
    border: 1px solid var(--border);
    color: var(--text);

    padding: var(--st-input-padding, 10px 12px);
    font: var(--st-input-font, var(--font-sm));
    letter-spacing: var(--st-input-letter-spacing, var(--font-sm-letter-spacing));

    &:not(:disabled):focus {
        outline: 2px solid var(--grey-focus-ring);
    }

    &:disabled {
        color: var(--text-subtle);
        cursor: not-allowed;
    }

    &::placeholder {
        color: var(--text-subtle);
    }
}

.st-input--invalid {
    border-color: var(--border-error);
}

.st-input--xxs {
    --st-input-padding: 6px 8px;
    --st-input-font: var(--font-xs);
    --st-input-letter-spacing: var(--font-xs-letter-spacing);
}

.st-input--xs {
    --st-input-padding: 8px 8px;
    --st-input-font: var(--font-xs);
    --st-input-letter-spacing: var(--font-xs-letter-spacing);
}

.st-input--sm {
    --st-input-padding: 8px 10px;
    --st-input-font: var(--font-sm);
    --st-input-letter-spacing: var(--font-sm-letter-spacing);
}

.st-input--md {
    --st-input-padding: 10px 12px;
    --st-input-font: var(--font-sm);
    --st-input-letter-spacing: var(--font-sm-letter-spacing);
}

.st-input--lg {
    --st-input-padding: 10px 16px;
    --st-input-font: var(--font-md);
    --st-input-letter-spacing: var(--font-md-letter-spacing);
}

.st-input--xl {
    --st-input-padding: 12px 16px;
    --st-input-font: var(--font-md);
    --st-input-letter-spacing: var(--font-md-letter-spacing);
}

.st-input--xxl {
    --st-input-padding: 18px 20px;
    --st-input-font: var(--font-lg);
    --st-input-letter-spacing: var(--font-lg-letter-spacing);
}
</style>
