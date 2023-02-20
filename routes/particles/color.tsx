import {
  Footer,
  Header,
  Layout,
  LAYOUT_TYPES,
  Link,
  Main,
  Text,
} from "ana-components";
import Page from "../../components/Page.tsx";
import ObsidianaCard from "../../components/ObsidianaCard.tsx";
import ColorBlock from "../../components/ColorBlock.tsx";
import Navigation from "../../islands/Navigation.tsx";
import ColorDisplay from "../../islands/ColorDisplay.tsx";
import { getDoc } from "../../src/doc.ts";
import { render } from "gfm";
import { Colors } from "../../src/types.ts";

const doc = {
  description: render(await getDoc("particles/color", "description")),
  mineral: render(await getDoc("particles/color", "mineral")),
  fruit: render(await getDoc("particles/color", "fruit")),
  plant: render(await getDoc("particles/color", "plant")),
  food: render(await getDoc("particles/color", "food")),
  animal: render(await getDoc("particles/color", "animal")),
  things: render(await getDoc("particles/color", "things")),
  concepts: render(await getDoc("particles/color", "concepts")),
  landscape: render(await getDoc("particles/color", "landscape")),
};

const colorDoc: { [key in Colors]: string } = {
  azulejo: render(await getDoc("particles/color", "azulejo")),
  grafito: render(await getDoc("particles/color", "azulejo")),
  flan: render(await getDoc("particles/color", "flan")),
  chicle: render(await getDoc("particles/color", "chicle")),
  ladrillo: render(await getDoc("particles/color", "ladrillo")),
  arandano: render(await getDoc("particles/color", "arandano")),
  jade: render(await getDoc("particles/color", "jade")),
  menta: render(await getDoc("particles/color", "menta")),
  acero: render(await getDoc("particles/color", "acero")),
  arena: render(await getDoc("particles/color", "arena")),
  mantequilla: render(await getDoc("particles/color", "mantequilla")),
  chapopote: render(await getDoc("particles/color", "chapopote")),
  uva: render(await getDoc("particles/color", "uva")),
  musgo: render(await getDoc("particles/color", "musgo")),
  cobalto: render(await getDoc("particles/color", "cobalto")),
  hielo: render(await getDoc("particles/color", "hielo")),
  mota: render(await getDoc("particles/color", "mota")),
  vino: render(await getDoc("particles/color", "vino")),
  blanco: render(await getDoc("particles/color", "blanco")),
  ambar: render(await getDoc("particles/color", "ambar")),
  lapis: render(await getDoc("particles/color", "lapis")),
  marino: render(await getDoc("particles/color", "marino")),
  fresa: render(await getDoc("particles/color", "fresa")),
  cedro: render(await getDoc("particles/color", "cedro")),
  bombon: render(await getDoc("particles/color", "bombon")),
  pulpo: render(await getDoc("particles/color", "pulpo")),
  tortilla: render(await getDoc("particles/color", "tortilla")),
  manzana: render(await getDoc("particles/color", "manzana")),
  turquesa: render(await getDoc("particles/color", "turquesa")),
  vinca: render(await getDoc("particles/color", "vinca")),
  borrador: render(await getDoc("particles/color", "borrador")),
  pitahaya: render(await getDoc("particles/color", "pitahaya")),
  obsidiana: render(await getDoc("particles/color", "obsidiana")),
  ajolote: render(await getDoc("particles/color", "ajolote")),
  limon: render(await getDoc("particles/color", "limon")),
  pastel: render(await getDoc("particles/color", "pastel")),
  papel: render(await getDoc("particles/color", "papel")),
  hierro: render(await getDoc("particles/color", "hierro")),
  magia: render(await getDoc("particles/color", "magia")),
  cielo: render(await getDoc("particles/color", "cielo")),
  plata: render(await getDoc("particles/color", "plata")),
  lavanda: render(await getDoc("particles/color", "lavanda")),
  cajeta: render(await getDoc("particles/color", "cajeta")),
  alien: render(await getDoc("particles/color", "alien")),
  princesa: render(await getDoc("particles/color", "princesa")),
  nube: render(await getDoc("particles/color", "nube")),
};

