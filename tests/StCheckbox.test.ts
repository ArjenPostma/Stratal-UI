import { expect, describe, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { StCheckbox, StCheckboxSize, StVariant, StCheckboxStyle } from '../src';

describe('StCheckbox.vue', () => {
    const sizes = Object.values(StCheckboxSize);
    const variants = Object.values(StVariant);
    const styles = Object.values(StCheckboxStyle);

    sizes.forEach((size) => {
        it(`renders correctly for size=${size}`, () => {
            const wrapper = mount(StCheckbox, {
                props: { size },
            });

            expect(wrapper.classes()).toContain('st-checkbox');
            expect(wrapper.classes()).toContain(`st-checkbox--${size.toLowerCase()}`);
        });
    });

    variants.forEach((variant) => {
        it(`renders correctly for variant=${variant}`, () => {
            const wrapper = mount(StCheckbox, {
                props: { variant },
            });

            expect(wrapper.classes()).toContain('st-checkbox');
            expect(wrapper.classes()).toContain(`st-checkbox--${variant.toLowerCase()}`);
        });
    });

    styles.forEach((type) => {
        it(`renders correctly for checkboxStyle=${type}`, () => {
            const wrapper = mount(StCheckbox, {
                props: { type },
            });

            expect(wrapper.classes()).toContain('st-checkbox');
            expect(wrapper.classes()).toContain(`st-checkbox--${type.toLowerCase()}`);
        });
    });

    it('renders as disabled', () => {
        const wrapper = mount(StCheckbox, {
            props: { disabled: true },
        });

        const input = wrapper.find('input[type="checkbox"]');
        expect(input.attributes('disabled')).toBeDefined();
        expect(wrapper.attributes('aria-disabled')).toBe('true');
    });

    it('renders as required', () => {
        const wrapper = mount(StCheckbox, {
            props: { required: true },
        });

        const input = wrapper.find('input[type="checkbox"]');
        expect(input.attributes('aria-required')).toBe('true');
    });

    it('supports v-model with a boolean value', async () => {
        let value = false;

        const wrapper = mount(StCheckbox, {
            props: {
                modelValue: value,
                'onUpdate:modelValue': (val: boolean) => (value = val),
            },
            attachTo: document.body,
        });

        const input = wrapper.find('input[type="checkbox"]');

        expect((input.element as HTMLInputElement).checked).toBe(false);

        await wrapper.trigger('click');

        expect(value).toBe(true);
        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true]);

        await wrapper.setProps({ modelValue: false });
        expect((input.element as HTMLInputElement).checked).toBe(false);

        wrapper.unmount();
    });

    it('focuses correctly', async () => {
        const wrapper = mount(StCheckbox, { attachTo: document.body });
        const input = wrapper.find('input[type="checkbox"]');

        await input.element.focus();

        expect(document.activeElement).toBe(input.element);

        wrapper.unmount();
    });

    it('does not emit update when disabled', async () => {
        let value = false;
        const wrapper = mount(StCheckbox, {
            props: {
                modelValue: value,
                disabled: true,
                'onUpdate:modelValue': (val: boolean) => (value = val),
            },
        });

        await wrapper.trigger('click');
        expect(value).toBe(false);
        expect(wrapper.emitted()).not.toHaveProperty('update:modelValue');
    });

    it('sets the indeterminate state', async () => {
        const wrapper = mount(StCheckbox, {
            props: {
                indeterminate: true,
            },
        });
        const input = wrapper.find('input[type="checkbox"]');
        expect((input.element as HTMLInputElement).indeterminate).toBe(true);

        await wrapper.setProps({ indeterminate: false });
        expect((input.element as HTMLInputElement).indeterminate).toBe(false);
    });

    it('renders unchecked by default', () => {
        const wrapper = mount(StCheckbox);
        const input = wrapper.find('input[type="checkbox"]');
        expect((input.element as HTMLInputElement).checked).toBe(false);
    });
});
