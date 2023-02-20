import { JSX } from "preact";
import type { Colors } from "../src/types.ts";

interface iColorBlock
  extends JSX.HTMLAttributes<HTMLDivElement>, Partial<ARIAMixin> {
  color: Colors | null;
  // This property unifies HTMLAttributes's and ARIAMixin's role property.
  role?: string;
  focusable?: boolean;
}

export default function (props: iColorBlock) {
  const { color, focusable, ...p } = props;
  return (
    <div
      class="color-block m-0.5"
      tabIndex={focusable ? 0 : undefined}
      {...p}
    >
      <div
        class={`aspect-square rounded ${
          color ? `bg-${color}` : "bg-obsidiana"
        } ${color === "blanco" || color === "obsidiana" ? "border-1" : null}`}
        title={color ? color : ""}
      />
    </div>
  );
}
