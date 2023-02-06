import {
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
import { LINKS_COMPONENT_INPUT } from "../../src/links.ts";

const doc = {
  description: render(await getDoc("atoms/input", "description")),
  label: render(await getDoc("atoms/input", "label")),
  error: render(await getDoc("atoms/input", "error")),
  maxWidth: render(await getDoc("atoms/input", "maxWidth")),
  placeholder: render(await getDoc("atoms/input", "placeholder")),
  type: render(await getDoc("atoms/input", "type")),
  required: render(await getDoc("atoms/input", "required")),
  disabled: render(await getDoc("atoms/input", "disabled")),
  checkbox: render(await getDoc("atoms/input", "checkbox")),
  button: render(await getDoc("atoms/input", "button")),
};

export default function () {
  return (
    <Page>
      <Navigation fixed title="Input" />
      <Header>
        <div>
          <div
            class="markdown-prose mb-4"
            dangerouslySetInnerHTML={{ __html: doc.description }}
          />
          <Input label="Example label" value="Example value" />
        </div>
        <Linkmap
          links={[
            { name: "Table of contents", children: LINKS_COMPONENT_INPUT },
          ]}
        />
      </Header>
      <Main>
        <Layout type={LAYOUT_TYPES.LEFT}>
          <div class="grid gap-8">
            <div
              class="markdown-prose"
              dangerouslySetInnerHTML={{ __html: doc.label }}
            />
            <Input label="First Name" value="Ana" />
            <div
              class="markdown-prose"
              dangerouslySetInnerHTML={{ __html: doc.error }}
            />
            <Input
              label="Username"
              error="That username already exists."
              value="foobar"
            />
            <div
              class="markdown-prose"
              dangerouslySetInnerHTML={{ __html: doc.maxWidth }}
            />
            <Input
              maxWidth
              label="Confirmation code (48 characters)"
              value="KWLgzshgIq8RnisjA5DaJY6Vgs7uMywZItddDO0kffXFHuzy"
            />
            <div
              class="markdown-prose"
              dangerouslySetInnerHTML={{ __html: doc.placeholder }}
            />
            <Input label="First name" placeholder="Ana" />
            <div
              class="markdown-prose"
              dangerouslySetInnerHTML={{ __html: doc.type }}
            />
            <Input label="Date of birth" type="date" />
            <div
              class="markdown-prose"
              dangerouslySetInnerHTML={{ __html: doc.required }}
            />
            <Input label="Confirm password" type="password" required />
            <div
              class="markdown-prose"
              dangerouslySetInnerHTML={{ __html: doc.disabled }}
            />
            <Input label="Forbidden input" disabled />
            <div
              class="markdown-prose"
              dangerouslySetInnerHTML={{ __html: doc.checkbox }}
            />
            <div>
              <Input label="checkbox" type="checkbox" />
              <Input label="radio" type="radio" />
            </div>
            <div
              class="markdown-prose"
              dangerouslySetInnerHTML={{ __html: doc.button }}
            />
            <div>
              <Input value="button" type="button" />
              <Input value="image button" type="image" />
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
