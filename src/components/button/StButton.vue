<template>
    <button
        type="button"
        class="st-button"
        :class="{
            'st-button--2xs': size === StButtonSize['2XS'],
            'st-button--xs': size === StButtonSize.XS,
            'st-button--sm': size === StButtonSize.SM,
            'st-button--md': size === StButtonSize.MD,
            'st-button--lg': size === StButtonSize.LG,
            'st-button--xl': size === StButtonSize.XL,
            'st-button--2xl': size === StButtonSize['2XL'],

            'st-button--grey': variant === StButtonVariant.GREY,
            'st-button--red': variant === StButtonVariant.RED,
            'st-button--pink': variant === StButtonVariant.PINK,
            'st-button--purple': variant === StButtonVariant.PURPLE,
            'st-button--cyan': variant === StButtonVariant.CYAN,
            'st-button--blue': variant === StButtonVariant.BLUE,
            'st-button--teal': variant === StButtonVariant.TEAL,
            'st-button--green': variant === StButtonVariant.GREEN,
            'st-button--yellow': variant === StButtonVariant.YELLOW,
            'st-button--orange': variant === StButtonVariant.ORANGE,

            'st-button--solid': type === StButtonStyle.SOLID,
            'st-button--subtle': type === StButtonStyle.SUBTLE,
            'st-button--surface': type === StButtonStyle.SURFACE,
            'st-button--outline': type === StButtonStyle.OUTLINE,
            'st-button--ghost': type === StButtonStyle.GHOST,
            'st-button--plain': type === StButtonStyle.PLAIN,
        }"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { StButtonSize, StButtonStyle, StButtonVariant } from './enums';

defineProps({
    size: {
        type: String as PropType<StButtonSize>,
        default: StButtonSize.MD,
    },
    variant: {
        type: String as PropType<StButtonVariant>,
        default: StButtonVariant.GREY,
    },
    type: {
        type: String as PropType<StButtonStyle>,
        default: StButtonStyle.SOLID,
    },
});
</script>

<style>
.st-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: 4px;
    gap: var(--button-gap, 8px);
    padding: var(--button-padding, 4px 12px);
    font: var(--button-font, var(--font-sm));
    letter-spacing: var(--button-letter-spacing, var(--font-sm-letter-spacing));
    transition:
        background-color 0.2s,
        opacity 0.2s;

    &:not(:disabled) {
        cursor: pointer;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
}

.st-button--2xs {
    --button-padding: 4px 8px;
    --button-gap: 4px;
    --button-font: var(--font-xs);
    --button-letter-spacing: var(--font-xs-letter-spacing);
}

.st-button--xs {
    --button-padding: 8px 10px;
    --button-gap: 4px;
    --button-font: var(--font-xs);
    --button-letter-spacing: var(--font-xs-letter-spacing);
}

.st-button--sm {
    --button-padding: 8px 14px;
    --button-gap: 8px;
    --button-font: var(--font-sm);
    --button-letter-spacing: var(--font-sm-letter-spacing);
}

.st-button--md {
    --button-padding: 10px 16px;
    --button-gap: 8px;
    --button-font: var(--font-sm);
    --button-letter-spacing: var(--font-sm-letter-spacing);
}

.st-button--lg {
    --button-padding: 10px 20px;
    --button-gap: 12px;
    --button-font: var(--font-md);
    --button-letter-spacing: var(--font-md-letter-spacing);
}

.st-button--xl {
    --button-padding: 12px 20px;
    --button-gap: 10px;
    --button-font: var(--font-md);
    --button-letter-spacing: var(--font-md-letter-spacing);
}

.st-button--2xl {
    --button-padding: 18px 28px;
    --button-gap: 12px;
    --button-font: var(--font-lg);
    --button-letter-spacing: var(--font-lg-letter-spacing);
}

.st-button--grey,
.st-button--red,
.st-button--pink,
.st-button--purple,
.st-button--cyan,
.st-button--blue,
.st-button--teal,
.st-button--green,
.st-button--yellow,
.st-button--orange {
    color: var(--st-button-font-color, currentColor);
}

.st-button--grey {
    --st-button-font-color: var(--grey-foreground);
    --st-button-solid-background-color: var(--grey-solid);
    --st-button-solid-font-color: var(--grey-contrast);
    --st-button-subtle-background-color: var(--grey-subtle);
    --st-button-muted-background-color-hover: var(--grey-muted);
    --st-button-shadow-color: var(--grey-muted);
}