export default function () {
  return (
    <Page>
      <Navigation fixed title="color" />
      <Header>
        <div
          class="markdown-prose"
          dangerouslySetInnerHTML={{ __html: doc.description }}
        />
      </Header>
      <Main>
        <ColorDisplay {...colorDoc} />
        <Layout type={LAYOUT_TYPES.LEFT}>
          <div>
            <div
              class="markdown-prose"
              dangerouslySetInnerHTML={{ __html: doc.mineral }}
            />
            <ObsidianaCard>
              <div class="grid grid-cols-6">
                <ColorBlock color="jade" />
                <ColorBlock color="turquesa" />
                <ColorBlock color="cobalto" />
                <ColorBlock color="lapis" />
                <ColorBlock color="ambar" />
                <ColorBlock color="obsidiana" />
                <ColorBlock color="grafito" />
                <ColorBlock color="hierro" />
                <ColorBlock color="acero" />
                <ColorBlock color="plata" />
              </div>
            </ObsidianaCard>
            <div
              class="markdown-prose mt-8"
              dangerouslySetInnerHTML={{ __html: doc.fruit }}
            />
            <ObsidianaCard>
              <div class="grid grid-cols-6">
                <ColorBlock color="limon" />
                <ColorBlock color="uva" />
                <ColorBlock color="pitahaya" />
                <ColorBlock color="fresa" />
                <ColorBlock color="manzana" />
                <ColorBlock color="arandano" />
              </div>
            </ObsidianaCard>
            <div
              class="markdown-prose mt-8"
              dangerouslySetInnerHTML={{ __html: doc.plant }}
            />
            <ObsidianaCard>
              <div class="grid grid-cols-6">
                <ColorBlock color="vinca" />
                <ColorBlock color="lavanda" />
                <ColorBlock color="cedro" />
                <ColorBlock color="mota" />
                <ColorBlock color="musgo" />
              </div>
            </ObsidianaCard>
            <div
              class="markdown-prose mt-8"
              dangerouslySetInnerHTML={{ __html: doc.animal }}
            />
            <ObsidianaCard>
              <div class="grid grid-cols-6">
                <ColorBlock color="ajolote" />
                <ColorBlock color="pulpo" />
              </div>
            </ObsidianaCard>
            <div
              class="markdown-prose mt-8"
              dangerouslySetInnerHTML={{ __html: doc.food }}
            />
            <ObsidianaCard>
              <div class="grid grid-cols-6">
                <ColorBlock color="mantequilla" />
                <ColorBlock color="tortilla" />
                <ColorBlock color="flan" />
                <ColorBlock color="cajeta" />
                <ColorBlock color="chicle" />
                <ColorBlock color="bombon" />
                <ColorBlock color="pastel" />
                <ColorBlock color="vino" />
                <ColorBlock color="menta" />
              </div>
            </ObsidianaCard>
            <div
              class="markdown-prose mt-8"
              dangerouslySetInnerHTML={{ __html: doc.things }}
            />
            <ObsidianaCard>
              <div class="grid grid-cols-6">
                <ColorBlock color="papel" />
                <ColorBlock color="borrador" />
                <ColorBlock color="ladrillo" />
                <ColorBlock color="chapopote" />
                <ColorBlock color="azulejo" />
              </div>
            </ObsidianaCard>
            <div
              class="markdown-prose mt-8"
              dangerouslySetInnerHTML={{ __html: doc.concepts }}
            />
            <ObsidianaCard>
              <div class="grid grid-cols-6">
                <ColorBlock color="alien" />
                <ColorBlock color="blanco" />
                <ColorBlock color="princesa" />
                <ColorBlock color="magia" />
              </div>
            </ObsidianaCard>
            <div
              class="markdown-prose mt-8"
              dangerouslySetInnerHTML={{ __html: doc.landscape }}
            />
            <ObsidianaCard>
              <div class="grid grid-cols-6">
                <ColorBlock color="hielo" />
                <ColorBlock color="marino" />
                <ColorBlock color="cielo" />
                <ColorBlock color="nube" />
                <ColorBlock color="arena" />
              </div>
            </ObsidianaCard>
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
