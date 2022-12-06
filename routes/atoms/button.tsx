import {
  Button,
  Footer,
  Header,
  Input,
  Layout,
  Link,
  Main,
  Text,
} from "../../deps.ts";
import Page from "../../components/Page.tsx";
import Navigation from "../../islands/Navigation.tsx";

export default function () {
  return (
    <Page>
      <Navigation fixed title="button" />
      <Header>
        <Text type="title">{"Button"}</Text>
        <Text type="paragraph">{"Button description."}</Text>
      </Header>
      <Main>
        <Layout type="right">
          <Text>Default buttons</Text>
          <div class="grid gap-4">
            <Button color="primary">Primary BG Button</Button>
            <Button color="secondary">Secondary BG Button</Button>
            <Button color="tertiary">Tertiary BG Button</Button>
            <Button color="main">Main BG Button</Button>
            <Button color="disabled">Disabled BG Button</Button>
            <Button color="error">Error BG Button</Button>
          </div>
        </Layout>
        <Layout type="right">
          <Text>Outline buttons</Text>
          <div class="grid gap-4">
            <Button type="outline" color="primary">Primary BG Button</Button>
            <Button type="outline" color="secondary">
              Secondary BG Button
            </Button>
            <Button type="outline" color="tertiary">Tertiary BG Button</Button>
            <Button type="outline" color="main">Main BG Button</Button>
            <Button type="outline" color="disabled">Disabled BG Button</Button>
            <Button type="outline" color="error">Error BG Button</Button>
          </div>
        </Layout>
        <Layout type="right">
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
          Created by
        </Text>
        <Link href="https://github.com/CarcajadaArtificial">
          Oscar Alfonso Guerrero
        </Link>
      </Footer>
    </Page>
  );
}
