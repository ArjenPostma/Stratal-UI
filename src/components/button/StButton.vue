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
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border: 0;

    &:hover {
        cursor: pointer;
    }
}

.st-button--2xs {
    padding: 2px 8px;
    gap: 4px;
    border-radius: 4px;
    font: var(--font-xs);
    letter-spacing: var(--font-xs-letter-spacing);
}

.st-button--xs {
    padding: 2px 10px;
    gap: 4px;
    border-radius: 4px;
    font: var(--font-xs);
    letter-spacing: var(--font-xs-letter-spacing);
}

.st-button--sm {
    padding: 2px 14px;
    gap: 8px;
    border-radius: 4px;
    font: var(--font-sm);
    letter-spacing: var(--font-sm-letter-spacing);
}

.st-button--md {
    padding: 2px 16px;
    gap: 8px;
    border-radius: 4px;
    font: var(--font-sm);
    letter-spacing: var(--font-sm-letter-spacing);
}

.st-button--lg {
    padding: 2px 20px;
    gap: 12px;
    border-radius: 4px;
    font: var(--font-md);
    letter-spacing: var(--font-md-letter-spacing);
}

.st-button--xl {
    padding: 2px 20px;
    gap: 10px;
    border-radius: 4px;
    font: var(--font-md);
    letter-spacing: var(--font-md-letter-spacing);
}

.st-button--2xl {
    padding: 2px 28px;
    gap: 12px;
    border-radius: 4px;
    font: var(--font-lg);
    letter-spacing: var(--font-lg-letter-spacing);
}
.st-button--grey {
    color: var(--grey-foreground);

    &.st-button--solid {
        background-color: var(--grey-solid);
        color: var(--grey-contrast);
        &:hover {
            opacity: 90%;
        }
    }

    &.st-button--subtle {
        background-color: var(--grey-subtle);

        &:hover {
            background-color: var(--grey-muted);
        }
    }

    &.st-button--surface {
        background-color: var(--grey-subtle);
        box-shadow: inset var(--shadow-raw) var(--grey-muted);

        &:hover {
            background-color: var(--grey-muted);
        }
    }

    &.st-button--outline {
        background-color: transparent;
        box-shadow: inset var(--shadow-raw) var(--grey-muted);

        &:hover {
            background-color: var(--grey-subtle);
        }
    }

    &.st-button--ghost {
        background-color: transparent;

        &:hover {
            background-color: var(--grey-subtle);
        }
    }

    &.st-button--plain {
        background-color: transparent;
    }
}

.st-button--red {
    color: var(--red-foreground);

    &.st-button--solid {
        background-color: var(--red-solid);
        color: var(--red-contrast);

        &:hover {
            opacity: 90%;
        }
    }

    &.st-button--subtle {
        background-color: var(--red-subtle);

        &:hover {
            background-color: var(--red-muted);
        }
    }

    &.st-button--surface {
        background-color: var(--red-subtle);
        box-shadow: inset var(--shadow-raw) var(--red-muted);

        &:hover {
            background-color: var(--red-muted);
        }
    }

    &.st-button--outline {
        background-color: transparent;
        box-shadow: inset var(--shadow-raw) var(--red-muted);

        &:hover {
            background-color: var(--red-subtle);
        }
    }

    &.st-button--ghost {
        background-color: transparent;

        &:hover {
            background-color: var(--red-subtle);
        }
    }

    &.st-button--plain {
        background-color: transparent;
    }
}

.st-button--pink {
    color: var(--pink-foreground);

    &.st-button--solid {
        background-color: var(--pink-solid);
        color: var(--pink-contrast);

        &:hover {
            opacity: 90%;
        }
    }

    &.st-button--subtle {
        background-color: var(--pink-subtle);

        &:hover {
            background-color: var(--pink-muted);
        }
    }

    &.st-button--surface {
        background-color: var(--pink-subtle);
        box-shadow: inset var(--shadow-raw) var(--pink-muted);

        &:hover {
            background-color: var(--pink-muted);
        }
    }

    &.st-button--outline {
        background-color: transparent;
        box-shadow: inset var(--shadow-raw) var(--pink-muted);

        &:hover {
            background-color: var(--pink-subtle);
        }
    }

    &.st-button--ghost {
        background-color: transparent;

        &:hover {
            background-color: var(--pink-subtle);
        }
    }

    &.st-button--plain {
        background-color: transparent;
    }
}

.st-button--purple {
    color: var(--purple-foreground);

    &.st-button--solid {
        background-color: var(--purple-solid);
        color: var(--purple-contrast);

        &:hover {
            opacity: 90%;
        }
    }

    &.st-button--subtle {
        background-color: var(--purple-subtle);

        &:hover {
            background-color: var(--purple-muted);
        }
    }

    &.st-button--surface {
        background-color: var(--purple-subtle);
        box-shadow: inset var(--shadow-raw) var(--purple-muted);

        &:hover {
            background-color: var(--purple-muted);
        }
    }

    &.st-button--outline {
        background-color: transparent;
        box-shadow: inset var(--shadow-raw) var(--purple-muted);

        &:hover {
            background-color: var(--purple-subtle);
        }
    }

    &.st-button--ghost {
        background-color: transparent;

        &:hover {
            background-color: var(--purple-subtle);
        }
    }

    &.st-button--plain {
        background-color: transparent;
    }
}

