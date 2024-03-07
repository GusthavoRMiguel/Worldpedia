import { Link } from "react-router-dom";
import { CountryData } from "./styles";
import { SingleCountryTS } from "../../types/SingleCountry";
import { CountryHistoryTS } from "../../types/CountryHistory";

import usePersistedState from "../../hooks/persistedState";
import { useEffect, useState } from "react";

import { FaInfoCircle, FaTable } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import Table from "../Table";

import GeoChart from "../Chart";

interface DataType {
  info: string;
  table: string;
  graph: string;
}

export const SingleCountry = ({
  name,
  translations,
  demonym,
  population,
  region,
  subregion,
  capital,
  area,
  currencie,
  languages,
  borders,
  flag,
}: SingleCountryTS) => {
  const [historico, setHistorico] = usePersistedState<CountryHistoryTS[]>(
    "historico",
    []
  );
  const [dataType, setDataType] = useState<keyof DataType>("info");

  const headers = [
    "País",
    "Capital",
    "Região",
    "Área km²",
    "População",
    "Moeda",
    "Vizinhos",
  ];

  const content = [
    {
      País: translations.pt,
      Capital: capital,
      Região: region,
      "Área km²": area?.toLocaleString("pt-BR") || "-",
      População: population.toLocaleString("pt-BR") || "-",
      Moeda: currencie[0]?.name || "-",
      Vizinhos: borders.join(", "),
    },
  ];

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    const date = new Date(dateString);
    return date.toLocaleString("pt-BR", options);
  };

  const handleAddToHistory = () => {
    const newRegister: CountryHistoryTS = {
      name: name,
      translation: translations.pt,
      capital: capital,
      population: population,
      region: region,
      area: area,
      currencie: currencie[0].name,
      lastVisit: formatDate(new Date().toISOString()),
    };

    // Verificar se o país já está no histórico
    const existingCountry = historico.find((country) => country.name === name);

    if (existingCountry) {
      // Se o país já estiver no histórico, apenas atualize o horário da última visita
      const updatedHistorico = historico.map((country) =>
        country.name === name
          ? { ...country, lastVisit: newRegister.lastVisit }
          : country
      );
      setHistorico(updatedHistorico);
    } else {
      // Se o país não estiver no histórico, adicione-o ao array
      setHistorico((prevHistorico) => [...prevHistorico, newRegister]);
    }
  };

  useEffect(() => {
    handleAddToHistory();
  }, []);

  return (
    <CountryData>
      <div className="capa">
        <img src={flag} alt={`Bandeira do País: ${name}`} />
        <div className="data-type">
          <button
            onClick={() => setDataType("info")}
            className={dataType === "info" ? "active" : ""}
          >
            <FaInfoCircle size={40} />
          </button>
          <button
            onClick={() => setDataType("table")}
            className={dataType === "table" ? "active" : ""}
          >
            <FaTable size={40} />
          </button>
          <button
            onClick={() => setDataType("graph")}
            className={dataType === "graph" ? "active" : ""}
          >
            <GoGraph size={40} />
          </button>
        </div>
      </div>

      {dataType === "info" && (
        <div className="data--area">
          <h1>{translations.pt}</h1>
          <div className="data--firstArea">
            <p>
              Gentílico:
              <span>{demonym} </span>
            </p>
            <p>
              População:
              <span>{population?.toLocaleString("pt-br") || "-"}</span>
            </p>
            <p>
              Região: <span>{region}</span>
            </p>
            <p>
              Sub-Região:<span>{subregion} </span>
            </p>
            {capital && (
              <p>
                Capital:
                <span>{capital}</span>
              </p>
            )}
            <p>
              Área:
              <span>{area?.toLocaleString("pt-br") || "-"} km² </span>
            </p>
            {currencie && (
              <p>
                Moeda:
                <span> {currencie.map((item) => item.name)}</span>
              </p>
            )}

            <p>
              Idiomas:
              {languages.map((item, index) => (
                <span className="language" key={index}>
                  {item.name}
                </span>
              ))}
            </p>
          </div>
          {borders && (
            <div className="border--area">
              <p>Países Vizinhos: </p>
              <div className="borders">
                {borders.map((item, index) => (
                  <Link to={`/code/${item}`} key={index}>
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {dataType === "table" && (
        <Table content={content} headers={headers} fileName={translations.pt} />
      )}

      {dataType === "graph" && (
        <GeoChart
          data={[
            { country: name, area: area || 0, population: population || 0 },
          ]}
        />
      )}
    </CountryData>
  );
};
