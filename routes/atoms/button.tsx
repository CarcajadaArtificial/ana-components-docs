import {
  Button,
  Card,
  Footer,
  Header,
  Input,
  Layout,
  Link,
  Linkmap,
  Main,
  Text,
} from "ana-components";
import { BUTTON_TYPES, LAYOUT_TYPES } from "ana-components";
import ButtonPair from "../../components/ButtonPair.tsx";
import Page from "../../components/Page.tsx";
import Navigation from "../../islands/Navigation.tsx";
import { getDoc } from "../../src/doc.ts";
import { render } from "gfm";
import { LINKS_COMPONENT_BUTTON } from "../../src/links.ts";

const doc = {
  description: render(await getDoc("atoms/button", "description")),
  type: render(await getDoc("atoms/button", "type")),
  panel: render(await getDoc("atoms/button", "panel")),
  invisible: render(await getDoc("atoms/button", "invisible")),
  disabled: render(await getDoc("atoms/button", "disabled")),
  error: render(await getDoc("atoms/button", "error")),
  input: render(await getDoc("atoms/button", "input")),
};

export default function () {
  return (
    <Page>
      <Navigation fixed title="button" />
      <Header>
        <div
          class="markdown-prose"
          dangerouslySetInnerHTML={{ __html: doc.description }}
        />
        <Linkmap
          links={[
            { name: "Table of contents", children: LINKS_COMPONENT_BUTTON },
          ]}
        />
      </Header>
      <Main>
        <Layout type={LAYOUT_TYPES.LEFT}>
          <div class="grid gap-8">
            <div>
              <div
                class="markdown-prose"
                dangerouslySetInnerHTML={{ __html: doc.type }}
              />
              <ButtonPair />
              <div
                class="markdown-prose"
                dangerouslySetInnerHTML={{ __html: doc.panel }}
              />
              <ButtonPair type={BUTTON_TYPES.PANEL} />
              <div
                class="markdown-prose"
                dangerouslySetInnerHTML={{ __html: doc.invisible }}
              />
              <ButtonPair type={BUTTON_TYPES.INVISIBLE} />
              <div
                class="markdown-prose"
                dangerouslySetInnerHTML={{ __html: doc.disabled }}
              />
              <ButtonPair type={BUTTON_TYPES.DISABLED} />
              <div
                class="markdown-prose"
                dangerouslySetInnerHTML={{ __html: doc.error }}
              />
              <ButtonPair type={BUTTON_TYPES.ERROR} />
            </div>
            <div>
              <div
                class="markdown-prose"
                dangerouslySetInnerHTML={{ __html: doc.input }}
              />
              <div className="grid mt-4">
                <Input
                  type="button"
                  value="button"
                  label="Button with label"
                />
                <Input type="button" value="input button" />
                <Input
                  type="button"
                  value="disabled button"
                  disabled
                />
                <Input
                  type="button"
                  value="error button"
                  error="Error message."
                />
              </div>
            </div>
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
