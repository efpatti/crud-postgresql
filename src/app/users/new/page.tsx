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
  <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto">
   <h1 className="text-2xl font-bold mb-4">Novo Usuário</h1>
   <input
    type="text"
    placeholder="Nome"
    value={form.name}
    onChange={(e) => setForm({ ...form, name: e.target.value })}
    className="w-full mb-2 p-2 border rounded"
   />
   <input
    type="email"
    placeholder="Email"
    value={form.email}
    onChange={(e) => setForm({ ...form, email: e.target.value })}
    className="w-full mb-2 p-2 border rounded"
   />
   <input
    type="password"
    placeholder="Senha"
    value={form.password}
    onChange={(e) => setForm({ ...form, password: e.target.value })}
    className="w-full mb-4 p-2 border rounded"
   />
   <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
    Cadastrar
   </button>
  </form>
 );
}
