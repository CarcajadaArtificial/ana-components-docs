import { useState } from "preact/hooks";
import { Link, Menu, Navigation, Text } from "../deps.ts";

interface iNavigation {
  title: string;
  fixed?: boolean;
}

export default function (props: iNavigation) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const links = [
    {
      label: "text",
      href: "/atoms/text",
    },
    {
      label: "input",
      href: "/atoms/input",
    },
    {
      label: "color",
      href: "/atoms/color",
    },
    {
      label: "theme",
      href: "/atoms/theme",
    },
    {
      label: "button",
      href: "/atoms/button",
    },
  ];

  return (
    <Navigation fixed={props.fixed ? true : false}>
      <Link href="/">Ana Component Docs</Link>
      <div class="flex">
        <div class="flex-1">
          <Text>{props.title}</Text>
        </div>
        <Menu
          isOpen={menuIsOpen}
          onclick={() => setMenuIsOpen(!menuIsOpen)}
          links={links}
        >
          <Text>☰</Text>
        </Menu>
      </div>
    </Navigation>
  );
}
