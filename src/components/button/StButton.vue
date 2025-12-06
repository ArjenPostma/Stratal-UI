<template>
    <button
        type="button"
        class="st-button"
        :class="{
            'st-button--xxs': size === StSize.XXS,
            'st-button--xs': size === StSize.XS,
            'st-button--sm': size === StSize.SM,
            'st-button--md': size === StSize.MD,
            'st-button--lg': size === StSize.LG,
            'st-button--xl': size === StSize.XL,
            'st-button--xxl': size === StSize.XXL,

            'st-button--grey': variant === StVariant.GREY,
            'st-button--red': variant === StVariant.RED,
            'st-button--pink': variant === StVariant.PINK,
            'st-button--purple': variant === StVariant.PURPLE,
            'st-button--cyan': variant === StVariant.CYAN,
            'st-button--blue': variant === StVariant.BLUE,
            'st-button--teal': variant === StVariant.TEAL,
            'st-button--green': variant === StVariant.GREEN,
            'st-button--yellow': variant === StVariant.YELLOW,
            'st-button--orange': variant === StVariant.ORANGE,

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
import { StSize, StVariant } from '../../enums';
import { StButtonStyle } from './enums';

defineProps({
    size: {
        type: String as PropType<StSize>,
        default: StSize.MD,
    },
    variant: {
        type: String as PropType<StVariant>,
        default: StVariant.GREY,
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
    gap: var(--st-button-gap, 8px);
    padding: var(--st-button-padding, 4px 12px);
    font: var(--st-button-font, var(--font-sm));
    letter-spacing: var(--st-button-letter-spacing, var(--font-sm-letter-spacing));
    color: var(--st-button-font-color, currentColor);
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

.st-button--xxs {
    --st-button-padding: 4px 8px;
    --st-button-gap: 4px;
    --st-button-font: var(--font-xs);
    --st-button-letter-spacing: var(--font-xs-letter-spacing);
}

.st-button--xs {
    --st-button-padding: 8px 10px;
    --st-button-gap: 4px;
    --st-button-font: var(--font-xs);
    --st-button-letter-spacing: var(--font-xs-letter-spacing);
}

.st-button--sm {
    --st-button-padding: 8px 14px;
    --st-button-gap: 8px;
    --st-button-font: var(--font-sm);
    --st-button-letter-spacing: var(--font-sm-letter-spacing);
}

.st-button--md {
    --st-button-padding: 10px 16px;
    --st-button-gap: 8px;
    --st-button-font: var(--font-sm);
    --st-button-letter-spacing: var(--font-sm-letter-spacing);
}

.st-button--lg {
    --st-button-padding: 10px 20px;
    --st-button-gap: 12px;
    --st-button-font: var(--font-md);
    --st-button-letter-spacing: var(--font-md-letter-spacing);
}

.st-button--xl {
    --st-button-padding: 12px 20px;
    --st-button-gap: 10px;
    --st-button-font: var(--font-md);
    --st-button-letter-spacing: var(--font-md-letter-spacing);
}

.st-button--xxl {
    --st-button-padding: 18px 28px;
    --st-button-gap: 12px;
    --st-button-font: var(--font-lg);
    --st-button-letter-spacing: var(--font-lg-letter-spacing);
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
