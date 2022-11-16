import { Text } from "../deps.ts";
import type { Colors } from "../src/types.ts";

interface iColorBlock {
  color: Colors | null;
}

export default function (props: iColorBlock) {
  return (
    <div
      class="color-block outline-cobalto m-0.5"
      tabIndex={props.color === null ? -1 : 0}
    >
      <div
        class={`aspect-square rounded bg-${
          props.color ? props.color : "blanco"
        } ${props.color === "blanco" ? "border-1 border-hierro" : null}`}
        title={props.color ? props.color : ""}
      />
    </div>
  );
}
