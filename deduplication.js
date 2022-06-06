const fs = require("fs")
const file = fs.readFileSync("./lib/pngs/index.js", 'UTF-8')
const lines = file.split(/\r?\n/);
const exportsLines = {}
for (let line of lines) {
    const name = line.split("\"")[1]
    if (!name) continue;
    exportsLines[name] = line
}

const newContent = Object.values(exportsLines).join("\n");

fs.writeFileSync("./lib/pngs/index.js", newContent)