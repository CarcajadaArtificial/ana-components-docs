import { ComponentChildren } from "preact";
import { Page, PAGE_THEME } from "../deps.ts";

interface iPage {
  children?: ComponentChildren;
}

export default function (props: iPage) {
  return (
    <Page theme={PAGE_THEME.NEWSPAPER}>
      {props.children}
    </Page>
  );
}
