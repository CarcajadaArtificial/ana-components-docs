import { TEXT_TYPES } from "ana-components";
import { Text } from "ana-components";

interface iTextDoc {
  type: TEXT_TYPES;
  testText: string;
  marginTop: string;
  marginBottom: string;
}

export default function (props: iTextDoc) {
  return (
    <div
      class={`relative -top-4 grid`}
    >
      <div
        class="clr-bg-panel pl-2 flex items-end rounded-t"
        style={`height: ${props.marginTop};`}
      >
        <Text
          noMargins
          class="clr-bg-panel px-1 rounded-t"
          style="position: relative; left: -1px;"
        >
          margin-top: {props.marginTop};
        </Text>
      </div>
      <div class="overflow-hidden">
        <Text
          type={props.type}
          noMargins
        >
          {props.testText}
        </Text>
      </div>
      <div
        class="clr-bg-panel pl-2 flex items-start rounded-b"
        style={`height: ${props.marginBottom};`}
      >
        <Text
          noMargins
          class="clr-bg-panel px-1 rounded-b"
          style="position: relative; left: -1px;"
        >
          margin-bottom: {props.marginBottom};
        </Text>
      </div>
    </div>
  );
}
