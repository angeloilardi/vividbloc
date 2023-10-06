import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'logo-gradient': "linear-gradient(to right, rgba(16, 68, 252, 1), rgba(198, 172, 245, 1), rgba(241, 144, 223, 1), rgba(255, 245, 183, 1))",
        'ellipse': "linear-gradient(120.87deg, rgba(16, 68, 252, 1), rgba(170, 123, 255, 0.83), rgba(250, 116, 225, 0.92), rgba(255, 245, 183, 1))",
        'ellipse-2': 'linear-gradient(120.87deg, #1044FC 14.08%, rgba(170, 123, 255, 0.83) 32.73%, rgba(250, 116, 225, 0.92) 62.11%, #FFF5B7 81.36%)',
        'top-page': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('/assets/images/ed23cdab92148ad3f4ac9dd5fa29c248.gif')",
        'top-page-lg': "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url('/assets/images/ed23cdab92148ad3f4ac9dd5fa29c248.gif')",

        'highlight-right': 'linear-gradient(to right, rgba(16, 68, 252, 1), rgba(198, 172, 245, 1), rgba(241, 144, 223, 1), rgba(255, 245, 183, 0))',
        'highlight-left': 'linear-gradient(to right, rgba(255, 245, 183, 0), rgba(241, 144, 223, 1), rgba(198, 172, 245, 1), rgba(16, 68, 252, 1))',
        'picture-layover': "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url('/assets/images/e32e3afa08a0b124bbd3afbd26e183c9.jpeg')",
        'picture-layover-2': "linear-gradient(to bottom, rgba(20, 17, 24, 0), rgba(20, 17, 24, 1)), url('/assets/images/e32e3afa08a0b124bbd3afbd26e183c9.jpeg')",
        "woah": "linear-gradient(to right, rgba(23, 23, 23, 0), rgba(23, 23, 23, 1), rgba(23, 23, 23, 0))",
        "narrative": "linear-gradient(107.43deg, #1044FC 0.66%, rgba(198, 172, 245, 0.8) 41.13%, rgba(241, 144, 223, 0.91) 70.47%, #FFF5B7 98.24%)",
      },
      fontFamily: {
        "inter": "var(--inter-font)",
        "istok": "var(--istok-font)",
        "quantico": "var(--quantico-font)",
        "poppins": "var(--poppins-font)",
      }
    },
  },
  plugins: [],
}
export default config

// rgba(16, 68, 252, 1), rgba(198, 172, 245, 1), rgba(241, 144, 223, 1), rgba(255, 245, 183, 0)
// Vicid

