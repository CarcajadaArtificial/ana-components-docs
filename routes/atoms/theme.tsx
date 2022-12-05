import { Card, Footer, Header, Layout, Link, Main, Text } from "../../deps.ts";
import Navigation from "../../islands/Navigation.tsx";
import ThemeExample from "../../islands/ThemeExample.tsx";
import Page from "../../components/Page.tsx";
import ColorBlock from "../../components/ColorBlock.tsx";

export default function () {
  return (
    <Page>
      <Navigation fixed title="Theme" />
      <Header>
        <Text type="title">Theme</Text>
        <Text type="paragraph">
          Theme description
        </Text>
      </Header>
      <Main>
        <Layout type="focus">
          <Card>
            <Text type="heading">Themes</Text>
            <Text>newspaper</Text>
            <div>
              <div class="grid grid-cols-10">
                <ColorBlock color="blanco" />
                <ColorBlock color="papel" />
                <ColorBlock color="acero" />
                <ColorBlock color="hierro" />
                <ColorBlock color="grafito" />
                <ColorBlock color="chapopote" />
                <ColorBlock color="chicle" />
                <ColorBlock color="bombon" />
                <ColorBlock color="blanco" />
                <ColorBlock color="obsidiana" />
              </div>
            </div>
            <Text>candyland</Text>
            <div>
              <div class="grid grid-cols-10">
                <ColorBlock color="blanco" />
                <ColorBlock color="nube" />
                <ColorBlock color="magia" />
                <ColorBlock color="lavanda" />
                <ColorBlock color="marino" />
                <ColorBlock color="obsidiana" />
                <ColorBlock color="pulpo" />
                <ColorBlock color="borrador" />
                <ColorBlock color="magia" />
                <ColorBlock color="uva" />
              </div>
            </div>
            <Text>dusthorizon</Text>
            <div>
              <div class="grid grid-cols-10">
                <ColorBlock color="blanco" />
                <ColorBlock color="arena" />
                <ColorBlock color="flan" />
                <ColorBlock color="ladrillo" />
                <ColorBlock color="vino" />
                <ColorBlock color="obsidiana" />
                <ColorBlock color="chicle" />
                <ColorBlock color="bombon" />
                <ColorBlock color="tortilla" />
                <ColorBlock color="cajeta" />
              </div>
            </div>
          </Card>
        </Layout>
        <ThemeExample />
      </Main>
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
