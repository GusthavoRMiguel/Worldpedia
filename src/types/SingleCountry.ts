export interface SingleCountryTS {
  name: string;
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
  };
  latlng: [number, number];
}
