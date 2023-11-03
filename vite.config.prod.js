import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/2023-09-orleans-cda-projet1-groupe-b/',
  plugins: [react()],
});
