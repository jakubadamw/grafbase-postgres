import { g, connector, config } from "@grafbase/sdk";

const pg = connector.Postgres("pg", {
  url: g.env("DATABASE_URL"),
});

g.datasource(pg);

export default config({
  schema: g,
});
