/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    linearBorderGradients: {
      directions: {
        // defaults to these values
        t: 'to top',
        tr: 'to top right',
        r: 'to right',
        br: 'to bottom right',
        b: 'to bottom',
        bl: 'to bottom left',
        l: 'to left',
        tl: 'to top left',
      },
      colors: {
        // defaults to {}
        'blue-gradient': ['#0046FF', '#0FD4FF'],
      },
      background: {
        'bg-content': '#364157',
      },
      borders: {
        // defaults to these values (optional)
        1: '1px',
        2: '2px',
        4: '4px',
      },
    },
    extend: {
      colors: {
        white: '#ffffff',
        'background-light': 'B7C1D8',
        background: '#24304D',
        primary: '#3081FD',
        'off-white': '#D9D9D9',
        content: '#364157',
        'content-hover': '#44526E',
        'content-border': '#50586B',
        'gradient-blue': '#0046FF',
        'gradient-blue-light': '#0FD4FF',
      },
    },
  },
  plugins: [
    require('tailwindcss-border-gradient-radius'),
    'tailwind-clip-path',
  ],
};
