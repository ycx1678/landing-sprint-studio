import { readFile, writeFile } from "node:fs/promises";

const [, , offerKey, checkoutUrl] = process.argv;

if (!offerKey || !checkoutUrl) {
  console.error("Usage: node scripts/set-payment-link.mjs audit49 https://checkout.example/link");
  process.exit(1);
}

const path = new URL("../config/checkout.json", import.meta.url);
const config = JSON.parse(await readFile(path, "utf8"));

if (!config[offerKey]) {
  console.error(`Unknown offer key: ${offerKey}`);
  process.exit(1);
}

config[offerKey].checkoutUrl = checkoutUrl;
config[offerKey].status = "active";
config.updatedAt = new Date().toISOString().slice(0, 10);

await writeFile(path, `${JSON.stringify(config, null, 2)}\n`);
console.log(`Updated ${offerKey} checkout link.`);

