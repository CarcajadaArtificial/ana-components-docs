import { Footer, Header, Layout, Link, Page, Text } from "../../deps.ts";
import Navigation from "../../islands/Navigation.tsx";
import { orderedPalette, paletteDisplay } from "../../src/const.ts";
import ColorBlock from "../../components/ColorBlock.tsx";

export default function () {
  return (
    <Page>
      <Navigation title="color" />
      <Header>
        <Text type="title">Color</Text>
        <Text type="paragraph">
          Color description
        </Text>
      </Header>
      <Layout type="halves">
        <div class="grid grid-cols-10">
          {paletteDisplay.flat().map((color) => (
            <ColorBlock
              color={color}
            />
          ))}
        </div>
        <div className="grid grid-cols-10">
          {orderedPalette.flat().map((color) => <ColorBlock color={color} />)}
        </div>
      </Layout>
      <Layout type="right">
        <Text>Themes</Text>
        <div class="flex flex-col">
          <Text type="heading">theme-name</Text>
          <div className="grid grid-cols-5 mb-4">
            <Text type="label">arena</Text>
            <Text type="label">tortilla</Text>
            <Text type="label">magia</Text>
            <Text type="label">uva</Text>
            <Text type="label">marino</Text>
            <div class={"aspect-square bg-arena"}></div>
            <div class={"aspect-square bg-tortilla"}></div>
            <div class={"aspect-square bg-magia"}></div>
            <div class={"aspect-square bg-uva"}></div>
            <div class={"aspect-square bg-marino"}></div>
          </div>
          <Text type="subheading">Example</Text>
          <div class="bg-arena p-3 grid gap-2">
            <span class="py-2 px-4 text-marino">
              marino on arena, 17.34:1
            </span>
            <span class="py-2 px-4 text-uva">
              uva on arena, 11.68:1
            </span>
            <span class="bg-marino text-tortilla rounded py-2 px-4">
              tortilla on marino, 10.42:1
            </span>
            <span class="bg-marino text-magia rounded py-2 px-4">
              magia on marino, 5.94:1
            </span>
            <span class="bg-uva text-arena rounded py-2 px-4">
              arena on uva, 11.68:1
            </span>
          </div>
          <div class="bg-marino p-3 grid gap-2">
            <span class="py-2 px-4 text-arena">
              arena on marino, 17.34:1
            </span>
            <span class="py-2 px-4 text-tortilla">
              tortilla on marino, 10.42:1
            </span>
            <span class="bg-arena text-marino rounded py-2 px-4">
              marino on arena, 17.34:1
            </span>
            <span class="bg-arena text-uva rounded py-2 px-4">
              uva on arena, 11.68:1
            </span>
            <span class="bg-magia text-marino rounded py-2 px-4">
              marino on magia, 5.94:1
            </span>
          </div>
          <Text type="heading">theme-name</Text>
          <div className="grid grid-cols-5 mb-4">
            <Text type="label">papel</Text>
            <Text type="label">plata</Text>
            <Text type="label">cedro</Text>
            <Text type="label">jade</Text>
            <Text type="label">obsidiana</Text>
            <div class={"aspect-square bg-papel"}></div>
            <div class={"aspect-square bg-plata"}></div>
            <div class={"aspect-square bg-cedro"}></div>
            <div class={"aspect-square bg-jade"}></div>
            <div class={"aspect-square bg-obsidiana"}></div>
          </div>
          <Text type="subheading">Example</Text>
          <div class="bg-papel p-3 grid gap-2">
            <span class="py-2 px-4 text-obsidiana">
              obsidiana on papel, 17.34:1
            </span>
            <span class="py-2 px-4 text-jade">
              jade on papel, 11.68:1
            </span>
            <span class="bg-obsidiana text-plata rounded py-2 px-4">
              plata on obsidiana, 10.42:1
            </span>
            <span class="bg-obsidiana text-cedro rounded py-2 px-4">
              cedro on obsidiana, 5.94:1
            </span>
            <span class="bg-jade text-papel rounded py-2 px-4">
              papel on jade, 11.68:1
            </span>
          </div>
          <div class="bg-obsidiana p-3 grid gap-2">
            <span class="py-2 px-4 text-papel">
              papel on obsidiana, 17.34:1
            </span>
            <span class="py-2 px-4 text-plata">
              plata on obsidiana, 10.42:1
            </span>
            <span class="bg-papel text-obsidiana rounded py-2 px-4">
              obsidiana on papel, 17.34:1
            </span>
            <span class="bg-papel text-jade rounded py-2 px-4">
              jade on papel, 11.68:1
            </span>
            <span class="bg-cedro text-obsidiana rounded py-2 px-4">
              obsidiana on cedro, 5.94:1
            </span>
          </div>
        </div>
      </Layout>
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
