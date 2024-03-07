import { useEffect, useState, Dispatch, SetStateAction } from "react";

// Define o tipo para o retorno
type Response<T> = [T, Dispatch<SetStateAction<T>>];

// Hook personalizado para armazenar o estado no localStorage
function usePersistedState<T>(key: string, initialState: T): Response<T> {
  // Inicializa o estado local com base no valor armazenado no localStorage ou no estado inicial fornecido
  const [state, setState] = useState<T>(() => {
    // Verifica se o ambiente é o navegador (para evitar problemas durante a renderização do lado do servidor)
    if (typeof window !== "undefined") {
      // Obtém o valor armazenado no localStorage com a chave fornecida
      const storageValue = localStorage.getItem(key);
      // Se houver um valor armazenado, o converte de volta para o tipo apropriado e o retorna como estado inicial
      if (storageValue) {
        return JSON.parse(storageValue);
      }
    }
    // Se não houver valor armazenado, retorna o estado inicial fornecido
    return initialState;
  });

  // Efeito secundário para atualizar o localStorage sempre que o estado muda
  useEffect(() => {
    // Verifica se o ambiente é o navegador (para evitar problemas durante a renderização do lado do servidor)
    if (typeof window !== "undefined") {
      // Armazena o estado atual no localStorage com a chave fornecida
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state]); // Este efeito depende tanto da chave quanto do estado

  // Retorna o estado atual e a função para atualizá-lo
  return [state, setState];
}

export default usePersistedState;
