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
  <div className="p-6">
   <h1 className="text-2xl font-bold mb-4">Usuários</h1>
   <ul className="space-y-2">
    {users.map((user) => (
     <li key={user.id} className="p-4 bg-gray-100 rounded">
      <strong>{user.name}</strong> — {user.email}
     </li>
    ))}
   </ul>
  </div>
 );
}
