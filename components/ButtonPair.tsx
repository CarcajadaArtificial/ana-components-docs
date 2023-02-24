import { Button, Card } from "ana-components";
import { BUTTON_TYPES } from "ana-components";

interface iButtonPair {
  type?: BUTTON_TYPES;
}

export default function (props: iButtonPair) {
  return (
    <div className="flex items-center gap-4 mt-4 mb-8">
      <Card>
        <Button type={props.type}>
          Contrast
        </Button>
      </Card>
      <Button type={props.type}>
        Contrast
      </Button>
    </div>
  );
}
