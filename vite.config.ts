import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import {ViteFaviconsPlugin} from 'vite-plugin-favicon2';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteFaviconsPlugin('/favicon.ico')],
});
