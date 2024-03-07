export interface CountryTS {
  name: string;
  alpha2Code: string;
  demonym: string;
  translations: {
    pt: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  flags: {
    png: string;
  };
  area: number;
  currencies: [
    {
      name: string;
    }
  ];
  languages: [
    {
      name: string;
    }
  ];
  borders: [string];
  latlng: [number, number];
}
