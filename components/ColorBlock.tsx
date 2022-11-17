import { Text } from "../deps.ts";
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
      class="color-block outline-cobalto m-0.5"
      tabIndex={color === null ? -1 : 0}
      {...p}
    >
      <div
        class={`aspect-square rounded bg-${color ? color : "blanco"} ${
          color === "blanco" ? "border-1 border-hierro" : null
        }`}
        title={color ? color : ""}
      />
    </div>
  );
}
