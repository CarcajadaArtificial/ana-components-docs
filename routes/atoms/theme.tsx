import { Footer, Header, Layout, Link, Text } from "../../deps.ts";
import Navigation from "../../islands/Navigation.tsx";
import Page from "../../components/Page.tsx";
import ColorBlock from "../../components/ColorBlock.tsx";

export default function text() {
  return (
    <Page>
      <Navigation title="Theme" />
      <Header>
        <Text type="title">Theme</Text>
        <Text type="paragraph">
          Theme description
        </Text>
      </Header>
      <Layout type="right">
        <Text>newspaper</Text>
        <div>
          <div class="grid grid-cols-10">
            <ColorBlock color="blanco" />
            <ColorBlock color="papel" />
            <ColorBlock color="acero" />
            <ColorBlock color="hierro" />
            <ColorBlock color="grafito" />
            <ColorBlock color="obsidiana" />
            <ColorBlock color="chicle" />
            <ColorBlock color="bombon" />
            <ColorBlock color="detergente" />
            <ColorBlock color="cobalto" />
          </div>
        </div>
      </Layout>
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
