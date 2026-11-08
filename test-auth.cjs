
const { loadEnvConfig } = require("@next/env");
const bcrypt = require("bcryptjs");

loadEnvConfig(process.cwd());

async function test() {
  const encoded = process.env.ADMIN_PASSWORD_HASH_B64 || "";
  const hash = Buffer.from(encoded, "base64").toString("utf8");

  console.log("1. Variable trouvée :", Boolean(encoded));
  console.log("2. Longueur Base64 :", encoded.length);
  console.log("3. Longueur du hash :", hash.length);
  console.log("4. Début du hash correct :", hash.startsWith("$2b$12$"));

  const result = await bcrypt.compare("Medard2026!", hash);

  console.log("5. Mot de passe correct :", result);
}

test();
