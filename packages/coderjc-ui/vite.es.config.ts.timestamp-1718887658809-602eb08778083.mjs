// vite.es.config.ts
import path from "path";
import vue from "file:///D:/01_%E5%89%8D%E7%AB%AF/05_%E4%B8%AA%E4%BA%BA%E6%A1%88%E4%BE%8B/02_Vue/05_%E7%BB%84%E4%BB%B6%E5%B0%81%E8%A3%85/coderjc-ui/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.1_@types+node@20.14.5_less@4.2.0_sass@1.77.6_terser@5.31.1__dto5x6ouxmu2kntajqpjth5lqa/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { defineConfig } from "file:///D:/01_%E5%89%8D%E7%AB%AF/05_%E4%B8%AA%E4%BA%BA%E6%A1%88%E4%BE%8B/02_Vue/05_%E7%BB%84%E4%BB%B6%E5%B0%81%E8%A3%85/coderjc-ui/node_modules/.pnpm/vite@5.3.1_@types+node@20.14.5_less@4.2.0_sass@1.77.6_terser@5.31.1/node_modules/vite/dist/node/index.js";
import dts from "file:///D:/01_%E5%89%8D%E7%AB%AF/05_%E4%B8%AA%E4%BA%BA%E6%A1%88%E4%BE%8B/02_Vue/05_%E7%BB%84%E4%BB%B6%E5%B0%81%E8%A3%85/coderjc-ui/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.14.5_rollup@4.18.0_typescript@5.4.5_vite@5.3.1_@types+no_p4oibb7gduyhb7vpoovpq4yzpi/node_modules/vite-plugin-dts/dist/index.mjs";
import vueDefineOptions from "file:///D:/01_%E5%89%8D%E7%AB%AF/05_%E4%B8%AA%E4%BA%BA%E6%A1%88%E4%BE%8B/02_Vue/05_%E7%BB%84%E4%BB%B6%E5%B0%81%E8%A3%85/coderjc-ui/node_modules/.pnpm/unplugin-vue-define-options@1.4.5_rollup@4.18.0_vue@3.4.29_typescript@5.4.5_/node_modules/unplugin-vue-define-options/dist/vite.mjs";
var __vite_injected_original_dirname = "D:\\01_\u524D\u7AEF\\05_\u4E2A\u4EBA\u6848\u4F8B\\02_Vue\\05_\u7EC4\u4EF6\u5C01\u88C5\\coderjc-ui\\packages\\coderjc-ui";
var vite_es_config_default = defineConfig({
  server: {
    port: 9527
  },
  plugins: [
    vueDefineOptions(),
    vue(),
    dts({
      // rollupTypes: true, // 把所有类型打包到一个文件中
      tsconfigPath: "./tsconfig.build.json",
      outDir: "dist/types"
    })
  ],
  build: {
    outDir: "dist/es",
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
      formats: ["es"]
    }
  }
});
export {
  vite_es_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5lcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFwwMV9cdTUyNERcdTdBRUZcXFxcMDVfXHU0RTJBXHU0RUJBXHU2ODQ4XHU0RjhCXFxcXDAyX1Z1ZVxcXFwwNV9cdTdFQzRcdTRFRjZcdTVDMDFcdTg4QzVcXFxcY29kZXJqYy11aVxcXFxwYWNrYWdlc1xcXFxjb2RlcmpjLXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFwwMV9cdTUyNERcdTdBRUZcXFxcMDVfXHU0RTJBXHU0RUJBXHU2ODQ4XHU0RjhCXFxcXDAyX1Z1ZVxcXFwwNV9cdTdFQzRcdTRFRjZcdTVDMDFcdTg4QzVcXFxcY29kZXJqYy11aVxcXFxwYWNrYWdlc1xcXFxjb2RlcmpjLXVpXFxcXHZpdGUuZXMuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8wMV8lRTUlODklOEQlRTclQUIlQUYvMDVfJUU0JUI4JUFBJUU0JUJBJUJBJUU2JUExJTg4JUU0JUJFJThCLzAyX1Z1ZS8wNV8lRTclQkIlODQlRTQlQkIlQjYlRTUlQjAlODElRTglQTMlODUvY29kZXJqYy11aS9wYWNrYWdlcy9jb2RlcmpjLXVpL3ZpdGUuZXMuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuaW1wb3J0IHZ1ZURlZmluZU9wdGlvbnMgZnJvbSAndW5wbHVnaW4tdnVlLWRlZmluZS1vcHRpb25zL3ZpdGUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDk1MjdcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZURlZmluZU9wdGlvbnMoKSxcbiAgICB2dWUoKSxcbiAgICBkdHMoe1xuICAgICAgLy8gcm9sbHVwVHlwZXM6IHRydWUsIC8vIFx1NjI4QVx1NjI0MFx1NjcwOVx1N0M3Qlx1NTc4Qlx1NjI1M1x1NTMwNVx1NTIzMFx1NEUwMFx1NEUyQVx1NjU4N1x1NEVGNlx1NEUyRFxuICAgICAgdHNjb25maWdQYXRoOiAnLi90c2NvbmZpZy5idWlsZC5qc29uJyxcbiAgICAgIG91dERpcjogJ2Rpc3QvdHlwZXMnXG4gICAgfSlcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICdkaXN0L2VzJyxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogW1xuICAgICAgICAndnVlLWxvYWRlcicsXG4gICAgICAgICd2dWUnLFxuICAgICAgICAnQHZpdGVqcy9wbHVnaW4tdnVlJyxcbiAgICAgICAgJ0B0eXBlcy9ub2RlJyxcbiAgICAgICAgJ3ZpdGUtcGx1Z2luLWR0cycsXG4gICAgICAgICdtb3ZlLWZpbGUtY2xpJyxcbiAgICAgICAgJ25wbS1ydW4tYWxsJyxcbiAgICAgICAgL1xcLihzcGVjfHRlc3QpXFwuKGpzfHR4c3x0cyk/JC9cbiAgICAgIF0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IGNodW5rSW5mbyA9PiB7XG4gICAgICAgICAgaWYgKGNodW5rSW5mby5uYW1lID09PSAnc3R5bGUuY3NzJykge1xuICAgICAgICAgICAgcmV0dXJuICdpbmRleC5jc3MnXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjaHVua0luZm8ubmFtZSFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vaW5kZXgudHMnKSxcbiAgICAgIG5hbWU6ICdDb2RlcmpjVUknLFxuICAgICAgZmlsZU5hbWU6ICdpbmRleCcsXG4gICAgICBmb3JtYXRzOiBbJ2VzJ11cbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtkLE9BQU8sVUFBVTtBQUNuZSxPQUFPLFNBQVM7QUFDaEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sc0JBQXNCO0FBSjdCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8seUJBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxpQkFBaUI7QUFBQSxJQUNqQixJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUE7QUFBQSxNQUVGLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxJQUNWLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixnQkFBZ0IsZUFBYTtBQUMzQixjQUFJLFVBQVUsU0FBUyxhQUFhO0FBQ2xDLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGlCQUFPLFVBQVU7QUFBQSxRQUNuQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxPQUFPLEtBQUssUUFBUSxrQ0FBVyxZQUFZO0FBQUEsTUFDM0MsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsU0FBUyxDQUFDLElBQUk7QUFBQSxJQUNoQjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
