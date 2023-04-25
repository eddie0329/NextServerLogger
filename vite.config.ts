// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import path from 'path';

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
	plugins: [
		typescript({
			check: true,
			tsconfig: path.resolve(__dirname, 'tsconfig.json'),
			tsconfigOverride: {
				compilerOptions: {
					sourceMap: false,
					declaration: true,
					declarationMap: true,
				},
			},
		}),
		peerDepsExternal(),
		react(),
	],
	optimizeDeps: {
		exclude: ['react'],
	},
});
