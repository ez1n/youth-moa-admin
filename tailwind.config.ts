import { COLOR } from './src/_constants'
import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: COLOR.blue,
        title: COLOR.title,
        text: COLOR.text,
        blue: COLOR.blue,
        green: COLOR.green,
        red: COLOR.red,
        'blue-opacity': COLOR.blue_opacity,
        'border-gray': COLOR.border_gray,
        'header-black': COLOR.header_black,
        'tag-gray': COLOR.tag_gray,
        'gray-005': COLOR.gray_005,
        'gray-003': COLOR.gray_003,
        'gray-002': COLOR.gray_002,
        'gray-001': COLOR.gray_001,
        'gray-000': COLOR.gray_001,
        badge: {
          progress: COLOR.green,
          closed: COLOR.gray_001,
          approved: COLOR.badge_approved,
          pending: COLOR.badge_pending,
          rejected: COLOR.badge_rejected,
          canceled: COLOR.header_black,
        },
      },
      boxShadow: {
        base: '0px 0px 4px 0px rgba(0, 0, 0, 0.20);',
        header: '0px 3px 4px 0px rgba(0, 0, 0, 0.12);',
      },
      rotate: {
        '180': '180deg',
      },
    },
  },
  plugins: [],
} satisfies Config
