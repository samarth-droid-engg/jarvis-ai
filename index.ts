#!/usr/bin/env bun //Shebang: Tells the OS about the file, is it text file, js file, or bun file but with the help of shebang it does 

import { Command } from "commander";
import { runWakeup } from "./tui/wakeup";

const program = new Command();

program.name("jarvis").description("A CLI tool for Jarvis").version("1.0.0");

program
  .command("wakeup")
  .description("Show the banner and pick CLI or telegram mode")
  .action(async () => {
    await runWakeup();
  });

await program.parseAsync(process.argv);