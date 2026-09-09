import assert from "node:assert/strict";
import test from "node:test";
import { clipboardCommands, osc52Sequence } from "../extensions/md.ts";

test("clipboard commands include macOS, Wayland, and X11", () => {
  assert.deepEqual(clipboardCommands(), [
    ["pbcopy", []],
    ["wl-copy", []],
    ["xclip", ["-selection", "clipboard"]],
  ]);
});

test("OSC 52 sequence encodes clipboard text", () => {
  assert.equal(osc52Sequence("hello"), "\u001b]52;c;aGVsbG8=\u0007");
});
