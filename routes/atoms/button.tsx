import {
  Button,
  BUTTON_COLORS,
  BUTTON_TYPES,
  Footer,
  Header,
  Input,
  Layout,
  LAYOUT_TYPES,
  Link,
  Main,
  Text,
  TEXT_TYPES,
} from "../../deps.ts";
import Page from "../../components/Page.tsx";
import Navigation from "../../islands/Navigation.tsx";

export default function () {
  return (
    <Page>
      <Navigation fixed title="button" />
      <Header>
        <Text type={TEXT_TYPES.TITLE}>{"Button"}</Text>
        <Text>{"Button description."}</Text>
      </Header>
      <Main>
        <Layout type={LAYOUT_TYPES.RIGHT}>
          <Text>Default buttons</Text>
          <div class="grid gap-4">
            <Button color={BUTTON_COLORS.PRIMARY}>Primary BG Button</Button>
            <Button color={BUTTON_COLORS.SECONDARY}>Secondary BG Button</Button>
            <Button color={BUTTON_COLORS.TERTIARY}>Tertiary BG Button</Button>
            <Button color={BUTTON_COLORS.MAIN}>Main BG Button</Button>
            <Button color={BUTTON_COLORS.DISABLED}>Disabled BG Button</Button>
            <Button color={BUTTON_COLORS.ERROR}>Error BG Button</Button>
          </div>
        </Layout>
        <Layout type={LAYOUT_TYPES.RIGHT}>
          <Text>Outline buttons</Text>
          <div class="grid gap-4">
            <Button type={BUTTON_TYPES.OUTLINE} color={BUTTON_COLORS.PRIMARY}>
              Primary BG Button
            </Button>
            <Button type={BUTTON_TYPES.OUTLINE} color={BUTTON_COLORS.SECONDARY}>
              Secondary BG Button
            </Button>
            <Button type={BUTTON_TYPES.OUTLINE} color={BUTTON_COLORS.TERTIARY}>
              Tertiary BG Button
            </Button>
            <Button type={BUTTON_TYPES.OUTLINE} color={BUTTON_COLORS.MAIN}>
              Main BG Button
            </Button>
            <Button type={BUTTON_TYPES.OUTLINE} color={BUTTON_COLORS.DISABLED}>
              Disabled BG Button
            </Button>
            <Button type={BUTTON_TYPES.OUTLINE} color={BUTTON_COLORS.ERROR}>
              Error BG Button
            </Button>
          </div>
        </Layout>
        <Layout type={LAYOUT_TYPES.RIGHT}>
          <Text>Button Inputs</Text>
          <div class="grid gap-4">
            <Input type="button" value="input button" />
            <Input type="button" value="button" label="Button with label" />
            <Input
              type="button"
              value="button with error"
              error="Error message."
            />
            <Input
              type="button"
              value="dsiabled button"
              disabled
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
