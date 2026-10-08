import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages では https://<user>.github.io/enjoypickleball/ で配信される
export default defineConfig({ base: '/enjoypickleball/', plugins: [react()] });
