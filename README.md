# @wassname/pi-md-export

Export a Pi session as Markdown.

```text
/md          current branch
/md all      full session file
/md 3        last three turns
/md tc       include tool calls and results
/md t        include thinking blocks
```

`/md` asks whether to copy the result or save it under `~/.pi/agent/pi-sessions-extracted/`.
Clipboard export tries `pbcopy`, `wl-copy`, then `xclip -selection clipboard`.

<!-- Initial package assembled by PI. -->
