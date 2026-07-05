
/** @type {import('tailwindcss').Config} */
import PrimeUI from 'tailwindcss-primeui';

export default {
    darkMode: 'class',
    content: ['./src/**/*.{html,ts}'],
    plugins: [PrimeUI],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Sora"', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
                cursive: ['"Dancing Script"', '"Playfair Display"', 'cursive'],
                serif: ['"Bodoni Moda"', '"Playfair Display"', 'serif'],
            },
            colors: {
                primary: 'var(--primary-color)',
            }
        },
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1920px'
        }
    }
};

