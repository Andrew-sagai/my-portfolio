import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Hapus atau jangan gunakan @tailwindcss/vite di sini
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
});
