import chalk from "chalk";
import { select, isCancel } from "@clack/prompts";

export async function runCliMode() {
  while (true) {
    const mode = await select({
      message: "Choose CLI sub-mode",
      options: [
        { value: "agent", label: "Agent Mode" },
        { value: "plan", label: "Plan Mode" },
        { value: "ask", label: "Ask Mode" },
        { value: "cancel", label: "Cancel" },
      ],
    });

    if (isCancel(mode) || mode === "cancel") {
      console.log("Operation cancelled...");
      return;
    }

    if (mode === "agent") {
      console.log("agent");
    }
    if (mode === "ask") {
      console.log("ask");
    }
    if (mode === "plan") {
      console.log("plan");
    }
    if (mode !== "agent" && mode !== "ask" && mode !== "plan") {
      console.log(chalk.red("\nThis mode is not implemented yet\n"));
    }
  }
}
