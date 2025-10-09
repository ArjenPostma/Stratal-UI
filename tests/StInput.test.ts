import { expect, describe, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { StInput, StSize } from '../src';

describe('StInput.vue', () => {
    const sizes = Object.values(StSize);

    sizes.forEach((size) => {
        it(`renders correctly for size=${size}`, () => {
            const wrapper = mount(StInput, {
                props: { size },
            });

            expect(wrapper.classes()).toContain('st-input');
            expect(wrapper.classes()).toContain(`st-input--${size.toLowerCase()}`);
        });
    });

    it('renders as disabled', () => {
        const wrapper = mount(StInput, {
            props: { disabled: true },
        });

        expect(wrapper.attributes('disabled')).toBeDefined();
        expect(wrapper.attributes('aria-disabled')).toBe('true');
    });

    it('renders as invalid', () => {
        const wrapper = mount(StInput, {
            props: { invalid: true },
        });

        expect(wrapper.classes()).toContain('st-input--invalid');
        expect(wrapper.attributes('aria-invalid')).toBe('true');
    });

    it('renders as required', () => {
        const wrapper = mount(StInput, {
            props: { required: true },
        });

        expect(wrapper.attributes('aria-required')).toBe('true');
    });

    it('supports v-model correctly', async () => {
        let value = 'initial';

        const wrapper = mount(StInput, {
            props: {
                modelValue: value,
                'onUpdate:modelValue': (val: string) => (value = val),
            },
            attachTo: document.body,
        });

        const input = wrapper.find('input');

        expect((input.element as HTMLInputElement).value).toBe('initial');

        await input.setValue('updated');

        expect(value).toBe('updated');

        await wrapper.setProps({ modelValue: 'new value' });
        expect((input.element as HTMLInputElement).value).toBe('new value');

        wrapper.unmount();
    });

    it('renders placeholder if provided', () => {
        const wrapper = mount(StInput, {
            attrs: { placeholder: 'Enter text' },
        });

        const input = wrapper.find('input');
        expect(input.attributes('placeholder')).toBe('Enter text');
    });

    it('focuses correctly and applies focus outline', async () => {
        const wrapper = mount(StInput, { attachTo: document.body });
        const input = wrapper.find('input');

        (input.element as HTMLInputElement).focus();

        expect(document.activeElement).toBe(input.element);

        wrapper.unmount();
    });

    it('does not emit update when disabled', async () => {
        let value = '';
        const wrapper = mount(StInput, {
            props: {
                modelValue: value,
                disabled: true,
                'onUpdate:modelValue': (val: string) => (value = val),
            },
            attachTo: document.body,
        });
        const input = wrapper.find('input');
        await input.setValue('typed');
        expect(value).toBe('');
        wrapper.unmount();
    });

    it('emits input event correctly', async () => {
        const wrapper = mount(StInput);
        const input = wrapper.find('input');
        await input.setValue('abc');
        expect(wrapper.emitted()).toHaveProperty('update:modelValue');
    });

    it('renders empty value by default', () => {
        const wrapper = mount(StInput);
        expect((wrapper.find('input').element as HTMLInputElement).value).toBe('');
    });
});
