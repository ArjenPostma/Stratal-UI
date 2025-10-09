import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    root: './playground',
    plugins: [vue()],
    resolve: {
        alias: {
            'stratal-ui': path.resolve(__dirname, './src'),
        },
    },
});
