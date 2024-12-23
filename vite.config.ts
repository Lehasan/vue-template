import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src/'),
			'@assets': path.resolve(__dirname, './src/assets/'),
			'@components': path.resolve(__dirname, './src/components/'),
			'@styles': path.resolve(__dirname, './src/styles/'),
			'@stores': path.resolve(__dirname, './src/stores/'),
			'@routes': path.resolve(__dirname, './src/routes/'),
			'@utils': path.resolve(__dirname, './src/utils/'),
			'@hooks': path.resolve(__dirname, './src/hooks/'),
			'@constants': path.resolve(__dirname, './src/constants/'),
		}
	}
})