import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import {presetUno,presetAttributify,presetIcons} from 'unocss'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetUno(), 
        presetAttributify(), 
        presetIcons(),
      ],
      rules:[
        ['custom-rule', { color: 'red' }]
      ]
    })
  ],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src')
    }
  }
})
