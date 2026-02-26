-- Create custom roles for least-privilege security
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'acostalabs_app') THEN
        CREATE ROLE acostalabs_app WITH LOGIN PASSWORD 'app_secure_pw_123';
    END IF;
    IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'acostalabs_admin') THEN
        CREATE ROLE acostalabs_admin WITH LOGIN PASSWORD 'admin_secure_pw_456';
    END IF;
END $$;

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
GRANT ALL PRIVILEGES ON TABLE contacts TO acostalabs_admin;
GRANT ALL PRIVILEGES ON SEQUENCE contacts_id_seq TO acostalabs_admin;

-- Grant permissions to App (Insert Only, from Next.js)
GRANT INSERT ON TABLE contacts TO acostalabs_app;
GRANT USAGE, SELECT ON SEQUENCE contacts_id_seq TO acostalabs_app;
