import * as C from "./styles";
import { Link, useParams } from "react-router-dom";
import { SingleCountry } from "../../components/SingleCountry";
import { useEffect, useState } from "react";
import { CountryTS } from "../../types/Country";
import { api } from "../../services/api";

export const CountryPage = () => {
  const { name, code } = useParams();

  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState<CountryTS[]>([]);

  useEffect(() => {
    if (name) {
      getCountry(name);
    } else if (code) {
      getCountry(code);
    }
  }, [name, code]);

  const getCountry = async (param: string) => {
    setLoading(true);
    try {
      let country = name
        ? await api.getCountry(param)
        : await api.getCountryByCode(param);
      setCountry(country);
    } catch (error) {
      console.error("Erro ao obter o país:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <C.CountryPage>
      <div className="container">
        <Link to="/" className="back--button">
          Voltar
        </Link>
        {loading && <div className="loading">Carregando..</div>}
        {!loading &&
          country.map((item, index) => (
            <SingleCountry
              key={index}
              name={item.name}
              flag={item.flags.png}
              translations={item.translations}
              demonym={item.demonym}
              population={item.population}
              region={item.region}
              subregion={item.subregion}
              capital={item.capital}
              area={item.area}
              currencie={item.currencies && item.currencies}
              languages={item.languages}
              borders={item.borders}
            />
          ))}
      </div>
    </C.CountryPage>
  );
};