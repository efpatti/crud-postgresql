"use client";

import { useEffect, useState } from "react";

type User = {
 id: number;
 name: string;
 email: string;
};

export default function UsersPage() {
 const [users, setUsers] = useState<User[]>([]);

 useEffect(() => {
  fetch("/api/users")
   .then((res) => {
    if (!res.ok) {
     throw new Error("Erro ao buscar usuários");
    }
    return res.json();
   })
   .then((data) => setUsers(data))
   .catch((err) => {
    console.error("Erro ao carregar usuários:", err);
   });
 }, []);

 return (
  <div className="p-6 min-h-screen bg-[#0d1117] text-white">
   <h1 className="text-3xl font-bold mb-6 text-[#fdd835]">Usuários</h1>
   <ul className="space-y-3">
    {users.map((user) => (
     <li
      key={user.id}
      className="p-4 rounded-lg bg-[#161b22] border border-[#a371f7] shadow-md"
     >
      <strong className="text-[#fdd835]">{user.name}</strong> —{" "}
      <span className="text-[#82aaff]">{user.email}</span>
     </li>
    ))}
   </ul>
  </div>
 );
}
