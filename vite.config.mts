import { defineConfig } from 'weapp-vite/config'
import { UnifiedViteWeappTailwindcssPlugin } from 'weapp-tailwindcss/vite'

export default defineConfig({
  weapp: {
    // weapp-vite options
  },
  plugins: [
    UnifiedViteWeappTailwindcssPlugin({
      rem2rpx: true
    })
  ]
})
