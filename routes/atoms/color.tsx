import {
  Card,
  Footer,
  Header,
  Layout,
  Link,
  Main,
  Text,
  TEXT_TYPES,
} from "../../deps.ts";
import Page from "../../components/Page.tsx";
import Navigation from "../../islands/Navigation.tsx";
import ColorDisplay from "../../islands/ColorDisplay.tsx";

export default function () {
  return (
    <Page>
      <Navigation fixed title="color" />
      <Header>
        <Text type={TEXT_TYPES.TITLE}>Color</Text>
        <Text>
          Color description
        </Text>
      </Header>
      <Main>
        <ColorDisplay />
      </Main>
      <Footer>
        <Text>
          Created by{" "}
          <Link href="https://github.com/CarcajadaArtificial">
            Oscar Alfonso Guerrero
          </Link>
        </Text>
      </Footer>
    </Page>
  );
}
