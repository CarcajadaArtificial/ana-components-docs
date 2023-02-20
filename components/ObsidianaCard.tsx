import { ComponentChildren } from "preact";

interface iPage {
  children?: ComponentChildren;
}

export default function (props: iPage) {
  return (
    <div class="bg-obsidiana p-8 rounded clr-border border-1">
      {props.children}
    </div>
  );
}
