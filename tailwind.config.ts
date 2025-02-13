import type { Config } from 'tailwindcss';
import { COLORS } from './src/lib/constants/theme';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: COLORS.primary,
        secondary: COLORS.secondary,
      },
      backgroundImage: {
        'gradient-135': 'linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
