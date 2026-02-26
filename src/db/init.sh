#!/bin/bash
set -e

# This script runs automatically inside the postgres container on first startup
# It injects the environment variables passed via docker-compose into the SQL script

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    -- Create the roles using the provided environment variables
    CREATE ROLE ${DB_APP_USER} WITH LOGIN PASSWORD '${DB_APP_PASSWORD}';
    CREATE ROLE ${DB_ADMIN_USER} WITH LOGIN PASSWORD '${DB_ADMIN_PASSWORD}';

    -- Create the contacts table
    CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(255) NOT NULL,
        budget VARCHAR(50),
        message TEXT NOT NULL,
        ip VARCHAR(45),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

    -- Revoke all default privileges from public
    REVOKE ALL ON contacts FROM PUBLIC;

    -- Grant permissions to Admin (Full Access to view/edit from pgAdmin)
    GRANT ALL PRIVILEGES ON TABLE contacts TO ${DB_ADMIN_USER};
    GRANT ALL PRIVILEGES ON SEQUENCE contacts_id_seq TO ${DB_ADMIN_USER};

    -- Grant permissions to App (Insert Only, from Next.js)
    GRANT INSERT ON TABLE contacts TO ${DB_APP_USER};
    GRANT USAGE, SELECT ON SEQUENCE contacts_id_seq TO ${DB_APP_USER};
EOSQL
