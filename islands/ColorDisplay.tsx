import ColorBlock from "../components/ColorBlock.tsx";
import ColorPair from "../components/ColorPair.tsx";
import { orderedPalette, palette, paletteDisplay } from "../src/const.ts";
import { Card, Input, Layout, Separator, Text } from "ana-components";
import { LAYOUT_TYPES, TEXT_TYPES } from "ana-components";
import type { Colors } from "../src/types.ts";
import { useState } from "preact/hooks";

export default function (doc: { [key in Colors]: string }) {
  const [ordered, setOrdered] = useState<boolean>(true);
  const [selectedColor, setSelectedColor] = useState<Colors | null>(null);

  return (
    <div>
      <Layout type={selectedColor ? LAYOUT_TYPES.LEFT : LAYOUT_TYPES.FOCUS}>
        <Text noMargins type={TEXT_TYPES.HEADING}>Color palette selector</Text>
        {selectedColor ? <div /> : null}
        {selectedColor
          ? (
            <Card>
              <div
                class="markdown-prose"
                dangerouslySetInnerHTML={{
                  __html: doc[selectedColor],
                }}
              />
              <Separator />
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
              <Separator />
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
            </Card>
          )
          : null}
        <div class="bg-obsidiana p-8 rounded clr-border border-1">
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
                  onMouseDown={color === null
                    ? (e) => e.preventDefault()
                    : () => setSelectedColor(color)}
                />
              ))
              : orderedPalette.flat().map((color) => (
                <ColorBlock
                  color={color}
                  onMouseDown={color === null
                    ? (e) => e.preventDefault()
                    : () => setSelectedColor(color)}
                />
              ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}
