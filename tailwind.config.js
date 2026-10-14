/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          base: '#FBFBF9',
          surface: '#F3F1EB',
          card: '#FFFFFF',
          border: '#E5E1D8',
          'border-subtle': '#EDE9E0',
          text: {
            primary: '#16171A',
            secondary: '#575A65',
            muted: '#7E8391',
          },
          accent: {
            DEFAULT: '#3B49DF',
            hover: '#2836C4',
            subtle: 'rgba(59, 73, 223, 0.08)',
          }
        },
        graphite: {
          base: '#111215',
          surface: '#18191E',
          card: '#1E2027',
          'card-hover': '#252831',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-active': 'rgba(142, 156, 255, 0.35)',
          text: {
            primary: '#F4F4F6',
            secondary: '#989BA8',
            muted: '#636775',
          },
          accent: {
            DEFAULT: '#8E9CFF',
            hover: '#A8B3FF',
            subtle: 'rgba(142, 156, 255, 0.12)',
            cyan: '#99D5E8',
          }
        },
        parchment: {
          base: '#F5F2EB',
          surface: '#ECE7DD',
          card: '#FAF8F4',
          border: '#DDD6C7',
          'border-subtle': '#E5DFD2',
          text: {
            primary: '#1C1A17',
            secondary: '#5E584F',
            muted: '#827B70',
          },
          accent: {
            DEFAULT: '#843E2B',
            hover: '#6A3020',
            subtle: 'rgba(132, 62, 43, 0.08)',
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        devanagari: ['"Noto Serif Devanagari"', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        reading: '640px',
      },
      lineHeight: {
        devanagari: '2.0',
      }
    },
  },
  plugins: [],
}
