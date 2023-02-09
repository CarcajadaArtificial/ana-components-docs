import {
  Footer,
  Header,
  Layout,
  Link,
  Linkmap,
  Main,
  Text,
} from "ana-components";
import { LAYOUT_TYPES, TEXT_TYPES } from "ana-components";
import Page from "../components/Page.tsx";
import { LINKS_ATOMS, LINKS_MOLECULES, LINKS_PARTICLES } from "../src/links.ts";

export default function () {
  return (
    <Page>
      <Header>
        <Text type={TEXT_TYPES.TITLE}>
          Ana Components 🧱
        </Text>
      </Header>
      <Main>
        <Layout type={LAYOUT_TYPES.THIRDS}>
          <div>
            <Text type={TEXT_TYPES.HEADING}>Particles</Text>
            <Linkmap
              links={LINKS_PARTICLES}
            />
          </div>
          <div>
            <Text type={TEXT_TYPES.HEADING}>Atoms</Text>
            <Linkmap
              links={LINKS_ATOMS}
            />
          </div>
          <div>
            <Text type={TEXT_TYPES.HEADING}>Molecules</Text>
            <Linkmap
              links={LINKS_MOLECULES}
            />
          </div>
        </Layout>
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
