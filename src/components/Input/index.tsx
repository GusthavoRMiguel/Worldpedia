import { InputTS } from "../../types/Input";
import * as C from "./styles";

import { useState } from "react";
import useDebounce from "./useDebounce";
import { Link } from "react-router-dom";

const delay = 500;

export const Input = ({ value, search }: InputTS) => {
  const [input, setInput] = useState("");

  const deboucedChange = useDebounce(search, delay);

  const handleChange = (e: string) => {
    deboucedChange(e);
    setInput(e);
  };

  return (
    <C.InputArea>
      <input
        type="text"
        placeholder="Buscar por país"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <select value={value} onChange={(e) => handleChange(e.target.value)}>
        <option value="">Filtrar por Região</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>{" "}
      <button type="button">
        <Link to="/history">Historico de busca</Link>
      </button>
    </C.InputArea>
  );
};
