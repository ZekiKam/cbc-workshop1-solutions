// Hooks demo (instructor only): auto-format every file Claude edits.
// Claude Code sends the tool call to this script as JSON on stdin.
// Needs Node.js. The first run downloads prettier via npx, so run it once before the workshop.
const { execSync } = require("child_process");

let input = "";
process.stdin.on("data", (chunk) => (input += chunk));
process.stdin.on("end", () => {
  const file = JSON.parse(input).tool_input?.file_path;
  if (!file || !/\.(html|css|js|md|json)$/.test(file)) return;
  execSync(`npx --yes prettier --write "${file}"`, { stdio: "inherit" });
  console.log(`Formatted ${file}`);
});
