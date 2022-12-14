import ColorBlock from "../components/ColorBlock.tsx";
import ColorPair from "../components/ColorPair.tsx";
import { orderedPalette, palette, paletteDisplay } from "../src/const.ts";
import { Card, Input, Layout, Text } from "../deps.ts";
import type { Colors } from "../src/types.ts";
import { useState } from "preact/hooks";

export default function () {
  const [ordered, setOrdered] = useState<boolean>(true);
  const [selectedColor, setSelectedColor] = useState<Colors | null>(null);

  return (
    <div>
      <Layout type={selectedColor ? "right" : "focus"}>
        <Card>
          <Text type="heading">Color palette selector</Text>
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
                  onClick={() =>
                    setSelectedColor(
                      color === null ? selectedColor : color,
                    )}
                />
              ))
              : orderedPalette.flat().map((color) => (
                <ColorBlock
                  color={color}
                  onClick={() =>
                    setSelectedColor(
                      color === null ? selectedColor : color,
                    )}
                />
              ))}
          </div>
        </Card>
        {selectedColor
          ? (
            <Card>
              <Text type="heading">{selectedColor}</Text>
              <Text type="paragraph">Color description</Text>
              <Text type="label">
                <strong>Hex:&nbsp;</strong>
                <span>{palette[selectedColor].hex}</span>
              </Text>
              <Text type="paragraph">
                <strong>RGB:&nbsp;</strong>
                <span>
                  {`rgb(${palette[selectedColor].r}, ${
                    palette[selectedColor].g
                  }, ${palette[selectedColor].b})`}
                </span>
              </Text>
              <Text type="paragraph">
                <strong>R:&nbsp;</strong>
                <span>{palette[selectedColor].r}</span>
              </Text>
              <Text type="paragraph">
                <strong>G:&nbsp;</strong>
                <span>{palette[selectedColor].g}</span>
              </Text>
              <Text type="paragraph">
                <strong>B:&nbsp;</strong>
                <span>{palette[selectedColor].b}</span>
              </Text>
              <Text type="paragraph">
                <strong>H:&nbsp;</strong>
                <span>{palette[selectedColor].h}??</span>
              </Text>
              <Text type="paragraph">
                <strong>S:&nbsp;</strong>
                <span>{palette[selectedColor].s}%</span>
              </Text>
              <Text type="paragraph">
                <strong>L:&nbsp;</strong>
                <span>{palette[selectedColor].l}%</span>
              </Text>
              <div className="flex gap-2">
                <div class="w-full">
                  <Text type="paragraph">
                    <strong>Contrast vs blanco:&nbsp;</strong>
                    <span></span>
                  </Text>
                </div>
                <div class="w-full">
                  <Text type="paragraph">
                    <strong>Contrast vs obsidiana:&nbsp;</strong>
                    <span></span>
                  </Text>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div class="w-full">
                  <span
                    className={`block bg-${selectedColor} text-blanco py-2 px-3 rounded`}
                  >
                    Example text
                  </span>
                </div>
                <div class="w-full">
                  <span
                    className={`block bg-${selectedColor} text-obsidiana py-2 px-3 rounded`}
                  >
                    Example text
                  </span>
                </div>
                <div class="w-full">
                  <span
                    className={`block text-${selectedColor} bg-blanco py-2 px-3 rounded`}
                  >
                    Example text
                  </span>
                </div>
                <div class="w-full">
                  <span
                    className={`block text-${selectedColor} bg-obsidiana py-2 px-3 rounded`}
                  >
                    Example text
                  </span>
                </div>
              </div>
              {palette[selectedColor].neighbors.map((neighbor) => (
                <>
                  <Text type="paragraph">{neighbor}</Text>
                  <ColorPair mainColor={selectedColor} pairedColor={neighbor} />
                </>
              ))}
            </Card>
          )
          : null}
      </Layout>
    </div>
  );
}
