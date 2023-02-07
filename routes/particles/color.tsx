import { Footer, Header, Link, Main, Text, TEXT_TYPES } from "../../deps.ts";
import Page from "../../components/Page.tsx";
import Navigation from "../../islands/Navigation.tsx";
import ColorDisplay from "../../islands/ColorDisplay.tsx";
import { getDoc } from "../../src/doc.ts";
import { render } from "gfm";
import { Colors } from "../../src/types.ts";

const doc = {
  description: render(await getDoc("particles/color", "description")),
};

const colorDoc: { [key in Colors]: string } = {
  detergente: render(await getDoc("particles/color", "detergente")),
  grafito: render(await getDoc("particles/color", "detergente")),
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
  kawaii: render(await getDoc("particles/color", "kawaii")),
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
