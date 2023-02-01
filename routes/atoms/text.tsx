import {
  Card,
  Code,
  Footer,
  Header,
  Layout,
  Link,
  Main,
  Separator,
  Text,
} from "../../deps.ts";
import Page from "../../components/Page.tsx";
import TextDoc from "../../components/TextDoc.tsx";
import Navigation from "../../islands/Navigation.tsx";
import { getDoc } from "../../src/doc.ts";
import { render } from "gfm";

const doc = {
  description: render(await getDoc("atoms/text", "description")),
  display: render(await getDoc("atoms/text", "display")),
  title: render(await getDoc("atoms/text", "title")),
  heading: render(await getDoc("atoms/text", "heading")),
  subheading: render(await getDoc("atoms/text", "subheading")),
  paragraph: render(await getDoc("atoms/text", "paragraph")),
  small: render(await getDoc("atoms/text", "small")),
  noMargins: render(await getDoc("atoms/text", "noMargins")),
  inheritColor: render(await getDoc("atoms/text", "inheritColor")),
};

export default function () {
  return (
    <Page>
      <Navigation fixed title="text" />
      <Header>
        <div
          class="markdown-prose"
          dangerouslySetInnerHTML={{ __html: doc.description }}
        />
      </Header>
      <Main>
        <Layout type="left">
          <div class="grid gap-8">
            <div>
              <div
                class="markdown-prose"
                dangerouslySetInnerHTML={{ __html: doc.display }}
              />
              <TextDoc
                type="display"
                testText="Alice’s Adventures in Wonderland"
                marginTop="2rem"
                marginBottom="1rem"
              />
            </div>
            <div>
              <div
                class="markdown-prose"
                dangerouslySetInnerHTML={{ __html: doc.title }}
              />
              <TextDoc
                type="title"
                testText="Alice’s Adventures in Wonderland"
                marginTop="2rem"
                marginBottom="1rem"
              />
            </div>
            <div>
              <div
                class="markdown-prose"
                dangerouslySetInnerHTML={{ __html: doc.heading }}
              />
              <TextDoc
                type="heading"
                testText="Chapter I: Down the Rabbit-Hole"
                marginTop="2rem"
                marginBottom="1rem"
              />
            </div>
            <div>
              <div
                class="markdown-prose"
                dangerouslySetInnerHTML={{ __html: doc.subheading }}
              />
              <TextDoc
                type="subheading"
                testText="Chapter I: Down the Rabbit-Hole"
                marginTop="2rem"
                marginBottom="1rem"
              />
            </div>
            <div>
              <div
                class="markdown-prose mb-8"
                dangerouslySetInnerHTML={{ __html: doc.paragraph }}
              />
              <TextDoc
                type="paragraph"
                testText="By Lewis Caroll"
                marginTop="0.5rem"
                marginBottom="1rem"
              />
            </div>
            <div>
              <div
                class="markdown-prose mb-10"
                dangerouslySetInnerHTML={{ __html: doc.small }}
              />
              <TextDoc
                type="small"
                testText="THE MILLENNIUM FULCRUM EDITION 3.0"
                marginTop="0"
                marginBottom="0.5rem"
              />
            </div>
            <div>
              <div
                class="markdown-prose mb-10"
                dangerouslySetInnerHTML={{ __html: doc.noMargins }}
              />
              <TextDoc
                type="heading"
                testText="Chapter I: Down the Rabbit-Hole"
                marginTop="0"
                marginBottom="0"
              />
            </div>
            <div
              class="markdown-prose mt-4"
              dangerouslySetInnerHTML={{ __html: doc.inheritColor }}
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
