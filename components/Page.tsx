import { ComponentChildren } from "preact";
import { Page } from "ana-components";
import { PAGE_THEME } from "ana-components";

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
