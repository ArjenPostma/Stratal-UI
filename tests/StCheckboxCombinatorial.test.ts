import { expect, describe, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { StCheckbox, StCheckboxSize, StVariant, StCheckboxStyle } from '../src';

describe('StCheckbox.vue combinatorial tests', () => {
    const sizes = Object.values(StCheckboxSize);
    const variants = Object.values(StVariant);
    const styles = Object.values(StCheckboxStyle);
    const bools = [true, false];

    // Generate all combinations of [size, variants, styles, disabled, required]
    const allCombos = sizes.flatMap((size) =>
        variants.flatMap((variant) =>
            styles.flatMap((type) =>
                bools.flatMap((disabled) =>
                    bools.map((required) => ({ size, variant, type, disabled, required })),
                ),
            ),
        ),
    );

    allCombos.forEach(({ size, variant, type, disabled, required }) => {
        it(`renders correctly for size=${size}, variant=${variant}, type=${type}, disabled=${disabled}, required=${required}`, () => {
            const wrapper = mount(StCheckbox, {
                props: { size, variant, type, disabled, required },
            });

            const input = wrapper.find('input');

            // Classes
            expect(wrapper.classes()).toContain('st-checkbox');
            expect(wrapper.classes()).toContain(`st-checkbox--${size.toLowerCase()}`);
            expect(wrapper.classes()).toContain(`st-checkbox--${variant.toLowerCase()}`);
            expect(wrapper.classes()).toContain(`st-checkbox--${type.toLowerCase()}`);

            // Attributes
            expect(input.attributes('disabled')).toBe(disabled ? '' : undefined);

            if (disabled) {
                expect(wrapper.classes()).toContain(`st-checkbox--disabled`);
            } else {
                expect(wrapper.classes()).not.toContain(`st-checkbox--disabled`);
            }

            expect(input.attributes('aria-required')).toBe(required ? 'true' : 'false');
        });
    });
});
