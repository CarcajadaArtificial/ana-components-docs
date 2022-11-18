import { ComponentChildren } from "preact";
import { Page } from "../deps.ts";

interface iPage {
  children?: ComponentChildren;
}

export default function (props: iPage) {
  return (
    <Page theme="newspaper">
      {props.children}
    </Page>
  );
}
