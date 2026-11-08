import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL!,
})

const prisma = new PrismaClient({ adapter })

async function main() {
  await prisma.project.createMany({
    data: [
      {
        number: "01",
        name: "Voyageur X",
        type: "FULL-STACK & AI",
        descriptionFR: "Application ferroviaire complète avec achat de billets, authentification JWT, génération de PDF et un chatbot intelligent basé sur TinyLlama.",
        descriptionEN: "Complete railway application with ticket purchasing, JWT authentication, PDF generation, and an intelligent chatbot based on TinyLlama.",
        stack: JSON.stringify(["Django", "DRF", "React", "SQLite", "JWT", "TinyLlama"]),
        image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=800&auto=format&fit=crop",
        github: "https://github.com/medardbiembe",
        demo: "#",
        published: true,
      },
      {
        number: "02",
        name: "Task Management App",
        type: "FRONTEND DEVELOPMENT",
        descriptionFR: "Application de gestion de tâches en temps réel avec drag & drop, collaboration et notifications.",
        descriptionEN: "Real-time task management application with drag & drop, collaboration, and notifications.",
        stack: JSON.stringify(["React", "TypeScript", "Tailwind", "Firebase"]),
        image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=800&auto=format&fit=crop",
        github: "https://github.com/medardbiembe",
        demo: "#",
        published: true,
      },
      {
        number: "03",
        name: "API Analytics Dashboard",
        type: "BACKEND DEVELOPMENT",
        descriptionFR: "Dashboard d'analyse de données connecté à une API REST custom avec visualisation D3.js.",
        descriptionEN: "Data analytics dashboard connected to a custom REST API with D3.js visualization.",
        stack: JSON.stringify(["Node.js", "Express", "MongoDB", "React"]),
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        github: "https://github.com/medardbiembe",
        demo: "#",
        published: true,
      },
    ],
  })
  console.log('✅ Projets ajoutés avec succès !')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })