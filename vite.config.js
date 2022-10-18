import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path";

console.log("vite 配置文件。。。",path.join(__dirname,"src/assets"))
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": path.resolve("src"),
            "$":path.join(__dirname,"/src/assets"),
            "vue": "vue/dist/vue.esm-bundler.js"
        },
        preserveSymlinks:true
    },
    server: {
        base:"/api/",
        // open:true,
        port: 8080,
        host: "0.0.0.0",
    },
    build:{
        assetsDir:"api"
    }
})
