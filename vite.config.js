import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // תיקיית השורש של הפרויקט
  publicDir: 'public', // תיקיית הקבצים הסטטיים
  build: {
    outDir: 'dist', // תיקיית הפלט לאחר הבנייה
  },
});