.st-button--cyan {
    color: var(--cyan-foreground);

    &.st-button--solid {
        background-color: var(--cyan-solid);
        color: var(--cyan-contrast);

        &:hover {
            opacity: 90%;
        }
    }

    &.st-button--subtle {
        background-color: var(--cyan-subtle);

        &:hover {
            background-color: var(--cyan-muted);
        }
    }

    &.st-button--surface {
        background-color: var(--cyan-subtle);
        box-shadow: inset var(--shadow-raw) var(--cyan-muted);

        &:hover {
            background-color: var(--cyan-muted);
        }
    }

    &.st-button--outline {
        background-color: transparent;
        box-shadow: inset var(--shadow-raw) var(--cyan-muted);

        &:hover {
            background-color: var(--cyan-subtle);
        }
    }

    &.st-button--ghost {
        background-color: transparent;

        &:hover {
            background-color: var(--cyan-subtle);
        }
    }

    &.st-button--plain {
        background-color: transparent;
    }
}

.st-button--blue {
    color: var(--blue-foreground);

    &.st-button--solid {
        background-color: var(--blue-solid);
        color: var(--blue-contrast);

        &:hover {
            opacity: 90%;
        }
    }

    &.st-button--subtle {
        background-color: var(--blue-subtle);

        &:hover {
            background-color: var(--blue-muted);
        }
    }

    &.st-button--surface {
        background-color: var(--blue-subtle);
        box-shadow: inset var(--shadow-raw) var(--blue-muted);

        &:hover {
            background-color: var(--blue-muted);
        }
    }

    &.st-button--outline {
        background-color: transparent;
        box-shadow: inset var(--shadow-raw) var(--blue-muted);

        &:hover {
            background-color: var(--blue-subtle);
        }
    }

    &.st-button--ghost {
        background-color: transparent;

        &:hover {
            background-color: var(--blue-subtle);
        }
    }

    &.st-button--plain {
        background-color: transparent;
    }
}

.st-button--teal {
    color: var(--teal-foreground);

    &.st-button--solid {
        background-color: var(--teal-solid);
        color: var(--teal-contrast);

        &:hover {
            opacity: 90%;
        }
    }

    &.st-button--subtle {
        background-color: var(--teal-subtle);

        &:hover {
            background-color: var(--teal-muted);
        }
    }

    &.st-button--surface {
        background-color: var(--teal-subtle);
        box-shadow: inset var(--shadow-raw) var(--teal-muted);

        &:hover {
            background-color: var(--teal-muted);
        }
    }

    &.st-button--outline {
        background-color: transparent;
        box-shadow: inset var(--shadow-raw) var(--teal-muted);

        &:hover {
            background-color: var(--teal-subtle);
        }
    }

    &.st-button--ghost {
        background-color: transparent;

        &:hover {
            background-color: var(--teal-subtle);
        }
    }

    &.st-button--plain {
        background-color: transparent;
    }
}

.st-button--green {
    color: var(--green-foreground);

    &.st-button--solid {
        background-color: var(--green-solid);
        color: var(--green-contrast);

        &:hover {
            opacity: 90%;
        }
    }

    &.st-button--subtle {
        background-color: var(--green-subtle);

        &:hover {
            background-color: var(--green-muted);
        }
    }

    &.st-button--surface {
        background-color: var(--green-subtle);
        box-shadow: inset var(--shadow-raw) var(--green-muted);

        &:hover {
            background-color: var(--green-muted);
        }
    }

    &.st-button--outline {
        background-color: transparent;
        box-shadow: inset var(--shadow-raw) var(--green-muted);

        &:hover {
            background-color: var(--green-subtle);
        }
    }

    &.st-button--ghost {
        background-color: transparent;

        &:hover {
            background-color: var(--green-subtle);
        }
    }

    &.st-button--plain {
        background-color: transparent;
    }
}

.st-button--yellow {
    color: var(--yellow-foreground);

    &.st-button--solid {
        background-color: var(--yellow-solid);
        color: var(--yellow-contrast);

        &:hover {
            opacity: 90%;
        }
    }

    &.st-button--subtle {
        background-color: var(--yellow-subtle);

        &:hover {
            background-color: var(--yellow-muted);
        }
    }

    &.st-button--surface {
        background-color: var(--yellow-subtle);
        box-shadow: inset var(--shadow-raw) var(--yellow-muted);

        &:hover {
            background-color: var(--yellow-muted);
        }
    }

    &.st-button--outline {
        background-color: transparent;
        box-shadow: inset var(--shadow-raw) var(--yellow-muted);

        &:hover {
            background-color: var(--yellow-subtle);
        }
    }

    &.st-button--ghost {
        background-color: transparent;

        &:hover {
            background-color: var(--yellow-subtle);
        }
    }

    &.st-button--plain {
        background-color: transparent;
    }
}

.st-button--orange {
    color: var(--orange-foreground);

    &.st-button--solid {
        background-color: var(--orange-solid);
        color: var(--orange-contrast);

        &:hover {
            opacity: 90%;
        }
    }

    &.st-button--subtle {
        background-color: var(--orange-subtle);

        &:hover {
            background-color: var(--orange-muted);
        }
    }

    &.st-button--surface {
        background-color: var(--orange-subtle);
        box-shadow: inset var(--shadow-raw) var(--orange-muted);

        &:hover {
            background-color: var(--orange-muted);
        }
    }

    &.st-button--outline {
        background-color: transparent;
        box-shadow: inset var(--shadow-raw) var(--orange-muted);

        &:hover {
            background-color: var(--orange-subtle);
        }
    }

    &.st-button--ghost {
        background-color: transparent;

        &:hover {
            background-color: var(--orange-subtle);
        }
    }

    &.st-button--plain {
        background-color: transparent;
    }
}
</style>
