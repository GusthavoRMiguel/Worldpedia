export interface CountryTS {
  name: string;
  alpha2Code: string;
  demonym: string;
  translations: {
    pt: string;
    br: string;
    de: string;
    es: string;
    fa: string;
    fr: string;
    hr: string;
    hu: string;
    it: string;
    ja: string;
    nl: string;
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
