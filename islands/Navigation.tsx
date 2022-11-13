import { useState } from "preact/hooks";
import { Link, Menu, Navigation, Text } from "../deps.ts";

interface iNavigation {
  title: string;
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
  ];

  return (
    <Navigation>
      <Link nostyle href="/">Ana Component Docs</Link>
      <div class="flex">
        <div class="flex-1">
          <Text>{props.title}</Text>
        </div>
        <Menu
          isOpen={menuIsOpen}
          onclick={() => setMenuIsOpen(!menuIsOpen)}
          links={links}
        />
      </div>
    </Navigation>
  );
}
