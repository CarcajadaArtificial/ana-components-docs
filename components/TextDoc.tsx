import { ComponentChildren } from "preact";
import { Card, Code, Separator, Text, TextTypes } from "../deps.ts";

interface iTextDoc {
  type: TextTypes;
  description: string;
  testText: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
  marginTop: string;
  marginBottom: string;
}

export default function (props: iTextDoc) {
  return (
    <Card>
      <Text type="heading">{props.type}</Text>
      <Text>{props.description}</Text>
      <Separator />
      <Text type={props.type} noMargins>
        {props.testText}
      </Text>
      <Separator />
      <Text type="subheading">Font Styles</Text>
      <Code>
        <Text inheritColor>font-size: {props.fontSize};</Text>
        <Text inheritColor>line-height: {props.lineHeight};</Text>
        <Text inheritColor>font-weight: {props.fontWeight};</Text>
      </Code>
      <Separator />
      <Text type="subheading">Margins</Text>
      <div class="grid">
        <div
          class="clr-bg-primary flex items-end"
          style={`height: ${props.marginTop};`}
        >
          <Text noMargins type="small">margin-top: {props.marginTop};</Text>
        </div>
        <div class="overflow-hidden">
          <Text type={props.type} noMargins class="whitespace-nowrap">
            {props.testText}
          </Text>
        </div>
        <div
          class="clr-bg-primary flex items-start"
          style={`height: ${props.marginBottom};`}
        >
          <Text noMargins type="small">
            margin-bottom: {props.marginBottom};
          </Text>
        </div>
      </div>
    </Card>
  );
}
