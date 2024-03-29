import { useState } from "preact/hooks";
import {
  Card,
  Footer,
  Header,
  Input,
  Layout,
  Link,
  Main,
  Navigation,
  Select,
  Text,
} from "ana-components";
import { LAYOUT_TYPES, TEXT_TYPES } from "ana-components";
import { allThemes, Theme } from "../src/types.ts";

export default function () {
  const [selectedTheme, setSelectedTheme] = useState<Theme>("newspaper");
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <div class="my-10">
      <Layout>
        <div>
          <Text type={TEXT_TYPES.HEADING}>Theme sampler</Text>
          <Select
            placeholder="newspaper"
            label="select theme"
            options={allThemes}
            onChange={(e) =>
              setSelectedTheme((e.target as HTMLSelectElement).value as Theme)}
          />
          <div class="mt-4">
            <Input
              type="checkbox"
              label="Dark Mode"
              onClick={() => setDarkMode(!darkMode)}
            />
          </div>
        </div>
        <div
          class={`border clr-border ${selectedTheme} ${
            darkMode ? "dark" : "light"
          }`}
        >
          <Navigation>
            <Link href="/">Theme example</Link>
            <Text>{selectedTheme}</Text>
          </Navigation>
          <Header>
            <Text type={TEXT_TYPES.TITLE}>Theme Example</Text>
            <Text>Theme example description</Text>
          </Header>
          <Main>
            <Layout>
              <div>
                <Text type={TEXT_TYPES.HEADING}>Personal form</Text>
                <form class="grid gap-4">
                  <Input
                    label="Full Name"
                    value="John Doe"
                    error="There's already a person with that name."
                  />
                  <Input label="Date of birth" type="date" />
                  <Input value="Immovable object" disabled />
                  <fieldset>
                    <legend class="px-2">
                      <Text>What are you?</Text>
                    </legend>
                    <Input type="radio" label="Human" name="what" />
                    <Input type="radio" label="Robot" name="what" />
                  </fieldset>
                  <Input type="button" value="submit" />
                </form>
              </div>
            </Layout>
            <Layout type={LAYOUT_TYPES.CENTER}>
              <Card>
                <div class="prose">
                  <Text type={TEXT_TYPES.HEADING}>Chapter I.</Text>
                  <Text type={TEXT_TYPES.SUBHEADING}>Down the Rabbit-Hole</Text>
                  <Text>
                    Alice was beginning to get very tired of sitting by her
                    sister on the bank, and of having nothing to do: once or
                    twice she had peeped into the book her sister was reading,
                    but it had no pictures or conversations in it, “and what is
                    the use of a book,” thought Alice “without pictures or
                    conversations?”
                  </Text>
                  <Text>
                    So she was considering in her own mind (as well as she
                    could, for the hot day made her feel very sleepy and
                    stupid), whether the pleasure of making a daisy-chain would
                    be worth the trouble of getting up and picking the daisies,
                    when suddenly a White Rabbit with pink eyes ran close by
                    her.
                  </Text>
                </div>
              </Card>
            </Layout>
          </Main>
          <Footer>
            <Text>
              Footer
            </Text>
          </Footer>
        </div>
      </Layout>
    </div>
  );
}
