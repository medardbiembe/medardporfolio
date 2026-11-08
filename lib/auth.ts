import { cookies } from "next/headers";

// 1. Créer la session (quand on se connecte)
export async function createSession(email: string) {
  const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7); // 7 jours
  (await cookies()).set("admin_session", email, {
    expires,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
}

// 2. Lire la session (pour vérifier si on est connecté)
export async function getSession() {
  const session = (await cookies()).get("admin_session")?.value;
  return session || null;
}

// 3. Supprimer la session (pour se déconnecter)
export async function deleteSession() {
  (await cookies()).delete("admin_session");
}