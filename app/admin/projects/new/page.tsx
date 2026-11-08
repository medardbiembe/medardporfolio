"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewProjectPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    number: "",
    name: "",
    type: "",
    descriptionFR: "",
    descriptionEN: "",
    stack: "", // On va séparer par des virgules
    image: "",
    github: "",
    demo: "",
    published: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.message || "Erreur lors de l'ajout du projet.");
      }
    } catch (err) {
      setError("Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white p-8 md:p-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/admin" className="text-gray-400 hover:text-white">
            ← Retour
          </Link>
          <h1 className="text-3xl font-bold">Ajouter un projet</h1>
        </div>

        {error && <p className="bg-red-500/20 text-red-400 p-4 rounded-lg mb-6">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6 bg-[#151515] p-8 rounded-2xl border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Numéro (ex: 01)</label>
              <input required type="text" value={formData.number} onChange={(e) => setFormData({...formData, number: e.target.value})} className="w-full bg-[#080808] border border-white/10 rounded-lg p-3 text-white focus:border-purple-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Nom du projet</label>
              <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-[#080808] border border-white/10 rounded-lg p-3 text-white focus:border-purple-500 outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Type (ex: FULL-STACK)</label>
            <input required type="text" value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})} className="w-full bg-[#080808] border border-white/10 rounded-lg p-3 text-white focus:border-purple-500 outline-none" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Description (FR)</label>
              <textarea required rows={4} value={formData.descriptionFR} onChange={(e) => setFormData({...formData, descriptionFR: e.target.value})} className="w-full bg-[#080808] border border-white/10 rounded-lg p-3 text-white focus:border-purple-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Description (EN)</label>
              <textarea required rows={4} value={formData.descriptionEN} onChange={(e) => setFormData({...formData, descriptionEN: e.target.value})} className="w-full bg-[#080808] border border-white/10 rounded-lg p-3 text-white focus:border-purple-500 outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Stack (séparé par des virgules)</label>
            <input required type="text" placeholder="React, Node.js, PostgreSQL" value={formData.stack} onChange={(e) => setFormData({...formData, stack: e.target.value})} className="w-full bg-[#080808] border border-white/10 rounded-lg p-3 text-white focus:border-purple-500 outline-none" />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">URL de l'image</label>
            <input required type="text" placeholder="https://..." value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} className="w-full bg-[#080808] border border-white/10 rounded-lg p-3 text-white focus:border-purple-500 outline-none" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Lien GitHub</label>
              <input required type="text" value={formData.github} onChange={(e) => setFormData({...formData, github: e.target.value})} className="w-full bg-[#080808] border border-white/10 rounded-lg p-3 text-white focus:border-purple-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Lien Démo</label>
              <input required type="text" value={formData.demo} onChange={(e) => setFormData({...formData, demo: e.target.value})} className="w-full bg-[#080808] border border-white/10 rounded-lg p-3 text-white focus:border-purple-500 outline-none" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input type="checkbox" checked={formData.published} onChange={(e) => setFormData({...formData, published: e.target.checked})} className="w-5 h-5 accent-purple-600" />
            <label className="text-sm text-gray-300">Publier ce projet immédiatement</label>
          </div>

          <button disabled={loading} type="submit" className="w-full bg-purple-600 py-4 rounded-lg font-semibold hover:bg-purple-700 transition disabled:opacity-50">
            {loading ? "Enregistrement..." : "Enregistrer le projet"}
          </button>
        </form>
      </div>
    </div>
  );
}