import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  schemaName: 'ideas_schema',
  out: "./drizzle",
  dbCredentials:{
    url:"postgresql://accounts:THXIOel5WfA6@ep-lucky-water-a5prcvvk.us-east-2.aws.neon.tech/top-ideas?sslmode=require",
  }
});