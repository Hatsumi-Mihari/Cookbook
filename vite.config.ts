import { defineConfig, loadEnv } from 'vite';
import type { UserConfig, ConfigEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd(), '');
  const isDev = mode === 'development';


  return {
    plugins: [react(), svgr(), 
        /*!isDev && {
        name: 'strip-debug-code',
        transform(code, id) {
          if (/\.(mjs|js|ts|jsx|tsx)$/.test(id)) {
            return {
              code: code
                .replace(/console\.(log|debug|info)\([\s\S]*?\);?/g, '')
                .replace(/\b(debugUI|debugNet|debugStore)\([\s\S]*?\);?/g, '')
                .replace(/debugger;/g, ''),
              map: null,
            };
          }
        },
      },*/
    ],

    base: '/Cookbook/',

    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV || mode),
      __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
    },

    server: {
      host: true,
      port: Number(env.VITE_PORT) || 3000,
    },

    build: {
      sourcemap: false,
      minify: !isDev ? 'oxc' : false,
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