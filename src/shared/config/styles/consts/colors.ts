export type ColorSet = {
  text: string;
  primary: string;
  primaryOpacity: string;
  primaryText: string;
  background: string;
  backgroundSecond: string;
  red: string;
  redOpacity: string;
  yellow: string;
  yellowOpacity: string;
  textGrey: string;
  lineGrey: string;
};
export type Theme = 'light' | 'dark';
export type ColorName = keyof typeof THEME_COLORS.light;

export const THEME_COLORS: {[key in Theme]: ColorSet} = {
  light: {
    primary: '#28292A',
    primaryOpacity: 'rgba(45, 46, 47, 0.15)',
    primaryText: '#000',
    text: `#000`,
    background: '#f2f3f3',
    backgroundSecond: '#fff',
    red: '#FF2216',
    redOpacity: 'rgba(255, 34, 22, 0.12)',
    yellow: '#EB9800',
    yellowOpacity: 'rgba(235, 152, 0, 0.12)',
    textGrey: 'rgba(0, 0, 0, 0.4)',
    lineGrey: 'rgba(0, 0, 0, 0.07)',
  },
  dark: {
    primary: '#fff',
    primaryOpacity: 'rgba(255, 255, 255, 0.2)',
    primaryText: '#fff',
    text: `#fff`,
    background: '#28292A',
    backgroundSecond: '#18191A',
    red: '#FF3529',
    redOpacity: 'rgba(255, 53, 41, 0.15)',
    yellow: '#FFA500',
    yellowOpacity: 'rgba(255, 165, 0, 0.15)',
    textGrey: 'rgba(250, 250, 250, 0.4)',
    lineGrey: 'rgba(250, 250, 250, 0.07)',
  },
};
