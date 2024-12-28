import { Card } from "@workday/canvas-kit-react/card";
import { Flex } from "@workday/canvas-kit-react/layout";
import { BodyText } from "@workday/canvas-kit-react/text";
import { createStyles, px2rem } from "@workday/canvas-kit-styling";
import { system } from "@workday/canvas-tokens-web";

interface NoteProps {
  title: string;
}

const customCardStyles = createStyles({
  maxWidth: px2rem(320),
  padding: system.space.x3,
});

export const NoteItem = ({ title }: NoteProps) => {
  return (
    <Flex.Item>
      <Card cs={customCardStyles} textAlign="center">
        <BodyText size="small">{title}</BodyText>
      </Card>
    </Flex.Item>
  );
};

export default NoteItem;