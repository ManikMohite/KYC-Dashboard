import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-card',
    'text-card-foreground',
    'border-border',
    'bg-background',
    'text-foreground'
  ],
  theme: {
    extend: {
      colors: {
        background: '#f0f4f8', // light background
        foreground: '#1e293b', // dark text
        card: '#ffffff',
        'card-foreground': '#1e293b',
        border: '#e2e8f0',
        accent: '#3b82f6', // blue
        'accent-hover': '#2563eb',
        success: '#22c55e', // green
        warning: '#facc15', // yellow
        danger: '#ef4444', // red
      },
    },
  },
  plugins: [],
}
export default config
