// vite.umd.config.ts
import path from "path";
import vue from "file:///D:/01_%E5%89%8D%E7%AB%AF/05_%E4%B8%AA%E4%BA%BA%E6%A1%88%E4%BE%8B/02_Vue/05_%E7%BB%84%E4%BB%B6%E5%B0%81%E8%A3%85/coderjc-ui/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.1_@types+node@20.14.5_less@4.2.0_sass@1.77.6_terser@5.31.1__dto5x6ouxmu2kntajqpjth5lqa/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { defineConfig } from "file:///D:/01_%E5%89%8D%E7%AB%AF/05_%E4%B8%AA%E4%BA%BA%E6%A1%88%E4%BE%8B/02_Vue/05_%E7%BB%84%E4%BB%B6%E5%B0%81%E8%A3%85/coderjc-ui/node_modules/.pnpm/vite@5.3.1_@types+node@20.14.5_less@4.2.0_sass@1.77.6_terser@5.31.1/node_modules/vite/dist/node/index.js";
import dts from "file:///D:/01_%E5%89%8D%E7%AB%AF/05_%E4%B8%AA%E4%BA%BA%E6%A1%88%E4%BE%8B/02_Vue/05_%E7%BB%84%E4%BB%B6%E5%B0%81%E8%A3%85/coderjc-ui/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.14.5_rollup@4.18.0_typescript@5.4.5_vite@5.3.1_@types+no_p4oibb7gduyhb7vpoovpq4yzpi/node_modules/vite-plugin-dts/dist/index.mjs";
import vueDefineOptions from "file:///D:/01_%E5%89%8D%E7%AB%AF/05_%E4%B8%AA%E4%BA%BA%E6%A1%88%E4%BE%8B/02_Vue/05_%E7%BB%84%E4%BB%B6%E5%B0%81%E8%A3%85/coderjc-ui/node_modules/.pnpm/unplugin-vue-define-options@1.4.5_rollup@4.18.0_vue@3.4.29_typescript@5.4.5_/node_modules/unplugin-vue-define-options/dist/vite.mjs";
var __vite_injected_original_dirname = "D:\\01_\u524D\u7AEF\\05_\u4E2A\u4EBA\u6848\u4F8B\\02_Vue\\05_\u7EC4\u4EF6\u5C01\u88C5\\coderjc-ui\\packages\\coderjc-ui";
var vite_umd_config_default = defineConfig({
  server: {
    port: 9527
  },
  plugins: [
    vueDefineOptions(),
    vue(),
    dts({
      tsconfigPath: "./tsconfig.build.json",
      outDir: "dist/types"
    })
  ],
  build: {
    outDir: "dist/umd",
    rollupOptions: {
      external: [
        "vue-loader",
        "vue",
        "@vitejs/plugin-vue",
        "@types/node",
        "vite-plugin-dts",
        "move-file-cli",
        "npm-run-all",
        /\.(spec|test)\.(js|txs|ts)?$/
      ],
      output: {
        exports: "named",
        globals: {
          vue: "Vue"
        },
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === "style.css") {
            return "index.css";
          }
          return chunkInfo.name;
        }
      }
    },
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "./index.ts"),
      name: "CoderjcUI",
      fileName: "index",
      formats: ["umd"]
    }
  }
});
export {
  vite_umd_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS51bWQuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcMDFfXHU1MjREXHU3QUVGXFxcXDA1X1x1NEUyQVx1NEVCQVx1Njg0OFx1NEY4QlxcXFwwMl9WdWVcXFxcMDVfXHU3RUM0XHU0RUY2XHU1QzAxXHU4OEM1XFxcXGNvZGVyamMtdWlcXFxccGFja2FnZXNcXFxcY29kZXJqYy11aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcMDFfXHU1MjREXHU3QUVGXFxcXDA1X1x1NEUyQVx1NEVCQVx1Njg0OFx1NEY4QlxcXFwwMl9WdWVcXFxcMDVfXHU3RUM0XHU0RUY2XHU1QzAxXHU4OEM1XFxcXGNvZGVyamMtdWlcXFxccGFja2FnZXNcXFxcY29kZXJqYy11aVxcXFx2aXRlLnVtZC5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LzAxXyVFNSU4OSU4RCVFNyVBQiVBRi8wNV8lRTQlQjglQUElRTQlQkElQkElRTYlQTElODglRTQlQkUlOEIvMDJfVnVlLzA1XyVFNyVCQiU4NCVFNCVCQiVCNiVFNSVCMCU4MSVFOCVBMyU4NS9jb2RlcmpjLXVpL3BhY2thZ2VzL2NvZGVyamMtdWkvdml0ZS51bWQuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuaW1wb3J0IHZ1ZURlZmluZU9wdGlvbnMgZnJvbSAndW5wbHVnaW4tdnVlLWRlZmluZS1vcHRpb25zL3ZpdGUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDk1MjdcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZURlZmluZU9wdGlvbnMoKSxcbiAgICB2dWUoKSxcbiAgICBkdHMoe1xuICAgICAgdHNjb25maWdQYXRoOiAnLi90c2NvbmZpZy5idWlsZC5qc29uJyxcbiAgICAgIG91dERpcjogJ2Rpc3QvdHlwZXMnXG4gICAgfSlcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICdkaXN0L3VtZCcsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtcbiAgICAgICAgJ3Z1ZS1sb2FkZXInLFxuICAgICAgICAndnVlJyxcbiAgICAgICAgJ0B2aXRlanMvcGx1Z2luLXZ1ZScsXG4gICAgICAgICdAdHlwZXMvbm9kZScsXG4gICAgICAgICd2aXRlLXBsdWdpbi1kdHMnLFxuICAgICAgICAnbW92ZS1maWxlLWNsaScsXG4gICAgICAgICducG0tcnVuLWFsbCcsXG4gICAgICAgIC9cXC4oc3BlY3x0ZXN0KVxcLihqc3x0eHN8dHMpPyQvXG4gICAgICBdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGV4cG9ydHM6ICduYW1lZCcsXG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICB2dWU6ICdWdWUnXG4gICAgICAgIH0sXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiBjaHVua0luZm8gPT4ge1xuICAgICAgICAgIGlmIChjaHVua0luZm8ubmFtZSA9PT0gJ3N0eWxlLmNzcycpIHtcbiAgICAgICAgICAgIHJldHVybiAnaW5kZXguY3NzJ1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY2h1bmtJbmZvLm5hbWUhXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL2luZGV4LnRzJyksXG4gICAgICBuYW1lOiAnQ29kZXJqY1VJJyxcbiAgICAgIGZpbGVOYW1lOiAnaW5kZXgnLFxuICAgICAgZm9ybWF0czogWyd1bWQnXVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb2QsT0FBTyxVQUFVO0FBQ3JlLE9BQU8sU0FBUztBQUNoQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxzQkFBc0I7QUFKN0IsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTywwQkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLGlCQUFpQjtBQUFBLElBQ2pCLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxNQUNGLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxJQUNWLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUEsUUFDUDtBQUFBLFFBQ0EsZ0JBQWdCLGVBQWE7QUFDM0IsY0FBSSxVQUFVLFNBQVMsYUFBYTtBQUNsQyxtQkFBTztBQUFBLFVBQ1Q7QUFDQSxpQkFBTyxVQUFVO0FBQUEsUUFDbkI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gsT0FBTyxLQUFLLFFBQVEsa0NBQVcsWUFBWTtBQUFBLE1BQzNDLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVMsQ0FBQyxLQUFLO0FBQUEsSUFDakI7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
