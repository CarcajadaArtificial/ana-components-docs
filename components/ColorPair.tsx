import type { Colors } from "../src/types.ts";

interface iColorPair {
  mainColor: Colors;
  pairedColor: Colors;
}

export default function (props: iColorPair) {
  const { mainColor, pairedColor } = props;
  return (
    <div class="flex flex-col gap-1">
      <div className="flex">
        <div className={`w-full block bg-${mainColor} h-9 rounded-l`} />
        <div className={`w-full block bg-${pairedColor} h-9 rounded-r`} />
      </div>
      <div
        className="h-20 rounded"
        style={`background: linear-gradient(90deg, var(--clr-${mainColor}) 0%, var(--clr-${pairedColor}) 100%)`}
      />
    </div>
  );
}
