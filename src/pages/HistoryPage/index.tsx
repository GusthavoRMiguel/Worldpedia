import React, { useEffect, useState } from "react";
import { HistoricContainer } from "./styles";
import { CountryHistoryTS } from "../../types/CountryHistory";
import { Link } from "react-router-dom";

import Table from "../../components/Table";

const HistoryPage: React.FC = () => {
  const [historico, setHistorico] = useState<CountryHistoryTS[]>([]);

  const currentDate = new Date();
  const day = ("0" + currentDate.getDate()).slice(-2);
  const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  const year = currentDate.getFullYear().toString().slice(-2);
  const hours = ("0" + currentDate.getHours()).slice(-2);
  const minutes = ("0" + currentDate.getMinutes()).slice(-2);

  const fileName = `historico_${day}-${month}-${year}_${hours}h${minutes}`;

  const headers = [
    "País",
    "Capital",
    "Região",
    "Área km²",
    "População",
    "Moeda",
    "Ultima busca",
  ];

  const content = historico.map((country) => ({
    País: country.translation,
    Capital: country.capital,
    Região: country.region,
    "Área km²": country.area?.toLocaleString("pt-BR") || "-",
    População: country.population.toLocaleString("pt-BR") || "-",
    Moeda: country.currencie || "-",
    "Ultima busca": country.lastVisit,
    link: `/country/${country.name}`,
  }));

  useEffect(() => {
    const storedHistorico = localStorage.getItem("historico");
    if (storedHistorico) {
      setHistorico(JSON.parse(storedHistorico));
    }
  }, []);

  return (
    <HistoricContainer>
      <Link to="/" className="back--button">
        Voltar
      </Link>
      <h2>Histórico de Pesquisa</h2>

      <Table fileName={fileName} headers={headers} content={content} />
    </HistoricContainer>
  );
};

export default HistoryPage;
