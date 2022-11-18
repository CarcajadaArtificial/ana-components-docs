import { Footer, Header, Layout, Link, Text } from "../../deps.ts";
import Page from "../../components/Page.tsx";
import Navigation from "../../islands/Navigation.tsx";
import ColorDisplay from "../../islands/ColorDisplay.tsx";

export default function () {
  return (
    <Page>
      <Navigation title="color" />
      <Header>
        <Text type="title">Color</Text>
        <Text type="paragraph">
          Color description
        </Text>
      </Header>
      <ColorDisplay />
      <Footer>
        <Text>
          Created by
        </Text>
        <Link href="https://github.com/CarcajadaArtificial">
          Oscar Alfonso Guerrero
        </Link>
      </Footer>
    </Page>
  );
}
