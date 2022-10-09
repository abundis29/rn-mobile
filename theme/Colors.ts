const tintColorLight = '#4D47C7';
const tintColorDark = '#4D47C7';

const GenericColors = {
  blue100: '#EDEDF9',
  navy500: '#071440',
};

export default {
  light: {
    roundness: 4,
    ...GenericColors,
    text: '#fff',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    darkText: GenericColors.navy500,
  },
  dark: {
    roundness: 4,
    ...GenericColors,
    text: '#EDEDF9',
    background: '#070400',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    darkText: GenericColors.blue100,
  },
};
