import { Flex } from "@workday/canvas-kit-react/layout";
import {
  SidePanel,
  SidePanelTransitionStates,
  useSidePanel,
} from "@workday/canvas-kit-preview-react/side-panel";
import { Text } from "@workday/canvas-kit-react/text";
import { useState } from "react";
import NoteItem from "../note-item";

export const SideBar = () => {
  const { expanded, panelProps, labelProps, controlProps } = useSidePanel();
  const [panelState, setPanelState] = useState<SidePanelTransitionStates>(
    expanded ? "expanded" : "collapsed"
  );
  const [notes, setNotes] = useState([
    { "title": "Note 1", "content": "This is the first note." },
    { "title": "Note 2", "content": "This is the second note." },
    { "title": "Note 3", "content": "This is the third note." },
  ]);

  const expandedContent = (
    <Flex display="grid" alignItems="center" paddingY="s" paddingX="s" gap="s">
      <Flex.Item>
        <Text
          as="h3"
          typeLevel="body.large"
          color="licorice500"
          fontWeight="bold"
          {...labelProps}
        >
          My Notes
        </Text>
      </Flex.Item>
      {
        notes.map((note, index) => (
            <NoteItem key={index} title={note.title} />
        ))
      }
    </Flex>
  );

  return (
    <Flex.Item textAlign="center" height="100vh">
      <SidePanel
        {...panelProps}
        onStateTransition={(state) =>
          setPanelState(state as SidePanelTransitionStates)
        }
      >
        <SidePanel.ToggleButton {...controlProps} />
        {panelState === "expanded" ? (
          expandedContent
        ) : (
          <Text hidden {...labelProps}>
            Tasks Panel
          </Text>
        )}
      </SidePanel>
    </Flex.Item>
  );
};
