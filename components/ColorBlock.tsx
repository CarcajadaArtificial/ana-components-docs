import { JSX } from "preact";
import type { Colors } from "../src/types.ts";

interface iColorBlock
  extends JSX.HTMLAttributes<HTMLDivElement>, Partial<ARIAMixin> {
  color: Colors | null;
}

export default function (props: iColorBlock) {
  const { color, ...p } = props;
  return (
    <div
      class="color-block m-0.5"
      tabIndex={color === null ? -1 : 0}
      {...p}
    >
      <div
        class={`aspect-square rounded ${
          color ? `bg-${color}` : "clr-bg-secondary"
        } ${color === "blanco" || color === "obsidiana" ? "border-1" : null}`}
        title={color ? color : ""}
      />
    </div>
  );
}
