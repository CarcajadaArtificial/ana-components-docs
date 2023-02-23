import { ComponentChildren } from "preact";

interface iObsidianaCard {
  children?: ComponentChildren;
}

export default function (props: iObsidianaCard) {
  return (
    <div class="bg-obsidiana p-8 rounded clr-border border-1">
      {props.children}
    </div>
  );
}
