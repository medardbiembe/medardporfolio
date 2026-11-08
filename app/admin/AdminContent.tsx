import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function AdminContent() {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  const safeProjects = Array.isArray(projects) ? projects : [];
  const totalProjects = safeProjects.length;
  const publishedProjects = safeProjects.filter((p) => p.published).length;
  
  let totalMessages = 0;
  try { totalMessages = await prisma.message.count(); } catch (error) {}

  // Server Action pour la suppression
  async function deleteProject(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    await prisma.project.delete({ where: { id } });
    revalidatePath("/admin");
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* HEADER */}
      <header className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Dashboard</h2>
          <p className="text-gray-500 mt-1">Bienvenue dans votre espace admin.</p>
        </div>
        <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          En ligne
        </div>
      </header>

      {/* STATISTIQUES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="text-blue-500 mb-4 bg-blue-50 w-12 h-12 flex items-center justify-center rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-1.26-1.8A2 2 0 0 0 7.84 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
          </div>
          <h3 className="text-4xl font-extrabold text-gray-900">{totalProjects.toString().padStart(2, '0')}</h3>
          <p className="text-gray-500 text-sm mt-1 font-medium">Projets</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="text-cyan-500 mb-4 bg-cyan-50 w-12 h-12 flex items-center justify-center rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
          </div>
          <h3 className="text-4xl font-extrabold text-gray-900">1.8k</h3>
          <p className="text-gray-500 text-sm mt-1 font-medium">Visites</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="text-purple-500 mb-4 bg-purple-50 w-12 h-12 flex items-center justify-center rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </div>
          <h3 className="text-4xl font-extrabold text-gray-900">{totalMessages.toString().padStart(2, '0')}</h3>
          <p className="text-gray-500 text-sm mt-1 font-medium">Messages</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="text-emerald-500 mb-4 bg-emerald-50 w-12 h-12 flex items-center justify-center rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <h3 className="text-4xl font-extrabold text-gray-900">{publishedProjects.toString().padStart(2, '0')}</h3>
          <p className="text-gray-500 text-sm mt-1 font-medium">Publiés</p>
        </div>
      </div>

      {/* LISTE DES PROJETS */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-900">Vos Projets</h3>
          <a href="/admin/projects/new" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-blue-700 transition shadow-sm shadow-blue-600/20">
            + Ajouter
          </a>
        </div>

        <div className="divide-y divide-gray-100">
          {safeProjects.length === 0 ? (
            <p className="text-gray-500 py-4 text-center">Aucun projet pour le moment.</p>
          ) : (
            safeProjects.map((project) => (
              <div key={project.id} className="py-4 flex justify-between items-center group">
                <div className="flex items-center gap-4">
                  {/* Image miniature */}
                  <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden relative">
                    <img src={project.image} alt={project.name} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{project.name}</h4>
                    <p className="text-gray-500 text-sm">{project.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${project.published ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                    {project.published ? "Publié" : "Brouillon"}
                  </span>
                  
                  <a href={`/admin/projects/edit/${project.id}`} className="text-gray-400 hover:text-blue-600 text-sm font-medium transition">
                    Modifier
                  </a>

                  <form action={deleteProject}>
                    <input type="hidden" name="id" value={project.id} />
                    <button type="submit" className="text-gray-400 hover:text-red-500 text-sm font-medium transition">
                      Supprimer
                    </button>
                  </form>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}