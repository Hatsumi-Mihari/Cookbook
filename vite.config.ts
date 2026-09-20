import { defineConfig, loadEnv } from 'vite';
import type { UserConfig, ConfigEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd(), '');
  const isDev = mode === 'development';


  return {
    plugins: [react(), svgr(), 
       env.VITE_ENABLE_DEBUG === 'false' && {
        name: 'strip-debug-code',
        transform(code: string, id: string) {
          // 1. ВАЖНО: Игнорируем node_modules и файлы вне папки src
          if (id.includes('node_modules') || !id.includes('/src/')) {
            return null;
          }

          // 2. Обрабатываем только нужные расширения
          if (/\.(mjs|js|ts|jsx|tsx)$/.test(id)) {
            return {
              code: code
                // Удаляем только безопасные console.*
                .replace(/console\.(log|debug|info)\([\s\S]*?\);?/g, '')
                .replace(/\b(debugUI|debugNet|debugStore)\([\s\S]*?\);?/g, '')
                .replace(/debugger;/g, ''),
              map: null,
            };
          }
          return null;
        },
      },
    ].filter(Boolean),

    base: '/Cookbook/',

    server: {
      host: true,
      port: Number(env.VITE_PORT) || 3000,
    },

    build: {
      sourcemap: false,
      minify: isDev ? 'oxc' : false,
      rollupOptions: {
              output: {
                manualChunks(id) {
                  if (id.includes('node_modules')) {
                    return 'vendor';
                  } 
                },
        },
      },
    },
  };
});