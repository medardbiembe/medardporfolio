const bcrypt = require('bcryptjs');

// 👇 C'EST ICI QUE TU CHOISIS TON MOT DE PASSE
const monMotDePasse = "Biembe28@"; 

const hash = bcrypt.hashSync(monMotDePasse, 10);
const base64Hash = Buffer.from(hash).toString('base64');

console.log("\n=========================================");
console.log("TON MOT DE PASSE :", monMotDePasse);
console.log("HASH BCRYPT     :", hash);
console.log("HASH EN BASE64  :", base64Hash);
console.log("=========================================\n");
console.log("Copie le HASH EN BASE64 et mets-le dans ton .env.local");