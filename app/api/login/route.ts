import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createSession } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, password } = body;

    const adminEmail = process.env.ADMIN_EMAIL;
    const encodedHash = process.env.ADMIN_PASSWORD_HASH_B64;

    // Décoder le hash bcrypt depuis Base64
    const adminPasswordHash = encodedHash
      ? Buffer.from(encodedHash, "base64").toString("utf8")
      : "";

    // Vérifier la configuration
    if (
      !adminEmail ||
      !adminPasswordHash ||
      !/^\$2[aby]\$\d{2}\$/.test(adminPasswordHash)
    ) {
      return NextResponse.json(
        { message: "Configuration administrateur incorrecte." },
        { status: 500 }
      );
    }

    // Vérifier les identifiants
    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      email.trim().toLowerCase() !== adminEmail.trim().toLowerCase()
    ) {
      return NextResponse.json(
        { message: "Identifiants incorrects." },
        { status: 401 }
      );
    }

    const validPassword = await bcrypt.compare(
      password,
      adminPasswordHash
    );

    if (!validPassword) {
      return NextResponse.json(
        { message: "Identifiants incorrects." },
        { status: 401 }
      );
    }

    // Créer la session administrateur
    await createSession(adminEmail);

    return NextResponse.json({
      success: true,
      message: "Connexion réussie."
    });

  } catch (error) {
    console.error("Erreur API login :", error);

    return NextResponse.json(
      { message: "Une erreur est survenue pendant la connexion." },
      { status: 500 }
    );
  }
}