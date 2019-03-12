import { strictEqual } from "assert";
import { pipe } from "./index";

const five = pipe(30)
    .into(v => v * 3)
    .into(v => v / 9)
    .into(v => v / 2)
    .val;

strictEqual(five, 5);
