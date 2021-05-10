module.exports = {
    purge: ['./src/**/*.{svelte,js,ts,jsx,tsx,html}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,

        },
        screens: {
            'sm': '375px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            // 'lg': '1024px',
        },
        extend: {},
    },
    variants: {
        extend: {
            opacity: ['disabled'],
            cursor: ['disabled'],
            borderColor: ['disabled','active','hover'],
            backgroundColor: ['disabled','active','hover'],
            textColor: ['disabled']
        },
    },
    plugins: [],
}