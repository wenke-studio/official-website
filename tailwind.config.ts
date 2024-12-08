import type { Config } from "tailwindcss";

import { contentPath, skeleton } from "@skeletonlabs/skeleton/plugin";
import * as themes from "@skeletonlabs/skeleton/themes";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}", contentPath(import.meta.url, "svelte")],

  darkMode: "selector",

  theme: {
    extend: {},
  },

  plugins: [
    skeleton({
      // NOTE: each theme included will be added to your CSS bundle
      themes: [themes.rocket],
    }),
  ],
} satisfies Config;
