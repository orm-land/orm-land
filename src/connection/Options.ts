export type Options = {
  type: "postgres";
  dbName: string;
  dbHost: string;
  dbPort: number;
  dbUser: string;
  dbPassword: string;
  entities: string[];
};
