import type { Colors } from "../src/types.ts";
import ObsidianaCard from "./ObsidianaCard.tsx";
import ColorBlock from "./ColorBlock.tsx";
import { Text } from "ana-components";

interface iColorList {
  doc: string;
  colors: Colors[];
}

export default function (props: iColorList) {
  return (
    <div class="mb-8">
      <div
        class="markdown-prose"
        dangerouslySetInnerHTML={{ __html: props.doc }}
      />
      <ObsidianaCard>
        {props.colors.map((color) => (
          <div class="flex gap-1 items-center h-10 mb-2">
            <ColorBlock color={color}></ColorBlock>
            <Text noMargins>{color}</Text>
          </div>
        ))}
      </ObsidianaCard>
    </div>
  );
}
