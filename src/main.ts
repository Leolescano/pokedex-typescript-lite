import { TerminalController } from "./controllers/TerminalController";

async function main(): Promise<void> {
  const controller = new TerminalController();
  await controller.executarFluxo();
}

main();