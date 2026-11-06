// IMPORTANTE: troque pelo IPv4 do computador que está executando a API.
// Exemplo: http://192.168.0.105:3650/
// O celular e o computador precisam estar na mesma rede Wi-Fi.
// Emulador Android: 10.0.2.2 aponta para o computador host.
export const API_HOST = "http://10.0.2.2:3650/";

export async function testarConexao() {
  const response = await fetch(`${API_HOST}test`);
  return response.json();
}
