module.exports = {
content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
theme: {
extend: {
colors: {
brandRed: '#a93436',
brandOlive: '#2f3b2f',
darkBg: '#444343'
},
fontFamily: {
serifDisplay: ['"Playfair Display"', 'serif'],
sans: ['Inter', 'ui-sans-serif', 'system-ui']
}
}
},
plugins: []
}