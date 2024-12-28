import { Card } from "@workday/canvas-kit-react/card";
import { Flex } from "@workday/canvas-kit-react/layout";

export const Canvas = () => {
  return (
    <Flex.Item flex={1} alignSelf="center" padding="xs">
      <Card height="95vh">
        <Card.Heading>Canvas Supreme</Card.Heading>
        <Card.Body>
          Our house special supreme pizza includes pepperoni, sausage, bell
          peppers, mushrooms, onions, and oregano.
        </Card.Body>
      </Card>
    </Flex.Item>
  );
};

export default Canvas;
