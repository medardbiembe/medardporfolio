import AdminContent from "./AdminContent";

export const instant = false;

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-[#f4f7f6] flex font-sans">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#1e293b] text-white p-6 hidden md:flex md:flex-col min-h-screen">
        <div className="mb-10 flex items-center gap-3">
          {/* Logo factice pour l'exemple */}
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-xl">
            M
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight">MEDARD BIEMBE</h1>
            <p className="text-xs text-gray-400 uppercase tracking-widest">Administration</p>
          </div>
        </div>

        <p className="text-gray-400 text-xs font-semibold mb-4 tracking-wider">MENU PRINCIPAL</p>

        <nav className="space-y-2 flex-1">
          <a href="/admin" className="flex items-center gap-3 bg-blue-600/10 text-blue-400 p-3 rounded-xl font-medium border border-blue-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
            Dashboard
          </a>
          <a href="/admin/projects" className="flex items-center gap-3 text-gray-300 hover:bg-white/5 hover:text-white p-3 rounded-xl transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-1.26-1.8A2 2 0 0 0 7.84 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
            Projets
          </a>
          <a href="/admin/messages" className="flex items-center gap-3 text-gray-300 hover:bg-white/5 hover:text-white p-3 rounded-xl transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Messages
          </a>
          <a href="/admin/statistiques" className="flex items-center gap-3 text-gray-300 hover:bg-white/5 hover:text-white p-3 rounded-xl transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>
            Statistiques
          </a>
          
          <div className="pt-6 mt-6 border-t border-white/10">
            <a href="/admin/parametres" className="flex items-center gap-3 text-gray-300 hover:bg-white/5 hover:text-white p-3 rounded-xl transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
              Paramètres
            </a>
          </div>
        </nav>

        <div className="mt-auto pt-6">
          <button className="flex items-center gap-3 text-red-400 hover:bg-red-500/10 hover:text-red-300 p-3 rounded-xl transition w-full text-left font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
            Déconnexion
          </button>
        </div>
      </aside>

      {/* CONTENU DYNAMIQUE */}
      <section className="flex-1 p-8 md:p-12 overflow-y-auto h-screen">
        <AdminContent />
      </section>
    </main>
  );
}