import { defineConfig } from "vite";
import {resolve} from "path";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    build: {
        rollupOptions:{
            input:{
                login: resolve(__dirname, "index.html"),
            },
        },
    },

    plugins: [
        tailwindcss()
    ],
});