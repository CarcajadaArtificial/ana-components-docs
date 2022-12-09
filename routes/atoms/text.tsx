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

export default function () {
  return (
    <Page>
      <Navigation fixed title="text" />
      <Header>
        <Text type="title">Text</Text>
        <Text type="paragraph">
          Text description
        </Text>
      </Header>
      <Main>
        <Layout type="left">
          <div class="grid gap-8">
            <Card>
              <Text type="heading">Default text</Text>
              <Text>doc.default</Text>
              <Separator />
              <Text>
                Alice was beginning to get very tired of sitting by her sister
                on the bank, and of having nothing to do: once or twice she had
                peeped into the book her sister was reading, but it had no
                pictures or conversations in it, “and what is the use of a
                book,” thought Alice “without pictures or conversations?”
              </Text>
            </Card>
            <TextDoc
              type="display"
              description="doc.display"
              testText="Alice’s Adventures in Wonderland"
              fontSize="3.8rem"
              lineHeight="4rem"
              fontWeight="600"
              marginTop="2rem"
              marginBottom="1rem"
            />
            <TextDoc
              type="title"
              description="doc.title"
              testText="Alice’s Adventures in Wonderland"
              fontSize="2.8rem"
              lineHeight="3rem"
              fontWeight="600"
              marginTop="2rem"
              marginBottom="1rem"
            />
            <TextDoc
              type="heading"
              description="doc.heading"
              testText="Chapter I: Down the Rabbit-Hole"
              fontSize="2rem"
              lineHeight="2.5rem"
              fontWeight="600"
              marginTop="2rem"
              marginBottom="1rem"
            />
            <TextDoc
              type="subheading"
              description="doc.subheading"
              testText="Chapter I: Down the Rabbit-Hole"
              fontSize="1.8rem"
              lineHeight="2.1rem"
              fontWeight="400"
              marginTop="2rem"
              marginBottom="1rem"
            />
            <TextDoc
              type="paragraph"
              description="doc.paragraph"
              testText="By Lewis Caroll"
              fontSize="1rem"
              lineHeight="1.3rem"
              fontWeight="400"
              marginTop="0.5rem"
              marginBottom="1rem"
            />
            <TextDoc
              type="small"
              description="doc.small"
              testText="THE MILLENNIUM FULCRUM EDITION 3.0"
              fontSize="0.7rem"
              lineHeight="0.9rem"
              fontWeight="400"
              marginTop="0rem"
              marginBottom="0.5rem"
            />
            <Card>
              <Text type="heading">Prose</Text>
              <Text>doc.prose</Text>
              <Separator />
              <Text type="small">THE MILLENNIUM FULCRUM EDITION 3.0</Text>
              <Text type="title">Alice’s Adventures in Wonderland</Text>
              <Text>By Lewis Caroll</Text>
              <Text type="heading">Chapter I: Down the Rabbit-Hole</Text>
              <Text indent>
                Alice was beginning to get very tired of sitting by her sister
                on the bank, and of having nothing to do: once or twice she had
                peeped into the book her sister was reading, but it had no
                pictures or conversations in it, “and what is the use of a
                book,” thought Alice “without pictures or conversations?”
              </Text>
              <Text indent>
                So she was considering in her own mind (as well as she could,
                for the hot day made her feel very sleepy and stupid), whether
                the pleasure of making a daisy-chain would be worth the trouble
                of getting up and picking the daisies, when suddenly a White
                Rabbit with pink eyes ran close by her.
              </Text>
            </Card>
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
