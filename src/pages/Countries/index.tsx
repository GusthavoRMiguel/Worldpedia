import * as C from "./styles";
import { useEffect, useState } from "react";
import { CountriesTS } from "../../types/Countries";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { CountryItem } from "../../components/CountryItem";
import Pagination from "./Pagination";
import LoadingIcon from "../../components/loadingIcon";

const LIMIT = 12;

export const Countries = () => {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState<CountriesTS[]>([]);
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = async () => {
    setLoading(true);
    try {
      let countries = await api.getCountries();
      setCountries(countries);
    } catch (error) {
      console.error("Erro ao obter os países:", error);
      alert("Erro ao obter os países");
    } finally {
      setLoading(false);
    }
  };

  const lowerSearch = search.toLowerCase();

  const filteredCountries = countries.filter(
    (country) =>
      country.translations.pt.toLowerCase().includes(lowerSearch) ||
      country.region.toLowerCase().includes(lowerSearch)
  );

  const pagCountries = filteredCountries.slice(offset, offset + 12);

  return (
    <C.CountriesArea>
      <Input value={search} search={setSearch} />
      <div className="countries">
        {loading && <LoadingIcon />}
        {!loading &&
          pagCountries.map((item) => (
            <CountryItem
              key={item.numericCode}
              name={item.name}
              translations={item.translations}
              population={item.population}
              region={item.region}
              capital={item.capital}
              flag={item.flags.png}
            />
          ))}
      </div>
      <Pagination
        limit={LIMIT}
        total={filteredCountries.length}
        offset={offset}
        setOffset={setOffset}
      />
    </C.CountriesArea>
  );
};
