import {
  CanvasProvider,
  ContentDirection,
  PartialEmotionCanvasTheme,
  useTheme,
} from "@workday/canvas-kit-react/common";

import { Flex } from "@workday/canvas-kit-react/layout";

// Ensure CSS variables are defined. You Can also do this at the root index.css
import "@workday/canvas-tokens-web/css/base/_variables.css";
import "@workday/canvas-tokens-web/css/brand/_variables.css";
import "@workday/canvas-tokens-web/css/system/_variables.css";
import { SideBar } from "./components/ui/side-panel";
import Canvas from "./components/ui/canvas";

export const App = () => {
  // useTheme is filling in the Canvas theme object if any keys are missing
  const canvasTheme: PartialEmotionCanvasTheme = useTheme({
    canvas: {
      // Switch to `ContentDirection.RTL` to change direction
      direction: ContentDirection.LTR,
    },
  });

  return (
    <CanvasProvider theme={canvasTheme}>
      <>
        <Flex alignContent="center" justifyContent="center">
          <SideBar />
          <Canvas />
        </Flex>
      </>
    </CanvasProvider>
  );
};
