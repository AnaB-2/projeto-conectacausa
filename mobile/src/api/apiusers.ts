import { API_HOST } from "./apiconfig";

export type Usuario = {
  id: number;
  nome: string;
  email: string;
  tipo_usuario?: string;
  telefone?: string | null;
};

type ApiResponse<T> = {
  message: string;
  data: T;
  token?: string;
};

export async function cadastrarUsuario(payload: {
  nome: string;
  email: string;
  senha: string;
}): Promise<ApiResponse<unknown>> {
  const response = await fetch(`${API_HOST}users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: payload.nome.trim(),
      email: payload.email.trim().toLowerCase(),
      senha: payload.senha,
      tipo_usuario: "usuario",
      telefone: ""
    }),
  });

  const data = await response.json();
  if (!response.ok || data.message !== "Success") {
    throw new Error(data.data || "Não foi possível realizar o cadastro.");
  }
  return data;
}

export async function loginUsuario(email: string, senha: string) {
  const response = await fetch(`${API_HOST}login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email.trim().toLowerCase(),
      senha
    }),
  });

  const data = await response.json();
  if (!response.ok || data.message !== "Success") {
    throw new Error(data.data || "E-mail ou senha inválidos.");
  }
  return data as ApiResponse<Usuario>;
}
