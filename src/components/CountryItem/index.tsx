import * as S from "./styles";
import { CountryItemTS } from "../../types/CountryItem";

import { Link } from "react-router-dom";

export const CountryItem = ({
  name,
  translations,
  population,
  region,
  capital,
  flag,
}: CountryItemTS) => {
  return (
    <S.CountryItem>
      <Link to={`/country/${name}`}>
        <div className="img--area">
          <img src={flag} alt={`Bandeira do País: ${translations.pt}`} />
        </div>
        <div className="data--area">
          <p className="country--name">{translations.pt}</p>
          <p>
            População: <span>{population.toLocaleString("pt-br")}</span>
          </p>
          <p>
            Região: <span>{region}</span>
          </p>
          <p>
            Capital: <span>{capital}</span>
          </p>
        </div>
      </Link>
    </S.CountryItem>
  );
};