.st-button--red {
    --st-button-font-color: var(--red-foreground);
    --st-button-solid-background-color: var(--red-solid);
    --st-button-solid-font-color: var(--red-contrast);
    --st-button-subtle-background-color: var(--red-subtle);
    --st-button-muted-background-color-hover: var(--red-muted);
    --st-button-shadow-color: var(--red-muted);
}

.st-button--pink {
    --st-button-font-color: var(--pink-foreground);
    --st-button-solid-background-color: var(--pink-solid);
    --st-button-solid-font-color: var(--pink-contrast);
    --st-button-subtle-background-color: var(--pink-subtle);
    --st-button-muted-background-color-hover: var(--pink-muted);
    --st-button-shadow-color: var(--pink-muted);
}

.st-button--purple {
    --st-button-font-color: var(--purple-foreground);
    --st-button-solid-background-color: var(--purple-solid);
    --st-button-solid-font-color: var(--purple-contrast);
    --st-button-subtle-background-color: var(--purple-subtle);
    --st-button-muted-background-color-hover: var(--purple-muted);
    --st-button-shadow-color: var(--purple-muted);
}

.st-button--cyan {
    --st-button-font-color: var(--cyan-foreground);
    --st-button-solid-background-color: var(--cyan-solid);
    --st-button-solid-font-color: var(--cyan-contrast);
    --st-button-subtle-background-color: var(--cyan-subtle);
    --st-button-muted-background-color-hover: var(--cyan-muted);
    --st-button-shadow-color: var(--cyan-muted);
}

.st-button--blue {
    --st-button-font-color: var(--blue-foreground);
    --st-button-solid-background-color: var(--blue-solid);
    --st-button-solid-font-color: var(--blue-contrast);
    --st-button-subtle-background-color: var(--blue-subtle);
    --st-button-muted-background-color-hover: var(--blue-muted);
    --st-button-shadow-color: var(--blue-muted);
}

.st-button--teal {
    --st-button-font-color: var(--teal-foreground);
    --st-button-solid-background-color: var(--teal-solid);
    --st-button-solid-font-color: var(--teal-contrast);
    --st-button-subtle-background-color: var(--teal-subtle);
    --st-button-muted-background-color-hover: var(--teal-muted);
    --st-button-shadow-color: var(--teal-muted);
}

.st-button--green {
    --st-button-font-color: var(--green-foreground);
    --st-button-solid-background-color: var(--green-solid);
    --st-button-solid-font-color: var(--green-contrast);
    --st-button-subtle-background-color: var(--green-subtle);
    --st-button-muted-background-color-hover: var(--green-muted);
    --st-button-shadow-color: var(--green-muted);
}

.st-button--yellow {
    --st-button-font-color: var(--yellow-foreground);
    --st-button-solid-background-color: var(--yellow-solid);
    --st-button-solid-font-color: var(--yellow-contrast);
    --st-button-subtle-background-color: var(--yellow-subtle);
    --st-button-muted-background-color-hover: var(--yellow-muted);
    --st-button-shadow-color: var(--yellow-muted);
}

.st-button--orange {
    --st-button-font-color: var(--orange-foreground);
    --st-button-solid-background-color: var(--orange-solid);
    --st-button-solid-font-color: var(--orange-contrast);
    --st-button-subtle-background-color: var(--orange-subtle);
    --st-button-muted-background-color-hover: var(--orange-muted);
    --st-button-shadow-color: var(--orange-muted);
}

.st-button--solid {
    background-color: var(--st-button-solid-background-color);
    color: var(--st-button-solid-font-color);

    &:hover:not(:disabled) {
        opacity: 0.9;
    }
}

.st-button--subtle {
    background-color: var(--st-button-subtle-background-color);

    &:hover:not(:disabled) {
        background-color: var(--st-button-muted-background-color-hover);
    }
}

.st-button--surface {
    background-color: var(--st-button-subtle-background-color);
    box-shadow: inset var(--shadow-raw) var(--st-button-shadow-color);

    &:hover:not(:disabled) {
        background-color: var(--st-button-muted-background-color-hover);
    }
}

.st-button--outline {
    background-color: transparent;
    box-shadow: inset var(--shadow-raw) var(--st-button-shadow-color);

    &:hover:not(:disabled) {
        background-color: var(--st-button-subtle-background-color);
    }
}

.st-button--ghost {
    background-color: transparent;

    &:hover:not(:disabled) {
        background-color: var(--st-button-subtle-background-color);
    }
}

.st-button--plain {
    background-color: transparent;
}
</style>
