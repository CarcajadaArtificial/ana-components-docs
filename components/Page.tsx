import { ComponentChildren } from "preact";
import { Page, PAGE_THEME } from "../deps.ts";

interface iPage {
  children?: ComponentChildren;
}

export default function (props: iPage) {
  return (
    <Page darkMode theme={PAGE_THEME.TEST}>
      {props.children}
    </Page>
  );
}
