const primaryGreen = '#84a59d';
const primaryLightGreen = '#2a9d8f';
const primaryLight = '#94d2bd';
const primaryDark = '#212f45';
const primaryWhite = '#fffffc';

export type ThemeColors = {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
  title: string;
  subtitle: string;
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
    card: primaryWhite,
    text: primaryLightGreen,
    border: primaryLight,
    notification: 'rgb(255, 69, 58)',
    title: primaryDark,
    subtitle: primaryGreen,
  },
};

export const darkTheme: ThemeType = {
  dark: true,
  colors: {
    primary: primaryWhite,
    background: primaryDark,
    card: primaryLight,
    text: primaryLightGreen,
    border: primaryLightGreen,
    notification: 'rgb(255, 69, 58)',
    title: primaryLight,
    subtitle: primaryLightGreen,
  },
};
