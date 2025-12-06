<template>
    <span
        class="st-checkbox"
        :class="{
            'st-checkbox--xs': size === StCheckboxSize.XS,
            'st-checkbox--sm': size === StCheckboxSize.SM,
            'st-checkbox--md': size === StCheckboxSize.MD,
            'st-checkbox--lg': size === StCheckboxSize.LG,

            'st-checkbox--grey': variant === StVariant.GREY,
            'st-checkbox--red': variant === StVariant.RED,
            'st-checkbox--pink': variant === StVariant.PINK,
            'st-checkbox--purple': variant === StVariant.PURPLE,
            'st-checkbox--cyan': variant === StVariant.CYAN,
            'st-checkbox--blue': variant === StVariant.BLUE,
            'st-checkbox--teal': variant === StVariant.TEAL,
            'st-checkbox--green': variant === StVariant.GREEN,
            'st-checkbox--yellow': variant === StVariant.YELLOW,
            'st-checkbox--orange': variant === StVariant.ORANGE,

            'st-checkbox--solid': type === StCheckboxStyle.SOLID,
            'st-checkbox--outline': type === StCheckboxStyle.OUTLINE,
            'st-checkbox--subtle': type === StCheckboxStyle.SUBTLE,
            'st-checkbox--plain': type === StCheckboxStyle.PLAIN,
            'st-checkbox--inverted': type === StCheckboxStyle.INVERTED,

            'st-checkbox--checked': internalChecked,
            'st-checkbox--indeterminate': internalIndeterminate,
            'st-checkbox--disabled': disabled,
        }"
        @click="handleOnClick"
        :aria-disabled="disabled ? 'true' : 'false'"
    >
        <input
            ref="checkbox"
            type="checkbox"
            :disabled="disabled"
            :checked="internalChecked"
            :aria-required="required ? 'true' : 'false'"
            :required="required"
        />
    </span>
</template>

<script setup lang="ts">
import { computed, onMounted, type PropType, ref, watch } from 'vue';
import { StCheckboxSize, StCheckboxStyle } from './enums';
import { StVariant } from '../../enums';

