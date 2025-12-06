import { expect, describe, it } from 'vitest';

import { mount } from '@vue/test-utils';
import { StButton, StButtonStyle, StVariant, StSize } from '../src';

describe('StButton.vue', () => {
    const sizes = Object.values(StSize);
    const variants = Object.values(StVariant);
    const types = Object.values(StButtonStyle);

    const allCombos = [sizes, variants, types].reduce(
        (acc, curr) => acc.flatMap((a) => curr.map((c) => [...a, c])),
        [[]],
    );

    allCombos.forEach(([size, variant, type]) => {
        it(`renders correctly for size=${size}, variant=${variant}, type=${type}`, () => {
            const wrapper = mount(StButton, {
                props: { size, variant, type },
                slots: { default: 'Test' },
            });

            // check main classes
            expect(wrapper.classes()).toContain(`st-button`);
            expect(wrapper.classes()).toContain(`st-button--${size.toLowerCase()}`);
            expect(wrapper.classes()).toContain(`st-button--${variant.toLowerCase()}`);
            expect(wrapper.classes()).toContain(`st-button--${type.toLowerCase()}`);

            // check slot content
            expect(wrapper.text()).toBe('Test');
        });
    });

    it('renders slot content', () => {
        const wrapper = mount(StButton, {
            slots: { default: 'Click me' },
        });
        expect(wrapper.text()).toBe('Click me');
    });

    it('renders as disabled', () => {
        const wrapper = mount(StButton, { attrs: { disabled: true } });
        expect(wrapper.attributes('disabled')).toBeDefined();
    });
});
