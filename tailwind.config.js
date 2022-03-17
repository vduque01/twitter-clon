module.exports = {
  content: ["./*.{html,js}", "./app/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '40': '40px',
      },
      colors: {
        transparent: 'transparent',
        'darkBlue': '#212327',
        'lightBlue': '#4A99E9',
        'lightGrey': '#B8B8B8',
        'mediumGrey': '#606060',
        'darkGrey': '#3D3D3D',
      },
      fontFamily: {
        'Roboto': ['Roboto'],
      },
      fontSize: {
        h1: ['17px', '20px'],
        text: ['14px', '20px'],
        interactions: ['12px', '20px'],
      },
    },
  },
  plugins: [],
}

