import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // enables source maps in the final build
    rollupOptions: {
      plugins: [visualizer({ open: true })],
    },
  },
})
