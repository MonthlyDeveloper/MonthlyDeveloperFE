// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };

import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import ResetStyle from "@styles/resetStyle";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
};
export const decorators = [
  (Story) => (
    <>
      <ResetStyle />
      <Story />
    </>
  ),
];
const Themes = [theme.light];
addDecorator(withThemesProvider(Themes), ThemeProvider);
