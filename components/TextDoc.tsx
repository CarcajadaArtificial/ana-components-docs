import { ComponentChildren } from "preact";
import { TEXT_TYPES } from "../../ana-components/src/types/enums.ts";
import { Text } from "../deps.ts";

interface iTextDoc {
  type: TEXT_TYPES;
  testText: string;
  marginTop: string;
  marginBottom: string;
}

export default function (props: iTextDoc) {
  return (
    <div
      class={`relative -top-4 grid clr-border border-1 rounded-r ${
        props.marginTop === "0" ? "border-t-0" : null
      } ${props.marginBottom === "0" ? "border-b-0" : null}`}
    >
      <div
        class="clr-bg-secondary flex items-end rounded-t"
        style={`height: ${props.marginTop};`}
      >
        <Text
          noMargins
          class="clr-bg-secondary px-1 rounded-t border-x-1 border-t-1 clr-border"
          style="position: relative; left: -1px;"
        >
          margin-top: {props.marginTop};
        </Text>
      </div>
      <div class="overflow-hidden">
        <Text
          type={props.type}
          noMargins
          class="whitespace-nowrap border-y-1 clr-border pl-1"
        >
          {props.testText}
        </Text>
      </div>
      <div
        class="clr-bg-secondary flex items-start rounded-b"
        style={`height: ${props.marginBottom};`}
      >
        <Text
          noMargins
          class="clr-bg-secondary px-1 rounded-b border-x-1 border-b-1 clr-border"
          style="position: relative; left: -1px;"
        >
          margin-bottom: {props.marginBottom};
        </Text>
      </div>
    </div>
  );
}
