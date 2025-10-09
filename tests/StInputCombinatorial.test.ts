import { expect, describe, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { StInput, StSize } from '../src';

describe('StInput.vue combinatorial tests', () => {
    const sizes = Object.values(StSize);
    const bools = [true, false];

    // Generate all combinations of [size, disabled, invalid, required]
    const allCombos = sizes.flatMap((size) =>
        bools.flatMap((disabled) =>
            bools.flatMap((invalid) =>
                bools.map((required) => ({ size, disabled, invalid, required })),
            ),
        ),
    );

    allCombos.forEach(({ size, disabled, invalid, required }) => {
        it(`renders correctly for size=${size}, disabled=${disabled}, invalid=${invalid}, required=${required}`, () => {
            const wrapper = mount(StInput, {
                props: { size, disabled, invalid, required },
            });

            const input = wrapper.find('input');

            // Classes
            expect(wrapper.classes()).toContain('st-input');
            expect(wrapper.classes()).toContain(`st-input--${size.toLowerCase()}`);
            if (invalid) expect(wrapper.classes()).toContain('st-input--invalid');
            else expect(wrapper.classes()).not.toContain('st-input--invalid');

            // Attributes
            expect(input.attributes('disabled')).toBe(disabled ? '' : undefined);
            expect(input.attributes('aria-disabled')).toBe(disabled ? 'true' : 'false');
            expect(input.attributes('aria-invalid')).toBe(invalid ? 'true' : 'false');
            expect(input.attributes('aria-required')).toBe(required ? 'true' : 'false');
        });
    });
});
