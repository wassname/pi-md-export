# @wassname/pi-md-export

Export Pi sessions to Markdown files or the clipboard.

```text
/md      current branch
/md all  full session file
/md 3    last three turns
/md tc   include tool calls
/md t    include thinking
```

Choose copy or save. In Herdr SSH, copying uses OSC 52: the remote terminal tells your local terminal to set its clipboard. If copying is unavailable, the file is saved under `~/.pi/agent/pi-sessions-extracted/`.

<!-- PI -->
