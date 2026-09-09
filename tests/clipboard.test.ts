import assert from "node:assert/strict";
import test from "node:test";
import { clipboardCommands } from "../extensions/md.ts";

test("clipboard commands include macOS, Wayland, and X11", () => {
  assert.deepEqual(clipboardCommands(), [
    ["pbcopy", []],
    ["wl-copy", []],
    ["xclip", ["-selection", "clipboard"]],
  ]);
});
