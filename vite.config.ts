import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
    root: './playground',
    plugins: [vue()],
    resolve: {
        alias: {
            'stratal-ui': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
