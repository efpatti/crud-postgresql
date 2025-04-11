"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewUserPage() {
 const [form, setForm] = useState({ name: "", email: "", password: "" });
 const router = useRouter();

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  await fetch("/api/users", {
   method: "POST",
   body: JSON.stringify(form),
   headers: {
    "Content-Type": "application/json",
   },
  });

  router.push("/users");
 };

 return (
  <div className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center">
   <form
    onSubmit={handleSubmit}
    className="bg-[#161b22] p-8 rounded-lg shadow-lg w-full max-w-md border border-[#a371f7]"
   >
    <h1 className="text-2xl font-bold mb-6 text-[#fdd835]">Novo Usuário</h1>

    <input
     type="text"
     placeholder="Nome"
     value={form.name}
     onChange={(e) => setForm({ ...form, name: e.target.value })}
     className="w-full mb-3 p-3 rounded bg-[#0d1117] border border-[#a371f7] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fdd835]"
    />

    <input
     type="email"
     placeholder="Email"
     value={form.email}
     onChange={(e) => setForm({ ...form, email: e.target.value })}
     className="w-full mb-3 p-3 rounded bg-[#0d1117] border border-[#a371f7] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fdd835]"
    />

    <input
     type="password"
     placeholder="Senha"
     value={form.password}
     onChange={(e) => setForm({ ...form, password: e.target.value })}
     className="w-full mb-6 p-3 rounded bg-[#0d1117] border border-[#a371f7] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fdd835]"
    />

    <button
     type="submit"
     className="w-full bg-[#fdd835] hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded transition-colors"
    >
     Cadastrar
    </button>
   </form>
  </div>
 );
}
