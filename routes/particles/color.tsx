import {
  Footer,
  Header,
  Layout,
  LAYOUT_TYPES,
  Link,
  Linkmap,
  Main,
  Text,
} from "ana-components";
import Page from "../../components/Page.tsx";
import ColorList from "../../components/ColorList.tsx";
import Navigation from "../../islands/Navigation.tsx";
import ColorDisplay from "../../islands/ColorDisplay.tsx";
import { getDoc } from "../../src/doc.ts";
import { render } from "gfm";
import { Colors } from "../../src/types.ts";
import { LINKS_PARTICLE_COLOR } from "../../src/links.ts";

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
        <Linkmap
          links={[
            { name: "Table of contents", children: LINKS_PARTICLE_COLOR },
          ]}
        />
      </Header>
      <Main>
        <ColorDisplay {...colorDoc} />
        <Layout type={LAYOUT_TYPES.LEFT}>
          <div>
            <ColorList
              doc={doc.mineral}
              colors={[
                "jade",
                "turquesa",
                "cobalto",
                "lapis",
                "obsidiana",
                "grafito",
                "hierro",
                "acero",
                "plata",
              ]}
            />
            <ColorList
              doc={doc.fruit}
              colors={[
                "limon",
                "uva",
                "pitahaya",
                "fresa",
                "manzana",
                "arandano",
              ]}
            />
            <ColorList
              doc={doc.plant}
              colors={[
                "vinca",
                "lavanda",
                "cedro",
                "mota",
                "musgo",
                "ambar",
              ]}
            />
            <ColorList
              doc={doc.food}
              colors={[
                "mantequilla",
                "tortilla",
                "flan",
                "cajeta",
                "chicle",
                "bombon",
                "pastel",
                "vino",
                "menta",
              ]}
            />
            <ColorList
              doc={doc.things}
              colors={[
                "papel",
                "borrador",
                "ladrillo",
                "chapopote",
                "azulejo",
              ]}
            />
            <ColorList
              doc={doc.concepts}
              colors={[
                "alien",
                "blanco",
                "princesa",
                "magia",
              ]}
            />
            <ColorList
              doc={doc.landscape}
              colors={[
                "hielo",
                "marino",
                "cielo",
                "nube",
                "arena",
              ]}
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
