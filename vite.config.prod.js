import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/gamepulse/', // TODO: use the right repo name
  plugins: [react()],
});
