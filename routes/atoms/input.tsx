import {
  Card,
  Code,
  Footer,
  Header,
  Input,
  Layout,
  Link,
  Main,
  Separator,
  Text,
} from "../../deps.ts";
import Page from "../../components/Page.tsx";
import Navigation from "../../islands/Navigation.tsx";
import { getDocumentation } from "../../src/doc.ts";

const doc = getDocumentation("docs/atoms/input/", [
  "description",
  "default",
  "label",
  "error",
  "maxWidth",
  "placeholder",
  "type",
  "required",
  "disabled",
  "checkbox",
  "button",
]);

export default function () {
  const selectOptions = ["Option one", "Option two", "Option three"];
  return (
    <Page>
      <Navigation fixed title="Input" />
      <Header>
        <Text type="title">{"Input"}</Text>
        <Text>{doc.description}</Text>
      </Header>
      <Main>
        <Layout type="left">
          <div class="grid gap-8">
            <Card>
              <Text type="heading">Default input</Text>
              <Text>{doc.default}</Text>
              <Input label="Example label" value="Example value" />
              <Code>{"<Input />"}</Code>
            </Card>
            <Card>
              <Text type="heading">Component props</Text>
              <Text type="subheading">label</Text>
              <Text>{doc.label}</Text>
              <Input label="First Name" value="Ana" />
              <Code>{'<Input label="First Name" />'}</Code>
              <Separator />
              <Text type="subheading">error</Text>
              <Text>{doc.error}</Text>
              <Input
                label="Username"
                error="That username already exists."
                value="foobar"
              />
              <Code>
                {'<Input error="That username already exists." />'}
              </Code>
              <Separator />
              <Text type="subheading">maxWidth</Text>
              <Text>{doc.maxWidth}</Text>
              <Input
                maxWidth
                label="Confirmation code (48 characters)"
                value="KWLgzshgIq8RnisjA5DaJY6Vgs7uMywZItddDO0kffXFHuzy"
              />
              <Code>{"<Input maxWidth />"}</Code>
            </Card>
            <Card>
              <Text type="heading">Element attributes</Text>
              <Text type="subheading">placeholder</Text>
              <Text>{doc.placeholder}</Text>
              <Input label="First name" placeholder="Ana" />
              <Code>
                {'<Input placeholder="Ana" />'}
              </Code>
              <Separator />
              <Text type="subheading">type</Text>
              <Text>{doc.type}</Text>
              <Input label="Date of birth" type="date" />
              <Code>{'<Input type="date" />'}</Code>
              <Separator />
              <Text type="subheading">required</Text>
              <Text>{doc.required}</Text>
              <Input label="Confirm password" type="password" required />
              <Code>{"<Input required />"}</Code>
              <Separator />
              <Text type="subheading">disabled</Text>
              <Text>{doc.disabled}</Text>
              <Input label="Forbidden input" disabled />
              <Code>{"<Input disabled />"}</Code>
            </Card>
            <Card>
              <Text type="heading">Other inputs</Text>
              <Text type="subheading">checkbox and radio</Text>
              <Text>{doc.checkbox}</Text>
              <Code>{'<Input type="checkbox" />'}</Code>
              <Input label="checkbox" type="checkbox" />
              <Code>{'<Input type="radio" />'}</Code>
              <Input label="radio" type="radio" />
              <Separator />
              <Text type="subheading">button</Text>
              <Text>{doc.button}</Text>
              <Code>{'<Input type="button" />'}</Code>
              <Input value="button" type="button" />
              <Code>{'<Input type="image" />'}</Code>
              <Input value="image button" type="image" />
            </Card>
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
