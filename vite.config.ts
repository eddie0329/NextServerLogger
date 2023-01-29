// vite.config.js
import {resolve} from 'path'
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'index',
            fileName: 'index',
        },
        rollupOptions: {
            external: ['react'],
            output: {
                globals: {
                    react: 'react',
                },
            },
        },
    },
    plugins: [react(), peerDepsExternal()],
    resolve: {
        alias: {
            "@": resolve(__dirname, './src'),
        }
    },
    optimizeDeps: {
        exclude: ['react']
    },
})
