import {
  Card,
  Footer,
  Header,
  Input,
  Layout,
  Link,
  Main,
  Select,
  Text,
  TextArea,
} from "../../deps.ts";
import Page from "../../components/Page.tsx";
import Navigation from "../../islands/Navigation.tsx";

const decoder = new TextDecoder("utf-8");
const doc = {
  description: decoder.decode(
    Deno.readFileSync("docs/atoms/input/description.md"),
  ),
  default: decoder.decode(
    Deno.readFileSync("docs/atoms/input/default.md"),
  ),
};

export default function () {
  const selectOptions = ["Option one", "Option two", "Option three"];
  return (
    <Page>
      <Navigation fixed title="Input" />
      <Header>
        <Text type="title">{"Input"}</Text>
        <Text type="paragraph">{doc.description}</Text>
      </Header>
      <Main>
        <Layout type="left">
          <div class="grid gap-8">
            <Card>
              <Text type="heading">Default input</Text>
              <Text type="paragraph">{doc.default}</Text>
              <Text type="label">{"<Input />"}</Text>
              <Input />
            </Card>
            <Card>
              <Text type="heading">Component props</Text>
              <Text type="subheading">label</Text>
              <Text type="label">{'<Input label="First Name" />'}</Text>
              <Input label="First Name" />
              <Text type="subheading">error</Text>
              <Text type="label">
                {'<Input error="That username already exists." />'}
              </Text>
              <Input
                label="Username"
                error="That username already exists."
              />
              <Text type="subheading">maxWidth</Text>
              <Input label="Confirmation code (48 characters)" />
            </Card>
            <Card>
              <Text type="heading">Element attributes</Text>
              <Text type="subheading">placeholder</Text>
              <Text type="label">
                {'<Input placeholder="Ana" />'}
              </Text>
              <Input label="First name" placeholder="Ana" />
              <Text type="subheading">type</Text>
              <Text type="label">{'<Input type="date" />'}</Text>
              <Input label="First name" type="date" />
              <Text type="subheading">required</Text>
              <Text type="label">{"<Input required />"}</Text>
              <Input label="Confirm password" type="password" required />
              <Text type="subheading">disabled</Text>
              <Text type="label">{"<Input disabled />"}</Text>
              <Input label="disabled input" disabled />
            </Card>
            <Card>
              <Text type="heading">Other inputs</Text>
              <Text type="subheading">checkbox</Text>
              <Text type="label">{'<Input type="checkbox" />'}</Text>
              <Input label="checkbox" type="checkbox" />
              <Text type="subheading">radio</Text>
              <Text type="label">{'<Input type="radio" />'}</Text>
              <Input label="radio" type="radio" />
              <Text type="subheading">button</Text>
              <Text type="label">{'<Input type="button" />'}</Text>
              <Input value="button" type="button" />
              <Text type="label">{'<Input type="image" />'}</Text>
              <Input value="image button" type="image" />
              <Text type="subheading">html 5 input types</Text>
              <Text type="label">{'<Input type="color" />'}</Text>
              <Input value="color input" type="color" />
              <Text type="label">{'<Input type="range" />'}</Text>
              <Input value="range input" type="range" />
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
