import { select, isCancel } from "@clack/prompts";
import chalk from "chalk"; //For coloring
import figlet from "figlet";
import { runCliMode } from "../modes/cli";

const BANNER_FONT = "ANSI Shadow";
const SHADOW = chalk.hex("#5b4d93");
const FACE = chalk.hex("#f9f5f5");

function printBannerWithShadow(ascii: string) {
  const bannerLines = ascii.replace(/\s+$/, "").split("\n");
  const maxLen = Math.max(...bannerLines.map((l) => l.length), 0);
  const rowWidth = maxLen + 2;

  for (const line of bannerLines) {
    console.log(SHADOW(("  " + line).padEnd(rowWidth)));
  }
  process.stdout.write(`\x1b[${bannerLines.length}A`);
  for (const line of bannerLines) {
    console.log(FACE(line.padEnd(rowWidth)));
  }
  console.log();
}

export async function runWakeup() {
  let ascii: string;
  try {
    ascii = figlet.textSync("jarvis", { font: BANNER_FONT });
  } catch (error) {
    ascii = figlet.textSync("");
  }
  printBannerWithShadow(ascii);

  const mode = await select({
    message: "Which mode do you want?",
    options: [
      { value: "cli", label: "CLI" },
      { value: "telegram", label: "Telegram" },
      { value: "cancel", label: "Cancel" },
    ],
  });

  if (isCancel(mode) || (mode === "cancel")) {
    console.log(chalk.dim("\n Goodbye. \n"));
    return;
  }

  if (mode === "cli") {
    await runCliMode();
  } else if (mode === "telegram") {
    console.log(chalk.dim("Starting Telegram mode..."));
  }
}
