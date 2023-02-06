import {
  Button,
  BUTTON_COLORS,
  Card,
  Footer,
  Header,
  Input,
  Layout,
  LAYOUT_TYPES,
  Link,
  Linkmap,
  Main,
  Text,
} from "../../deps.ts";
import Page from "../../components/Page.tsx";
import Navigation from "../../islands/Navigation.tsx";
import { getDoc } from "../../src/doc.ts";
import { render } from "gfm";
import { LINKS_COMPONENT_BUTTON } from "../../src/links.ts";

const doc = {
  description: render(await getDoc("atoms/button", "description")),
  color: render(await getDoc("atoms/button", "color")),
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
                dangerouslySetInnerHTML={{ __html: doc.color }}
              />
              <div className="flex items-center gap-4 -mt-4">
                <Card>
                  <div class="grid gap-4">
                    <Button color={BUTTON_COLORS.PRIMARY}>
                      Primary BG Button
                    </Button>
                    <Button color={BUTTON_COLORS.SECONDARY}>
                      Primary BG Button
                    </Button>
                    <Button color={BUTTON_COLORS.TERTIARY}>
                      Primary BG Button
                    </Button>
                    <Button color={BUTTON_COLORS.MAIN}>
                      Primary BG Button
                    </Button>
                    <Button color={BUTTON_COLORS.DISABLED}>
                      Primary BG Button
                    </Button>
                    <Button color={BUTTON_COLORS.ERROR}>
                      Primary BG Button
                    </Button>
                  </div>
                </Card>
                <div className="grid gap-4 ml-4">
                  <Button color={BUTTON_COLORS.PRIMARY}>
                    Primary BG Button
                  </Button>
                  <Button color={BUTTON_COLORS.SECONDARY}>
                    Primary BG Button
                  </Button>
                  <Button color={BUTTON_COLORS.TERTIARY}>
                    Primary BG Button
                  </Button>
                  <Button color={BUTTON_COLORS.MAIN}>
                    Primary BG Button
                  </Button>
                  <Button color={BUTTON_COLORS.DISABLED}>
                    Primary BG Button
                  </Button>
                  <Button color={BUTTON_COLORS.ERROR}>
                    Primary BG Button
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <div
                class="markdown-prose"
                dangerouslySetInnerHTML={{ __html: doc.input }}
              />
              <div className="flex items-center gap-4 -mt-4">
                <Card>
                  <div class="grid">
                    <Input
                      type="button"
                      value="button"
                      label="Button with label"
                    />
                    <Input type="button" value="input button" />
                    <Input
                      type="button"
                      value="dsiabled button"
                      disabled
                    />
                    <Input
                      type="button"
                      value="button with error"
                      error="Error message."
                    />
                  </div>
                </Card>
                <div class="grid">
                  <Input
                    type="button"
                    value="button"
                    label="Button with label"
                  />
                  <Input type="button" value="input button" />
                  <Input
                    type="button"
                    value="dsiabled button"
                    disabled
                  />
                  <Input
                    type="button"
                    value="button with error"
                    error="Error message."
                  />
                </div>
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
