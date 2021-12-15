const primaryGreen = '#264653';
const primaryLightGreen = '#2a9d8f';
const primaryDarkGreen = '#023047';
const primaryWhite = '#fffffc';

export type ThemeColors = {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
  title: string;
};

type ThemeType = {
  dark: boolean;
  colors: ThemeColors;
};

export const lightTheme: ThemeType = {
  dark: false,
  colors: {
    primary: primaryGreen,
    background: primaryWhite,
    card: 'rgb(255, 255, 255)',
    text: primaryLightGreen,
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
    title: primaryDarkGreen,
  },
};

export const darkTheme: ThemeType = {
  dark: true,
  colors: {
    primary: primaryWhite,
    background: primaryGreen,
    card: 'rgb(255, 255, 255)',
    text: primaryLightGreen,
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
    title: primaryLightGreen,
  },
};
