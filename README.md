<div align="center">

# 🤖 JARVIS

**A fast, interactive AI assistant for your terminal — powered by [Bun](https://bun.com) and [OpenRouter](https://openrouter.ai).**

Pick a mode, type your goal, and let JARVIS help you get things done right from the command line.

![Runtime](https://img.shields.io/badge/runtime-Bun-black?logo=bun)
![Language](https://img.shields.io/badge/language-TypeScript-3178c6?logo=typescript)
![License](https://img.shields.io/badge/license-MIT-green)

</div>

---

## ✨ Features

- **Beautiful CLI banner** — a stylized ASCII startup screen rendered with `figlet` and colored shadows.
- **Interactive prompts** — smooth, keyboard-driven menus built with [`@clack/prompts`](https://github.com/bombshell-dev/clack).
- **Multiple modes** — choose how you want to interact:
  - **CLI mode** with three sub-modes:
    - 🧠 **Agent Mode** — give JARVIS a concrete task and let it work toward your goal.
    - 📋 **Plan Mode** — outline and plan before acting _(coming soon)_.
    - 💬 **Ask Mode** — ask quick questions _(coming soon)_.
  - **Telegram mode** — interact with JARVIS through Telegram _(coming soon)_.
- **AI powered by OpenRouter** — bring your own model via the OpenRouter API (works with many providers behind one key).

---

## 📦 Requirements

- [Bun](https://bun.com) `v1.3.14` or newer
- An [OpenRouter](https://openrouter.ai) API key

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/samarth-droid-engg/JARVIS.git
cd JARVIS
```

### 2. Install dependencies

```bash
bun install
```

### 3. Configure your environment

Create a `.env` file in the project root:

```bash
OPENROUTER_API_KEY=your_openrouter_api_key_here
OPENROUTER_DEFAULT_MODEL=openai/gpt-4o-mini
```

| Variable                   | Description                                                                                                                          |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `OPENROUTER_API_KEY`       | Your OpenRouter API key. Get one at [openrouter.ai/keys](https://openrouter.ai/keys).                                                |
| `OPENROUTER_DEFAULT_MODEL` | The model ID to use, e.g. `openai/gpt-4o-mini`, `anthropic/claude-3.5-sonnet`. See [available models](https://openrouter.ai/models). |

> ⚠️ Never commit your `.env` file or API keys to version control.

---

## 🖥️ Usage

Start JARVIS with the `wakeup` command:

```bash
bun run index.ts wakeup
```

You'll see the JARVIS banner, then a menu to choose your mode:

```
Which mode do you want?
❯ CLI
  Telegram
  Cancel
```

Choosing **CLI** opens the sub-mode menu:

```
Choose CLI sub-mode
❯ Agent Mode
  Plan Mode
  Ask Mode
  Cancel
```

### Other commands

```bash
bun run index.ts --help      # Show all available commands
bun run index.ts --version   # Show the current version
```

---

## 🗂️ Project Structure

```
JARVIS/
├── index.ts                 # CLI entry point (commander setup)
├── tui/
│   └── wakeup.ts            # Startup banner + top-level mode menu
├── modes/
│   ├── cli.ts              # CLI sub-mode selector (agent / plan / ask)
│   └── agent/
│       └── orchestrator.ts # Agent mode logic
├── ai/
│   ├── index.ts            # AI module exports
│   └── ai.config.ts        # OpenRouter model configuration
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🛠️ Built With

| Tool                                                                                     | Purpose                            |
| ---------------------------------------------------------------------------------------- | ---------------------------------- |
| [Bun](https://bun.com)                                                                   | Fast all-in-one JavaScript runtime |
| [TypeScript](https://www.typescriptlang.org/)                                            | Type-safe development              |
| [commander](https://github.com/tj/commander.js)                                          | CLI command parsing                |
| [@clack/prompts](https://github.com/bombshell-dev/clack)                                 | Interactive terminal prompts       |
| [figlet](https://github.com/patorjk/figlet.js)                                           | ASCII art banner                   |
| [chalk](https://github.com/chalk/chalk)                                                  | Terminal text styling              |
| [ai](https://sdk.vercel.ai/) + [@openrouter/ai-sdk-provider](https://openrouter.ai/docs) | AI model integration               |

---

## 🧭 Roadmap

- [x] Interactive startup banner and mode selection
- [x] CLI mode with sub-mode menu
- [ ] Complete Agent Mode orchestration
- [ ] Plan Mode
- [ ] Ask Mode
- [ ] Telegram integration

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is released under the MIT License.

---

<div align="center">

Made with ☕ and TypeScript · _This project was bootstrapped with `bun init` (Bun v1.3.14)._

</div>
