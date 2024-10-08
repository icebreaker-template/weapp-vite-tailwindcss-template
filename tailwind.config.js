/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '**/*.{js,ts,wxml}',
    '!node_modules/**',
    '!dist/**'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}

