import { Pool } from "pg";

// Next.js will use the 'acostalabs_app' user which only has INSERT privileges
// This prevents any read/delete operations from the web app
const pool = new Pool({
  host: process.env.DB_HOST || "postgres", // Docker service name or localhost
  port: parseInt(process.env.DB_PORT || "5432"),
  database: process.env.POSTGRES_DB || "acostalabs",
  user: "acostalabs_app",
  password: "app_secure_pw_123",
  max: 10, // Max 10 connections in the pool
  idleTimeoutMillis: 30000,
});

export default pool;
