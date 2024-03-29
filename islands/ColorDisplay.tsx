import ColorBlock from "../components/ColorBlock.tsx";
import ObsidianaCard from "../components/ObsidianaCard.tsx";
import ColorPair from "../components/ColorPair.tsx";
import { orderedPalette, palette, paletteDisplay } from "../src/const.ts";
import { Input, Layout, Text } from "ana-components";
import { LAYOUT_TYPES, TEXT_TYPES } from "ana-components";
import type { Colors } from "../src/types.ts";
import { useState } from "preact/hooks";

export default function (doc: { [key in Colors]: string }) {
  const [ordered, setOrdered] = useState<boolean>(true);
  const [selectedColor, setSelectedColor] = useState<Colors | null>(null);

  return (
    <Layout type={selectedColor ? LAYOUT_TYPES.LEFT : LAYOUT_TYPES.FOCUS}>
      {selectedColor
        ? null
        : <Text noMargins type={TEXT_TYPES.HEADING}>Color selector</Text>}
      {selectedColor
        ? (
          <div>
            <div
              class="markdown-prose mb-8"
              dangerouslySetInnerHTML={{
                __html: doc[selectedColor],
              }}
            />
            <Text noMargins>
              <strong>Hex:&nbsp;</strong>
              <span>{palette[selectedColor].hex}</span>
            </Text>
            <Text noMargins>
              <strong>RGB:&nbsp;</strong>
              <span>
                {`rgb(${palette[selectedColor].r}, ${
                  palette[selectedColor].g
                }, ${palette[selectedColor].b})`}
              </span>
            </Text>
            <Text noMargins>
              <strong>HSL:&nbsp;</strong>
              <span>
                {`hsl(${palette[selectedColor].h}, ${
                  palette[selectedColor].s
                }, ${palette[selectedColor].l})`}
              </span>
            </Text>
            <Text type={TEXT_TYPES.SUBHEADING}>
              Contrast
            </Text>
            <div className="flex gap-2">
              <div class="w-full">
                <Text noMargins>
                  <strong>Contrast vs blanco:&nbsp;</strong>
                  <span></span>
                </Text>
              </div>
              <div class="w-full">
                <Text noMargins>
                  <strong>Contrast vs obsidiana:&nbsp;</strong>
                  <span></span>
                </Text>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div class="w-full">
                <span
                  className={`block bg-${selectedColor} txt-blanco py-2 px-3 rounded`}
                >
                  Example text
                </span>
              </div>
              <div class="w-full">
                <span
                  className={`block bg-${selectedColor} txt-obsidiana py-2 px-3 rounded`}
                >
                  Example text
                </span>
              </div>
              <div class="w-full">
                <span
                  className={`block txt-${selectedColor} bg-blanco py-2 px-3 rounded`}
                >
                  Example text
                </span>
              </div>
              <div class="w-full">
                <span
                  className={`block txt-${selectedColor} bg-obsidiana py-2 px-3 rounded`}
                >
                  Example text
                </span>
              </div>
            </div>
            {palette[selectedColor].neighbors.map((neighbor) => (
              <div class="mt-4">
                <Text noMargins>{neighbor}</Text>
                <ColorPair mainColor={selectedColor} pairedColor={neighbor} />
              </div>
            ))}
          </div>
        )
        : null}
      <ObsidianaCard>
        <Input
          type="checkbox"
          label="Order by hue and brightness"
          onClick={() => setOrdered(!ordered)}
        />
        <div class="grid grid-cols-10">
          {ordered
            ? paletteDisplay.flat().map((color) => (
              <ColorBlock
                color={color}
                focusable={color !== null}
                onMouseDown={color === null
                  ? (e) => e.preventDefault()
                  : () => setSelectedColor(color)}
              />
            ))
            : orderedPalette.flat().map((color) => (
              <ColorBlock
                color={color}
                focusable={color !== null}
                onMouseDown={color === null
                  ? (e) => e.preventDefault()
                  : () => setSelectedColor(color)}
              />
            ))}
        </div>
      </ObsidianaCard>
    </Layout>
  );
}
