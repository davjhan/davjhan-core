const colors = require('tailwindcss/colors')
module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{svelte,js,ts,jsx,tsx,html}', '.yalc/davjhan-core/**/*.{svelte,js,ts,jsx,tsx,html}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,

        },
        extend: {
            colors: {
                background: '#fffffe',
                primary: '#ffd803',
                secondary: '#e3f6f5',
                gray: {
                    dark: colors.coolGray['500'],
                    DEFAULT: colors.coolGray['300'],
                    light: colors.coolGray['100'],
                    lightest: colors.coolGray['50'],
                }
            },
        },

        screens: {
            'sm': '375px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            // 'lg': '1024px',
        }
    },
    // variants: {
    //     extend: {
    //         opacity: ['disabled'],
    //         cursor: ['disabled'],
    //         borderColor: ['disabled','active','hover'],
    //         backgroundColor: ['disabled','active','hover'],
    //         textColor: ['disabled']
    //     },
    // },
    plugins: [],
}