export interface SingleCountryTS {
  name: string;
  alpha2Code: string;
  demonym: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  area: number;
  currencie: [
    {
      name: string;
    }
  ];
  languages: [
    {
      name: string;
    }
  ];
  flag: string;
  borders: [string];
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
  latlng: [number, number];
}
