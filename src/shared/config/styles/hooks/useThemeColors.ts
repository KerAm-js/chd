import { ColorSchemeName, useColorScheme } from "react-native";
import { Theme, THEME_COLORS } from "../consts/colors";

export const useThemeColors = (defaultTheme?: Theme) => {
  const theme: ColorSchemeName = useColorScheme();
  return {
    theme,
    colors: THEME_COLORS[defaultTheme || theme || "light"],
  };
};