const props = defineProps({
    size: {
        type: String as PropType<StCheckboxSize>,
        default: StCheckboxSize.MD,
    },
    variant: {
        type: String as PropType<StVariant>,
        default: StVariant.GREY,
    },
    type: {
        type: String as PropType<StCheckboxStyle>,
        default: StCheckboxStyle.OUTLINE,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    modelValue: {
        type: Boolean,
        default: false,
    },
    indeterminate: {
        type: Boolean,
        default: false,
    },
    required: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
    (e: 'update:indeterminate', value: boolean): void;
}>();

const checkbox = ref<HTMLInputElement | null>(null);
const internalChecked = computed(() => !props.indeterminate && props.modelValue);
const internalIndeterminate = computed(() => props.indeterminate);

watch(
    () => props.indeterminate,
    (isIndeterminate) => {
        if (checkbox.value) {
            checkbox.value.indeterminate = isIndeterminate;
        }

        if (isIndeterminate && props.modelValue) {
            emit('update:modelValue', false);
        }
    },
    { immediate: true },
);

function handleOnClick() {
    if (props.disabled) return;

    if (props.indeterminate) {
        emit('update:modelValue', true);
        emit('update:indeterminate', false);
    } else {
        // Otherwise, just toggle the checked state.
        emit('update:modelValue', !props.modelValue);
    }
}

onMounted(() => {
    if (checkbox.value) {
        checkbox.value.indeterminate = props.indeterminate;
    }
});
</script>

<style>
.st-checkbox {
    display: inline-block;
    position: relative;
    content: ' ';

    width: var(--st-checkbox-size, 20px);
    height: var(--st-checkbox-size, 20px);

    color: var(--st-checkbox-font-color, currentColor);
    border-width: 1px;
    border-style: solid;
    opacity: 1;
    border-radius: 2px;

    transition:
        background-color 0.2s,
        opacity 0.2s;

    &:not(.st-checkbox--disabled) {
        cursor: pointer;
    }

    &.st-checkbox--disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    &::after {
        content: ' ';
        display: inline-block;
        position: absolute;
        width: var(--st-checkbox-size, 20px);
        height: var(--st-checkbox-size, 20px);
        background-color: var(--st-checkbox-font-color);
        transform: scale(0);
        top: var(--st-checkbox-top, 0);
        left: var(--st-checkbox-left, 0);
    }
}

input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.st-checkbox--checked::after {
    transform: scale(0.8);
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

.st-checkbox--indeterminate::after {
    transform: scale(0.75);
    transform-origin: bottom left;
    clip-path: polygon(0 0, 100% 0, 100% 20%, 0 20%);
}

.st-checkbox--xs {
    --st-checkbox-size: 12px;

    &.st-checkbox--checked {
        --st-checkbox-top: -2px;
        --st-checkbox-left: 1px;
    }

    &.st-checkbox--indeterminate {
        --st-checkbox-top: 1.5px;
        --st-checkbox-left: 0.5px;
    }
}

.st-checkbox--sm {
    --st-checkbox-size: 16px;

    &.st-checkbox--checked {
        --st-checkbox-top: -2px;
        --st-checkbox-left: 1px;
    }

    &.st-checkbox--indeterminate {
        --st-checkbox-top: 1.5px;
        --st-checkbox-left: 1px;
    }
}

.st-checkbox--md {
    --st-checkbox-size: 20px;

    &.st-checkbox--checked {
        --st-checkbox-top: -3px;
        --st-checkbox-left: 1px;
    }

    &.st-checkbox--indeterminate {
        --st-checkbox-top: 2px;
        --st-checkbox-left: 1.5px;
    }
}

.st-checkbox--lg {
    --st-checkbox-size: 24px;

    &.st-checkbox--checked {
        --st-checkbox-top: -3px;
        --st-checkbox-left: 1px;
    }

    &.st-checkbox--indeterminate {
        --st-checkbox-top: 2px;
        --st-checkbox-left: 2px;
    }
}

.st-checkbox--grey {
    --st-checkbox-font-color: var(--grey-foreground);
    --st-checkbox-border-color: var(--border);
    --st-checkbox-background-color: var(--bg);

    --st-checkbox-solid-font-color: var(--grey-contrast);
    --st-checkbox-solid-checked-border-color: var(--grey-solid);
    --st-checkbox-solid-checked-background-color: var(--grey-solid);

    --st-checkbox-outline-checked-border-color: var(--grey-solid);

    --st-checkbox-subtle-border-color: var(--bg-muted);
    --st-checkbox-subtle-background-color: var(--bg-muted);

    --st-checkbox-plain-border-color: transparent;

    --st-checkbox-inverted-border-color: var(--grey-foreground);
    --st-checkbox-inverted-background-color: var(--grey-foreground);
}

.st-checkbox--red {
    --st-checkbox-font-color: var(--red-foreground);
    --st-checkbox-border-color: var(--border);
    --st-checkbox-background-color: var(--bg);

    --st-checkbox-solid-font-color: var(--red-contrast);
    --st-checkbox-solid-checked-border-color: var(--red-solid);
    --st-checkbox-solid-checked-background-color: var(--red-solid);

    --st-checkbox-outline-checked-border-color: var(--red-solid);

    --st-checkbox-subtle-border-color: var(--bg-muted);
    --st-checkbox-subtle-background-color: var(--bg-muted);

    --st-checkbox-plain-border-color: transparent;

    --st-checkbox-inverted-border-color: var(--red-foreground);
    --st-checkbox-inverted-background-color: var(--red-foreground);
}

.st-checkbox--pink {
    --st-checkbox-font-color: var(--pink-foreground);
    --st-checkbox-border-color: var(--border);
    --st-checkbox-background-color: var(--bg);

    --st-checkbox-solid-font-color: var(--pink-contrast);
    --st-checkbox-solid-checked-border-color: var(--pink-solid);
    --st-checkbox-solid-checked-background-color: var(--pink-solid);

    --st-checkbox-outline-checked-border-color: var(--pink-solid);

    --st-checkbox-subtle-border-color: var(--bg-muted);
    --st-checkbox-subtle-background-color: var(--bg-muted);

    --st-checkbox-plain-border-color: transparent;

    --st-checkbox-inverted-border-color: var(--pink-foreground);
    --st-checkbox-inverted-background-color: var(--pink-foreground);
}

.st-checkbox--purple {
    --st-checkbox-font-color: var(--purple-foreground);
    --st-checkbox-border-color: var(--border);
    --st-checkbox-background-color: var(--bg);

    --st-checkbox-solid-font-color: var(--purple-contrast);
    --st-checkbox-solid-checked-border-color: var(--purple-solid);
    --st-checkbox-solid-checked-background-color: var(--purple-solid);

    --st-checkbox-outline-checked-border-color: var(--purple-solid);

    --st-checkbox-subtle-border-color: var(--bg-muted);
    --st-checkbox-subtle-background-color: var(--bg-muted);

    --st-checkbox-plain-border-color: transparent;

    --st-checkbox-inverted-border-color: var(--purple-foreground);
    --st-checkbox-inverted-background-color: var(--purple-foreground);
}

.st-checkbox--cyan {
    --st-checkbox-font-color: var(--cyan-foreground);
    --st-checkbox-border-color: var(--border);
    --st-checkbox-background-color: var(--bg);

    --st-checkbox-solid-font-color: var(--cyan-contrast);
    --st-checkbox-solid-checked-border-color: var(--cyan-solid);
    --st-checkbox-solid-checked-background-color: var(--cyan-solid);

    --st-checkbox-outline-checked-border-color: var(--cyan-solid);

    --st-checkbox-subtle-border-color: var(--bg-muted);
    --st-checkbox-subtle-background-color: var(--bg-muted);

    --st-checkbox-plain-border-color: transparent;

    --st-checkbox-inverted-border-color: var(--cyan-foreground);
    --st-checkbox-inverted-background-color: var(--cyan-foreground);
}

.st-checkbox--blue {
    --st-checkbox-font-color: var(--blue-foreground);
    --st-checkbox-border-color: var(--border);
    --st-checkbox-background-color: var(--bg);

    --st-checkbox-solid-font-color: var(--blue-contrast);
    --st-checkbox-solid-checked-border-color: var(--blue-solid);
    --st-checkbox-solid-checked-background-color: var(--blue-solid);

    --st-checkbox-outline-checked-border-color: var(--blue-solid);

    --st-checkbox-subtle-border-color: var(--bg-muted);
    --st-checkbox-subtle-background-color: var(--bg-muted);

    --st-checkbox-plain-border-color: transparent;

    --st-checkbox-inverted-border-color: var(--blue-foreground);
    --st-checkbox-inverted-background-color: var(--blue-foreground);
}

.st-checkbox--teal {
    --st-checkbox-font-color: var(--teal-foreground);
    --st-checkbox-border-color: var(--border);
    --st-checkbox-background-color: var(--bg);

    --st-checkbox-solid-font-color: var(--teal-contrast);
    --st-checkbox-solid-checked-border-color: var(--teal-solid);
    --st-checkbox-solid-checked-background-color: var(--teal-solid);

    --st-checkbox-outline-checked-border-color: var(--teal-solid);

    --st-checkbox-subtle-border-color: var(--bg-muted);
    --st-checkbox-subtle-background-color: var(--bg-muted);

    --st-checkbox-plain-border-color: transparent;

    --st-checkbox-inverted-border-color: var(--teal-foreground);
    --st-checkbox-inverted-background-color: var(--teal-foreground);
}

.st-checkbox--green {
    --st-checkbox-font-color: var(--green-foreground);
    --st-checkbox-border-color: var(--border);
    --st-checkbox-background-color: var(--bg);

    --st-checkbox-solid-font-color: var(--green-contrast);
    --st-checkbox-solid-checked-border-color: var(--green-solid);
    --st-checkbox-solid-checked-background-color: var(--green-solid);

    --st-checkbox-outline-checked-border-color: var(--green-solid);

    --st-checkbox-subtle-border-color: var(--bg-muted);
    --st-checkbox-subtle-background-color: var(--bg-muted);

    --st-checkbox-plain-border-color: transparent;

    --st-checkbox-inverted-border-color: var(--green-foreground);
    --st-checkbox-inverted-background-color: var(--green-foreground);
}

.st-checkbox--yellow {
    --st-checkbox-font-color: var(--yellow-foreground);
    --st-checkbox-border-color: var(--border);
    --st-checkbox-background-color: var(--bg);

    --st-checkbox-solid-font-color: var(--yellow-contrast);
    --st-checkbox-solid-checked-border-color: var(--yellow-solid);
    --st-checkbox-solid-checked-background-color: var(--yellow-solid);

    --st-checkbox-outline-checked-border-color: var(--yellow-solid);

    --st-checkbox-subtle-border-color: var(--bg-muted);
    --st-checkbox-subtle-background-color: var(--bg-muted);

    --st-checkbox-plain-border-color: transparent;

    --st-checkbox-inverted-border-color: var(--yellow-foreground);
    --st-checkbox-inverted-background-color: var(--yellow-foreground);
}

.st-checkbox--orange {
    --st-checkbox-font-color: var(--orange-foreground);
    --st-checkbox-border-color: var(--border);
    --st-checkbox-background-color: var(--bg);

    --st-checkbox-solid-font-color: var(--orange-contrast);
    --st-checkbox-solid-checked-border-color: var(--orange-solid);
    --st-checkbox-solid-checked-background-color: var(--orange-solid);

    --st-checkbox-outline-checked-border-color: var(--orange-solid);

    --st-checkbox-subtle-border-color: var(--bg-muted);
    --st-checkbox-subtle-background-color: var(--bg-muted);

    --st-checkbox-plain-border-color: transparent;

    --st-checkbox-inverted-border-color: var(--orange-foreground);
    --st-checkbox-inverted-background-color: var(--orange-foreground);
}

.st-checkbox--solid {
    --st-checkbox-font-color: var(--st-checkbox-solid-font-color);
    border-color: var(--st-checkbox-border-color);
    background-color: var(--st-checkbox-background-color);

    &.st-checkbox--checked,
    &.st-checkbox--indeterminate {
        background-color: var(--st-checkbox-solid-checked-background-color);
    }
}

.st-checkbox--outline {
    border-color: var(--st-checkbox-border-color);
    background-color: var(--st-checkbox-background-color);

    &.st-checkbox--checked,
    &.st-checkbox--indeterminate {
        border-color: var(--st-checkbox-outline-checked-border-color);
    }
}

.st-checkbox--subtle {
    border-color: var(--st-checkbox-subtle-border-color);
    background-color: var(--st-checkbox-subtle-background-color);
}

.st-checkbox--plain {
    border-color: var(--st-checkbox-border-color);
    background-color: var(--st-checkbox-background-color);

    &.st-checkbox--checked,
    &.st-checkbox--indeterminate {
        border-color: var(--st-checkbox-plain-border-color);
    }
}

.st-checkbox--inverted {
    border-color: var(--st-checkbox-inverted-border-color);
    background-color: var(--st-checkbox-inverted-background-color);

    &.st-checkbox--checked,
    &.st-checkbox--indeterminate {
        background-color: transparent;
    }
}
</style>
